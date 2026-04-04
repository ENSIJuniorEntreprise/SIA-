import fs from 'fs';
import path from 'path';

const appJsxPath = 'src/App.jsx';
let appContent = fs.readFileSync(appJsxPath, 'utf8');

const parentPages = [
  { file: 'carroserie.jsx', routePrefix: '/divisions/piece-de-rechange/carosserie', subdir: 'carroserie' },
  { file: 'Climatisation.jsx', routePrefix: '/divisions/piece-de-rechange/climatisation', subdir: 'climchauf' },
  { file: 'Filtration.jsx', routePrefix: '/divisions/piece-de-rechange/filtration', subdir: 'filtration' },
  { file: 'freinage.jsx', routePrefix: '/divisions/piece-de-rechange/freinage', subdir: 'freinage' },
  { file: 'moteur.jsx', routePrefix: '/divisions/piece-de-rechange/moteur', subdir: 'moteur' },
  { file: 'suspension.jsx', routePrefix: '/divisions/piece-de-rechange/suspension', subdir: 'suspenssion' },
  { file: 'Transmission.jsx', routePrefix: '/divisions/piece-de-rechange/transmission', subdir: 'transmission' }
];

let newImports = "";
let newRoutes = "";

for (const parent of parentPages) {
  const dirPath = path.join('src/pages', parent.subdir);
  if (!fs.existsSync(dirPath)) continue;

  const subPages = fs.readdirSync(dirPath).filter(f => f.endsWith('.jsx'));
  
  for (const page of subPages) {
    const slug = page.replace('.jsx', '').toLowerCase().replace(/[\/\s\_]+/g, '-').replace(/[áàâäã]/g, 'a').replace(/[éèêë]/g, 'e').replace(/[íìîï]/g, 'i').replace(/[óòôö]/g, 'o').replace(/[úùûü]/g, 'u').replace(/[^a-z0-9\-]/g, '');
    const componentName = page.replace('.jsx', '').replace(/[^a-zA-Z0-9]/g, '') + 'Page';
    const importPath = `./pages/${parent.subdir}/${page.replace('.jsx', '')}`;
    
    // add import if not already in appContent or newImports
    if (!appContent.includes(importPath) && !newImports.includes(importPath)) {
      newImports += `import ${componentName} from '${importPath}';\n`;
    }
    
    const routePath = `${parent.routePrefix}/${slug}`;
    const routeDef = `<Route path="${routePath}" element={<${componentName} />} />`;
    if (!appContent.includes(`path="${routePath}"`) && !newRoutes.includes(`path="${routePath}"`)) {
      newRoutes += `          ${routeDef}\n`;
    }
  }

  // Update parent page to include Link
  const parentFilePath = path.join('src/pages', parent.file);
  if (fs.existsSync(parentFilePath)) {
    let parentContent = fs.readFileSync(parentFilePath, 'utf8');
    if (!parentContent.includes('import { Link } from "react-router-dom"')) {
      parentContent = parentContent.replace('import { useState } from "react";', 'import { useState } from "react";\nimport { Link } from "react-router-dom";');
    }
    
    // Replace <div key={cat.id} style={{ ...styles.card... or whatever
    parentContent = parentContent.replace(/<div\s+key=\{cat\.id\}\s+style=\{\{(?:.|\n)*?\}\}\s+onMouseEnter=\{.*?\}\s+onMouseLeave=\{.*?\}\s*>/g, (match) => {
      // transform that div to a Link
      const routePrefix = parent.routePrefix;
      return `<Link\n              key={cat.id}\n              to={\`${routePrefix}/\${cat.title.toLowerCase().replace(/[\\/\\s_]+/g, "-").replace(/[áàâäã]/g, "a").replace(/[éèêë]/g, "e").replace(/[íìîï]/g, "i").replace(/[óòôö]/g, "o").replace(/[úùûü]/g, "u").replace(/[^a-z0-9\\-]/g, "")}\`}\n              style={{\n                textDecoration: "none", color: "inherit",\n                ...styles.card,\n                ...(hoveredCard === cat.id ? styles.cardHovered : {}),\n              }}\n              onMouseEnter={() => setHoveredCard(cat.id)}\n              onMouseLeave={() => setHoveredCard(null)}\n            >`;
    });
    
    parentContent = parentContent.replace(/<div\n\s*key=\{cat.id\}\n\s*style=\{\{([\s\S]*?)onMouseLeave=\{\(\) => setHoveredCard\(null\)\}\n\s*>/g, (match) => {
      const routePrefix = parent.routePrefix;
      return `<Link\n              key={cat.id}\n              to={\`${routePrefix}/\${cat.title.toLowerCase().replace(/[\\/\\s_]+/g, "-").replace(/[áàâäã]/g, "a").replace(/[éèêë]/g, "e").replace(/[íìîï]/g, "i").replace(/[óòôö]/g, "o").replace(/[úùûü]/g, "u").replace(/[^a-z0-9\\-]/g, "")}\`}\n              style={{${match.split('style={{')[1].split('onMouseEnter')[0]}\n              onMouseEnter={() => setHoveredCard(cat.id)}\n              onMouseLeave={() => setHoveredCard(null)}\n            >`;
    });

    parentContent = parentContent.replace(/<\/div>\n\s*\{\/\* Fin de la carte/g, '</Link>\n              {/* Fin de la carte');
    
    // A more brute-force check if I didn't catch the closing div easily:
    // Actually, each mapped item usually returns a <div>...</div>. If I turn it into <Link>, I have to turn the matching </div> to </Link>.
    // Let's use a simpler heuristic for the closing tag:
    // if the opening was replaced, the closing tag inside the map needs to be </Link>.
    // We can do it by replacing the EXACT string mapping in this component style.
    
    fs.writeFileSync(parentFilePath, parentContent, 'utf8');
    console.log(`Updated routing logic in ${parent.file}`);
  }
}

// Inject into App.jsx
if (newImports || newRoutes) {
  appContent = appContent.replace('export default function App', `${newImports}\nexport default function App`);
  appContent = appContent.replace('</Routes>', `${newRoutes}        </Routes>`);
  fs.writeFileSync(appJsxPath, appContent, 'utf8');
  console.log("Updated App.jsx with new routes");
}

