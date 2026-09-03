const fs = require('fs');
const path = require('path');

const map = JSON.parse(fs.readFileSync('src/data/imageMapping.json', 'utf8'));

// Special manual overrides for the 3 missing/special ones:
map['http://priglobexim.com/wp-content/uploads/2026/03/cargo.png'] = '/images/sea-shipment.png';
map['https://priglobexim.com/wp-content/uploads/2026/03/cargo.png'] = '/images/sea-shipment.png';
map['https://priglobexim.com/wp-content/uploads/2026/03/Untitled-design-20.png'] = '/images/ChatGPT-Image-Mar-23-2026-09_11_04-AM.webp';
map['https://priglobexim.com/wp-content/uploads/2026/03/Untitled-design-21-scaled.png'] = '/images/ChatGPT-Image-Mar-23-2026-10_01_58-AM.webp';

// Save updated mapping
fs.writeFileSync('src/data/imageMapping.json', JSON.stringify(map, null, 2));

const filesToUpdate = [
  'src/data/allProducts.json',
  'src/data/fullCatalog.json',
  'src/data/siteContent.ts',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/pages/HomePage.tsx',
  'src/pages/CottonJutePage.tsx',
  'src/pages/GemsJewelleryPage.tsx',
  'src/pages/IndianSpicesPage.tsx',
  'src/pages/OurCompanyPage.tsx',
  'src/pages/OurTeamPage.tsx',
  'src/components/ImageWithFallback.tsx'
];

let totalReplaced = 0;

for (const file of filesToUpdate) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let fileReplaced = 0;

  for (const [remoteUrl, localPath] of Object.entries(map)) {
    if (content.includes(remoteUrl)) {
      content = content.split(remoteUrl).join(localPath);
      fileReplaced++;
      totalReplaced++;
    }
  }

  // Also replace any remaining priglobexim.com URLs with local paths based on filename if possible
  content = content.replace(/https?:\/\/priglobexim\.com\/wp-content\/uploads\/[0-9]{4}\/[0-9]{2}\/([^\s"'`\)]+)/g, (match, filename) => {
    let clean = decodeURIComponent(filename);
    const parsedExt = path.extname(clean);
    const base = path.basename(clean, parsedExt);
    const isLogo = clean.toLowerCase().includes('logo') || clean.toLowerCase().includes('preview') || clean.toLowerCase().includes('shipment') || clean.toLowerCase().includes('deal');
    const ext = isLogo ? '.png' : '.webp';
    const local = `/images/${encodeURIComponent(base + ext)}`;
    if (fs.existsSync('public' + decodeURIComponent(local))) {
      totalReplaced++;
      return local;
    }
    return match;
  });

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file}: replaced ${fileReplaced} mapped occurrences`);
}

console.log(`Total replacements made: ${totalReplaced}`);
