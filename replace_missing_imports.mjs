import fs from 'fs';
const appPath = 'src/App.jsx';
let content = fs.readFileSync(appPath, 'utf8');

// The problematic ones are the ones used as `<SomethingPage />` but never imported as `SomethingPage`.
const matches = content.match(/<([A-Z][a-zA-Z0-9_]*) \/>/g);
const usedComponents = [...new Set(matches.map(m => m.replace(/<| \/>/g, '')))];

for (const comp of usedComponents) {
    if (!content.includes(`import ${comp} `)) {
        console.log(`Missing import: ${comp}`);
    }
}
