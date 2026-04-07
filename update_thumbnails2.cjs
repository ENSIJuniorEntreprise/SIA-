const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const siaDir = path.join(cwd, 'src', 'assets', 'sia');
const pagesDir = path.join(cwd, 'src', 'pages');

const divisionMap = {
    'carroserie.jsx': 'Carosserie',
    'Climatisation.jsx': 'climatisation chauffage',
    'Eléctricité.jsx': 'EléctricitéÉlectronique',
    'freinage.jsx': 'Freinage',
    'Transmission.jsx': 'Transmission',
    'suspension.jsx': 'Suspension Direction',
    'moteur.jsx': 'MOTEUR'
};

for (const [pageFile, siaFolder] of Object.entries(divisionMap)) {
    const pagePath = path.join(pagesDir, pageFile);
    if (!fs.existsSync(pagePath)) {
        console.log('Page not found:', pagePath);
        continue;
    }

    let content = fs.readFileSync(pagePath, 'utf8');

    const catMatch = content.match(/const categories = \[([\s\S]*?)\];/);
    if (!catMatch) {
       console.log('No categories matched in', pageFile);
       continue;
    }

    const titlesList = [...catMatch[1].matchAll(/title:\s*["']([^"']+)["']/g)].map(m => m[1]);

    const targetSiaFolder = path.join(siaDir, siaFolder);
    if (!fs.existsSync(targetSiaFolder)) {
        console.log('Sia folder not found:', targetSiaFolder);
        continue;
    }

    const subFolders = fs.readdirSync(targetSiaFolder).filter(f => fs.statSync(path.join(targetSiaFolder, f)).isDirectory());

    console.log(`Processing ${pageFile}: found titles ${titlesList}`);

    let modifications = 0;

    titlesList.forEach((title, index) => {
        const cleanStr = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '');
        const cleanTitle = cleanStr(title);
        
        let matchingFolder = subFolders.find(f => {
            let cf = cleanStr(f);
            return cf === cleanTitle || cf.includes(cleanTitle) || cleanTitle.includes(cf);
        });
        
        // Ensure "interieurext" matches correct folder if simple logic fails
        if (!matchingFolder && title.includes('interieurext')) matchingFolder = 'Interieur et exterieur';
        
        if (matchingFolder) {
            const folderPath = path.join(targetSiaFolder, matchingFolder);
            const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));
            if (files.length > 0) {
                const firstImage = files[0];
                const relativePath = `../assets/sia/${siaFolder}/${matchingFolder}/${firstImage}`;
                
                const importRegex = new RegExp(`import\\s+imgCat${index}\\s+from\\s+["'][^"']+["'];`);
                if (importRegex.test(content)) {
                     content = content.replace(importRegex, `import imgCat${index} from "${relativePath}";`);
                     console.log(`Updated ${pageFile}: imgCat${index} -> ${relativePath}`);
                     modifications++;
                } else {
                     console.log(`Could not find import regex for imgCat${index} (using fallback regex)`);
                     // If maybe it imports without 'from' in some weird way, or maybe the index doesn't match
                }
            } else {
                console.log(`No images found in ${folderPath}`);
            }
        } else {
            console.log(`Could not find matching folder for title '${title}' in ${siaFolder}`);
        }
    });

    if (modifications > 0) {
        fs.writeFileSync(pagePath, content, 'utf8');
        console.log(`Saved modifications for ${pageFile}`);
    }
}
