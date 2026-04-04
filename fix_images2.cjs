const fs = require('fs');

['capteurs.jsx', 'charge.jsx', 'gestion moteur.jsx'].forEach(file => {
    let content = fs.readFileSync('c:/Users/USER/Documents/GitHub/SIA-/src/pages/elec/' + file, 'utf8');

    const folderName = file.replace('.jsx', '');

    // Reset everything
    content = content.replace(/image:\s*\"[^\"]+\"/g, (match) => {
        let parts = match.split('/');
        let fileName = parts[parts.length - 1].slice(0, -1); // remove the trailing quote
        return 'image: "/src/assets/sia/EléctricitéÉlectronique/' + folderName + '/' + fileName + '"';
    });

    // Fix the encoding issues of the words like ElÃ©ctricitÃ©Ã‰lectronique or Elï¿½ctricitï¿½ï¿½lectronique
    // Actually, because we just generated it with the string above, let's make sure the string above is clean in JS.
    content = content.split('ElÃ©ctricitÃ©Ã‰lectronique').join('EléctricitéÉlectronique');
    content = content.split('Elï¿½ctricitï¿½ï¿½lectronique').join('EléctricitéÉlectronique');

    fs.writeFileSync('c:/Users/USER/Documents/GitHub/SIA-/src/pages/elec/' + file, content, 'utf8');
    console.log('Fixed exactly ' + file);
});
