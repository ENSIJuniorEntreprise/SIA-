const fs = require('fs');
const path = require('path');
const dir = 'src/pages/moteur';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  let p = path.join(dir, file);
  let c = fs.readFileSync(p, 'utf8');

  // remove Piece tag span completely
  c = c.replace(/<span className="absolute top-2 right-2 bg-\[#c0141c\].*?>\s*\{product\.tag\}\s*<\/span>/g, '');

  c = c.replace(/className="relative z-10 h-full flex flex-col justify-center items-center px-4"/g, 'className="relative z-10 h-full flex flex-col justify-center items-center pt-8 px-4"');

  // increase product card images sizes for all
  c = c.replace(/h-48 sm:h-40/g, 'h-64 sm:h-56');
  c = c.replace(/h-56 sm:h-48/g, 'h-64 sm:h-56');
  c = c.replace(/max-w-\[80%\]/g, 'max-w-[100%]');
  c = c.replace(/max-w-\[95%\]/g, 'max-w-[100%]');

  fs.writeFileSync(p, c);
});
console.log('Done!');
