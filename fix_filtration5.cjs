const fs = require('fs');

let content = fs.readFileSync('src/pages/Filtration.jsx', 'utf8');

// 1. Add heroImage import
if (!content.includes('heroImage')) {
    content = content.replace(
        'import imgHabitacle from "../assets/filtration/habi.png";',
        'import imgHabitacle from "../assets/filtration/habi.png";\nimport heroImage from "../assets/image/different-car-accessories-composition.jpg";'
    );
}

// 2. Replace the main.png with heroImage
content = content.replace(
    /"main.png"/g,
    '{heroImage}'
);

// 3. Fix the nested h1
content = content.replace(
    /<h1 style=\{styles\.heroTitle\}>[\s\S]*?Automobile<\/h1>\s*<\/h1>/g,
    '<h1 style={styles.heroTitle}>\n          Division Pièces de Rechange <span style={styles.heroTitle1}>Automobile</span>\n        </h1>'
);

// 4. Change the card wrapper to a link
content = content.replace(
    /<div\s*key=\{cat\.id\}\s*style=\{\{/g,
    '<Link\n              to={`/divisions/piece-de-rechange/filtration/${cat.title.toLowerCase().replace(/[\\/\\s]+/g, "-").replace(/[éêè]/g, "e")}`}\n              key={cat.id}\n              style={{ textDecoration: "none", color: "inherit", '
);

// 5. Change the closing </div> of the map to </Link>
content = content.replace(
    /<\/div>\s*\}\)\)/g,
    '</Link>\n          ))'
);

fs.writeFileSync('src/pages/Filtration.jsx', content);
console.log('Fixed Filtration.jsx');
