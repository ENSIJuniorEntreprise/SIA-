import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';
const filesToFix = ['Climatisation.jsx', 'freinage.jsx', 'grpelectrogéne.jsx', 'suspension.jsx', 'Transmission.jsx'];

filesToFix.forEach(file => {
  const p = path.join(pagesDir, file);
  if (!fs.existsSync(p)) return;
  
  let content = fs.readFileSync(p, 'utf-8');
  
  content = content.replace('{categories.map((cat) => ( <Link to={cat.link || "#"} key={cat.id} style={{textDecoration:"none"}}> <div>', 
    '{categories.map((cat) => ( <Link to={cat.link || "#"} key={cat.id} style={{textDecoration:"none"}}> <div');

  fs.writeFileSync(p, content, 'utf-8');
});
console.log("Fixed div");
