import fs from 'fs';

let content = fs.readFileSync('src/pages/AdminDashboard.jsx', 'utf-8');

// Replace standard imports and states with a more robust replace that will work despite the funny encodings
content = content.replace(
  "const [products, setProducts] = useState(allProductsData);",
  "const [products, setProducts] = useState([]);\n  \n  React.useEffect(() => {\n    fetch('http://localhost:3001/api/products')\n      .then(res => res.json())\n      .then(data => setProducts(data))\n      .catch(err => console.error('Erreur', err));\n  }, [view]);"
);

fs.writeFileSync('src/pages/AdminDashboard.jsx', content, 'utf-8');
console.log("Updated states");