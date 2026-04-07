const fs = require('fs');
const path = require('path');

const mappings = [
    {
        jsx: 'src/pages/filtration/filtre a air.jsx',
        imgDir: 'src/assets/sia/Filtration/filtre a air',
        imgRel: '../../assets/sia/Filtration/filtre a air'
    },
    {
        jsx: 'src/pages/filtration/filtre a carburant.jsx',
        imgDir: 'src/assets/sia/Filtration/filtre a carburant',
        imgRel: '../../assets/sia/Filtration/filtre a carburant'
    },
    {
        jsx: 'src/pages/filtration/filtre a huile.jsx',
        imgDir: 'src/assets/sia/Filtration/Filtre a huile',
        imgRel: '../../assets/sia/Filtration/Filtre a huile'
    },
    {
        jsx: 'src/pages/filtration/filtre habitacle.jsx',
        imgDir: 'src/assets/sia/Filtration/filtre habitcale',
        imgRel: '../../assets/sia/Filtration/filtre habitcale'
    }
];

mappings.forEach(map => {
    if (!fs.existsSync(map.jsx) || !fs.existsSync(map.imgDir)) {
        console.error("Missing path:", map.jsx, "or", map.imgDir);
        return;
    }

    const images = fs.readdirSync(map.imgDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

    let importsText = '';
    let productsText = 'const products = [\n';

    images.forEach((img, i) => {
        // Escape quotes if needed, though unlikely in these filenames
        importsText += `import img${i} from "${map.imgRel}/${img}";\n`;
        // Name is just filename without extension
        const nameText = img.replace(/\.(jpg|png)$/, '');
        productsText += `  { id: ${i + 1}, name: "${nameText}", image: img${i}, reference: "REF-"+${i}, pscCarton: 1, size: "N/A", tag: "Piece" },\n`;
    });

    productsText += '];\n';

    let content = fs.readFileSync(map.jsx, 'utf8');

    // Replace old imports
    // We basically need to remove any lines starting with `import img...` up to `const products`
    content = content.replace(/import img\d+ from ".*";\r?\n/g, '');
    
    // Replace products array
    content = content.replace(/const products = \[[\s\S]*?\];\r?\n/, '');

    // Now inject our new imports and products array right below the heroImage import
    content = content.replace(/(import heroImage from ["'].*["'];\r?\n)/, `$1${importsText}${productsText}`);

    fs.writeFileSync(map.jsx, content, 'utf8');
    console.log(`Updated ${map.jsx}`);
});
