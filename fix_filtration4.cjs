const fs = require('fs');
let content = fs.readFileSync('src/pages/Filtration.jsx', 'utf-8');

// replace all Ã  with à
content = content.replace(/\xC3\xA0/g, 'à');
// replace all Ã¨ with è
content = content.replace(/\xC3\xA8/g, 'è');
// replace Ã© with é
content = content.replace(/\xC3\xA9/g, 'é');

fs.writeFileSync('src/pages/Filtration.jsx', content, 'utf-8');
console.log('Fixed characters in Filtration.jsx with hex codes');
