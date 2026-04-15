const fs = require('fs');
const path = require('path');

const correctHierarchy = `const hierarchyData = {
  "Division Pièces de Rechange Automobile": {
    "Moteur": ["Lubrification", "Refroidissement", "Injection/Carburant", "Admission/Echappement", "Distribution", "Culasse", "Demarrage", "Embrayage", "Pistons", "Courroies"],
    "Electricite/Electronique": ["Capteurs", "Gestion moteur", "Charge", "Habitacle"],
    "Filtration": ["Filtre a huile", "Filtre a air", "Filtre carburant", "Filtre habitacle"],
    "Freinage": ["Plaquettes", "Disques", "Etriers", "Hydraulique", "Ressorts", "Rotules"],
    "Suspension/Direction": ["Roulements", "Triangles", "Jantes/Roue", "Embrayage"],
    "Transmission": ["Cardans", "Boite de vitesse", "Support moteur"],
    "Carrosserie": ["Avant", "Arriere", "Lateral", "Interieur/Exterieur"],
    "Climatisation/Chauffage": ["Condenseur", "Compresseur", "Evaporateur", "Ventilation", "Chauffage"],
    "Consommables et divers": []
  },
  "Division Industrielle": {
    "Transmission et mouvement": ["Courroies industrielles", "Bandes transporteuses et courroie plate", "Chaines et pignons", "Accouplements et composants de transmission"],
    "Motorisation et entrainement": ["Motoreducteurs", "Moteurs electriques et mecanique", "Variateurs electriques et mecanique", "Paliers"],
    "Roulement & Supports": ["Roulements", "Paliers"]
  },
  "Division Travaux Publics": {
    "Moteurs et groupes electrogenes": [],
    "Lubrification": [],
    "Machine de soudure, outillage, consommable": []
  },
  "Division Marine": {
    "Groupes electrogenes marin": ["YACT", "Bateau de peche", "Travaux maritimes"],
    "SAV & consommable": ["Consommables", "SAV"]
  }
};`;

const pages = [
  'AdminDashboard.jsx',
  'Lubrifiant-moteur.jsx',
  'lubrification.jsx',
  'Machine-soudure.jsx',
  'moteur-et_groupe-electrogene.jsx',
  'yact.jsx'
];

for (const p of pages) {
  let content = fs.readFileSync('src/pages/' + p, 'utf8');
  
  // Replace PiÃ¨ces explicitly if it exists
  content = content.replace(/Division PiÃ¨ces de Rechange Automobile/g, 'Division Pièces de Rechange Automobile');
  
  // Replace the entire hierarchy object
  content = content.replace(/const hierarchyData = \{[\s\S]*?(?=};\n\s*(const|function|export|return|\/\*))/s, correctHierarchy.replace('};\n', ''));
  
  fs.writeFileSync('src/pages/' + p, content);
  console.log(`Patched ${p}`);
}
