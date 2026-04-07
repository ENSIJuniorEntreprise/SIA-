const path = require('path');
const fs = require('fs');

const pages = [
  {file: 'src/pages/carroserie.jsx', routeBase: '/divisions/piece-de-rechange/carosserie', assetFolder: 'src/assets/sia/Carosserie', subPagesDir: 'src/pages/carroserie' },
  {file: 'src/pages/suspension.jsx', routeBase: '/divisions/piece-de-rechange/suspension', assetFolder: 'src/assets/sia/Suspension Direction', subPagesDir: 'src/pages/suspenssion' },
  {file: 'src/pages/Transmission.jsx', routeBase: '/divisions/piece-de-rechange/transmission', assetFolder: 'src/assets/sia/Transmission', subPagesDir: 'src/pages/transmission' },
  {file: 'src/pages/Climatisation.jsx', routeBase: '/divisions/piece-de-rechange/climatisation', assetFolder: 'src/assets/sia/climatisation chauffage', subPagesDir: 'src/pages/climchauf' },
  {file: 'src/pages/freinage.jsx', routeBase: '/divisions/piece-de-rechange/freinage', assetFolder: 'src/assets/sia/Freinage', subPagesDir: 'src/pages/freinage' }
];

pages.forEach(p => {
  if (!fs.existsSync(p.file)) return;
  const content = fs.readFileSync(p.file, 'utf8');
  let lines = content.split('\n');
  const catStart = lines.findIndex(l => l.includes('const categories ='));
  const catEnd = lines.findIndex((l, i) => i > catStart && l.includes('];'));
  
  if (catStart === -1 || catEnd === -1) return;

  const subPages = fs.readdirSync(p.subPagesDir).filter(f => f.endsWith('.jsx'));
  let categoriesText = 'const categories = [\n';
  let importsText = '';
  
  subPages.forEach((subPage, i) => {
    const rawName = subPage.replace('.jsx', '');
    let cleanStr = rawName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    
    // Exact mapping for App.jsx routes since update_routing.mjs used standard rules:
    if (p.file.includes('carroserie') && rawName === 'intérieurext') cleanStr = 'interieurext';
    if (p.file.includes('carroserie') && rawName === 'Arriére') cleanStr = 'arriere';
    if (p.file.includes('suspension') && rawName === 'jante roue') cleanStr = 'jante-roue';
    if (p.file.includes('Transmission') && rawName === 'gestion moteur') cleanStr = 'gestion-moteur';
    if (p.file.includes('Transmission') && rawName === 'boitedevitesse') cleanStr = 'boitedevitesse';

    const linkPath = p.routeBase + '/' + cleanStr;
    
    // Find matching subfolder in assets
    const subdirs = fs.readdirSync(p.assetFolder).filter(f => fs.statSync(p.assetFolder + '/' + f).isDirectory());
    const matched = subdirs.find(d => d.toLowerCase().includes(rawName.toLowerCase()) || rawName.toLowerCase().includes(d.toLowerCase()));
    
    let imgName = '""';
    if (matched) {
      const imgs = fs.readdirSync(p.assetFolder + '/' + matched).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
      if (imgs.length > 0) {
        imgName = 'imgCategory' + (i+1);
        importsText += `import ${imgName} from "../assets/sia/${path.basename(p.assetFolder)}/${matched}/${imgs[0]}";\n`;
      }
    }
    
    categoriesText += `  { id: ${i+1}, title: "${rawName.replace(/"/g, '\\"')}", image: ${imgName}, link: "${linkPath}" },\n`;
  });
  categoriesText += '];';
  
  // replace imports (inject after router-dom)
  const importIdx = lines.findIndex(l => l.includes('react-router-dom'));
  let newContent = '';
  for (let i = 0; i <= importIdx; i++) newContent += lines[i] + '\n';
  newContent += importsText + '\n';
  newContent += categoriesText + '\n';
  for (let i = catEnd+1; i < lines.length; i++) newContent += lines[i] + '\n';
  
  // fix link in <Link to={...}>
  newContent = newContent.replace(/<Link[\s\S]*?to=\{.*?\}/g, match => {
    if (match.includes('to={hoveredCard') || match.includes('to={cat.link}')) return match;
    return match.replace(/to=\{.*?\}/, 'to={cat.link}');
  });
  
  fs.writeFileSync(p.file, newContent, 'utf8');
  console.log('Fixed ' + p.file);
});
