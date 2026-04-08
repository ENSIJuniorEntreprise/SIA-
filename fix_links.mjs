import fs from 'fs';
import path from 'path';

const files = ['Climatisation.jsx', 'freinage.jsx', 'grpelectrogéne.jsx', 'suspension.jsx', 'Transmission.jsx'];
files.forEach(f => {
  const p = path.join('src/pages', f);
  let text = fs.readFileSync(p, 'utf-8');
  if(!text.includes('import { Link }')) text = 'import { Link } from "react-router-dom";\n' + text;
  text = text.replace(/\{categories\.map\(\(cat\) => \(\s*<div\s+key=\{cat\.id\}/, '{categories.map((cat) => ( <Link to={cat.link || "#"} key={cat.id} style={{textDecoration:"none"}}> <div>');
  text = text.replace(/<\/div>\s*\)\)\}\s*<\/div>\s*<\/section>/, '</div> </Link>))} </div> </section>');
  fs.writeFileSync(p, text, 'utf-8');
});
console.log('Done!');
