const fs = require('fs');
let s = fs.readFileSync('src/pages/B2B.jsx', 'utf-8');

// Include image import if not there
if (!s.includes('import B2BImg')) {
    s = s.replace('import { useState } from \"react\";', 'import { useState } from \"react\";\nimport B2BImg from \"../assets/B2B.png\";');
}

// Update background image
s = s.replace(/backgroundImage: \"url\\('B2B\\.jpg'\\)\"/, 'backgroundImage: url(\\)');

// Update text
s = s.replace(/fontSize: \"13.5px\",/g, 'fontSize: \"22px\",');
s = s.replace(/maxWidth: 420,/g, 'maxWidth: 800,');

// Update button
s = s.replace(/fontSize: \"12px\",/g, 'fontSize: \"18px\",');
s = s.replace(/padding: \"13px 38px\",/g, 'padding: \"18px 50px\",');

fs.writeFileSync('src/pages/B2B.jsx', s, 'utf-8');
console.log('B2B updated');
