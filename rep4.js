const fs = require('fs');
let text = fs.readFileSync('src/pages/APropos.jsx', 'utf8');

const regex = /<div className="flex flex-wrap justify-center md:justify-start gap-4">([\s\S]*?)<\/div>([\s\S]*?)<\/div>([\s\S]*?)<\/div>([\s\S]*?)<div className="mt-12 md:mt-0 flex w-full justify-center md:absolute md:bottom-10 md:right-10 z-20 md:w-auto md:items-stretch">([\s\S]*?)<div className="bg-sia-red-claire p-6 shadow-2xl text-center md:text-left">([\s\S]*?)<p className="text-xs uppercase tracking-widest opacity-80 mb-1 text-white">Siège Social<\/p>([\s\S]*?)<p className="text-2xl md:text-3xl font-bold text-white">Sfax, Tunisie<\/p>([\s\S]*?)<\/div><\/div>/;

const newText = \<div className="flex flex-wrap justify-center md:justify-start gap-4"></div>

           {/* Mobile Siège Social (Sous les boutons) */}
           <div className="mt-12 flex w-full justify-center md:hidden pb-4">
            <div className="bg-sia-red-claire p-6 shadow-2xl text-center w-full max-w-[250px]">
              <p className="text-xs uppercase tracking-widest opacity-80 mb-1 text-white">Siège Social</p>
              <p className="text-2xl font-bold text-white">Sfax, Tunisie</p>
            </div>
           </div></div></div>

       {/* Desktop Siège Social (En bas à droite) */}
       <div className="hidden md:flex absolute bottom-10 right-10 z-20 items-stretch">
        <div className="bg-sia-red-claire p-8 shadow-2xl text-left">
          <p className="text-xs uppercase tracking-widest opacity-80 mb-1 text-white">Siège Social</p>
          <p className="text-3xl font-bold text-white">Sfax, Tunisie</p>
        </div>
       </div>\;

text = text.replace(regex, newText);
fs.writeFileSync('src/pages/APropos.jsx', text, 'utf8');
