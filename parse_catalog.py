import html
import json
import re

def parse_category_products(html_path):
    with open(html_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find sections by H2
    # Sections have H2 (category name), then columns of products
    sections = []
    # Split by H2
    parts = re.split(r"(<h2[^>]*>.*?</h2>)", content, flags=re.S | re.I)
    
    current_h2 = ""
    for part in parts:
        if part.lower().startswith("<h2"):
            clean_h2 = re.sub(r"<[^>]+>", "", part).strip()
            clean_h2 = html.unescape(clean_h2)
            current_h2 = clean_h2
        else:
            if not current_h2 or current_h2 in ["Our Performance Highlights", "PriGlob Exim"]:
                continue
            
            # Find columns or cards inside this section
            # Each card has an img and an h3
            cards = []
            cols = re.findall(r"<div[^>]*class=[\"\x27][^\"\x27]*wp-block-column[^\"\x27]*[\"\x27][^>]*>(.*?)</div>\s*(?=<div[^>]*class=[\"\x27][^\"\x27]*wp-block-column|</div)", part, re.S | re.I)
            for col in cols:
                h3_m = re.search(r"<h3[^>]*>(.*?)</h3>", col, re.S | re.I)
                img_m = re.search(r"<img[^>]*src=[\"\x27]([^\"]+)[\"\x27]", col, re.I)
                if h3_m and img_m:
                    title = html.unescape(re.sub(r"<[^>]+>", "", h3_m.group(1)).strip())
                    img_src = img_m.group(1)
                    cards.append({
                        "title": title,
                        "image": img_src
                    })
            if cards:
                sections.append({
                    "category": current_h2,
                    "products": cards
                })
    return sections

cj = parse_category_products("scraped_pages/cotton_jute.html")
gj = parse_category_products("scraped_pages/gems_jewellery.html")
sp = parse_category_products("scraped_pages/indian_spices.html")

print("Cotton & Jute sections:", len(cj), "Total products:", sum(len(s["products"]) for s in cj))
for s in cj:
    print(f"  - {s['category']}: {len(s['products'])} items")

print("\nGems & Jewellery sections:", len(gj), "Total products:", sum(len(s["products"]) for s in gj))
for s in gj:
    print(f"  - {s['category']}: {len(s['products'])} items")

print("\nSpices sections:", len(sp), "Total products:", sum(len(s["products"]) for s in sp))
for s in sp:
    print(f"  - {s['category']}: {len(s['products'])} items")

with open("scraped_pages/parsed_catalog.json", "w", encoding="utf-8") as out:
    json.dump({
        "cotton_jute": cj,
        "gems_jewellery": gj,
        "indian_spices": sp
    }, out, indent=2)
