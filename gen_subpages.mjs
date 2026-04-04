import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src/pages');
const assetsDir = path.join(__dirname, 'src/assets/sia');

const lubrificationPath = path.join(pagesDir, 'lubrification.jsx');
const lubrificationContent = fs.readFileSync(lubrificationPath, 'utf8');

// We will extract everything below products definition
const componentTemplate = lubrificationContent.slice(lubrificationContent.indexOf('export default function'));

// Categories map: Folder in src/pages -> Folder in src/assets/sia
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
    
    // Attempt to find a matching subfolder in assets
    const assetSubfolders = fs.readdirSync(assetDirPath).filter(f => fs.statSync(path.join(assetDirPath, f)).isDirectory());
    // matching intuitively:
    const matchedAssetSubfolder = assetSubfolders.find(s => s.toLowerCase().includes(subRouteName.toLowerCase()) || subRouteName.toLowerCase().includes(s.toLowerCase()));
    
    let imports = `import React, { useState } from "react";\nimport { Link } from "react-router-dom";\nimport heroImage from "../../assets/image/different-car-accessories-composition.jpg";\n`;
    let productsArray = `const products = [\n`;
    
    if (matchedAssetSubfolder) {
      const imgDir = path.join(assetDirPath, matchedAssetSubfolder);
      const images = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpeg'));
      
      images.forEach((img, idx) => {
        const importName = `img${idx}`;
        // path relative from src/pages/folder/file.jsx to src/assets/sia/folder/subfolder/img
        imports += `import ${importName} from "../../assets/sia/${assetFolder}/${matchedAssetSubfolder}/${img}";\n`;
        productsArray += `  { id: ${idx + 1}, name: ${JSON.stringify(img.replace(/\.[^/.]+$/, ""))}, image: ${importName}, reference: "REF-"+${idx}, pscCarton: 1, size: "N/A", tag: "Piece" },\n`;
      });
    }
    productsArray += `];\n\n`;
    
    // Generate new content
    // Replace the function name
    const functionName = subRouteName.replace(/[^a-zA-Z0-9]/g, '') + "Page";
    let finalComponent = componentTemplate.replace(/export default function \w+\(/, `export default function ${functionName}(`);
    // Replace "Lubrifiant Moteur" text with subRouteName
    finalComponent = finalComponent.replace(/Lubrifiant Moteur/g, subRouteName);
    
    const finalContent = imports + productsArray + finalComponent;
    fs.writeFileSync(path.join(pageDirPath, jsxFile), finalContent, 'utf-8');
    console.log("Generated:", path.join(pageFolder, jsxFile));
  }
}
