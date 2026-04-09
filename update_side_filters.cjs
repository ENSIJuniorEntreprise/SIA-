const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const hierarchyDataStr = `
const hierarchyData = {
  "Division Pièces de Rechange Automobile": {
    "Moteur": ["Lubrification", "Refroidissement", "Injection/Carburant", "Admission/Echappement", "Distribution", "Culasse", "Demarrage", "Embrayage", "Pistons", "Courroies"],
    "Electricite/Electronique": ["Capteurs", "Gestion moteur", "Charge", "Habitacle"],
    "Filtration": ["Filtre a huile", "Filtre a air", "Filtre carburant", "Filtre habitacle"],
    "Freinage": ["Plaquettes", "Disques", "Etriers", "Hydraulique", "Ressorts", "Rotules"],
    "Suspension/Direction": ["Roulements", "Triangles", "Jantes/Roue", "Embrayage"],
    "Transmission": ["Cardans", "Boite de vitesse", "Support moteur"],
    "Carrosserie": ["Avant", "Arriere", "Lateral", "Interieur/Exterieur"],
    "Climatisation/Chauffage": ["Condenseur", "Compresseur", "Evaporateur", "Ventilation", "Chauffage"],
    "Consommables et divers": []
  },
  "Division Industrielle": {
    "Transmission et mouvement": ["Courroies industrielles", "Bandes transporteuses et courroie plate", "Chaines et pignons", "Accouplements et composants de transmission"],
    "Motorisation et entrainement": ["Motoreducteurs", "Moteurs electriques et mecanique", "Variateurs electriques et mecanique", "Paliers"],
    "Roulement & Supports": ["Roulements", "Paliers"]
  },
  "Division Marine": {
    "Groupes electrogenes marin": ["YACT", "Bateau de peche", "Travaux maritimes"],
    "SAV & consommable": ["Consommables", "SAV"]
  },
  "Division Travaux Publics": {
    "Moteurs et groupes electrogenes": [],
    "Lubrification": [],
    "Machine de soudure, outillage, consommable": []
  }
};
`;

const newFilterPanel = `${hierarchyDataStr}
const FilterPanel = ({ filters, setFilters, onFilter, onReset, showMobileFilters }) => {
  const handleSelect = (key, val) => {
    if (key === "division") {
      setFilters(prev => ({ ...prev, division: val, sousDivision1: "", sousDivision2: "" }));
    } else if (key === "sousDivision1") {
      setFilters(prev => ({ ...prev, sousDivision1: val, sousDivision2: "" }));
    } else {
      setFilters(prev => ({ ...prev, [key]: val }));
    }
  };

  const divisions = Object.keys(hierarchyData);
  const categories = filters.division ? Object.keys(hierarchyData[filters.division] || {}) : [];
  const subCategories = filters.sousDivision1 && filters.division 
    ? hierarchyData[filters.division][filters.sousDivision1] || [] 
    : [];

  return (
    <aside className={\`w-full lg:w-64 flex-shrink-0 bg-white rounded-lg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.07)] lg:sticky lg:top-5 \${showMobileFilters ? 'block' : 'hidden lg:block'}\`}>
      <h3 className="font-['Raleway'] text-sm font-bold text-[#1a1a2e] mb-4 tracking-wide">Chercher par</h3>

      <div className="mb-4">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Sélectionner une Division</p>
        <select
          className="w-full px-3 py-2 text-xs text-gray-700 border border-gray-200 rounded-md bg-white cursor-pointer outline-none focus:border-red-500 transition"
          value={filters.division}
          onChange={(e) => handleSelect("division", e.target.value)}
        >
          <option value="">-- Division --</option>
          {divisions.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {categories.length > 0 && (
      <div className="mb-4">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Sélectionner une Catégorie</p>
        <select
          className="w-full px-3 py-2 text-xs text-gray-700 border border-gray-200 rounded-md bg-white cursor-pointer outline-none focus:border-red-500 transition"
          value={filters.sousDivision1}
          onChange={(e) => handleSelect("sousDivision1", e.target.value)}
        >
          <option value="">-- Sous-Division 1 --</option>
          {categories.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
      )}

      {subCategories.length > 0 && (
      <div className="mb-4">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Sélectionner une Sous-Catégorie</p>
        <select
          className="w-full px-3 py-2 text-xs text-gray-700 border border-gray-200 rounded-md bg-white cursor-pointer outline-none focus:border-red-500 transition"
          value={filters.sousDivision2}
          onChange={(e) => handleSelect("sousDivision2", e.target.value)}
        >
          <option value="">-- Sous-Division 2 --</option>
          {subCategories.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      )}

      <button 
        className="w-full bg-[#c0141c] text-white border-none rounded-md py-2 text-sm font-bold cursor-pointer mb-2 tracking-wide hover:bg-red-800 transition-colors"
        onClick={onFilter}
      >
        Filtrer
      </button>
      <button 
        className="w-full bg-transparent text-[#c0141c] border border-[#c0141c] rounded-md py-1.5 text-sm font-semibold cursor-pointer tracking-wide hover:bg-red-50 transition-colors"
        onClick={onReset}
      >
        réinitialiser
      </button>
    </aside>
  );
};
`;

let modifiedCount = 0;

walkDir('src/pages', (filePath) => {
  if (!filePath.endsWith('.jsx')) return;
  const content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('const FilterPanel = ({')) {
    // Regex replace from the first definition of filter lists to the end of FilterPanel
    let newContent = content.replace(/const filterDivision = \[[^\]]*\];\s*const filterSousDivision1 = \[[^\]]*\];\s*const filterSousDivision2 = \[[^\]]*\];/, '');
    
    // Sometimes there are extra lines or slight differences, so let's try a broader replacement if needed
    // Look for FilterPanel definition until ProductCard or Product Grid
    newContent = newContent.replace(/const FilterPanel = \(\{[\s\S]*?<\/aside>\s*\);\s*};/, newFilterPanel);
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      modifiedCount++;
    }
  }
});

console.log("Updated filters in " + modifiedCount + " files.");
