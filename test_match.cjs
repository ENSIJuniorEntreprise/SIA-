const fs = require('fs');
const path = require('path');

const pageDirs = {
    'carroserie': 'Carosserie',
    'suspenssion': 'Suspension Direction',
    'transmission': 'Transmission',
    'climchauf': 'climatisation chauffage',
    'freinage': 'Freinage',
    'moteur': 'MOTEUR'
};

const cwd = process.cwd();
const pagesRoot = path.join(cwd, 'src', 'pages');
const assetsRoot = path.join(cwd, 'src', 'assets', 'sia');

const cleanStr = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');

for (const [pageSub, assetSub] of Object.entries(pageDirs)) {
    const pDir = path.join(pagesRoot, pageSub);
    const aDir = path.join(assetsRoot, assetSub);

    if (!fs.existsSync(pDir) || !fs.existsSync(aDir)) {
        console.log('Missing dir:', pDir, 'or', aDir);
        continue;
    }

    const jsxFiles = fs.readdirSync(pDir).filter(f => f.endsWith('.jsx'));
    const assetFolders = fs.readdirSync(aDir).filter(f => fs.statSync(path.join(aDir, f)).isDirectory());

    for (const jsx of jsxFiles) {
        const pageName = jsx.replace('.jsx', '');
        const cleanName = cleanStr(pageName);

        let match = assetFolders.find(f => {
            const cf = cleanStr(f);
            return cf === cleanName || cf.includes(cleanName) || cleanName.includes(cf);
        });

        // specific fallbacks
        if (!match && cleanName === 'interieurext') match = 'Interieur et exterieur';
        if (!match && cleanName === 'etriers') match = 'etriers'; // might not exist
        if (!match && cleanName === 'ventillationcopy') match = 'ventillation';
        if (!match && cleanName === 'admissionechappement') match = 'AdmissionÉchappement';
        if (!match && cleanName === 'gestionmoteur' && assetSub === 'Transmission') match = null;

        if (match) {
            const imgs = fs.readdirSync(path.join(aDir, match)).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
            console.log([OK] / -> / ( images));
        } else {
            console.log([--] / -> NO MATCH IN );
        }
    }
}
