const fs = require('fs');

const pages = [
  'src/pages/APropos.jsx',
  'src/pages/Services.jsx',
  'src/pages/Contact.jsx',
  'src/pages/Marques.jsx',
  'src/pages/Partenaires.jsx',
  'src/pages/B2B.jsx',
  'src/pages/Accueil.jsx',
  'src/pages/Divisions.jsx'
];

for(const file of pages) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Remove injected import
    content = content.replace("import { motion } from 'framer-motion';\n", '');
    
    // Revert the injected motion tags
    content = content.replace(/<motion\.section initial=\{\{ opacity: 0, y: 50 \}\} whileInView=\{\{ opacity: 1, y: 0 \}\} transition=\{\{ duration: 0.8 \}\} viewport=\{\{ once: true \}\} /g, '<section ');
    
    // Revert closing tags
    content = content.replace(/<\/motion\.section>/g, '</section>');

    fs.writeFileSync(file, content, 'utf8');
    console.log('Reverted', file);
  }
}
