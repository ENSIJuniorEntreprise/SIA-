import { useState } from "react";

import imm1 from "../assets/image/Poste à Souder MIG Lincoln Electric 250A.jpg";
import imm2 from "../assets/image/Poste à Souder Inverter ESAB 160A.jpg";
import imm3 from "../assets/image/Poste à Souder Plasma Hypertherm 45A.jpg";
import { useNavigate } from 'react-router-dom'
import imm4 from "../assets/image/Clé à Choc Pneumatique.jpg";
import imm5 from "../assets/image/Marteau Piqueur SDS-Max Makita 1500W.jpg";
import imm6 from "../assets/image/Clé Dynamométrique.jpg";
import imm7 from "../assets/image/Électrode Soudure Rutile E6013 3.2mm.jpg";
import souder from "../assets/image/souder.jpg";
const products = [
  {
    id: 1,
    name: "Poste à Souder MIG Lincoln Electric 250A",
    reference: "SOU-MIG-001",
    pscCarton: 1,
    size: "250A",
    image: imm1,
    tag: "Machine de soudure"
  },
 
  {
    id: 2,
    name: "Poste à Souder Inverter ESAB 160A",
    reference: "SOU-INV-003",
    pscCarton: 1,
    size: "160A",
    image: imm2,
    tag: "Machine de soudure"
  },
  {
    id: 3,
    name: "Poste à Souder Plasma Hypertherm 45A",
    reference: "SOU-PLA-004",
    pscCarton: 1,
    size: "45A",
    image: imm3,
    tag: "Machine de soudure"
  },

  {
    id: 4,
    name: "Clé à Choc Pneumatique 1/2\"",
    reference: "OUT-CLE-005",
    pscCarton: 1,
    size: "1/2\"",
    image: imm4,
    tag: "Outillage"
  },
   {
    id: 5,
    name: "Marteau Piqueur SDS-Max Makita 1500W",
    reference: "OUT-MAR-008",
    pscCarton: 1,
    size: "1500W",
    image: imm5,
    tag: "Outillage"
  },
  {
    id: 6,
    name: "Clé Dynamométrique 1/2\" 40-200 Nm",
    reference: "OUT-DYN-009",
    pscCarton: 1,
    size: "40-200 Nm",
    image: imm6,
    tag: "Outillage"
  },

  {
    id: 7,
    name: "Électrode Soudure Rutile E6013 3.2mm",
    reference: "CON-ELE-010",
    pscCarton: 20,
    size: "3.2mm",
    image: imm7,
    tag: "Consommable"
  },
 
]



const filterDivision = ["Division Pièces de Rechange Automobile", "Division Industrielle", "Division Marine", "Division Travaux Publics"];
const filterSousDivision1 = ["Machine de soudure", "Outillage","Consommable"]




