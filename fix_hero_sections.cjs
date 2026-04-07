const fs = require('fs');

const layoutPages = [
  { file: 'src/pages/carroserie.jsx', title: 'Carrosserie' },
  { file: 'src/pages/suspension.jsx', title: 'Suspension / Direction' },
  { file: 'src/pages/Transmission.jsx', title: 'Transmission' },
  { file: 'src/pages/Climatisation.jsx', title: 'Climatisation / Chauffage' },
  { file: 'src/pages/freinage.jsx', title: 'Freinage' },
  { file: 'src/pages/moteur.jsx', title: 'Moteur' },
  { file: 'src/pages/Filtration.jsx', title: 'Filtration' },
  { file: 'src/pages/Eléctricité.jsx', title: 'Électricité / Électronique' }
];

const newHeroTemplate = (title) => `
      {/* HERO BANNER */}
      <div className="relative h-[200px] sm:h-[250px] overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44]">
        <div 
          className="absolute inset-0 opacity-90 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: \`url(\${heroImage})\` }} 
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 pt-16">
          <h1 className="font-['Raleway'] text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight tracking-tight drop-shadow-md">
            Division Pièces de Rechange
            <br />
            <span className="text-[#C00000]">Automobile</span>
          </h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="w-full bg-[#f8f8f8] border-b border-gray-200 mb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="flex flex-wrap items-center gap-2 py-4 text-sm text-gray-500">
            <Link to="/" className="text-gray-600 hover:text-red-700 transition">catalogue</Link>
            <span className="text-gray-400 text-base"> &gt; </span>
            <Link to="/divisions/piece-de-rechange" className="text-gray-600 hover:text-red-700 transition">Division Pièces de Rechange Automobile</Link>
            <span className="text-gray-400 text-base"> &gt; </span>
            <span className="text-[#c0141c] font-semibold">${title}</span>
          </nav>
        </div>
      </div>
`;

layoutPages.forEach(p => {
  if (!fs.existsSync(p.file)) return;
  let content = fs.readFileSync(p.file, 'utf8');

  // Ensure heroImage is imported
  if (!content.includes('heroImage')) {
    content = content.replace('import { Link } from "react-router-dom";', 'import { Link } from "react-router-dom";\nimport heroImage from "../assets/image/different-car-accessories-composition.jpg";');
  }

  // Find where HERO BANNER starts
  const heroStart = content.indexOf('{/* HERO BANNER */}');
  const catGridIndex = content.indexOf('{/* CATEGORIES GRID */}');
  
  if (heroStart !== -1 && catGridIndex !== -1) {
    const before = content.substring(0, heroStart);
    const after = content.substring(catGridIndex);
    content = before + newHeroTemplate(p.title) + '\n      ' + after;
    fs.writeFileSync(p.file, content, 'utf8');
    console.log('Updated styling for:', p.file);
  }
});
