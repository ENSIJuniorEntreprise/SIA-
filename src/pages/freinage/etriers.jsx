import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/image/different-car-accessories-composition.jpg';

const products = [];

const filterDivision = ['Division Pièces de Rechange Automobile', 'Division Industrielle', 'Division Marine', 'Division Travaux Publics'];
const filterSousDivision1 = ['Moteur', 'Suspension', 'Freinage', 'Filtration'];
const filterSousDivision2 = ['Lubrification', 'Pistons', 'Courroies', 'Échappement'];

const Breadcrumb = () => (
  <nav className="flex flex-wrap items-center gap-2 py-4 text-sm text-gray-500">
    <Link to="/" className="text-gray-600 hover:text-red-700 transition">catalogue</Link>
    <span className="text-gray-400 text-base"> &gt; </span>
    <span className="text-[#c0141c] font-semibold">Trier</span>
  </nav>
);

const FilterPanel = ({ filters, setFilters, onFilter, onReset, showMobileFilters }) => {
  const handleSelect = (key, val) => setFilters((prev) => ({ ...prev, [key]: val }));
  return (
    <aside className={`w-full lg:w-64 flex-shrink-0 bg-white rounded-lg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.07)] lg:sticky lg:top-5 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
      <h3 className="font-['Raleway'] text-sm font-bold text-[#1a1a2e] mb-4 tracking-wide">Chercher par</h3>
      <button onClick={onFilter} className="w-full bg-[#c0141c] text-white rounded-md py-2 text-sm font-bold">Filtrer</button>
      <button onClick={onReset} className="w-full bg-transparent text-[#c0141c] border border-[#c0141c] rounded-md py-1.5 text-sm font-semibold mt-2">Réinitialiser</button>
    </aside>
  );
};

<<<<<<< HEAD
export default function EtriersPage() {
  const [filters, setFilters] = useState({ division: '', sousDivision1: '', sousDivision2: '' });
  const [activeFilters, setActiveFilters] = useState({ division: '', sousDivision1: '', sousDivision2: '' });
=======
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

export default function DisquesPage() {
  const [filters, setFilters] = useState({ division: "", sousDivision1: "", sousDivision2: "" });
  const [activeFilters, setActiveFilters] = useState({ division: "", sousDivision1: "", sousDivision2: "" });
>>>>>>> 021dd87cbd8ca05544abafa83c110437c011ddbe
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