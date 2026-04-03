const fs = require('fs');
const path = require('path');

const pages = [
  'src/pages/APropos.jsx',
  'src/pages/Services.jsx',
  'src/pages/Contact.jsx',
  'src/pages/Marques.jsx',
  'src/pages/Partenaires.jsx',
  'src/pages/B2B.jsx',
];

pages.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');

  // Import framer-motion if not imported
  if (!content.includes('framer-motion')) {
    content = content.replace(/(import React.*?;\n)/, "\ { motion } from 'framer-motion';\n");
  }

  // A regex to match main sections / divs that wrap significant content and make them animations.
  // Replacing <section className=" with <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="
  
  content = content.replace(/<section\s+className="/g, '<motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="');
  content = content.replace(/<section\s+className='/g, '<motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className=\'');
  
  // Add closing tags
  content = content.replace(/<\/section>/g, '</motion.section>');

  fs.writeFileSync(file, content, 'utf-8');
  console.log('Updated', file);
});
