const fs = require('fs');

let climatisation = fs.readFileSync('src/pages/Climatisation.jsx', 'utf-8');
const climatImports = `import { useState } from "react";
import imgCompresseur from "../assets/climat/compresseur.png";
import imgCondenseur from "../assets/climat/condensateur.png";
import imgVentilation from "../assets/climat/ventilation.png";
import imgEvaporateur from "../assets/climat/évaporateur.png";`;

climatisation = climatisation.replace('import { useState } from "react";', climatImports);
climatisation = climatisation.replace(/title:\s*"Condenseur",\s*image\s*:\s*"",/g, 'title: "Condenseur",\n    image: imgCondenseur,');
climatisation = climatisation.replace(/title:\s*"Compresseur",\s*image\s*:\s*""?,/g, 'title: "Compresseur",\n    image: imgCompresseur,');
climatisation = climatisation.replace(/title:\s*"Evaporateur",\s*image\s*:\s*""?,/g, 'title: "Evaporateur",\n    image: imgEvaporateur,');
climatisation = climatisation.replace(/title:\s*"Ventillation",\s*image\s*:\s*""?,/g, 'title: "Ventillation",\n    image: imgVentilation,');

fs.writeFileSync('src/pages/Climatisation.jsx', climatisation, 'utf-8');

console.log("Done climat");
