const fs = require('fs');
let c = fs.readFileSync('src/App.jsx', 'utf8');
c = c.split('\n').filter(l => !l.includes('ventillation copy')).join('\n');
c = c.replace(/'\.\/pages\/transmission\/gestion moteur'/g, '\'./pages/transmission/support-moteur\'');
c = c.replace(/transmission\/gestion-moteur/g, 'transmission/support-moteur');
fs.writeFileSync('src/App.jsx', c, 'utf8');
