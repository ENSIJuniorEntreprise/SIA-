
const fs = require('fs');

const b2bCode = \import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/B2B.png';

export default function EspacePro() {
  return (
    <div className=\\\elative w-full h-screen font-['Montserrat',sans-serif] overflow-hidden bg-slate-900\\\>
      {/* Background Image */}
      <div 
        className=\\\bsolute inset-0 bg-cover bg-center\\\
        style={{ backgroundImage: \\\url(\\\)\\\ }}
      />
      
      {/* Overlay to give the dark mood */}
      <div 
        className=\\\bsolute inset-0\\\
        style={{ background: 'linear-gradient(to bottom, rgba(10,18,35,0.58) 0%, rgba(8,15,30,0.42) 45%, rgba(10,18,35,0.68) 100%)' }} 
      />

      {/* Content Container */}
      <div className=\\\elative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center\\\>
        
        {/* Main Title */}
        <h1 className=\\\	ext-white font-black uppercase tracking-[4px] leading-none mb-1 text-[56px] sm:text-[72px] md:text-[92px] drop-shadow-md\\\>
          ESPACE <span className=\\\	ext-[#e8161a]\\\>PRO</span>
        </h1>

        {/* Small Red Line Separator */}
        <div className=\\\w-[52px] h-[3px] bg-[#e8161a] my-5 mx-auto\\\ />

        {/* Descriptive Text */}
        <p className=\\\	ext-white/90 text-[13.5px] sm:text-[14.5px] font-medium leading-[1.8] tracking-[0.2px] max-w-[420px] mb-9 drop-shadow-sm\\\>
          Notre plateforme de commande en ligne<br />
          est actuellement en cours de finalisation.<br />
          Bientôt disponible pour simplifier vos<br />
          approvisionnements.
        </p>

        {/* Call to Action Button */}
        <Link 
          to=\\\/\\\
          className=\\\inline-block bg-[#e8161a] hover:bg-[#c01215] text-white px-[38px] py-[13px] text-[12px] font-bold tracking-[1.5px] uppercase shadow-md transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg\\\
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
\;

fs.writeFileSync('src/pages/B2B.jsx', b2bCode);
console.log('B2B.jsx rewritten!');
