const fs = require('fs');
let content = fs.readFileSync('src/pages/Partenaires.jsx', 'utf8');

// Replace all motion elements with regular elements
content = content.replace(/<motion\.([a-zA-Z0-9]+)/g, '<');
content = content.replace(/<\/motion\.([a-zA-Z0-9]+)>/g, '</');
content = content.replace(/ \w+=\{[\s\S]*?\}/g, (match) => {
    // try to remove framer motion specific props
    if (match.includes('variants=') || match.includes('initial=') || match.includes('animate=') || match.includes('exit=') || match.includes('whileHover=') || match.includes('whileTap=') || match.includes('transition=') || match.includes('viewport=')) {
        return '';
    }
    return match;
});
content = content.replace(/import \{ motion.*\} from 'framer-motion';/g, '');

fs.writeFileSync('src/pages/Partenaires.jsx', content, 'utf8');
console.log('Cleaned Partenaires.jsx');
