import React from 'react';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';

import { useLocation } from 'react-router-dom';
const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname.startsWith('/contact');
  return (
    <footer className="w-full font-sans">
      
      {!isContactPage && (      <section className="relative overflow-hidden bg-sia-red-claire px-4 py-12 text-center text-white sm:px-6 sm:py-16">
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <span className="uppercase tracking-widest text-sm font-bold mb-4 block">
            Collaborons Ensemble
          </span>
          <h2 className="mb-8 text-xl font-semibold leading-tight sm:text-2xl md:mb-10 md:text-4xl">
            des pièces d’une qualité irréprochable, pensées <br className="hidden md:block" /> 
            pour durer et à la hauteur de ce que vous méritez vraiment.
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
           
            <a href="tel:+21627314100" className="flex items-center gap-2 rounded-sm bg-white px-6 py-3 font-bold text-[#e30613] transition-all hover:bg-sia-red-claire hover:text-white sm:px-11">
              <Phone size={18} />
              +216 27 314 100
            </a>
            
            <button className="flex items-center gap-2 rounded-sm border-2 border-white px-6 py-3 font-bold transition-all hover:bg-white hover:text-[#e30613] sm:px-8">
              DEMANDER UN DEVIS <ArrowUpRight size={18} />
            </button>
          </div>
        </div></section>)}
<section className="bg-white px-4 py-12 sm:px-6 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          
         
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/src/assets/logo.png" alt="SIA Logo" className="h-12 w-12 object-contain"/>
              <span className="text-2xl font-bold text-[#e30613]">SIA</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              L'excellence industrielle tunisienne en mouvement. Précision bicolore sans compromis.
            </p>
          </div>

          
          <div>
            <h4 className="text-sia-red font-bold mb-6 tracking-wider">NAVIGATION</h4>
            <ul className="space-y-3 text-gray-500 text-sm font-medium">
              <li className="hover:text-black cursor-pointer">Accueil</li>
              <li className="hover:text-black cursor-pointer">Nos Divisions</li>
              <li className="hover:text-black cursor-pointer">Partenaires</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-sia-red font-bold mb-6 tracking-wider">INFORMATION</h4>
            <ul className="space-y-3 text-gray-500 text-sm font-medium">
              <li className="hover:text-black cursor-pointer uppercase">À propos</li>
              <li className="hover:text-black cursor-pointer uppercase">Contact</li>
              <li className="hover:text-black cursor-pointer uppercase">B2B</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-sia-red font-bold mb-6 tracking-wider text-sm">CONTACT</h4>
            <div className="flex items-center gap-3 text-sia-red font-bold mb-4 text-sm">
              <Phone size={16} /> +216 27 314 100
            </div>
            <div className="flex items-center gap-3 text-sia-red font-bold text-sm break-all">
              <Mail size={16} /> SfaxienneIndustrielle@gmail.com
            </div>
          </div>

         
          <div>
            <h4 className="text-[#e30613] font-bold mb-4 tracking-wider text-sm">SUPPORT TECHNIQUE</h4>
            <p className="text-gray-400 text-xs mb-6 italic">Accédez à nos documentations certifiées.</p>
            <button className="bg-black text-white w-full py-3 font-bold text-sm tracking-widest hover:bg-gray-800 transition-colors uppercase">
              Contacter nous
            </button>
          </div>

        </div>
      </section>

      
      <div className="flex flex-col items-center justify-between border-t border-gray-100 px-4 py-6 text-center text-[10px] font-medium tracking-widest text-gray-400 md:flex-row md:px-8 md:text-left">
        <p>©SIA SFAX INDUSTRIELLE AUTOMOBILE. TOUS DROITS RESERVES.</p>
        <p className="mt-2 md:mt-0">MADE IN TUNISIA</p>
      </div>
    </footer>
  );
};

export default Footer;

