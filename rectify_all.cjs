const fs = require('fs');
const path = require('path');

const categoryMap = {
  'Carosserie': { file: 'src/pages/carroserie.jsx', routeBase: '/divisions/piece-de-rechange/carosserie' },
  'climatisation chauffage': { file: 'src/pages/Climatisation.jsx', routeBase: '/divisions/piece-de-rechange/climatisation' },
  'EléctricitéÉlectronique': { file: 'src/pages/Eléctricité.jsx', routeBase: '/divisions/piece-de-rechange/electricite' },
  'Freinage': { file: 'src/pages/freinage.jsx', routeBase: '/divisions/piece-de-rechange/freinage' },
  'MOTEUR': { file: 'src/pages/moteur.jsx', routeBase: '/divisions/piece-de-rechange/moteur' },
  'Suspension Direction': { file: 'src/pages/suspension.jsx', routeBase: '/divisions/piece-de-rechange/suspension' },
  'Transmission': { file: 'src/pages/Transmission.jsx', routeBase: '/divisions/piece-de-rechange/transmission' }
};

// 1. Fix the main category pages to list their real subcategories from assets
Object.entries(categoryMap).forEach(([folder, config]) => {
  const assetDir = path.join('src/assets/sia', folder);
  if (!fs.existsSync(assetDir)) return;

  const subfolders = fs.readdirSync(assetDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  if (!fs.existsSync(config.file)) return;

  let content = fs.readFileSync(config.file, 'utf8');

  // Find the first image in each subfolder to use as the thumbnail for the category
  let importsText = 'import { useState } from "react";\nimport { Link } from "react-router-dom";\n';
  let categoriesArrayText = 'const categories = [\n';

  subfolders.forEach((sub, i) => {
    const subPath = path.join(assetDir, sub);
    const files = fs.readdirSync(subPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
    let imgImport = '';
    if (files.length > 0) {
      // take first image as thumbnail
      importsText += `import img${folder.replace(/\W/g,'')}_${i} from "../assets/sia/${folder}/${sub}/${files[0]}";\n`;
      imgImport = `img${folder.replace(/\W/g,'')}_${i}`;
    } else {
      imgImport = '""';
    }

    const titleStr = sub.replace(/"/g, '\\"');
    const slug = sub.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    const linkPath = `${config.routeBase}/${slug}`;

    categoriesArrayText += `  {
    id: ${i + 1},
    title: "${titleStr}",
    image: ${imgImport},
    link: "${linkPath}"
  },\n`;
  });

  categoriesArrayText += '];\n';

  // Replace original imports and categories
  content = content.replace(/import \{ useState \} from "react";\r?\nimport \{ Link \} from "react-router-dom";.*?(?=export default function)/s, importsText + '\n\n' + categoriesArrayText + '\n\n');
  content = content.replace(/to=\{\/divisions.*?\/?\}/g, '{cat.link}'); // fix old unquoted links just in case
  content = content.replace(/to=\{.*?\.link\}/g, 'to={cat.link}');
  content = content.replace(/to=\{"\/divisions.*?"\}/g, 'to={cat.link}');
  
  // also fix standard unquoted link to={/divisions/piece-de-rechange/filtration/} and replace it with to={cat.link}
  content = content.replace(/to=\{\/.*?\/.*?\}/g, 'to={cat.link}'); 

  fs.writeFileSync(config.file, content, 'utf8');
  console.log(`Updated main category page: ${config.file}`);
});

// 2. Fix the product pages inside the subdirectories (`src/pages/*/*.jsx`)
const pagesDir = 'src/pages';
const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      if (file !== 'assets' && file !== 'components') {
        filelist = walkSync(filepath, filelist);
      }
    } else if (file.endsWith('.jsx')) {
      filelist.push(filepath);
    }
  }
  return filelist;
};

const allSubPages = walkSync(pagesDir).filter(p => path.dirname(p) !== 'src\\pages'); // only inner files

allSubPages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  let changed = false;

  // Remove "Piece" tag completely from render
  const tagBlockRegex = /<span className="absolute top-2 right-2 bg-\[#c0141c\] text-white text-\[10px\] font-bold px-2 py-0.5 rounded-full tracking-wide z-10 shadow-sm">\s*\{product\.tag\}\s*<\/span>/g;
  if (tagBlockRegex.test(content)) {
    content = content.replace(tagBlockRegex, '');
    changed = true;
  }

  // Increase the size of the product photos
  const hBlockRegex = /className="relative bg-\[#fafafa\] flex justify-center items-center h-48 sm:h-40/g;
  if (hBlockRegex.test(content)) {
    content = content.replace(hBlockRegex, 'className="relative bg-[#fafafa] flex justify-center items-center h-64 sm:h-56');
    changed = true;
  }
  
  const hBlockRegex2 = /className="relative bg-\[#fafafa\] flex justify-center items-center h-48 sm:h-56/g;
  if (hBlockRegex2.test(content)) {
	content = content.replace(hBlockRegex2, 'className="relative bg-[#fafafa] flex justify-center items-center h-80 sm:h-64');
	changed = true;
  }

  const maxWRegex = /className="max-h-full max-w-\[80%\]/g;
  if (maxWRegex.test(content)) {
    content = content.replace(maxWRegex, 'className="max-h-full max-w-[95%]');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Increased sizes and removed tags from: ${file}`);
  }
});
