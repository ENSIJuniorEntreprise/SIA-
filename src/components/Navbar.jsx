import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-gray-800/50 backdrop-blur-md shadow z-50 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo + texte */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="SIA Logo" className="h-10 w-10 object-contain"/>
          <span className="text-xl font-bold">SIA</span>
        </Link>

        {/* Menu Principal */}
        <nav>
          <ul className="flex gap-6 items-center">

            {/* ACCUEIL avec menu déroulant (Niveau 1) */}
            <li className="relative group/main">
              <Link to="/" className="font-medium relative hover:text-sia-red flex items-center gap-1">
                ACCUEIL 
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover/main:w-full transition-all duration-300"></span>
              </Link>

              <ul className="absolute top-full left-0 hidden group-hover/main:block bg-gray-700 rounded shadow-lg mt-2 min-w-[220px] py-2">
                <li>
                  <Link to="/a-propos-sia" className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-sia-red">
                    CHIFFRES CLES
                  </Link>
                </li>

                <li>
                  <Link to="/a-propos-sia" className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-sia-red">
                    À propos de SIA
                  </Link>
                </li>
                <li>
                  <Link to="/divisions" className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-sia-red">
                    Nos Divisions
                  </Link>
                </li>
              </ul>
            </li>

            {/* A PROPOS */}
            <li className="relative group">
              <Link to="/a-propos" className="font-medium relative hover:text-sia-red">
                A PROPOS
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

            {/* --- DÉBUT DU MENU DIVISIONS (Image) --- */}
            <li className="relative group/lvl1">
              <Link to="/a-propos" className="font-medium relative hover:text-sia-red">
                DIVISIONS
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* NIVEAU 1 : Liste des divisions (Gris Clair) */}
              <ul className="absolute top-full left-0 hidden group-hover/lvl1:block bg-[#CCCCCC] min-w-[200px] text-black shadow-2xl">
                
                {/* PIÈCES AUTO avec Niveau 2 */}
                <li className="relative group/lvl2">
                  <Link className="flex justify-between items-center px-4 py-3 hover:bg-red-600 hover:text-white transition group-hover/lvl2:bg-red-600 group-hover/lvl2:text-white min-w-[310px]">
                    Division piece de rechange automobile
                  </Link>

                  {/* NIVEAU 2 : Sous-catégories (Moteur, etc.) */}
                  <ul className="absolute top-0 left-full hidden group-hover/lvl2:block bg-[#CCCCCC] min-w-[220px] border-l border-gray-400">
                    <li className="relative group/lvl3">
                    <li className='relative group/moteur'>
                      <Link className="flex justify-between items-center px-4 py-3 border-b border-gray-400 hover:bg-gray-400 transition group-hover/moteur:bg-gray-400">
                        Moteur
                      </Link>
                      <ul className="absolute top-0 left-full hidden group-hover/lvl3:block bg-[#CCCCCC] min-w-[250px] border-l border-gray-400 py-2">
                        <li><Link className="block px-4 py-2 hover:underline decoration-red-600 underline-offset-4">Refroidissement</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-red-600 underline-offset-4">Lubrification</Link>
                        <ul className="absolute top-0 left-full hidden group-hover/lvl3:block bg-[#CCCCCC] min-w-[250px] border-l border-gray-400 py-2">
                        <li><Link className="block px-4 py-2 hover:underline decoration-red-600 underline-offset-4">LUBRIFIANT 2T DIMABIKE SINTETICO 4L</Link></li>
                        </ul>
                        </li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-red-600 underline-offset-4">Admission/Échappement</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-red-600 underline-offset-4">Injection/Carburant</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-red-600 underline-offset-4">Distribution</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-red-600 underline-offset-4">Culasse</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-red-600 underline-offset-4">Démarrage</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-red-600 underline-offset-4">Embrayage</Link></li>
                      </ul>
                    </li>
                      <Link className="flex justify-between items-center px-4 py-3 hover:bg-gray-300 border-b border-gray-400 group-hover/lvl3:bg-gray-400">
                        Suspension/Direction
                      </Link><Link className="flex justify-between items-center px-4 py-3 hover:bg-gray-300 border-b border-gray-400 group-hover/lvl3:bg-gray-400">
                        Climatisation/Chauffage
                      </Link><Link className="flex justify-between items-center px-4 py-3 hover:bg-gray-300 border-b border-gray-400 group-hover/lvl3:bg-gray-400">
                        Eléctricité/Électronique
                      </Link><Link className="flex justify-between items-center px-4 py-3 hover:bg-gray-300 border-b border-gray-400 group-hover/lvl3:bg-gray-400">
                        Transmission
                      </Link><Link className="flex justify-between items-center px-4 py-3 hover:bg-gray-300 border-b border-gray-400 group-hover/lvl3:bg-gray-400">
                        Consommables et divers
                      </Link><Link className="flex justify-between items-center px-4 py-3 hover:bg-gray-300 border-b border-gray-400 group-hover/lvl3:bg-gray-400">
                        Filtration
                      </Link><Link className="flex justify-between items-center px-4 py-3 hover:bg-gray-300 border-b border-gray-400 group-hover/lvl3:bg-gray-400">
                        Carosserie
                      </Link><Link className="flex justify-between items-center px-4 py-3 hover:bg-gray-300 border-b border-gray-400 group-hover/lvl3:bg-gray-400">
                        Freinage
                      </Link>
                      

                      {/* NIVEAU 3 : Détails (Refroidissement, etc.) */}
                      
                    </li>
                    
                  </ul>
                </li>

                <li><Link className="block px-4 py-3 hover:bg-gray-300">INDUSTRIELLE</Link></li>
                <li><Link className="block px-4 py-3 hover:bg-gray-300">TRAVAUX PUBLICS</Link></li>
                <li><Link className="block px-4 py-3 hover:bg-gray-300">MARINE</Link></li>
              </ul>
            </li>
            {/* --- FIN DU MENU DIVISIONS --- */}

            <li><Link to="/services" className="font-medium hover:text-sia-red">MARQUES</Link></li>
            <li><Link to="/b2b" className="font-medium hover:text-sia-red">B2B</Link></li>
            <li><Link to="/marques" className="font-medium hover:text-sia-red">PARTENAIRES</Link></li>
            <li><Link to="/partenaires" className="font-medium hover:text-sia-red">SERVICES</Link></li>
            <li><Link to="/partenaires" className="font-medium hover:text-sia-red">CONTACT</Link></li>

            {/* CTA */}
            <li>
              <Link 
                to="/contact" 
                className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition-all duration-300 text-sm font-medium"
              >
                Demander un devis
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}