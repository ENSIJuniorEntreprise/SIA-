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

export default function HydrauliquePage() {
  const [filters, setFilters] = useState({ division: '', sousDivision1: '', sousDivision2: '' });
  const [activeFilters, setActiveFilters] = useState({ division: '', sousDivision1: '', sousDivision2: '' });
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