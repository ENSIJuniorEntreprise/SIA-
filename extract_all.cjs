const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let allProducts = [];
let idCounter = 1;

walkDir('src/pages', (filePath) => {
  if (!filePath.endsWith('.jsx')) return;
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // A bit hacky regex to find `const products = [...]`
  const match = content.match(/const products = \[([\s\S]*?)\];/);
  if (match) {
    try {
      // Find objects inside the array string
      // Just extract id, name, reference, pscCarton, size, division, sousDivision1, sousDivision2 from string
      const objRegex = /{(.*?)}/gs;
      let m;
      while ((m = objRegex.exec(match[1])) !== null) {
        const objStr = m[1];
        if (objStr.includes('id:') || objStr.includes('name:')) {
          const getVal = (key) => {
             const keyMatch = new RegExp(`${key}:\\s*(["'])(.*?)\\1`).exec(objStr);
             return keyMatch ? keyMatch[2] : '';
          };
          const name = getVal('name');
          const reference = getVal('reference');
          if (name || reference) {
             allProducts.push({
               id: idCounter++,
               name,
               reference,
               pscCarton: getVal('pscCarton') || '-',
               size: getVal('size') || '-',
               division: getVal('division') || 'Division Pièces de Rechange Automobile',
               sousDivision1: getVal('sousDivision1'),
               sousDivision2: getVal('sousDivision2'),
               image: null // Can't easily evaluate imports
             });
          }
        }
      }
    } catch(e) {
      console.log('Error parsing', filePath);
    }
  }
});

fs.writeFileSync('src/data/allProducts.json', JSON.stringify(allProducts, null, 2));
console.log('Got ' + allProducts.length + ' products.');
