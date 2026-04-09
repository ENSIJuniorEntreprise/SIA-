const fs = require('fs');
const path = require('path');

const dir = 'src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
    let original = fs.readFileSync(path.join(dir, file), 'utf8');
    let content = original;

    // Replace display text in cards
    content = content.replace(/Psc\/carton :/g, 'Marque :');
    content = content.replace(/product\.pscCarton/g, 'product.marque');
    content = content.replace(/Nom du produit/g, 'Désignation');
    content = content.replace(/<th>Psc\/Carton<\/th>/g, '<th>Marque</th>');
    
    // Remove "Size :" and its line completely
    content = content.replace(/<div className="flex justify-between[^>]*>\s*<span[^>]*>SIZE :<\/span>\s*<span[^>]*>\{product\.size\}<\/span>\s*<\/div>/g, '');
    
    // In AdminDashboard specific fixes
    if (file === 'AdminDashboard.jsx') {
        content = content.replace(/pscCarton/g, 'marque');
        content = content.replace(/formData\.pscCarton/g, 'formData.marque');
        content = content.replace(/name="pscCarton"/g, 'name="marque"');
        
        // Remove Size input blocks
        content = content.replace(/{\/\* Taille \/ Size \*\/}\s*<div>\s*<label[^>]*>Size<\/label>\s*<input[^>]*name="size"[^>]*>\s*<\/div>/g, '');
        content = content.replace(/<div>\s*<label[^>]*>Size<\/label>\s*<input[^>]*name="size"[^>]*>\s*<\/div>/g, '');
        content = content.replace(/<th[^>]*>Size<\/th>/g, '');
        content = content.replace(/<td[^>]*>\{product\.size\}<\/td>/g, '');
        
        // Remove `size: '',` and `size: product.size` lines
        content = content.split('\n').filter(line => {
            if (line.includes('size: \'\'')) return false;
            if (line.includes('size: product.size')) return false;
            return true;
        }).join('\n');
    }

    if (content !== original) {
        fs.writeFileSync(path.join(dir, file), content);
        console.log(`Updated ${file}`);
    }
}

// Update server.js
let serverJs = fs.readFileSync('server.js', 'utf8');
serverJs = serverJs.replace(/pscCarton: body\.pscCarton \|\| '',/g, 'marque: body.marque || \'\',');
serverJs = serverJs.replace(/pscCarton: body\.pscCarton \|\| products\[index\]\.pscCarton,/g, 'marque: body.marque !== undefined ? body.marque : products[index].marque,\n            // removed pscCarton and size');
serverJs = serverJs.split('\n').filter(line => {
    if (line.includes('size: body.size')) return false;
    return true;
}).join('\n');

fs.writeFileSync('server.js', serverJs);
console.log('Updated server.js');
