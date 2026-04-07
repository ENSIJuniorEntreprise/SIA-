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
    if (!fs.existsSync(pagePath)) continue;

    let content = fs.readFileSync(pagePath, 'utf8');

    const catMatch = content.match(/const categories = \[([\s\S]*?)\];/);
    if (!catMatch) continue;

    const categoriesList = [...catMatch[1].matchAll(/title:\s*["']([^"']+)["'],\s*image:\s*([a-zA-Z0-9_]+)/g)].map(m => ({ title: m[1], imageVar: m[2] }));
    const titlesList = categoriesList.map(c => c.title);

    const targetSiaFolder = path.join(siaDir, siaFolder);
    if (!fs.existsSync(targetSiaFolder)) continue;

    const subFolders = fs.readdirSync(targetSiaFolder).filter(f => fs.statSync(path.join(targetSiaFolder, f)).isDirectory());

    console.log('Processing ' + pageFile + ': titles = ' + titlesList);

    let modifications = 0;

    categoriesList.forEach((catObj, index) => {
        let { title, imageVar } = catObj;
        const cleanStr = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '');
        const cleanTitle = cleanStr(title);
        
        let matchingFolder = subFolders.find(f => {
            let cf = cleanStr(f);
            return cf === cleanTitle || cf.includes(cleanTitle) || cleanTitle.includes(cf);
        });
        
        if (!matchingFolder && title.includes('interieurext')) matchingFolder = 'Interieur et exterieur';
        // Fix for Freinage misspellings or mismatches
        if (!matchingFolder && cleanTitle.includes('etrier')) matchingFolder = 'etriers';
        if (!matchingFolder && cleanTitle.includes('ressort')) matchingFolder = 'ressort';
        if (!matchingFolder && title === 'Admission/Échappement') matchingFolder = 'AdmissionÉchappement';
        if (!matchingFolder && title === 'Injection/Carburant') matchingFolder = 'Injection';
        // if still not found, just continue to next title
        
        if (matchingFolder) {
            const folderPath = path.join(targetSiaFolder, matchingFolder);
            if (!fs.existsSync(folderPath)) return;
            const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));
            if (files.length > 0) {
                const firstImage = files[0];
                const relativePath = "../assets/sia/" + siaFolder + "/" + matchingFolder + "/" + firstImage;
                
                // replace import using the imageVar
                const importRegex = new RegExp("import\\\\s+" + imageVar + "\\\\s+from\\\\s+[\"'][^\"]+[\"'];");
                if (importRegex.test(content)) {
                     content = content.replace(importRegex, "import " + imageVar + " from \"" + relativePath + "\";");
                     console.log("Updated " + pageFile + ": " + imageVar + " -> " + relativePath);
                     modifications++;
                } else {
                     console.log("Regex fail for " + imageVar);
                }
            } else {
                 console.log("No images found in " + folderPath);
            }
        } else {
             console.log("Could not find folder for " + title + " in " + siaFolder);
        }
    });

    if (modifications > 0) {
        fs.writeFileSync(pagePath, content, 'utf8');
        console.log("Saved modifications for " + pageFile);
    }
}
