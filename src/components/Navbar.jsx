import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50 text-black">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO (Gauche) */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/src/assets/logo.png" alt="SIA Logo" className="h-10 w-10 object-contain"/>
          <span className="text-xl font-bold">SIA</span>
        </Link>

        {/* MENU PRINCIPAL (Centré grâce à flex-grow et justify-center) */}
        <nav className="flex-grow flex justify-center">
          <ul className="flex gap-6 items-center">

            {/* ACCUEIL */}
            <li className="relative group/main">
              <Link to="/src/pages/Accueil.jsx" className="font-medium relative hover:text-sia-red transition-colors">
                ACCUEIL 
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover/main:w-full transition-all duration-300"></span>
              </Link>
            </li>

            {/* A PROPOS */}
            <li className="relative group">
              <Link to="/a-propos" className="font-medium relative hover:text-sia-red transition-colors">
                A PROPOS
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

            {/* DIVISIONS (Le Menu Complexe) */}
            <li className="relative group/lvl1">
              <Link to="/divisions" className="font-medium relative hover:text-sia-red transition-colors">
                DIVISIONS
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover/lvl1:w-full transition-all duration-300 "></span>
              </Link>

              {/* NIVEAU 1 : Liste des divisions */}
              <ul className="absolute top-full left-0 hidden group-hover/lvl1:block bg-[#F3F3F3] min-w-[230px] shadow-2xl py-0 mt-2">
                <li className="relative group/lvl2">
                  <Link className="flex justify-between items-center px-4 py-3 hover:bg-sia-red hover:text-white transition w-full">
                    Division pièce de rechange automobile
                  </Link>

                  {/* NIVEAU 2 : Catégories */}
                  <ul className="absolute top-0 left-full hidden group-hover/lvl2:block bg-[#E5E5E5] min-w-[220px] border-l border-gray-300 h-full">
                    <li className="relative group/moteur">
                      <Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 hover:bg-white hover:text-sia-red transition">
                        Moteur
                      </Link>
                      {/* NIVEAU 3 : Détails Moteur */}
                      <ul className="absolute top-0 left-full hidden group-hover/moteur:block bg-white border border-gray-200 min-w-[250px] py-2 shadow-lg">
                        <li><Link className="block px-4 py-2 hover:underline decoration-red-600 underline-offset-4">Refroidissement</Link></li>
                        <li className="relative group/lub">
                          <Link className="block px-4 py-2 hover:underline decoration-red-600 underline-offset-4">Lubrification</Link>
                          {/* Sous-produit Lubrification */}
                          <ul className="absolute top-0 left-full hidden group-hover/lub:block bg-white border border-gray-200 min-w-[200px] py-2">
                            <li><Link className="block px-4 py-2 text-xs">LUBRIFIANT 2T DIMABIKE SINTETICO 4L</Link></li>
                            <li><Link className="block px-4 py-2 text-xs">LUBRIFIANT 4T DIMABIKE 20W50 1L</Link></li>
                            <li><Link className="block px-4 py-2 text-xs">Huile moteur Magnatec 5W-40</Link></li>
                            <li><Link className="block px-4 py-2 text-xs">Huile moteur GTX 20W-50</Link></li>
                            <li><Link className="block px-4 py-2 text-xs">Huile moteur Professional Edge Titanium FST Long life 5W-30</Link></li>
                            <li><Link className="block px-4 py-2 text-xs">Lubrifiant semi synthétique 10W-40 </Link></li>
                          </ul>
                        </li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-sia-red-claire underline-offset-4">Admission/Échappement</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-sia-red-claire  underline-offset-4">Injection/Carburant</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-sia-red-claire  underline-offset-4">Distribution</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-sia-red-claire  underline-offset-4">Culasse</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-sia-red-claire  underline-offset-4">Démarrage</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-sia-red-claire  underline-offset-4">Embrayage</Link></li>
                      </ul>
                    </li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 hover:bg-white hover:text-sia-red transition">Suspension/Direction</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 hover:bg-white hover:text-sia-red transition">Climatisation/Chauffage</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 hover:bg-white hover:text-sia-red transition">Eléctricité/Électronique</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 hover:bg-white hover:text-sia-red transition">Transmission</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 hover:bg-white hover:text-sia-red transition">Consommables et divers</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 hover:bg-white hover:text-sia-red transition">Filtration</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 hover:bg-white hover:text-sia-red transition">Carosserie</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 hover:bg-white hover:text-sia-red transition">Freinage</Link></li>
                  </ul>
                </li>
                <li><Link className="flex justify-between items-center px-4 py-3 hover:bg-sia-red hover:text-white transition w-full">Division Industrielle </Link></li>
                <li><Link className="flex justify-between items-center px-4 py-3 hover:bg-sia-red hover:text-white transition w-full">Division Travaux Publics</Link></li>
                <li><Link className="flex justify-between items-center px-4 py-3 hover:bg-sia-red hover:text-white transition w-full">Division Marine</Link></li>
              </ul>
            </li>

            {/* AUTRES LIENS */}
            <li><Link to="/marques" className="font-medium hover:text-red-600 transition-colors">MARQUES</Link></li>
            <li><Link to="/b2b" className="font-medium hover:text-red-600 transition-colors">B2B</Link></li>
            <li><Link to="/b2b" className="font-medium hover:text-red-600 transition-colors">PARTENAIRES</Link></li>
            <li><Link to="/services" className="font-medium hover:text-red-600 transition-colors">SERVICES</Link></li>
            <li><Link to="/contact" className="font-medium hover:text-red-600 transition-colors">CONTACT</Link></li>
          </ul>
        </nav>

            {/* CTA */}
            <ul>
              <Link 
                to="/contact" 
                className="text-sia-red-claire border border-sia-red-claire px-6 py-2 text-sm font-medium">
                Demander un devis
              </Link>
            </ul>
      </div>
    </header>
  );
}