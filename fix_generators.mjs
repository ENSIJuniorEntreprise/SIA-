import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src/pages');
const assetsDir = path.join(__dirname, 'src/assets/sia');

const lubrificationPath = path.join(pagesDir, 'lubrification.jsx');
const lubrificationContent = fs.readFileSync(lubrificationPath, 'utf8');

// Find where products end:
const productsMatch = lubrificationContent.match(/const products\s*=\s*\[[\s\S]*?\];/);
const partAfterProducts = lubrificationContent.slice(productsMatch.index + productsMatch[0].length);

const categoryMap = {
  'carroserie': 'Carosserie',
  'climchauf': 'climatisation chauffage',
  'elec': 'EléctricitéÉlectronique',
  'filtration': 'Filtration',
  'freinage': 'Freinage',
  'moteur': 'MOTEUR',
  'suspenssion': 'Suspension Direction',
  'transmission': 'Transmission'
};

for (const [pageFolder, assetFolder] of Object.entries(categoryMap)) {
  const pageDirPath = path.join(pagesDir, pageFolder);
  if (!fs.existsSync(pageDirPath)) continue;
  
  const assetDirPath = path.join(assetsDir, assetFolder);
  if (!fs.existsSync(assetDirPath)) continue;

  const jsxFiles = fs.readdirSync(pageDirPath).filter(f => f.endsWith('.jsx'));
  
  for (const jsxFile of jsxFiles) {
    const subRouteName = path.basename(jsxFile, '.jsx');
    
    const assetSubfolders = fs.readdirSync(assetDirPath).filter(f => fs.statSync(path.join(assetDirPath, f)).isDirectory());
    const matchedAssetSubfolder = assetSubfolders.find(s => s.toLowerCase().includes(subRouteName.toLowerCase()) || subRouteName.toLowerCase().includes(s.toLowerCase()));
    
    let imports = `import React, { useState } from "react";\nimport { Link } from "react-router-dom";\nimport heroImage from "../../assets/image/different-car-accessories-composition.jpg";\n`;
    let productsArray = `const products = [\n`;
    
    if (matchedAssetSubfolder) {
      const imgDir = path.join(assetDirPath, matchedAssetSubfolder);
      const images = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpeg'));
      
      images.forEach((img, idx) => {
        const importName = `img${idx}`;
        imports += `import ${importName} from "../../assets/sia/${assetFolder}/${matchedAssetSubfolder}/${img}";\n`;
        productsArray += `  { id: ${idx + 1}, name: ${JSON.stringify(img.replace(/\.[^/.]+$/, ""))}, image: ${importName}, reference: "REF-"+${idx}, pscCarton: 1, size: "N/A", tag: "Piece" },\n`;
      });
    }
    productsArray += `];\n\n`;
    
    let componentBody = partAfterProducts;
    const functionName = subRouteName.replace(/[^a-zA-Z0-9]/g, '') + "Page";
    componentBody = componentBody.replace(/export default function \w+\(/, `export default function ${functionName}(`);
    
    const displayCategory = subRouteName.charAt(0).toUpperCase() + subRouteName.slice(1);
    componentBody = componentBody.replace(/<span className="text-\[#c0141c\] font-semibold">Lubrification<\/span>/g, `<span className="text-[#c0141c] font-semibold">${displayCategory}</span>`);
    componentBody = componentBody.replace(/<span className="text-\[#C00000\]">Lubrifiant Moteur<\/span>/g, `<span className="text-[#C00000]">${displayCategory}</span>`);
    
    const finalContent = imports + productsArray + componentBody;
    fs.writeFileSync(path.join(pageDirPath, jsxFile), finalContent, 'utf-8');
    console.log("Regenerated fixed:", path.join(pageFolder, jsxFile));
  }
}
