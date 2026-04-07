const fs = require('fs');
const path = require('path');

const siaDir = path.join(__dirname, 'src', 'assets', 'sia');
const pagesDir = path.join(__dirname, 'src', 'pages');

const divisionMap = {
    'carroserie.jsx': 'Carosserie',
    'Climatisation.jsx': 'climatisation chauffage',
    'Eléctricité.jsx': 'EléctricitéÉlectronique',
    'Filtration.jsx': 'Filtration',
    'freinage.jsx': 'Freinage',
    'moteur.jsx': 'MOTEUR',
    'suspension.jsx': 'Suspension Direction',
    'Transmission.jsx': 'Transmission'
};

for (const [pageFile, siaFolder] of Object.entries(divisionMap)) {
    const pagePath = path.join(pagesDir, pageFile);
    if (!fs.existsSync(pagePath)) continue;

    let content = fs.readFileSync(pagePath, 'utf8');

    // Find the categories block
    const catMatch = content.match(/const categories = \[([\s\S]*?)\];/);
    if (!catMatch) continue;

    let catBlock = catMatch[1];

    // Find all titles in categories array
    const titles = [...catBlock.matchAll(/title:\s*["']([^"']+)["']/g)].map(m => m[1]);

    const targetSiaFolder = path.join(siaDir, siaFolder);
    if (!fs.existsSync(targetSiaFolder)) continue;

    const subFolders = fs.readdirSync(targetSiaFolder).filter(f => fs.statSync(path.join(targetSiaFolder, f)).isDirectory());

    titles.forEach((title, index) => {
        // Simple fuzzy match: try to find a folder that contains the title, or vice versa, ignoring case and accents
        const cleanStr = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '');
        const cleanTitle = cleanStr(title);
        
        let matchingFolder = subFolders.find(f => cleanStr(f) === cleanTitle || cleanStr(f).includes(cleanTitle) || cleanTitle.includes(cleanStr(f)));
        
        if (matchingFolder) {
            const folderPath = path.join(targetSiaFolder, matchingFolder);
            const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));
            if (files.length > 0) {
                const firstImage = files[0];
                const relativePath = ../assets/sia///;
                
                // Replace the import statement for imgCat
                const importRegex = new RegExp(import\\s+imgCat\\s+from\\s+["'][^"']+["'];);
                if (importRegex.test(content)) {
                     content = content.replace(importRegex, import imgCat from "";);
                     console.log(Updated : imgCat -> );
                }
            } else {
                console.log(No images found in );
            }
        } else {
            console.log(Could not find matching folder for title '' in );
        }
    });

    fs.writeFileSync(pagePath, content, 'utf8');
}
