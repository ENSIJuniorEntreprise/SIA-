const fs = require('fs');
let content = fs.readFileSync('src/pages/Filtration.jsx', 'utf-8');
content = content.replace("Filtre Ã  huile", "Filtre à huile");
content = content.replace("Filtre Ã  air", "Filtre à air");
content = content.replace("PiÃ¨ces", "Pièces");
fs.writeFileSync('src/pages/Filtration.jsx', content, 'utf-8');
console.log('Fixed characters in Filtration.jsx with exact replace');
