const fs = require('fs');
let content = fs.readFileSync('src/pages/APropos.jsx', 'utf8');

const target = \           <div className="flex flex-wrap justify-center md:justify-start gap-4">
             <button className="bg-sia-red-claire text-white px-10 py-4 font-bold uppercase hover:bg-white  hover:text-sia-red-claire transition-all">
               NOTRE EXPERTISE
             </button>
             <Link to="/divisions" className="border-2 border-white text-white px-10 py-4 font-bold uppercase hover:bg-sia-red-claire hover:text-white hover:border-sia-red-claire transition-all">
               VOIR LE CATALOGUE
             </Link>
           </div>
         </div>
       </div>
       <div className="mt-12 md:mt-0 flex w-full justify-center md:absolute md:bottom-10 md:right-10 z-20 md:w-auto md:items-stretch">
        <div className="bg-sia-red-claire p-6 shadow-2xl text-center md:text-left">
          <p className="text-xs uppercase tracking-widest opacity-80 mb-1 text-white">Siège Social</p>
          <p className="text-2xl md:text-3xl font-bold text-white">Sfax, Tunisie</p>
        </div></div>\;

const rep = \           <div className="flex flex-wrap justify-center md:justify-start gap-4">
             <button className="bg-sia-red-claire text-white px-10 py-4 font-bold uppercase hover:bg-white  hover:text-sia-red-claire transition-all">
               NOTRE EXPERTISE
             </button>
             <Link to="/divisions" className="border-2 border-white text-white px-10 py-4 font-bold uppercase hover:bg-sia-red-claire hover:text-white hover:border-sia-red-claire transition-all">
               VOIR LE CATALOGUE
             </Link>
           </div>

           {/* Mobile Siège Social (Sous les boutons) */}
           <div className="mt-12 flex w-full justify-center md:hidden pb-4">
            <div className="bg-sia-red-claire p-6 shadow-2xl text-center w-full max-w-[250px]">
              <p className="text-xs uppercase tracking-widest opacity-80 mb-1 text-white">Siège Social</p>
              <p className="text-2xl font-bold text-white">Sfax, Tunisie</p>
            </div>
           </div>
         </div>
       </div>

       {/* Desktop Siège Social (En bas à droite) */}
       <div className="hidden md:flex absolute bottom-10 right-10 z-20 items-stretch">
        <div className="bg-sia-red-claire p-8 shadow-2xl text-left">
          <p className="text-xs uppercase tracking-widest opacity-80 mb-1 text-white">Siège Social</p>
          <p className="text-3xl font-bold text-white">Sfax, Tunisie</p>
        </div>
       </div>\;

content = content.replace(target, rep);
fs.writeFileSync('src/pages/APropos.jsx', content, 'utf8');
