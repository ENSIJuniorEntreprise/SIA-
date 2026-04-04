const fs = require('fs');

['capteurs.jsx', 'charge.jsx', 'gestion moteur.jsx'].forEach(file => {
    let content = fs.readFileSync('c:/Users/USER/Documents/GitHub/SIA-/src/pages/elec/' + file, 'utf8');

    let name = file.replace('.jsx', '');
    if (name === 'capteurs') name = 'Capteurs';
    if (name === 'charge') name = 'Charge';
    if (name === 'gestion moteur') name = 'Gestion Moteur';

    const breadcrumbStart = content.indexOf('const Breadcrumb = () => (');
    const breadcrumbEnd = content.indexOf(');', breadcrumbStart) + 2;

    const newBreadcrumb = \const Breadcrumb = () => (
    <nav className="flex flex-wrap items-center gap-2 py-4 text-sm text-gray-500">
      <a href="/" className="text-gray-600 hover:text-red-700 transition">catalogue</a>
      <span className="text-gray-400 text-base"> &gt; </span>
      <a href="/divisions/piece-de-rechange" className="text-gray-600 hover:text-red-700 transition">Division Pièces de Rechange Automobile</a>
      <span className="text-gray-400 text-base"> &gt; </span>
      <a href="/divisions/piece-de-rechange/electricite" className="text-gray-600 hover:text-red-700 transition">Électricité/Électronique</a>
      <span className="text-gray-400 text-base"> &gt; </span>
      <span className="text-[#c0141c] font-semibold">\</span>
    </nav>
  );\;

    content = content.substring(0, breadcrumbStart) + newBreadcrumb + content.substring(breadcrumbEnd);

    fs.writeFileSync('c:/Users/USER/Documents/GitHub/SIA-/src/pages/elec/' + file, content, 'utf8');
    console.log('Fixed breadcrumb in ' + file);
});
