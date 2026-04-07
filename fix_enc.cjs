const fs = require('fs');

function fixFiles(dir) {
  const files = fs.readdirSync(dir);
  for (let file of files) {
    const fullPath = dir + '/' + file;
    if (fs.statSync(fullPath).isDirectory()) {
      fixFiles(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      const replacements = [
        { from: /PiÃ¨ces/g, to: 'Pièces' },
        { from: /Ã©/g, to: 'é' },
        { from: /ArriÃ©re/g, to: 'Arriére' },
        { from: /Ã‰/g, to: 'É' },
        { from: /intÃ©rieurext/g, to: 'intérieurext' },
        { from: /latÃ©ral/g, to: 'latéral' },
        { from: /SÃ©lectionner/g, to: 'Sélectionner' },
        { from: /RÃ©fÃ©rence/g, to: 'Référence' },
      ];

      replacements.forEach(r => {
        if (r.from.test(content)) {
          content = content.replace(r.from, r.to);
          changed = true;
        }
      });
      
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed encoding in ' + fullPath);
      }
    }
  }
}
fixFiles('src/pages');
