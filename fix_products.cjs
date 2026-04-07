const fs = require('fs');
const path = require('path');

const pagesDir = 'src/pages';
const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      if (file !== 'assets' && file !== 'components') {
        filelist = walkSync(filepath, filelist);
      }
    } else if (file.endsWith('.jsx')) {
      filelist.push(filepath);
    }
  }
  return filelist;
};

const allSubPages = walkSync(pagesDir).filter(p => {
    // only files deep in subdirectories of src/pages (or specific known ones)
    return p.includes(path.join('src','pages','filtration')) ||
           p.includes(path.join('src','pages','carroserie')) ||
           p.includes(path.join('src','pages','climchauf')) ||
           p.includes(path.join('src','pages','elec')) ||
           p.includes(path.join('src','pages','freinage')) ||
           p.includes(path.join('src','pages','moteur')) ||
           p.includes(path.join('src','pages','suspenssion')) ||
           p.includes(path.join('src','pages','transmission'));
});

allSubPages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Remove the rendered "Piece" tag (which is {product.tag})
  // We remove the entire <span> that surrounds `{product.tag}`
  const tagRegex = /<span className="absolute top-2 right-2 bg-\[#c0141c\] text-white text-\[10px\] font-bold px-2 py-0\.5 rounded-full tracking-wide z-10 shadow-sm">\s*\{product\.tag\}\s*<\/span>/g;
  if (tagRegex.test(content)) {
    content = content.replace(tagRegex, '');
    changed = true;
  }

  // 2. Increase the container size (h-48 sm:h-40 -> h-64 sm:h-56)
  const hBlockRegex1 = /className="relative bg-\[#fafafa\] flex justify-center items-center h-48 sm:h-40/g;
  if (hBlockRegex1.test(content)) {
    content = content.replace(hBlockRegex1, 'className="relative bg-[#fafafa] flex justify-center items-center h-64 sm:h-56');
    changed = true;
  }
  const hBlockRegex2 = /className="relative bg-\[#fafafa\] flex justify-center items-center h-48 sm:h-56/g;
  if (hBlockRegex2.test(content)) {
    content = content.replace(hBlockRegex2, 'className="relative bg-[#fafafa] flex justify-center items-center h-64 sm:h-56');
    changed = true;
  }
  const hBlockRegex3 = /className="relative bg-\[#fafafa\] flex justify-center items-center h-64 sm:h-56/g; // already there? Leave it

  // 3. Increase the max width from 80% to 95%
  const maxWRegex = /max-w-\[80%\]/g;
  if (maxWRegex.test(content)) {
    content = content.replace(maxWRegex, 'max-w-[100%]');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated images/tags in ${file}`);
  }
});
