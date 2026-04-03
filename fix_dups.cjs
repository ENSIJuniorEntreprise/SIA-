const fs = require('fs');

const pages = [
  'src/pages/Contact.jsx',
  'src/pages/B2B.jsx',
  'src/pages/Divisions.jsx',
  'src/pages/Marques.jsx',
  'src/pages/Services.jsx',
  'src/pages/Partenaires.jsx',
  'src/pages/Accueil.jsx',
  'src/pages/APropos.jsx'
];

for(const file of pages) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // If it has both import { motion } from 'framer-motion'; and import { motion... } from "framer-motion";
    
    // Quick heavy handed deduplication: remove our injected line if motion is imported twice
    const matchCount = (content.match(/from ['"]framer-motion['"]/g) || []).length;
    if (matchCount > 1) {
      // Remove just the first instance of 'import { motion } from 'framer-motion';\n' that we added at the very top.
      content = content.replace(/^import \{ motion \} from 'framer-motion';\n/, '');
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed duplicate in', file);
    }
  }
}
