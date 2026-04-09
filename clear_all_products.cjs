const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedCount = 0;

walkDir('src/pages', (filePath) => {
  if (!filePath.endsWith('.jsx')) return;
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Find `const products = [...]`
  const match = content.match(/const products = \[[\s\S]*?\];/);
  if (match && match[0] !== 'const products = [];') {
    const newContent = content.replace(/const products = \[[\s\S]*?\];/, 'const products = [];');
    fs.writeFileSync(filePath, newContent, 'utf-8');
    modifiedCount++;
  }
});

console.log('Cleared products arrays in ' + modifiedCount + ' files.');
