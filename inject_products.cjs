const fs = require('fs');
const path = require('path');

const map = {
  'src/pages/carroserie/Arriére.jsx': 'src/assets/sia/Carosserie/Arriére',
  'src/pages/carroserie/Avant.jsx': 'src/assets/sia/Carosserie/Avant',
  'src/pages/carroserie/intérieurext.jsx': 'src/assets/sia/Carosserie/Interieur et exterieur',
  'src/pages/carroserie/latéral.jsx': 'src/assets/sia/Carosserie/Latéral',

  'src/pages/climchauf/Compresseur.jsx': 'src/assets/sia/climatisation chauffage/compresseur',
  'src/pages/climchauf/condenseur.jsx': 'src/assets/sia/climatisation chauffage/condenseur',
  'src/pages/climchauf/ventillation.jsx': 'src/assets/sia/climatisation chauffage/ventillation',
  'src/pages/climchauf/ventillation copy.jsx': null,
  'src/pages/climchauf/évaporateur.jsx': 'src/assets/sia/climatisation chauffage/évaporateur',

  'src/pages/suspenssion/boulements.jsx': 'src/assets/sia/Suspension Direction/boulements',
  'src/pages/suspenssion/Embrayage.jsx': 'src/assets/sia/Suspension Direction/Embrayage',
  'src/pages/suspenssion/jante roue.jsx': null,
  'src/pages/suspenssion/Triangles.jsx': 'src/assets/sia/Suspension Direction/triangles',

  'src/pages/transmission/boitedevitesse.jsx': 'src/assets/sia/Transmission/boite de vitesse',
  'src/pages/transmission/cardans.jsx': 'src/assets/sia/Transmission/cardans',
  'src/pages/transmission/gestion moteur.jsx': 'src/assets/sia/Transmission/support moteur',

  'src/pages/freinage/Disques.jsx': 'src/assets/sia/Freinage/disques',
  'src/pages/freinage/plaquettes.jsx': 'src/assets/sia/Freinage/plaquettes',
  'src/pages/freinage/Ressort.jsx': 'src/assets/sia/Freinage/ressort',
};

Object.keys(map).forEach(pageFile => {
  if (!fs.existsSync(pageFile)) {
    console.log("Missing page: ", pageFile);
    return;
  }

  const assetDir = map[pageFile];
  let images = [];
  if (assetDir && fs.existsSync(assetDir)) {
    images = fs.readdirSync(assetDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  }

  let content = fs.readFileSync(pageFile, 'utf8');

  // Strip out old product images imports
  content = content.replace(/import img\d+ from .*?\.jpg";\r?\n/g, '');
  content = content.replace(/import img\d+ from .*?\.png";\r?\n/g, '');

  let newImports = '';
  let newProducts = 'const products = [\n';

  images.forEach((img, i) => {
    // Relative path from `src/pages/section/file.jsx` to `src/assets/sia/...`
    // => `../../assets/sia/...`
    const relPath = `../../${assetDir.replace('src/', '')}/${img}`;
    newImports += `import img${i} from "${relPath}";\n`;
    
    // Product Name is filename without extension
    const name = img.replace(/\.(png|jpg)$/, '');
    newProducts += `  { id: ${i + 1}, name: "${name}", image: img${i}, reference: "REF-${i}", pscCarton: 1, size: "N/A", tag: "Piece" },\n`;
  });

  newProducts += '];\n';

  // Replace existing const products = [ ... ];
  const pStart = content.indexOf('const products = [');
  const pEnd = content.indexOf('];', pStart);
  if (pStart !== -1 && pEnd !== -1) {
    const before = content.substring(0, pStart);
    const after = content.substring(pEnd + 2);
    
    // Find the right place for new imports (after heroImage import)
    // Actually, just append it right before the newProducts
    fs.writeFileSync(pageFile, before + newImports + '\n' + newProducts + after, 'utf8');
    console.log(`Re-injected products for ${pageFile} : ${images.length} items`);
  }
});
