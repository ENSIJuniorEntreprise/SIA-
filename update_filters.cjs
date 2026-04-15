const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'Lubrifiant-moteur.jsx',
  'Machine-soudure.jsx',
  'moteur-et_groupe-electrogene.jsx',
  'yact.jsx',
  'lubrification.jsx'
];

for (const file of filesToUpdate) {
    let content = fs.readFileSync(path.join('src/pages', file), 'utf8');

    // Replace the simple fetch with the filtered one
    const simpleFetch = `  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(console.error);
  }, []);`;
    
    const advancedFetch = `  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => {
        const currentPath = window.location.pathname.toLowerCase();
        let pageData = data;
        
        if (currentPath.includes('lubrification') && !currentPath.includes('travaux')) {
            pageData = data.filter(p => p.division?.includes('Automobile') && p.sousDivision1?.includes('Moteur') && p.sousDivision2?.toLowerCase().includes('lubrification'));
        } else if (currentPath.includes('lubrifiant-moteur')) {
            pageData = data.filter(p => p.division?.includes('Travaux') && p.sousDivision1?.toLowerCase().includes('lubrification'));
        } else if (currentPath.includes('machine-soudure')) {
            pageData = data.filter(p => p.division?.includes('Travaux') && p.sousDivision1?.toLowerCase().includes('soudure'));
        } else if (currentPath.includes('groupe-electrogene')) {
            pageData = data.filter(p => p.division?.includes('Travaux') && p.sousDivision1?.toLowerCase().includes('moteur'));
        } else if (currentPath.includes('yact')) {
            pageData = data.filter(p => p.division?.includes('Marine') && p.sousDivision2?.toLowerCase().includes('yact'));
        } 
        
        setProducts(pageData);
      })
      .catch(console.error);
  }, []);`;

    if (content.includes(simpleFetch)) {
        content = content.replace(simpleFetch, advancedFetch);
    } else if (content.includes("fetch('http://localhost:3001/api/products')")) {
        // If exact spacing didn't match, fallback manual replace
        content = content.split("useEffect(() => {")[0] + advancedFetch + "\n" + content.split("}, []);")[1].substr(1);
    }

    fs.writeFileSync(path.join('src/pages', file), content);
    console.log(`Updated ${file} with dedicated filtering successfully.`);
}
