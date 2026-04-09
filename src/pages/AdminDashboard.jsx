import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import allProductsData from '../data/allProducts.json';

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

const initialFormState = {
  id: null,
  name: '',
  reference: '',
  image: null,
  marque: '',
  division: '',
  sousDivision1: '',
  sousDivision2: '',
};

export default function AdminDashboard() {
  const [view, setView] = useState('list'); // 'list' | 'form'
  const [products, setProducts] = useState([]);
  
  React.useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Erreur', err));
  }, [view]);
  const [formData, setFormData] = useState(initialFormState);
  const [selectedDivision, setSelectedDivision] = useState('all');
  const [selectedCat, setSelectedCat] = useState('all');
  const [selectedSubCat, setSelectedSubCat] = useState('all');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, image: e.target.files[0] }));
    }
  };

  const handleDivisionChange = (e) => {
    setFormData(prev => ({
      ...prev,
      division: e.target.value,
      sousDivision1: '',
      sousDivision2: ''
    }));
  };

  const handleCategoryChange = (e) => {
    setFormData(prev => ({
      ...prev,
      sousDivision1: e.target.value,
      sousDivision2: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'features') {
        formDataToSend.append(key, JSON.stringify(formData[key]));
      } else if (key === 'image' && formData[key] instanceof File) {
        formDataToSend.append('image', formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      if (formData.id) {
        // Ã‰dition
        const res = await fetch(`http://localhost:3001/api/products/${formData.id}`, {
          method: 'PUT',
          body: formDataToSend
        });
        if (res.ok) alert("Produit modifiÃ© avec succÃ¨s !");
      } else {
        // Ajout
        const res = await fetch('http://localhost:3001/api/products', {
          method: 'POST',
          body: formDataToSend
        });
        if (res.ok) alert("Produit ajoutÃ© avec succÃ¨s !");
      }
      
      // Reload products
      const productsRes = await fetch('http://localhost:3001/api/products');
      const data = await productsRes.json();
      setProducts(data);
      
      // Retour Ã  la liste
      setFormData(initialFormState);
      setView('list');
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'opÃ©ration");
    }
  };

  const handleEdit = (product) => {
    setFormData(product);
    setView('form');
  };

  const handleDelete = async (id) => {
    if (window.confirm("ÃŠtes-vous sÃ»r de vouloir supprimer ce produit ?")) {
      try {
        const res = await fetch(`http://localhost:3001/api/products/${id}`, {
          method: 'DELETE'
        });
        if (res.ok) {
          setProducts(prev => prev.filter(p => p.id !== id));
        } else {
          alert("Erreur lors de la suppression");
        }
      } catch (error) {
        console.error(error);
        alert("Erreur serveur");
      }
    }
  };

  const divisions = Object.keys(hierarchyData);
  const categories = formData.division ? Object.keys(hierarchyData[formData.division] || {}) : [];
  const subCategories = formData.sousDivision1 && formData.division 
    ? hierarchyData[formData.division][formData.sousDivision1] || [] 
    : [];

  const filterCategories = selectedDivision !== 'all' ? Object.keys(hierarchyData[selectedDivision] || {}) : [];
  const filterSubCategories = (selectedCat !== 'all' && selectedDivision !== 'all') 
    ? hierarchyData[selectedDivision][selectedCat] || [] 
    : [];

  // Filtrer les produits pour la vue Liste
  const filteredProducts = products.filter(p => {
    if (selectedDivision !== 'all' && p.division !== selectedDivision) return false;
    if (selectedCat !== 'all' && p.sousDivision1 !== selectedCat) return false;
    if (selectedSubCat !== 'all' && p.sousDivision2 !== selectedSubCat) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {view === 'list' && (
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Gestion de Tous les Produits
            </h2>
            <button
              onClick={() => {
                setFormData(initialFormState);
                setView('form');
              }}
              className="bg-[#c0141c] hover:bg-red-700 text-white py-2 px-4 rounded-md shadow-sm font-medium transition"
            >
              + Ajouter un Produit
            </button>
          </div>

          {/* Filtres par hiérarchie */}
          <div className="bg-gray-50 p-4 rounded-md mb-6 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase">Filtrer par Vue</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Division</label>
                <select 
                  value={selectedDivision} 
                  onChange={(e) => {
                    setSelectedDivision(e.target.value);
                    setSelectedCat('all');
                    setSelectedSubCat('all');
                  }} 
                  className="block w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-red-500 focus:border-red-500"
                >
                  <option value="all">Toutes les divisions</option>
                  {divisions.map(div => <option key={div} value={div}>{div}</option>)}
                </select>
              </div>

              {selectedDivision !== 'all' && filterCategories.length > 0 && (
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Catégorie</label>
                  <select 
                    value={selectedCat} 
                    onChange={(e) => {
                      setSelectedCat(e.target.value);
                      setSelectedSubCat('all');
                    }} 
                    className="block w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="all">Toutes les catégories</option>
                    {filterCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
              )}

              {selectedCat !== 'all' && filterSubCategories.length > 0 && (
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Sous-catégorie</label>
                  <select 
                    value={selectedSubCat} 
                    onChange={(e) => setSelectedSubCat(e.target.value)} 
                    className="block w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="all">Toutes les sous-catégories</option>
                    {filterSubCategories.map(subCat => <option key={subCat} value={subCat}>{subCat}</option>)}
                  </select>
                </div>
              )}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Référence</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Désignation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Division</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marque</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">Aucun produit trouvé pour ces filtres</td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.reference}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="text-xs truncate max-w-xs" title={`${product.division} > ${product.sousDivision1} > ${product.sousDivision2}`}>
                          {product.division} <br/> 
                          <span className="text-gray-400">{product.sousDivision1} {product.sousDivision2 && `> ${product.sousDivision2}`}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.marque}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={() => handleEdit(product)} className="text-blue-600 hover:text-blue-900 mr-4">Modifier</button>
                        <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-900">Supprimer</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {view === 'form' && (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 border-b pb-4">
            {formData.id ? 'Modifier le Produit' : 'Ajouter un Produit'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Désignation */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Désignation</label>
              <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
            </div>

            {/* Référence */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Référence</label>
              <input type="text" name="reference" required value={formData.reference} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
            </div>

            {/* Marque */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Marque</label>
              <input type="text" name="marque" value={formData.marque} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
            </div>

            

            {/* Photo du produit */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Photo du produit</label>
              <div className="mt-1 flex items-center">
                <input type="file" name="image" accept="image/*" onChange={handleImageChange} className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
              </div>
              {formData.image && (
                <p className="mt-2 text-sm text-gray-500">Image sélectionnée : {formData.image.name}</p>
              )}
            </div>

            {/* Division */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Division Principale</label>
              <select name="division" required value={formData.division} onChange={handleDivisionChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm">
                <option value="">Sélectionnez une division...</option>
                {divisions.map(div => <option key={div} value={div}>{div}</option>)}
              </select>
            </div>

            {/* Sous Division 1 (Catégorie) */}
            {categories.length > 0 && (
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Catégorie (Sous Division 1)</label>
                <select name="sousDivision1" required value={formData.sousDivision1} onChange={handleCategoryChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm">
                  <option value="">Sélectionnez une catégorie...</option>
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
            )}

            {/* Sous Division 2 (Sous Catégorie) */}
            {subCategories.length > 0 && (
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Sous-catégorie (Sous Division 2)</label>
                <select name="sousDivision2" required value={formData.sousDivision2} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm">
                  <option value="">Sélectionnez une sous-catégorie...</option>
                  {subCategories.map(subCat => <option key={subCat} value={subCat}>{subCat}</option>)}
                </select>
              </div>
            )}
          </div>

            <div className="pt-5 border-t">
              <div className="flex justify-end">
                <button type="button" onClick={() => { setFormData(initialFormState); setView('list'); }} className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Annuler
                </button>
                <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#c0141c] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  {formData.id ? 'Mettre à jour' : 'Ajouter le produit'}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}