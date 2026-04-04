const fs = require('fs');
let clim = fs.readFileSync('src/pages/Climatisation.jsx', 'utf-8');
clim = clim.replace(/import imgEvaporateur from "\.\.\/assets\/climat\/.*\.png";/g, 'import imgEvaporateur from "../assets/climat/evaporateur.png";');
fs.writeFileSync('src/pages/Climatisation.jsx', clim, 'utf-8');

let elec = fs.readFileSync('src/pages/Eléctricité.jsx', 'utf-8');
elec = elec.replace(/key=\{cat\.id\}\r?\n\s*key=\{cat\.id\}/g, 'key={cat.id}');
fs.writeFileSync('src/pages/Eléctricité.jsx', elec, 'utf-8');
console.log("Fixed evaporateur import");
