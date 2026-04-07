const fs = require('fs');
const path = require('path');

const map = [
  { 
    file: 'src/pages/carroserie.jsx',
    assetFolder: 'src/assets/sia/Carosserie',
    routeBase: '/divisions/piece-de-rechange/carosserie',
    pagesFolder: 'src/pages/carroserie'
  },
  { 
    file: 'src/pages/suspension.jsx',
    assetFolder: 'src/assets/sia/Suspension Direction',
    routeBase: '/divisions/piece-de-rechange/suspension',
    pagesFolder: 'src/pages/suspenssion'
  },
  { 
    file: 'src/pages/Transmission.jsx',
    assetFolder: 'src/assets/sia/Transmission',
    routeBase: '/divisions/piece-de-rechange/transmission',
    pagesFolder: 'src/pages/transmission'
  },
  { 
    file: 'src/pages/Climatisation.jsx',
    assetFolder: 'src/assets/sia/climatisation chauffage',
    routeBase: '/divisions/piece-de-rechange/climatisation',
    pagesFolder: 'src/pages/climchauf'
  },
  { 
    file: 'src/pages/freinage.jsx',
    assetFolder: 'src/assets/sia/Freinage',
    routeBase: '/divisions/piece-de-rechange/freinage',
    pagesFolder: 'src/pages/freinage'
  }
];

map.forEach(cfg => {
  if (!fs.existsSync(cfg.file)) return;
  if (!fs.existsSync(cfg.assetFolder)) return;
  if (!fs.existsSync(cfg.pagesFolder)) return;

  const jsxPages = fs.readdirSync(cfg.pagesFolder).filter(f => f.endsWith('.jsx'));
  const assetSubfolders = fs.readdirSync(cfg.assetFolder, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let importsText = 'import { useState } from "react";\nimport { Link } from "react-router-dom";\n';
  let categoriesText = 'const categories = [\n';

  let currentId = 1;

  for (const jsxName of jsxPages) {
    const rawName = jsxName.replace('.jsx', '');
    
    // attempt to match the asset subfolder
    const matchedAsset = assetSubfolders.find(a => 
      a.toLowerCase().includes(rawName.toLowerCase()) || 
      rawName.toLowerCase().includes(a.toLowerCase())
    );

    let imgImportName = '""';
    if (matchedAsset) {
      const images = fs.readdirSync(path.join(cfg.assetFolder, matchedAsset)).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
      if (images.length > 0) {
        const importVar = `img_${cfg.file.replace(/[^a-zA-Z0-9]/g, '')}_${currentId}`;
        importsText += `import ${importVar} from "../../${cfg.assetFolder.replace('src/','')}/${matchedAsset}/${images[0]}";\n`; // wait, the component is in src/pages/, so it's `../assets/sia/...`
        imgImportName = importVar;
      }
    }

    const title = rawName; 
    // Wait, the routing in App.jsx strips accents and spaces
    const slug = rawName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    let linkPath = `${cfg.routeBase}/${slug}`;

    // App routes usually map `arriere.jsx` or similar, let's just use the App.jsx routing that was setup:
    if (cfg.file.includes('carroserie') && rawName === 'intérieurext') linkPath = `${cfg.routeBase}/interieurext`;
    if (cfg.file.includes('carroserie') && rawName === 'Arriére') linkPath = `${cfg.routeBase}/arriere`;
    if (cfg.file.includes('suspenssion') && rawName === 'jante roue') linkPath = `${cfg.routeBase}/jantes-roues`;

    categoriesText += `  { id: ${currentId}, title: "${title}", image: ${imgImportName}, link: "${linkPath}" },\n`;
    currentId++;
  }
  
  categoriesText += '];\n';

  let content = fs.readFileSync(cfg.file, 'utf8');

  // Regex to remove the old imports of react and react-router-dom, plus any stray image imports before const categories
  content = content.replace(/import \{ useState \} from "react";\r?\nimport \{ Link \} from "react-router-dom";[\s\S]*?(?=const categories = \[)/, '');
  
  // Actually it's safer to just replace from the beginning of the file to `const categories = [`
  // But let's build the correct replacement using string indexOf
  const startIdx = content.indexOf('import { useState }');
  const arrayStart = content.indexOf('const categories = [');
  const arrayEnd = content.indexOf('];', arrayStart) + 2;

  if (startIdx !== -1 && arrayStart !== -1 && arrayEnd !== -1) {
    // To ensure correct path: from `src/pages/file.jsx` to `src/assets/...` -> `../assets/...`
    importsText = importsText.replace(/\.\.\/\.\.\//g, '../');
    
    // Inject reconstructed categories and imports
    const beforeImports = content.substring(0, startIdx);
    const afterArray = content.substring(arrayEnd);
    
    let newContent = beforeImports + importsText + '\n' + categoriesText + afterArray;

    // ensure Link uses {cat.link}
    newContent = newContent.replace(/to=\{.*?\}\n/g, x => {
      if(x.includes('hoveredCard') || x.includes('setHoveredCard')) return x; // avoid replacing generic logic accidentally
      return 'to={cat.link}\n';
    });
    // Let's systematically fix `to={...}` where we see it. Look for `<Link`
    newContent = newContent.replace(/<Link\s+to=\{?[^}]*\}?\s*key=\{cat\.id\}/g, '<Link\n              to={cat.link}\n              key={cat.id}');
    // Sometimes it's on a separate line: 
    newContent = newContent.replace(/<Link\s*to=\{.*\}\s*key=\{cat.id\}/g, '<Link to={cat.link} key={cat.id}');

    fs.writeFileSync(cfg.file, newContent, 'utf8');
    console.log('Fixed', cfg.file);
  }
});
