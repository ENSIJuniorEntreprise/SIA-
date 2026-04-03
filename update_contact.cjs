const fs = require('fs');
let s = fs.readFileSync('src/pages/Contact.jsx', 'utf-8');
const oldStr = 'className=\"relative z-10 w-full max-w-[90%] xl:max-w-[95%] 2xl:max-w-[1400px] mx-auto pt-40 sm:pt-48 pb-24 flex flex-col items-center\"';
const oldStr2 = 'className=\"relative z-10 w-full max-w-[90%] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto pt-40 sm:pt-48 pb-24 flex flex-col items-center\"';
const newStr = 'className=\"relative z-10 w-full max-w-[90%] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto pt-40 sm:pt-48 pb-24 flex flex-col items-center\"';
if(s.includes(oldStr)) { s = s.replace(oldStr, newStr); console.log('Replaced 1'); }
if(s.includes(oldStr2)) { s = s.replace(oldStr2, newStr); console.log('Replaced 2'); }
fs.writeFileSync('src/pages/Contact.jsx', s, 'utf-8');
