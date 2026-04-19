import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/image/different-car-accessories-composition.jpg';

const products = [];



const Breadcrumb = () => (
  <nav className="flex flex-wrap items-center gap-2 py-4 text-sm text-gray-500">
    <Link to="/" className="text-gray-600 hover:text-red-700 transition">catalogue</Link>
    <span className="text-gray-400 text-base"> &gt; </span>
    <span className="text-[#c0141c] font-semibold">Trier</span>
  </nav>
);


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
    <aside className={`w-full lg:w-64 flex-shrink-0 bg-white rounded-lg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.07)] lg:sticky lg:top-5 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
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


const ProductCard = ({ product, index }) => {
  return (
    <div
      className="group bg-white rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.07)] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(192,20,28,0.3)] animate-[fadeUp_0.4s_ease_both]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative bg-[#fafafa] flex justify-center items-center h-64 sm:h-56 border-b border-gray-100 p-4">
        <img src={product.image} alt={product.name} className="max-h-full max-w-[100%] object-contain group-hover:scale-105 transition-transform duration-300" />
        
      </div>
      <div className="p-4 pt-3 flex-1 flex flex-col">

        
        <div className="flex justify-between text-xs text-gray-600 mb-1 border-b border-dashed border-gray-100 pb-1">
          <span className="text-gray-500 font-medium">Référence :</span>
          <span className="font-semibold text-[#1a1a2e]">{product.reference}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mb-1 border-b border-dashed border-gray-100 pb-1">
          <span className="text-gray-500 font-medium">Psc/carton :</span>
          <span className="font-semibold text-[#1a1a2e]">{product.pscCarton}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mb-4 border-b border-dashed border-gray-100 pb-1">
          <span className="text-gray-500 font-medium">SIZE :</span>
          <span className="font-semibold text-[#c0141c]">{product.size}</span>
        </div>

        <button onClick={() => navigate('/contact')} className="mt-auto mx-1 bg-transparent text-[#E10600] border border-[#E10600] py-2 text-sm font-semibold tracking-wide cursor-pointer transition-all duration-300 hover:bg-[#E10600] hover:text-white hover:shadow-md">
          DEMANDER UN DEVIS
        </button>
      </div>
    </div>
  );
};

export default function EtriersPage() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ division: "", sousDivision1: "", sousDivision2: "" });
  const [activeFilters, setActiveFilters] = useState({ division: "", sousDivision1: "", sousDivision2: "" });
  const navigate = useNavigate();
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleFilter = () => { setActiveFilters({ ...filters }); setShowMobileFilters(false); };
  const handleReset = () => { const empty = { division: '', sousDivision1: '', sousDivision2: '' }; setFilters(empty); setActiveFilters(empty); setShowMobileFilters(false); };

  return (
    <div className="bg-white min-h-screen text-gray-900 pb-16">
      <div className="w-full bg-[#f8f8f8] border-b border-gray-200 mb-6"><div className="max-w-6xl mx-auto px-4"><Breadcrumb /></div></div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <FilterPanel filters={filters} setFilters={setFilters} onFilter={handleFilter} onReset={handleReset} showMobileFilters={showMobileFilters} />
          <main className="flex-1 w-full">
            <div className="bg-gray-50 rounded-xl p-10 text-center text-gray-500 border border-gray-100 flex flex-col items-center">
              <p className="text-lg font-medium text-gray-700">Aucun produit trouvé</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}