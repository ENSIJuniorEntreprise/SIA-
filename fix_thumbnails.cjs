const fs = require('fs');

const pagesToFix = [
  {
    file: 'src/pages/carroserie.jsx',
    base: '/divisions/piece-de-rechange/carosserie',
    imgsPath: '../assets/carosseri',
    cats: [
      {title: 'Arriére', route: 'arriere', img: 'ari.png'},
      {title: 'Avant', route: 'avant', img: 'avant.png'},
      {title: 'intérieurext', route: 'interieurext', img: 'intext.png'},
      {title: 'latéral', route: 'lateral', img: 'lterale.png'}
    ]
  },
  {
    file: 'src/pages/Climatisation.jsx',
    base: '/divisions/piece-de-rechange/climatisation',
    imgsPath: '../assets/climat',
    cats: [
      {title: 'Compresseur', route: 'compresseur', img: 'compresseur.png'},
      {title: 'condenseur', route: 'condenseur', img: 'condensateur.png'},
      {title: 'ventillation copy', route: 'ventillation-copy', img: 'ventilation.png'},
      {title: 'ventillation', route: 'ventillation', img: 'ventilation.png'},
      {title: 'évaporateur', route: 'evaporateur', img: 'evaporateur.png'}
    ]
  },
  {
    file: 'src/pages/suspension.jsx',
    base: '/divisions/piece-de-rechange/suspension',
    imgsPath: '../assets/suspen',
    cats: [
      {title: 'boulements', route: 'boulements', img: 'roule.png'},
      {title: 'Embrayage', route: 'embrayage', img: 'embray.png'},
      {title: 'jante roue', route: 'jante-roue', img: 'jantes.png'},
      {title: 'Triangles', route: 'triangles', img: 'triang.png'}
    ]
  },
  {
    file: 'src/pages/Transmission.jsx',
    base: '/divisions/piece-de-rechange/transmission',
    imgsPath: '../assets/transm',
    cats: [
      {title: 'boitedevitesse', route: 'boitedevitesse', img: 'boite.png'},
      {title: 'cardans', route: 'cardans', img: 'card.png'},
      {title: 'gestion moteur', route: 'gestion-moteur', img: 'supportmot.png'}
    ]
  }
];

pagesToFix.forEach(p => {
  if(!fs.existsSync(p.file)) return;
  let content = fs.readFileSync(p.file, 'utf8');

  // Strip out old imports block and categories block
  const importStart = content.indexOf('import { useState } from "react";');
  const arrayStart = content.indexOf('const categories = [');
  const arrayEnd = content.indexOf('];', arrayStart) + 2;

  let newImports = 'import { useState } from "react";\nimport { Link } from "react-router-dom";\n';
  let newCategories = 'const categories = [\n';

  p.cats.forEach((c, i) => {
    newImports += `import imgCat${i} from "${p.imgsPath}/${c.img}";\n`;
    newCategories += `  { id: ${i+1}, title: "${c.title}", image: imgCat${i}, link: "${p.base}/${c.route}" },\n`;
  });
  newCategories += '];\n';

  const before = content.substring(0, importStart);
  const after = content.substring(arrayEnd);

  const finalContent = before + newImports + '\n' + newCategories + after;
  fs.writeFileSync(p.file, finalContent, 'utf8');
  console.log('Fixed', p.file);
});
