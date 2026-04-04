const fs = require('fs');

['capteurs.jsx', 'charge.jsx', 'gestion moteur.jsx'].forEach(file => {
    let content = fs.readFileSync('c:/Users/USER/Documents/GitHub/SIA-/src/pages/elec/' + file, 'utf8');

    // Replace ANY path under /sia/ with the correct src path.
    // The previous script wrote: image: "src/assets/sia/Elï¿½ctricitï¿½ï¿½lectronique/...
    
    // We can just use regex to match image: "..." and rewrite the start.
    content = content.replace(/image:\s*\"[^\"]+?\/([^\/]+?)\/(.*?)\"/g, (match, category, fileName) => {
        // category will be "capteurs", "charge", or "gestion moteur"
        return 'image: "/src/assets/sia/EléctricitéÉlectronique/' + file.replace('.jsx', '') + '/' + fileName + '"';
    });

    fs.writeFileSync('c:/Users/USER/Documents/GitHub/SIA-/src/pages/elec/' + file, content, 'utf8');
    console.log('Fixed images in ' + file);
});
