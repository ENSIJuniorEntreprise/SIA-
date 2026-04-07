const fs = require('fs');

const templateSrc = 'src/pages/freinage/Disques.jsx';
const template = fs.readFileSync(templateSrc, 'utf8');

const missingPages = [
  { name: 'etriers', title: 'Etriers' },
  { name: 'hydraulique', title: 'Hydraulique' },
  { name: 'rotules', title: 'Rotules' }
];

missingPages.forEach(p => {
  let content = template.replace(/>Disques</g, `>${p.title}<`);
  content = content.replace(/import img.*?\n/g, ''); // strip imgs
  
  // empty products
  const pStart = content.indexOf('const products = [');
  const pEnd = content.indexOf('];', pStart);
  content = content.substring(0, pStart) + 'const products = [\n];' + content.substring(pEnd + 2);
  
  fs.writeFileSync(`src/pages/freinage/${p.name}.jsx`, content, 'utf8');
  console.log(`Created src/pages/freinage/${p.name}.jsx`);
});

// Update App.jsx
let app = fs.readFileSync('src/App.jsx', 'utf8');
const imports = `import EtriersPage from './pages/freinage/etriers';
import HydrauliquePage from './pages/freinage/hydraulique';
import RotulesPage from './pages/freinage/rotules';\n`;

if (!app.includes('EtriersPage')) {
  app = app.replace("import FreinageDisques from './pages/freinage/Disques';", imports + "import FreinageDisques from './pages/freinage/Disques';");
}

const routes = `          <Route path="/divisions/piece-de-rechange/freinage/etriers" element={<EtriersPage />} />
          <Route path="/divisions/piece-de-rechange/freinage/hydraulique" element={<HydrauliquePage />} />
          <Route path="/divisions/piece-de-rechange/freinage/rotules" element={<RotulesPage />} />\n`;

if (!app.includes('freinage/etriers')) {
  app = app.replace('<Route path="/divisions/piece-de-rechange/freinage/disques" element={<FreinageDisques />} />', routes + '<Route path="/divisions/piece-de-rechange/freinage/disques" element={<FreinageDisques />} />');
}

fs.writeFileSync('src/App.jsx', app, 'utf8');
console.log('App.jsx updated with missing freinage routes');
