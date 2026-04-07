const fs = require('fs');
const path = require('path');

function fixEncoding(filePath) {
    if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js') && !filePath.endsWith('.html')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
        .replace(/Ã©/g, 'é')
        .replace(/Ã¨/g, 'è')
        .replace(/Ã/g, 'à')
        .replace(/Ã¢/g, 'â')
        .replace(/Ã®/g, 'î')
        .replace(/Ã¯/g, 'ï')
        .replace(/Ã§/g, 'ç')
        .replace(/Ã´/g, 'ô')
        .replace(/Ã»/g, 'û')
        .replace(/Ã¼/g, 'ü')
        .replace(/Ã¶/g, 'ö');
        
    // Reverse à if it accidentally replaced Ã© part?
    newContent = newContent.replace(/à©/g, 'é').replace(/à¨/g, 'è');

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Fixed encoding in:', filePath);
    }
}

fs.readdirSync('./src/pages').forEach(file => {
    if(file.endsWith('.jsx')) fixEncoding(path.join('./src/pages', file));
});
