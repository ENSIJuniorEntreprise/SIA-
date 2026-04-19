import React from 'react';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
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
            Des pièces d'une qualité irréprochable, pensées <br className="hidden md:block" /> 
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

          <div className="lg:col-span-1 flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <img src="/src/assets/logo.png" alt="SIA Logo" className="h-20 w-20 object-contain"/>
              <span className="text-2xl font-bold text-[#e30613]">SIA</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              L'excellence industrielle tunisienne en mouvement. Précision bicolore sans compromis.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="text-sia-red font-bold mb-6 tracking-wider">NAVIGATION</h4>
            <ul className="space-y-3 text-gray-500 text-sm font-medium">
              <li className="hover:text-black"><Link to="/">Accueil</Link></li>
              <li className="hover:text-black"><Link to="/divisions">Nos Divisions</Link></li>
              <li className="hover:text-black"><Link to="/partenaires">Partenaires</Link></li>
              <li className="hover:text-black"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="text-sia-red font-bold mb-6 tracking-wider">INFORMATION</h4>
            <ul className="space-y-3 text-gray-500 text-sm font-medium">
              <li className="hover:text-black uppercase"><Link to="/a-propos">À propos</Link></li>
              <li className="hover:text-black uppercase"><Link to="/contact">Contact</Link></li>
              <li className="hover:text-black uppercase"><Link to="/b2b">B2B</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="text-sia-red font-bold mb-6 tracking-wider text-sm">CONTACT</h4>
            <div className="flex items-center gap-3 text-sia-red font-bold mb-4 text-sm">
              <Phone size={16} /> +216 27 314 100
            </div>
            <div className="flex items-center gap-3 text-sia-red font-bold text-sm break-all">
              <Mail size={16} /> sia.bendjemaa@topnet.tn
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="text-[#e30613] font-bold mb-4 tracking-wider text-sm">SUPPORT TECHNIQUE</h4>
            <Link to="/contact" className="bg-black text-white w-full py-3 font-bold text-sm tracking-widest hover:bg-gray-800 transition-colors uppercase text-center block">
              Contacter nous
            </Link>
          </div>

        </div>
      </section>

      
    </footer>
  );
};

export default Footer;
