import fs from 'fs';
const appPath = 'src/App.jsx';
let content = fs.readFileSync(appPath, 'utf8');

const matches = content.match(/<([A-Za-z0-9_]+) \/>/g);
const usedComponents = [...new Set(matches.map(m => m.replace(/<| \/>/g, '')))];
for (const comp of usedComponents) {
    if (!content.includes(`import ${comp} from`) && !content.includes(`import ${comp}\r\n`) && comp.endsWith('Page')) {
        console.log(`Missing import: ${comp}`);
        const cleanName = comp.replace('Page', ''); 
        // find a directory matching its name or known
        let injected = false;
        const pageDirs = ['carroserie', 'climchauf', 'elec', 'filtration', 'freinage', 'moteur', 'suspenssion', 'transmission'];
        for (const pd of pageDirs) {
            let files;
            try { files = fs.readdirSync('src/pages/' + pd); } catch(e){ continue; }
            for (const f of files) {
                const fname = f.replace('.jsx', '');
                const slugCandidate = fname.replace(/[^a-zA-Z0-9]/g, '');
                if (slugCandidate === cleanName) {
                    const line = `import ${comp} from './pages/${pd}/${fname}';\n`;
                    content = content.replace('export default function App() {', line + 'export default function App() {');
                    console.log('Injected: ' + line);
                    injected = true;
                    break;
                }
            }
            if (injected) break;
        }
    }
}
fs.writeFileSync(appPath, content, 'utf8');
