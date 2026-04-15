const fs = require('fs');

const filesToUpdate = [
  'Lubrifiant-moteur.jsx',
  'Machine-soudure.jsx',
  'moteur-et_groupe-electrogene.jsx',
  'yact.jsx',
  'lubrification.jsx'
];

for (const p of filesToUpdate) {
  const t = fs.readFileSync('src/pages/' + p, 'utf8');
  const m = t.match(/<span className="text-\[#c0141c\] font-semibold">([^<]+)/);
  console.log(p, m ? m[1] : 'no');
}
