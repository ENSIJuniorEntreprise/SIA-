const fs = require('fs');
let c = fs.readFileSync('src/index.css', 'utf8');
const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&family=Source+Sans+3:wght@400;500;600&display=swap');\n`;
if (!c.includes('Raleway')) {
  fs.writeFileSync('src/index.css', fontImport + c, 'utf8');
  console.log('Fonts injected to index.css');
}