const FilterPanel = ({ filters, setFilters, onFilter, onReset, showMobileFilters  }) => {
  const handleSelect = (key, val) => {
    setFilters((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <aside className={`w-full lg:w-64 flex-shrink-0 bg-white rounded-lg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.07)] lg:sticky lg:top-5 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
      <h3 className="font-['Raleway'] text-sm font-bold text-[#1a1a2e] mb-4 tracking-wide">Chercher par</h3>

      <div className="mb-4">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Sélectionner un Division</p>
        <select
           className="w-full px-3 py-2 text-xs text-gray-700 border border-gray-200 rounded-md bg-white cursor-pointer outline-none focus:border-red-500 transition"
           value={filters.division}
           onChange={(e) => handleSelect("division", e.target.value)}
        >
          <option value="">-- Division --</option>
          {filterDivision.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Sélectionner un Sous-Division </p>
        <select
          className="w-full px-3 py-2 text-xs text-gray-700 border border-gray-200 rounded-md bg-white cursor-pointer outline-none focus:border-red-500 transition"
          value={filters.sousDivision1}
          onChange={(e) => handleSelect("sousDivision1", e.target.value)}
        >
          <option value="">-- Sous-Division 1 --</option>
          {filterSousDivision1.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      

      <button className="w-full bg-[#c0141c] text-white border-none rounded-md py-2 text-sm font-bold cursor-pointer mb-2 tracking-wide hover:bg-red-800 transition-colors"
        onClick={onFilter}>
        Filtrer
      </button>
      <button className="w-full bg-transparent text-[#c0141c] border border-[#c0141c] rounded-md py-1.5 text-sm font-semibold cursor-pointer tracking-wide hover:bg-red-50 transition-colors"
        onClick={onReset}>
        réinitialiser
      </button>
    </aside>
  );
};
const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();
  return (
    <div
      className="group bg-white rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.07)] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(192,20,28,0.3)] animate-[fadeUp_0.4s_ease_both]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative bg-[#fafafa] flex justify-center items-center h-48 sm:h-40 border-b border-gray-100 p-4">
        <img src={product.image} alt={product.name} className="max-h-full max-w-[80%] object-contain group-hover:scale-105 transition-transform duration-300" />
       
      </div>
      <div className="p-4 pt-3 flex-1 flex flex-col">
        <p className="text-sm font-bold text-[#1a1a2e] mb-3 leading-tight min-h-[38px] line-clamp-2">{product.name}</p>
        
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

export default function LubrificationPage() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ division: "", sousDivision1: "", });
  const [activeFilters, setActiveFilters] = useState({ division: "", sousDivision1: "",});
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleFilter = () => {
    setActiveFilters({ ...filters });
    setShowMobileFilters(false);
  };
  
  const handleReset = () => {
    const empty = { division: "", sousDivision1: ""};       
    setFilters(empty);
    setActiveFilters(empty);
    setShowMobileFilters(false);
  };

const filtered = products.filter((p) => {
    const okSousDiv1 = !activeFilters.sousDivision1 || p.tag === activeFilters.sousDivision1;
    return okSousDiv1;
});
  return (
    <div className="font-['Source_Sans_3'] bg-white min-h-screen text-gray-900 pb-16">
      <div className="relative h-[200px] sm:h-[250px] overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44]">
        <div 
          className="absolute inset-0 opacity-90 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: `url(${souder})` }} 
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 pt-16">
          <h1 className="font-['Raleway'] text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight tracking-tight drop-shadow-md">
            Division Travaux 
            <br />
            <span className="text-[#C00000]">Public</span>
          </h1>
        </div>
      </div>

      <div className="w-full bg-[#f8f8f8] border-b border-gray-200 mb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
  
  
            <nav className="flex flex-wrap items-center gap-2 py-4 text-sm text-gray-500">
              <a  onClick={() => navigate('/divisions')}  href='#'className="text-gray-600 hover:text-red-700 transition">catalogue</a>
              <span className="text-gray-400 text-base"> &gt; </span>
              <a  onClick={() => navigate('/divisions/travaux-publics')} href="#" className="text-gray-600 hover:text-red-700 transition">Division Travaux Publics</a>
              <span className="text-gray-400 text-base"> &gt; </span>
              <a onClick={() => navigate('/divisions/travaux-publics/machine-soudure')} href="#" className="text-gray-600 hover:text-red-700 transition">Machine de soudure, outillage, consommable</a>
              <span className="text-gray-400 text-base"> &gt; </span>
            </nav>

          
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="lg:hidden mb-4">
          <button 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full bg-white border border-gray-300 text-gray-800 py-3 px-4 rounded-lg flex justify-between items-center shadow-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c0141c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filtrer les produits
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            onFilter={handleFilter}
            onReset={handleReset}
            showMobileFilters={showMobileFilters}
          />

          <main className="flex-1 w-full">
            {filtered.length === 0 ? (
              <div className="bg-gray-50 rounded-xl p-10 text-center text-gray-500 border border-gray-100 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg font-medium text-gray-700">Aucun produit trouvé</p>
                <p className="text-sm mt-1 mb-4">Essayez d'ajuster vos critères de filtrage.</p>
                <button onClick={handleReset} className="text-[#c0141c] hover:underline font-semibold text-sm">Réinitialiser les filtres</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((p, i) => (
                  <ProductCard key={`${p.id}-${i}`} product={p} index={i} />      
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&family=Source+Sans+3:wght@400;500;600&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}