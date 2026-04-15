const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'Lubrifiant-moteur.jsx',
  'Machine-soudure.jsx',
  'moteur-et_groupe-electrogene.jsx',
  'yact.jsx',
  'lubrification.jsx'
];

for (const file of filesToUpdate) {
    let content = fs.readFileSync(path.join('src/pages', file), 'utf8');

    // Remove `const products = [];` completely
    content = content.replace(/const\s+products\s*=\s*\[\];/g, '');

    // Import useEffect if not already imported
    if (content.includes('import { useState } from "react"')) {
        content = content.replace('import { useState } from "react"', 'import { useState, useEffect } from "react"');
    }

    // Inside the component, add the state and useEffect
    const componentRegex = /export default function\s+[a-zA-Z0-9_]+\s*\(\)\s*\{/;
    const match = content.match(componentRegex);
    if (!content.includes('const [products, setProducts]') && match) {
        const inject = `
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(console.error);
  }, []);
`;
        content = content.replace(componentRegex, match[0] + inject);
    }

    // Fix filter logic
    content = content.replace(/p\.name\.includes\(activeFilters\.division\)/g, 'p.division === activeFilters.division');
    content = content.replace(/p\.name\.includes\(activeFilters\.sousDivision1\)/g, 'p.sousDivision1 === activeFilters.sousDivision1');
    content = content.replace(/p\.name\.includes\(activeFilters\.sousDivision2\)/g, 'p.sousDivision2 === activeFilters.sousDivision2');

    fs.writeFileSync(path.join('src/pages', file), content);
    console.log(`Updated ${file} successfully.`);
}
