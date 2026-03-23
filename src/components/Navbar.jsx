import React from 'react'
import { Link } from "react-router-dom";
import { ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled?'bg-white shadow-md py-2 text-black':'bg-transparent py-4 text-white'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/src/assets/logo.png" alt="SIA Logo" className="h-12 w-12 object-contain"/>
          <span className="text-xl font-bold">SIA</span>
        </Link>

        
        <nav className="hidden md:flex items-center justify-center flex-grow">
          <ul className="flex gap-6 items-center">

           
            <li className="relative group/main">
              <Link to="/Accueil" className="font-medium relative hover:text-sia-red transition-colors">
                ACCUEIL 
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover/main:w-full transition-all duration-300"></span>
              </Link>
            </li>

        
            <li className="relative group">
              <Link to="/a-propos" className="font-medium relative hover:text-sia-red transition-colors">
                A PROPOS
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

            
            <li className="relative group/lvl1">
              <Link to="/divisions" className="font-medium relative hover:text-sia-red transition-colors">
                DIVISIONS ▼
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover/lvl1:w-full transition-all duration-300 "></span>
              </Link>

              <ul className={`absolute top-full left-0 hidden group-hover/lvl1:block bg-[#F3F3F3] min-w-[230px] shadow-2xl py-0 pt-2 mt-1 ${isScrolled ? 'text-black' : 'text-black'}`}>
                <li className="relative group/lvl2">
                  <Link className="flex justify-between items-center px-4 py-3 hover:bg-sia-red hover:text-white transition w-full ">
                    Division pièce de rechange automobile
                  </Link>

                  
                  <ul className="absolute top-0 left-full hidden group-hover/lvl2:block bg-[#E5E5E5] min-w-[220px] border-l border-gray-300 h-full">
                    <li className="relative group/moteur">
                      <Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 bg-white hover:text-sia-red transition">
                        Moteur
                      </Link>
                     
                      <ul className="absolute top-0 left-full hidden group-hover/moteur:block bg-white border border-gray-200 min-w-[250px] py-2 shadow-lg">
                        <li><Link className="block px-4 py-2 hover:underline decoration-red-600 underline-offset-4">Refroidissement</Link></li>
                        <li className="relative group/lub">
                          <Link className="block px-4 py-2 hover:underline decoration-red-600 underline-offset-4">Lubrification</Link>
                          
                        </li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-sia-red-claire underline-offset-4">Admission/Échappement</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-sia-red-claire  underline-offset-4">Injection/Carburant</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-sia-red-claire  underline-offset-4">Distribution</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-sia-red-claire  underline-offset-4">Culasse</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-sia-red-claire  underline-offset-4">Démarrage</Link></li>
                        <li><Link className="block px-4 py-2 hover:underline decoration-sia-red-claire  underline-offset-4">Embrayage</Link></li>
                      </ul>
                    </li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 bg-white hover:text-sia-red transition">Suspension/Direction</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 bg-white hover:text-sia-red transition">Climatisation/Chauffage</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 bg-white hover:text-sia-red transition">Eléctricité/Électronique</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 bg-white hover:text-sia-red transition">Transmission</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 bg-white hover:text-sia-red transition">Consommables et divers</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 bg-white hover:text-sia-red transition">Filtration</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 bg-white hover:text-sia-red transition">Carosserie</Link></li>
                        <li><Link className="flex justify-between items-center px-4 py-3 border-b border-gray-300 bg-white hover:text-sia-red transition">Freinage</Link></li>
                  </ul>
                </li>
                <li><Link className="flex justify-between items-center px-4 py-3 hover:bg-sia-red hover:text-white transition w-full">Division Industrielle </Link></li>
                <li><Link className="flex justify-between items-center px-4 py-3 hover:bg-sia-red hover:text-white transition w-full">Division Travaux Publics</Link></li>
                <li><Link className="flex justify-between items-center px-4 py-3 hover:bg-sia-red hover:text-white transition w-full">Division Marine</Link></li>
              </ul>
            </li>

        
            <li className="relative group/lvl1"><Link to="/marques" className="font-medium hover:text-red-600 transition-colors">MARQUES
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover/lvl1:w-full transition-all duration-300 "></span>
            </Link></li>
            <li className="relative group/lvl1"><Link to="/b2b" className="font-medium hover:text-red-600 transition-colors">B2B
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover/lvl1:w-full transition-all duration-300 "></span>
            </Link></li>
            <li className="relative group/lvl1"><Link to="/partenaires" className="font-medium hover:text-red-600 transition-colors">PARTENAIRES
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover/lvl1:w-full transition-all duration-300 "></span>
            </Link></li>
            <li className="relative group/lvl1"><Link to="/services" className="font-medium hover:text-red-600 transition-colors">SERVICES
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover/lvl1:w-full transition-all duration-300 "></span>
            </Link></li>
            <li className="relative group/lvl1"><Link to="/contact" className="font-medium hover:text-red-600 transition-colors">CONTACT
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sia-red group-hover/lvl1:w-full transition-all duration-300 "></span>
            </Link></li>
          </ul>
        </nav>

           
            <ul>
              <Link 
                to="/contact" 
                className={`px-6 py-2 text-sm font-medium border   transition-all duration-300 ${isScrolled ? 'text-sia-red-claire border-sia-red-claire hover:text-white hover:bg-sia-red-claire': 'text-white border-white hover:text-sia-red-claire hover:bg-white'}`}>
                Demander un devis
              </Link>
            </ul>
      </div>
    </header>
  );
}