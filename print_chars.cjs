const fs = require('fs');
let content = fs.readFileSync('src/pages/Filtration.jsx', 'utf-8');
const match = content.match(/Filtre (.{1,5}) huile/);
if (match) {
    for (let i = 0; i < match[1].length; i++) {
        console.log(`char ${i}: '${match[1][i]}' code: ${match[1].charCodeAt(i)}`);
    }
}
