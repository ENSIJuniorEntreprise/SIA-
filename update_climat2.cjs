const fs = require('fs');
let elec = fs.readFileSync('src/pages/Eléctricité.jsx', 'utf-8');
elec = elec.replace('key={cat.id}\nkey={cat.id}', 'key={cat.id}');
elec = elec.replace('key={cat.id}\r\nkey={cat.id}', 'key={cat.id}');
fs.writeFileSync('src/pages/Eléctricité.jsx', elec, 'utf-8');

let clim = fs.readFileSync('src/pages/Climatisation.jsx', 'utf-8');
clim = clim.replace('évaporateur.png', 'evaporateur.png');
clim = clim.replace('vaporateur.png', 'evaporateur.png');
clim = clim.replace('Ã©vaporateur.png', 'evaporateur.png');
fs.writeFileSync('src/pages/Climatisation.jsx', clim, 'utf-8');

console.log("Done fixes");
