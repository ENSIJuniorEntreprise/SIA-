const fs = require('fs');
let s = fs.readFileSync('src/pages/APropos.jsx', 'utf-8');

s = s.replace(/SIA \(Sfaxienne Industrielle\)/g, 'SIA (Sfaxienne Industrielle et Automobile)');

fs.writeFileSync('src/pages/APropos.jsx', s, 'utf-8');
console.log('Fixed APropos abbr');
