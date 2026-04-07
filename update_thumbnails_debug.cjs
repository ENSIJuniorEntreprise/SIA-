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
        console.log('File not found:', pagePath);
        continue;
    }

    let content = fs.readFileSync(pagePath, 'utf8');

    const catMatch = content.match(/const categories = \[([\s\S]*?)\];/);
    if (!catMatch) {
       console.log('No categories array matched in', pageFile);
       continue;
    }

    const titles = [...catMatch[1].matchAll(/title:\s*["']([^"']+)["']/g)].map(m => m[1]);

    const targetSiaFolder = path.join(siaDir, siaFolder);
    if (!fs.existsSync(targetSiaFolder)) {
        console.log('Sia folder not found:', targetSiaFolder);
        continue;
    }

    const subFolders = fs.readdirSync(targetSiaFolder).filter(f => fs.statSync(path.join(targetSiaFolder, f)).isDirectory());

    console.log(Processing : found titles, titles, 'subfolders:', subFolders);

    let modifications = 0;

    titles.forEach((title, index) => {
        const cleanStr = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '');
        const cleanTitle = cleanStr(title);
        
        let matchingFolder = subFolders.find(f => {
            let cf = cleanStr(f);
            return cf === cleanTitle || cf.includes(cleanTitle) || cleanTitle.includes(cf);
        });
        
        if (matchingFolder) {
            const folderPath = path.join(targetSiaFolder, matchingFolder);
            const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));
            if (files.length > 0) {
                const firstImage = files[0];
                const relativePath = ../assets/sia///;
                
                const importRegex = new RegExp(import\\s+imgCat\\s+from\\s+["'][^"']+["'];);
                if (importRegex.test(content)) {
                     content = content.replace(importRegex, import imgCat from "";);
                     console.log(Updated : imgCat -> );
                     modifications++;
                } else {
                    console.log(Could not find import regex for imgCat);
                }
            } else {
                console.log(No images found in );
            }
        } else {
            console.log(Could not find matching folder for title '' in );
        }
    });

    if (modifications > 0) {
        fs.writeFileSync(pagePath, content, 'utf8');
        console.log(Saved modifications for );
    }
}
