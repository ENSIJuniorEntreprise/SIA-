import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages/moteur';
const assetsDir = 'src/assets/sia/MOTEUR/admission\ échappement';

const targetFile = path.join(pagesDir, 'admissionéchappement.jsx');

let content = fs.readFileSync(targetFile, 'utf8');

// Update imports and products
let newImports = "";
let newProducts = "const products = [\n";

const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

files.forEach((f, idx) => {
  const imgName = `img${idx}`;
  newImports += `import ${imgName} from "../../assets/sia/MOTEUR/admission échappement/${f}";\n`;
  newProducts += `  { id: ${idx + 1}, name: ${JSON.stringify(f.replace(/\.[^/.]+$/, ""))}, image: ${imgName}, reference: "REF-"+${idx}, pscCarton: 1, size: "N/A" },\n`;
});

newProducts += "];\n";

content = content.replace(/const products = \[\s*\];/g, newImports + newProducts);

// Remove the label "Tag" (the red badge `Piece`). The user asked to remove "Piece" at the top of each product.
// The easiest way is to remove the `span` rendering `product.tag` since we won't pass tags anymore, or just remove the block.

content = content.replace(/<span className="absolute top-2 right-2 bg-\[#c0141c\] text-white text-\[10px\] font-bold px-2 py-0\.5 rounded-full tracking-wide z-10 shadow-sm">\s*\{product\.tag\}\s*<\/span>/, "");

// "augmenter un peu la taille des produits en gardant la responsivness parfaite"
// So we modify "max-w-[80%]" to maybe "max-w-[95%]" and/or increase container height
content = content.replace(/h-48 sm:h-40/, 'h-56 sm:h-48');
content = content.replace(/max-w-\[80%\]/, 'max-w-[95%]');

fs.writeFileSync(targetFile, content, 'utf8');

console.log("Updated admissionéchappement.jsx");
