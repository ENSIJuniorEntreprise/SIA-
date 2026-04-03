const fs = require('fs');
let s = fs.readFileSync('src/pages/APropos.jsx', 'utf-8');

// The block to remove:
s = s.replace(/<div className=\"mt-8 md:mt-0 md:absolute md:bottom-10 md:right-10 z-20 flex items-stretch\">[\s\S]*?Sfax, Tunisie<\/p>\s*<\/div><\/div>/, '');

s = s.replace(/<div className=\"mt-8 md:mt-0 md:absolute md:bottom-10 md:right-10      z-20 flex items-stretch\">[\s\S]*?Sfax,      Tunisie<\/p>\s*<\/div><\/div>/, '');

const insert = '<div className=\"mt-8 md:mt-0 md:absolute md:bottom-10 md:right-10 z-50 flex items-stretch w-full md:w-auto left-0 px-4 md:px-0\">\n' +
'             <div className=\"bg-sia-red-claire p-6 shadow-2xl w-full\">\n' +
'              <p className=\"text-xs uppercase tracking-widest opacity-80 mb-1 text-white\">Siège Social</p>\n' +
'              <p className=\"text-2xl md:text-3xl font-bold text-white\">Sfax, Tunisie</p>\n' +
'             </div>\n' +
'            </div>';

s = s.replace('VOIR LE CATALOGUE\n               </Link>\n             </div>', 'VOIR LE CATALOGUE\n               </Link>\n             </div>\n            ' + insert);

fs.writeFileSync('src/pages/APropos.jsx', s, 'utf-8');
console.log('Fixed APropos layout');
