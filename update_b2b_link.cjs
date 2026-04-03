const fs = require('fs');
let s = fs.readFileSync('src/pages/B2B.jsx', 'utf-8');

s = s.replace('href=\"#\"', 'href=\"/\"');
s = s.replace('onClick={(e) => e.preventDefault()}', '');

fs.writeFileSync('src/pages/B2B.jsx', s, 'utf-8');
console.log('B2B link updated');
