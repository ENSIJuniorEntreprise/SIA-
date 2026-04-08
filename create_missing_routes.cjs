const fs = require('fs');
const app = fs.readFileSync('src/App.jsx', 'utf8');

const files = [
  'src/pages/Transmission.jsx', 
  'src/pages/suspension.jsx', 
  'src/pages/Climatisation.jsx', 
  'src/pages/freinage.jsx', 
  'src/pages/carroserie.jsx'
];
let missingUrls = [];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const matches = content.match(/link:\s*['"][^'"]+['"]/g) || [];
    matches.forEach(l => {
      const u = l.split(/['"]/)[1];
      if (!app.includes(u)) {
        missingUrls.push(u);
      }
    });
  }
});
console.log('Missing in App.jsx:', missingUrls);