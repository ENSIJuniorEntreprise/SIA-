import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs2 from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = path.join(__dirname, 'public/uploads');
        if (!fs2.existsSync(dir)) fs2.mkdirSync(dir, { recursive: true });
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

const dataPath = path.join(__dirname, 'src/data/allProducts.json');

app.get('/api/products', (req, res) => {
    try {
        if (!fs2.existsSync(dataPath)) return res.json([]);
        res.json(JSON.parse(fs2.readFileSync(dataPath, 'utf8')));
    } catch (e) { res.status(500).json({ error: 'Erreur' }); }
});

app.post('/api/products', upload.single('image'), (req, res) => {
    try {
        const body = req.body;
        const newProduct = {
            id: Date.now().toString(),
            name: body.name || '',
            reference: body.reference || '',
            marque: body.marque || '',
            division: body.division || '',
            sousDivision1: body.sousDivision1 || '',
            sousDivision2: body.sousDivision2 || '',
            image: req.file ? `http://localhost:3001/uploads/${req.file.filename}` : (body.image || '')
        };
        
        let products = fs2.existsSync(dataPath) ? JSON.parse(fs2.readFileSync(dataPath, 'utf8')) : [];
        products.push(newProduct);
        fs2.writeFileSync(dataPath, JSON.stringify(products, null, 2));
        
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: "Erreur" });
    }
});

app.put('/api/products/:id', upload.single('image'), (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        
        if (!fs2.existsSync(dataPath)) return res.status(404).json({ error: 'Produit non trouvé' });
        
        let products = JSON.parse(fs2.readFileSync(dataPath, 'utf8'));
        const index = products.findIndex(p => p.id === id || p.id === parseInt(id));
        
        if (index === -1) return res.status(404).json({ error: 'Produit non trouvé' });
        
        const updatedProduct = {
            ...products[index],
            name: body.name || products[index].name,
            reference: body.reference || products[index].reference,
            marque: body.marque !== undefined ? body.marque : products[index].marque,
            // removed pscCarton and size
            division: body.division || products[index].division,
            sousDivision1: body.sousDivision1 !== undefined ? body.sousDivision1 : products[index].sousDivision1,
            sousDivision2: body.sousDivision2 !== undefined ? body.sousDivision2 : products[index].sousDivision2,
        };
        
        if (req.file) {
            updatedProduct.image = `http://localhost:3001/uploads/${req.file.filename}`;
        } else if (body.image) {
            updatedProduct.image = body.image;
        }
        
        products[index] = updatedProduct;
        fs2.writeFileSync(dataPath, JSON.stringify(products, null, 2));
        
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Erreur' });
    }
});

app.delete('/api/products/:id', (req, res) => {
    try {
        const id = req.params.id;
        if (!fs2.existsSync(dataPath)) return res.status(404).json({ error: 'Produit non trouvé' });
        
        let products = JSON.parse(fs2.readFileSync(dataPath, 'utf8'));
        const newProducts = products.filter(p => p.id !== id && p.id !== parseInt(id));
        
        if (products.length === newProducts.length) return res.status(404).json({ error: 'Produit non trouvé' });
        
        fs2.writeFileSync(dataPath, JSON.stringify(newProducts, null, 2));
        res.json({ message: 'Success' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur' });
    }
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));
