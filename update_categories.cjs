const fs = require('fs');

let filtration = fs.readFileSync('src/pages/Filtration.jsx', 'utf-8');
const filtrationImports = `import { useState } from "react";
import imgHuile from "../assets/filtration/huile.png";
import imgAir from "../assets/filtration/air.png";
import imgCarburant from "../assets/filtration/carburant.png";
import imgHabitacle from "../assets/filtration/habi.png";`;

filtration = filtration.replace('import { useState } from "react";', filtrationImports);
filtration = filtration.replace('title: "Filtre à huile",\r\n    image : "",', 'title: "Filtre à huile",\n    image: imgHuile,');
filtration = filtration.replace('title: "Filtre à air",\r\n    image : "",', 'title: "Filtre à air",\n    image: imgAir,');
filtration = filtration.replace('title: "Filtre carburant",\r\n    image :"",', 'title: "Filtre carburant",\n    image: imgCarburant,');
filtration = filtration.replace('title: "Filtre Habitacle",\r\n    image :"",', 'title: "Filtre Habitacle",\n    image: imgHabitacle,');

// Handle variations of newline/spaces
filtration = filtration.replace('title: "Filtre à huile",\n    image : "",', 'title: "Filtre à huile",\n    image: imgHuile,');
filtration = filtration.replace('title: "Filtre à air",\n    image : "",', 'title: "Filtre à air",\n    image: imgAir,');
filtration = filtration.replace('title: "Filtre carburant",\n    image :"",', 'title: "Filtre carburant",\n    image: imgCarburant,');
filtration = filtration.replace('title: "Filtre Habitacle",\n    image :"",', 'title: "Filtre Habitacle",\n    image: imgHabitacle,');
fs.writeFileSync('src/pages/Filtration.jsx', filtration, 'utf-8');

let suspension = fs.readFileSync('src/pages/suspension.jsx', 'utf-8');
const suspImports = `import { useState } from "react";
import imgRoule from "../assets/suspen/roule.png";
import imgTriang from "../assets/suspen/triang.png";
import imgJantes from "../assets/suspen/jantes.png";
import imgEmbray from "../assets/suspen/embray.png";`;
suspension = suspension.replace('import { useState } from "react";', suspImports);
suspension = suspension.replace(/title: "Boulements",\s*image\s*:\s*"",/g, 'title: "Boulements",\n    image: imgRoule,');
suspension = suspension.replace(/title: "Triangles",\s*image\s*:\s*"",/g, 'title: "Triangles",\n    image: imgTriang,');
suspension = suspension.replace(/title: "Jantes\/Roue",\s*image\s*:\s*"",/g, 'title: "Jantes/Roue",\n    image: imgJantes,');
suspension = suspension.replace(/title: "Embrayage",\s*image\s*:\s*"",/g, 'title: "Embrayage",\n    image: imgEmbray,');
fs.writeFileSync('src/pages/suspension.jsx', suspension, 'utf-8');

let freinage = fs.readFileSync('src/pages/freinage.jsx', 'utf-8');
const freinImports = `import { useState } from "react";
import imgPlaq from "../assets/freinage/plaqu.png";
import imgDisques from "../assets/freinage/disques.png";
import imgEtriers from "../assets/freinage/etrier.png";
import imgHydraulique from "../assets/freinage/hydroli.png";
import imgRessorts from "../assets/freinage/ressorts.png";
import imgRotules from "../assets/freinage/rotule.png";`;
freinage = freinage.replace('import { useState } from "react";', freinImports);
freinage = freinage.replace(/title: "Plaquettes",\s*image\s*:\s*"",/g, 'title: "Plaquettes",\n    image: imgPlaq,');
freinage = freinage.replace(/title: "Disques",\s*image\s*:\s*"",/g, 'title: "Disques",\n    image: imgDisques,');
freinage = freinage.replace(/title: "Etriers",\s*image\s*:\s*"",/g, 'title: "Etriers",\n    image: imgEtriers,');
freinage = freinage.replace(/title: "Hydraulique",\s*image\s*:\s*"",/g, 'title: "Hydraulique",\n    image: imgHydraulique,');
freinage = freinage.replace(/title: "Ressorts",\s*image\s*:\s*"",/g, 'title: "Ressorts",\n    image: imgRessorts,');
freinage = freinage.replace(/title: "Rotules",\s*image\s*:\s*"",/g, 'title: "Rotules",\n    image: imgRotules,');
fs.writeFileSync('src/pages/freinage.jsx', freinage, 'utf-8');

console.log("Done");
