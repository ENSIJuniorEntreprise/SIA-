const fs = require('fs');
let content = fs.readFileSync('src/pages/Filtration.jsx', 'utf-8');
content = content.replace(/Filtre à huile/g, 'Filtre a huile');
content = content.replace(/Filtre à air/g, 'Filtre a air');
content = content.replace(/Pièces de Rechange/g, 'Pieces de Rechange');
fs.writeFileSync('src/pages/Filtration.jsx', content, 'utf-8');
console.log('Removed accents');
