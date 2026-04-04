import fs from 'fs';
import path from 'path';

function checkDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      checkDirectory(fullPath);
    } else if (file.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      const exports = content.match(/export default function\s+(\w+)\(/g);
      if (!exports) {
         console.log(`Missing export default function in ${fullPath}`);
      }
      
      // Let's check for Breadcrumb definition
      const hasBreadcrumbDefinition = content.includes('const Breadcrumb =');
      const hasBreadcrumbUsage = content.includes('<Breadcrumb />');
      if (hasBreadcrumbUsage && !hasBreadcrumbDefinition) {
         console.log(`Missing Breadcrumb definition in ${fullPath}`);
      }
      
      const hasProductCardDef = content.includes('const ProductCard =');
      const hasProductCardUse = content.includes('<ProductCard ');
      if (hasProductCardUse && !hasProductCardDef) {
         console.log(`Missing ProductCard definition in ${fullPath}`);
      }
      
      const hasFilterPanelDef = content.includes('const FilterPanel =');
      const hasFilterPanelUse = content.includes('<FilterPanel ');
      if (hasFilterPanelUse && !hasFilterPanelDef) {
         console.log(`Missing FilterPanel definition in ${fullPath}`);
      }
    }
  }
}

checkDirectory('src/pages');
