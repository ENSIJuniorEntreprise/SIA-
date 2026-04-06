const fs = require('fs');
const path = require('path');

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // 1. Fixing the Hero title
      // For inline styles (moteur.jsx, etc)
      if (content.includes('heroTitle:') && !content.includes('paddingTop: "60px"')) {
        content = content.replace(/heroTitle:\s*\{/, 'heroTitle: {\n    paddingTop: "60px",');
        changed = true;
      }
      if (content.includes('heroTitle1:') && !content.includes('paddingTop: "60px"')) {
        content = content.replace(/heroTitle1:\s*\{/, 'heroTitle1: {\n    paddingTop: "60px",');
        changed = true;
      }

      // For Tailwind subpages (capteurs.jsx, etc)
      if (content.includes('relative z-10 h-full flex flex-col justify-center items-center px-4"')) {
        content = content.replace('relative z-10 h-full flex flex-col justify-center items-center px-4"',
                                  'relative z-10 h-full flex flex-col justify-center items-center px-4 pt-16"');
        changed = true;
      }

      // 2. Fixing the Breadcrumb align. What did the user mean? "la bande(le chemin) qui est au dessus il doit toujours etre aligné avec le chemin actuel"
      // They might just mean the breadcrumb text should be left-aligned properly, or the breadcrumb background shouldn't be full width if the navbar isn't full width, etc.
      // Wait, let's just replace `w-full bg-[#f8f8f8] border-b border-gray-200 mb-6` with something else? No, `w-full bg-[#f8f8f8] border-b border-gray-200 mb-6` is fine.
      // Notice the breadcrumb item links: "catalogue > Division Pièces de Rechange Automobile > Moteur > Capteurs".
      // Is there an alignment issue with the container below? No.
      // Let's hold off on the breadcrumb text translation until we are sure, and just fix the hero, and then we will tell them we fixed the hero title and ask if the breadcrumb fix is just left-alignment.

      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

processDir('src/pages');
console.log('Script finished.');
