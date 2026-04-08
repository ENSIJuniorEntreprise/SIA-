const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const pagesRoot = path.join(cwd, 'src', 'pages');
const assetsRoot = path.join(cwd, 'src', 'assets', 'sia');

const pageDirs = {
    'carroserie': 'Carosserie',
    'suspenssion': 'Suspension Direction',
    'transmission': 'Transmission',
    'climchauf': 'climatisation chauffage',
    'freinage': 'Freinage',
    'moteur': 'MOTEUR',
    'elec': 'EléctricitéÉlectronique',
    'filtration': 'Filtration'
};

const cleanStr = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');

for (const [pageSub, assetSub] of Object.entries(pageDirs)) {
    const pDir = path.join(pagesRoot, pageSub);
    const aDir = path.join(assetsRoot, assetSub);

    if (!fs.existsSync(pDir) || !fs.existsSync(aDir)) continue;

    const jsxFiles = fs.readdirSync(pDir).filter(f => f.endsWith('.jsx'));
    const assetFolders = fs.readdirSync(aDir).filter(f => fs.statSync(path.join(aDir, f)).isDirectory());

    for (const jsx of jsxFiles) {
        const filePath = path.join(pDir, jsx);
        const pageName = jsx.replace('.jsx', '');
        const cleanName = cleanStr(pageName);

        let match = assetFolders.find(f => {
            const cf = cleanStr(f);
            return cf === cleanName || cf.includes(cleanName) || cleanName.includes(cf);
        });

        if (!match && cleanName === 'interieurext') match = 'Interieur et exterieur';
        if (!match && cleanName === 'ventillationcopy') match = 'condenseur';
        if (!match && cleanName === 'admissionechappement') match = 'AdmissionÉchappement';
        if (!match && cleanName === 'gestionmoteur' && assetSub === 'Transmission') match = null;
        if (!match && cleanName.includes('habitacle') && assetSub === 'Filtration') match = 'filtre habitcale';

        let images = [];
        if (match && fs.existsSync(path.join(aDir, match))) {
            images = fs.readdirSync(path.join(aDir, match)).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
        }

        // We process even if images is empty (to clear the list)
        let content = fs.readFileSync(filePath, 'utf8');

        // Remove old imports
        content = content.replace(/import\s+img\d+\s+from\s+['"][^'"]+['"];?\n?/g, '');

        let newImports = '';
        let newProducts = 'const products = [\n';

        if (images.length === 0) {
            newProducts += '  // No products found\n';
        } else {
            images.forEach((imgName, idx) => {
                const relativePath = `../../assets/sia/${assetSub}/${match}/${imgName}`;
                newImports += `import img${idx} from "${relativePath}";\n`;
                const cleanImgName = imgName.replace(/\.(jpg|jpeg|png)$/i, '').replace(/[\u0300-\u036f]/g, '');
                newProducts += `  { id: ${idx + 1}, name: "${cleanImgName}", image: img${idx}, reference: "REF-${idx}", pscCarton: 1, size: "N/A", tag: "" },\n`;
            });
        }
        newProducts += '];';

        // Insert new imports after heroImage
        const heroImportRegex = /import\s+heroImage\s+from\s+['"][^'"]+['"];?\n?/;
        if (heroImportRegex.test(content)) {
            content = content.replace(heroImportRegex, `$&${newImports}\n`);
        } else {
            // fallback: after react-router-dom
            content = content.replace(/(import.*react-router-dom.*?\n)/, `$1${newImports}\n`);
        }

        // Replace products array
        const productsRegex = /const\s+products\s*=\s*\[[\s\S]*?\];/;
        if (productsRegex.test(content)) {
            content = content.replace(productsRegex, newProducts);
        } else {
            console.log("Could not find products array in " + jsx);
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${pageSub}/${jsx}`);
    }
}
