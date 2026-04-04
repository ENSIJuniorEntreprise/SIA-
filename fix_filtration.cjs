const fs = require('fs');
let content = fs.readFileSync('src/pages/Filtration.jsx', 'utf-8');
content = content.replace(/Filtre [^a-zA-Z] huile/g, 'Filtre à huile');
content = content.replace(/Filtre [^a-zA-Z] air/g, 'Filtre à air');
content = content.replace(/Division Pi[^a-zA-Z]ces/g, 'Division Pièces');
fs.writeFileSync('src/pages/Filtration.jsx', content, 'utf-8');
console.log('Fixed characters in Filtration.jsx');
