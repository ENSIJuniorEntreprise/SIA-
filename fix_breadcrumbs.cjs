const fs = require('fs');
const path = require('path');

const dirs = [
  'src/pages/carroserie', 
  'src/pages/climchauf', 
  'src/pages/elec', 
  'src/pages/filtration', 
  'src/pages/freinage', 
  'src/pages/moteur', 
  'src/pages/suspenssion', 
  'src/pages/transmission'
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) return;
  const folderName = path.basename(d);
  let categoryName = folderName;
  
  if (folderName === 'carroserie') categoryName = 'Carrosserie';
  if (folderName === 'climchauf') categoryName = 'Climatisation/Chauffage';
  if (folderName === 'elec') categoryName = 'Eléctricité/Électronique';
  if (folderName === 'filtration') categoryName = 'Filtration';
  if (folderName === 'freinage') categoryName = 'Freinage';
  if (folderName === 'moteur') categoryName = 'Moteur';
  if (folderName === 'suspenssion') categoryName = 'Suspension et Direction';
  if (folderName === 'transmission') categoryName = 'Transmission';

  const files = fs.readdirSync(d).filter(f => f.endsWith('.jsx'));
  for (const f of files) {
    const fullPath = path.join(d, f);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace the specific Moteur breadcrumb link in subpages
    // We only replace the ONE that corresponds to the category. The others are "catalogue" and "Division...".
    // It's the 3rd <a> link in the breadcrumb usually.
    // Let's just find `>Moteur</a>` and replace with `>${categoryName}</a>`. Since "Moteur" is only there in breadcrumbs or filter array, we must be careful.
    
    // Pattern: `<a href="#" className="text-gray-600 hover:text-red-700 transition">Moteur</a>`
    // Note: It could be `>Moteur</a>` or `> Moteur </a>`.
    const regex = /<a href="#" className="([^"]*)">Moteur<\/a>/;
    if (regex.test(content) && folderName !== 'moteur') {
        content = content.replace(regex, `<a href="#" className="$1">${categoryName}</a>`);
        fs.writeFileSync(fullPath, content);
    }
  }
});

console.log('Fixed breadcrumb categories.');
