const fs = require('fs');

function runFullRefactor(filename, name) {
    console.log('Starting refactor for: ' + filename);
    let src = fs.readFileSync('c:/Users/USER/Documents/GitHub/SIA-/src/pages/elec/' + filename, 'utf8');

    // Find products
    const pStartMsg = 'const products = [';
    let pStart = src.indexOf(pStartMsg);
    if (pStart === -1) {
        console.log('Could not find products in ' + filename);
        return;
    }
    let pEnd = src.indexOf('];', pStart);
    let extractedProducts = src.substring(pStart + pStartMsg.length - 1, pEnd + 2);

    // Fix image paths
    extractedProducts = extractedProducts.split('/sia/El√©ctricit√©√âlectronique/').join('/src/assets/sia/ElÈctricitÈ…lectronique/');
    extractedProducts = extractedProducts.split('image :\"').join('image: \"');
    extractedProducts = extractedProducts.split('image: \"/').join('image: \"');

    let templateSrc = fs.readFileSync('c:/Users/USER/Documents/GitHub/SIA-/src/pages/lubrification.jsx', 'utf8');

    let tStart = templateSrc.indexOf(pStartMsg);
    let templateTop = templateSrc.substring(0, tStart);

    templateTop = templateTop.split('../assets/image/different-car-accessories-composition.jpg').join('../../assets/image/different-car-accessories-composition.jpg');

    let tEnd = templateSrc.indexOf('export default function LubrificationPage()');
    let templateMiddle = templateSrc.substring(templateSrc.indexOf('];', tStart) + 2, tEnd);

    let templateBottom = templateSrc.substring(tEnd);

    templateBottom = templateBottom.split('LubrificationPage').join(name + 'Page');
    templateBottom = templateBottom.split('Division Pi√®ces de Rechange').join(name);
    templateBottom = templateBottom.split('<span className=\"text-[#C00000]\">Automobile</span>').join('');
    templateBottom = templateBottom.split('<br />').join('');

    let result = templateTop + 'const products = ' + extractedProducts + '\n' + templateMiddle + templateBottom;

    fs.writeFileSync('c:/Users/USER/Documents/GitHub/SIA-/src/pages/elec/' + filename, result);
    console.log('Success completely refactoring: ' + filename);
}

runFullRefactor('capteurs.jsx', 'Capteurs');
runFullRefactor('charge.jsx', 'Charge');
runFullRefactor('gestion moteur.jsx', 'GestionMoteur');
