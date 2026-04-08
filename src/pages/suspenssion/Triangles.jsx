import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/image/different-car-accessories-composition.jpg";
import img0 from "../../assets/sia/Suspension Direction/triangles/silent-bloc-triangle-susp-pm ref 2254021.jpg";
import img1 from "../../assets/sia/Suspension Direction/triangles/silent-bloc-triangle-vw-golf-4-polo-7-gm ref 9001542.jpg";
import img2 from "../../assets/sia/Suspension Direction/triangles/soupape-echappement-p301-207 ref 32116.jpg";


const products = [
  { id: 1, name: "Silent Bloc Triangle Susp Pm", image: img0, reference: "2254021", pscCarton: 1, size: "N/A", tag: "" },
  { id: 2, name: "Silent Bloc Triangle Vw Golf 4 Polo 7 Gm", image: img1, reference: "9001542", pscCarton: 1, size: "N/A", tag: "" },
  { id: 3, name: "Soupape Echappement P301 207", image: img2, reference: "32116", pscCarton: 1, size: "N/A", tag: "" },
];




const filterDivision = ["Division Pièces de Rechange Automobile", "Division Industrielle", "Division Marine", "Division Travaux Publics"];
const filterSousDivision1 = ["Moteur", "Suspension", "Freinage", "Filtration"];
const filterSousDivision2 = ["Lubrification", "Pistons", "Courroies", "Échappement"];

const Breadcrumb = () => (
  <nav className="flex flex-wrap items-center gap-2 py-4 text-sm text-gray-500">
    <a href="#" className="text-gray-600 hover:text-red-700 transition">catalogue</a>
    <span className="text-gray-400 text-base"> &gt; </span>
    <a href="#" className="text-gray-600 hover:text-red-700 transition">Division Pièces de Rechange Automobile</a>
    <span className="text-gray-400 text-base"> &gt; </span>
    <a href="#" className="text-gray-600 hover:text-red-700 transition">Suspension et Direction</a>
    <span className="text-gray-400 text-base"> &gt; </span>
    <span className="text-[#c0141c] font-semibold">Triangles</span>
  </nav>
);

const FilterPanel = ({ filters, setFilters, onFilter, onReset, showMobileFilters }) => {
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
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Sélectionner un Sous-Division 1</p>
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

      <div className="mb-4">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Sélectionner un Sous-Division 2</p>
        <select
          className="w-full px-3 py-2 text-xs text-gray-700 border border-gray-200 rounded-md bg-white cursor-pointer outline-none focus:border-red-500 transition"
          value={filters.sousDivision2}
          onChange={(e) => handleSelect("sousDivision2", e.target.value)}
        >
          <option value="">-- Sous-Division 2 --</option>
          {filterSousDivision2.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

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

        <button className="mt-auto mx-1 bg-transparent text-[#E10600] border border-[#E10600] py-2 text-sm font-semibold tracking-wide cursor-pointer transition-all duration-300 hover:bg-[#E10600] hover:text-white hover:shadow-md">
          DEMANDER UN DEVIS
        </button>
      </div>
    </div>
  );
};

export default function TrianglesPage() {
  const [filters, setFilters] = useState({ division: "", sousDivision1: "", sousDivision2: "" });
  const [activeFilters, setActiveFilters] = useState({ division: "", sousDivision1: "", sousDivision2: "" });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleFilter = () => {
    setActiveFilters({ ...filters });
    setShowMobileFilters(false);
  };
  
  const handleReset = () => {
    const empty = { division: "", sousDivision1: "", sousDivision2: "" };       
    setFilters(empty);
    setActiveFilters(empty);
    setShowMobileFilters(false);
  };

  const filtered = products.filter((p) => {
    const okDivision = !activeFilters.division || p.name.includes(activeFilters.division);
    const okSousDiv1 = !activeFilters.sousDivision1 || p.name.includes(activeFilters.sousDivision1);
    const okSousDiv2 = !activeFilters.sousDivision2 || p.name.includes(activeFilters.sousDivision2);
    // Add additional category check based on tags or properties logic if needed
    return okDivision && okSousDiv1 && okSousDiv2;
  });

  return (
    <div className="font-['Source_Sans_3'] bg-white min-h-screen text-gray-900 pb-16">
      {/* Hero Banner */}
      <div className="relative h-[200px] sm:h-[250px] overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44]">
        <div 
          className="absolute inset-0 opacity-90 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }} 
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 pt-16">
          <h1 className="font-['Raleway'] text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight tracking-tight drop-shadow-md">
            Division Pièces de Rechange
            <br />
            <span className="text-[#C00000]">Automobile</span>
          </h1>
        </div>
      </div>

      <div className="w-full bg-[#f8f8f8] border-b border-gray-200 mb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Breadcrumb />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Mobile Filter Toggle */}
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
