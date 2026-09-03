const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { execSync } = require('child_process');

const OUTPUT_DIR = path.resolve('public/images');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Gather all URLs
const filesToScan = [
  'src/data/siteContent.ts',
  'src/data/allProducts.json',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/pages/HomePage.tsx',
  'src/pages/CottonJutePage.tsx',
  'src/pages/GemsJewelleryPage.tsx',
  'src/pages/IndianSpicesPage.tsx',
  'src/pages/OurCompanyPage.tsx',
  'src/pages/OurTeamPage.tsx'
];

const urls = new Set();
for (const file of filesToScan) {
  if (fs.existsSync(file)) {
    const text = fs.readFileSync(file, 'utf8');
    const matches = text.match(/https?:\/\/[^\"\'\`\)\s]+\.(?:png|jpg|jpeg|webp|svg)/gi) || [];
    for (const m of matches) {
      if (m.includes('priglobexim.com')) {
        urls.add(m);
      }
    }
  }
}

console.log(`Found ${urls.size} unique priglobexim.com URLs to process.`);

function getFilenameFromUrl(url) {
  const parsed = new URL(url);
  let base = path.basename(parsed.pathname);
  // clean up URI encoding
  base = decodeURIComponent(base);
  return base;
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 15000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(downloadFile(res.headers.location, dest));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode} for ${url}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(resolve);
      });
      fileStream.on('error', reject);
    });
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

const urlMapping = {};

async function processAll() {
  const urlList = Array.from(urls);
  const tempDir = '/tmp/priglob_raw';
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

  const BATCH_SIZE = 6;
  for (let i = 0; i < urlList.length; i += BATCH_SIZE) {
    const batch = urlList.slice(i, i + BATCH_SIZE);
    console.log(`Processing batch ${i + 1} to ${Math.min(i + BATCH_SIZE, urlList.length)} of ${urlList.length}...`);
    
    await Promise.all(batch.map(async (url) => {
      const origFilename = getFilenameFromUrl(url);
      const parsedExt = path.extname(origFilename).toLowerCase();
      const baseName = path.basename(origFilename, parsedExt);
      
      // Determine target output
      const isLogoOrIcon = origFilename.toLowerCase().includes('logo') || 
                           origFilename.toLowerCase().includes('preview') ||
                           origFilename.toLowerCase().includes('deal') ||
                           origFilename.toLowerCase().includes('shipment') ||
                           origFilename.toLowerCase().includes('reputation');
      
      const targetExt = isLogoOrIcon ? '.png' : '.webp';
      const targetFilename = `${baseName}${targetExt}`;
      const targetPath = path.join(OUTPUT_DIR, targetFilename);
      const localUrl = `/images/${encodeURIComponent(targetFilename)}`;

      urlMapping[url] = localUrl;

      if (fs.existsSync(targetPath) && fs.statSync(targetPath).size > 1000) {
        return; // Already done
      }

      const tempFile = path.join(tempDir, origFilename);
      try {
        await downloadFile(url, tempFile);
        
        // Convert / optimize with ImageMagick
        if (isLogoOrIcon) {
          execSync(`convert "${tempFile}" -resize '600x600>' -strip "${targetPath}"`);
        } else {
          execSync(`convert "${tempFile}" -resize '800x800>' -quality 85 -strip "${targetPath}"`);
        }
        console.log(`✓ Saved: ${targetFilename} (${Math.round(fs.statSync(targetPath).size / 1024)} KB)`);
      } catch (err) {
        console.error(`✗ Error on ${url}:`, err.message);
      }
    }));
  }

  // Save the manifest
  fs.writeFileSync('src/data/imageMapping.json', JSON.stringify(urlMapping, null, 2));
  console.log('Saved imageMapping.json with', Object.keys(urlMapping).length, 'entries.');
}

processAll();
