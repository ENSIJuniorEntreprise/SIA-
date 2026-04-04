const fs = require('fs');

let filtration = fs.readFileSync('src/pages/Filtration.jsx', 'utf-8');
filtration = filtration.replace(/title:\s*"Filtre Ã  huile",\s*image\s*:\s*"",/, 'title: "Filtre à huile",\n    image: imgHuile,');
filtration = filtration.replace(/title:\s*"Filtre Ã  air",\s*image\s*:\s*"",/, 'title: "Filtre à air",\n    image: imgAir,');
fs.writeFileSync('src/pages/Filtration.jsx', filtration, 'utf-8');

console.log("Done");
