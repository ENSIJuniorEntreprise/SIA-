const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function fixEncoding(filePath) {
    if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js') && !filePath.endsWith('.html')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
        .replace(/Ã©/g, 'é')
        .replace(/Ã¨/g, 'è')
        .replace(/Ã/g, 'à') // Note: this might be risky, but usually à is Ã 
        .replace(/Ã¢/g, 'â')
        .replace(/Ã®/g, 'î')
        .replace(/Ã¯/g, 'ï')
        .replace(/Ã§/g, 'ç')
        .replace(/Ã´/g, 'ô')
        .replace(/Ã»/g, 'û')
        .replace(/Ã¼/g, 'ü')
        .replace(/Ã¶/g, 'ö');
        
    // Specific fixes
    newContent = newContent
        .replace(/intrieurext/g, 'interieurext')
        .replace(/intérieurext/gi, 'interieurext')
        .replace(/InterieurextPage/g, 'InterieurextPage')
        .replace(/interieurextPage/g, 'InterieurextPage')
        .replace(/<InterieurextPage \/>/g, '<InterieurextPage />')
        .replace(/<interieurextPage \/>/g, '<InterieurextPage />');

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Fixed encoding in:', filePath);
    }
}

walkDir('./src/pages', fixEncoding);
fixEncoding('./src/App.jsx');
