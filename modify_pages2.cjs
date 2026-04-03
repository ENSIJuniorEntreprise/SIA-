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

pages.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');

  if (!content.includes('framer-motion')) {
    content = "import { motion } from 'framer-motion';\n" + content;
  }

  content = content.replace(/<section\b([^>]*)>/g, '<motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} \>');
  content = content.replace(/<\/section>/g, '</motion.section>');

  fs.writeFileSync(file, content, 'utf-8');
});
