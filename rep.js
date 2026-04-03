const fs = require('fs');
let content = fs.readFileSync('src/pages/APropos.jsx', 'utf8');

const old1 = \       <div className="relative z-10 h-full min-h-screen w-full flex flex-col justify-center px-4 md:px-10 lg:px-20 pt-32 pb-16 transform lg:translate-x-0">    
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[2px] bg-red-600"></div>
          <span className="text-sia-red font-bold tracking-[0.2em] text-sm">DEPUIS 1994</span>
        </div>
         <div className="max-w-5xl">
           <h1 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-6">
             L’ART DE<br />
             <span className="text-sia-red-claire">L’INDUSTRIE.</span>        
           </h1>

           <p className="max-w-xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
             Plus qu'un distributeur, nous sommes le moteur
             de votre performance industrielle. Expertise,
             rigueur et innovation au service de la Tunisie.
           </p>

           <div className="flex flex-wrap gap-4">\;

const new1 = \       <div className="relative z-10 h-full min-h-screen w-full flex flex-col justify-center items-center text-center md:items-start md:text-left px-4 md:px-10 lg:px-20 pt-32 pb-16 transform lg:translate-x-0">    
        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
          <div className="w-12 h-[2px] bg-red-600 hidden md:block"></div>
          <span className="text-sia-red font-bold tracking-[0.2em] text-sm">DEPUIS 1994</span>
        </div>
         <div className="max-w-5xl flex flex-col items-center md:items-start">
           <h1 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-6">
             L’ART DE<br />
             <span className="text-sia-red-claire">L’INDUSTRIE.</span>        
           </h1>

           <p className="max-w-xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
             Plus qu'un distributeur, SIA (Sfaxienne Industrielle et Automobile) est le moteur
             de votre performance industrielle. Expertise,
             rigueur et innovation au service de la Tunisie.
           </p>

           <div className="flex flex-wrap justify-center md:justify-start gap-4">\;

content = content.replace(old1, new1);

const old2 = \        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
            Notre Univers
          </h2>
          <button className="bg-sia-red-claire text-white px-6 py-2 font-bold uppercase text-sm hover:bg-black transition-all">
            visite guidée
          </button>
        </div>\;

const new2 = \        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
            Notre Univers
          </h2>
        </div>\;

content = content.replace(old2, new2);

fs.writeFileSync('src/pages/APropos.jsx', content, 'utf8');
