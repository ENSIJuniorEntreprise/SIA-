import fs from 'fs';

let content = fs.readFileSync('src/pages/AdminDashboard.jsx', 'utf-8');

// Replace standard imports and states
const targetStates = `export default function AdminDashboard() {
  const [view, setView] = useState('list'); // 'list' | 'form'
  const [products, setProducts] = useState(allProductsData);`;

const newStates = `export default function AdminDashboard() {
  const [view, setView] = useState('list'); // 'list' | 'form'
  const [products, setProducts] = useState([]);
  
  React.useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Erreur de chargement des produits:", err));
  }, [view]);`;

content = content.replace(targetStates, newStates);

// Replace handleSubmit
const targetSubmit = `const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // Ã‰dition
      setProducts(prev => prev.map(p => p.id === formData.id ? { ...formData } : p));
      alert("Produit modifiÃ© avec succÃ¨s !");
    } else {
      // Ajout
      const newProduct = { ...formData, id: Date.now() };
      setProducts(prev => [...prev, newProduct]);
      alert("Produit ajoutÃ© avec succÃ¨s !\\nFichier image: " + (formData.image ? formData.image.name : 'Aucun'));
    }
    
    // Retour Ã  la liste
    setFormData(initialFormState);
    setView('list');
  };`;

const newSubmit = `const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'features') {
        formDataToSend.append(key, JSON.stringify(formData[key]));
      } else if (key === 'image' && formData[key] instanceof File) {
        formDataToSend.append('image', formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      if (formData.id) {
        // Ã‰dition
        const res = await fetch(\`http://localhost:3001/api/products/\${formData.id}\`, {
          method: 'PUT',
          body: formDataToSend
        });
        if (res.ok) alert("Produit modifiÃ© avec succÃ¨s !");
      } else {
        // Ajout
        const res = await fetch('http://localhost:3001/api/products', {
          method: 'POST',
          body: formDataToSend
        });
        if (res.ok) alert("Produit ajoutÃ© avec succÃ¨s !");
      }
      
      // Reload products
      const productsRes = await fetch('http://localhost:3001/api/products');
      const data = await productsRes.json();
      setProducts(data);
      
      // Retour Ã  la liste
      setFormData(initialFormState);
      setView('list');
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'opÃ©ration");
    }
  };`;

// Because encoding issues could be annoying we just search by match keywords and replace
// Need robust regex for handleSubmit
const submitRegex = /const handleSubmit = \(e\) => \{[\s\S]+?setView\('list'\);\s*\};/;
content = content.replace(submitRegex, newSubmit);

// Replace delete handler
const targetDelete = `const handleDelete = (id) => {
    if (window.confirm("ÃŠtes-vous sÃ»r de vouloir supprimer ce produit ?")) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };`;

const deleteRegex = /const handleDelete = \(id\) => \{[\s\S]+?\}\s*\};/;

const newDelete = `const handleDelete = async (id) => {
    if (window.confirm("ÃŠtes-vous sÃ»r de vouloir supprimer ce produit ?")) {
      try {
        const res = await fetch(\`http://localhost:3001/api/products/\${id}\`, {
          method: 'DELETE'
        });
        if (res.ok) {
          setProducts(prev => prev.filter(p => p.id !== id));
        } else {
          alert("Erreur lors de la suppression");
        }
      } catch (error) {
        console.error(error);
        alert("Erreur serveur");
      }
    }
  };`;

content = content.replace(deleteRegex, newDelete);

fs.writeFileSync('src/pages/AdminDashboard.jsx', content, 'utf-8');
console.log("Updated AdminDashboard with backend integration.");
