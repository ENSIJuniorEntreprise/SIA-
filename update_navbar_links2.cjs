const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.jsx', 'utf-8');

const data = `const divisionTree = [
  {
    title: 'Division Pieces de Rechange Automobile',
    url: '/divisions/piece-de-rechange',
    sections: [
      {
        name: 'Moteur',
        url: '/divisions/piece-de-rechange/moteur',
        items: [
          { name: 'Lubrification', url: '/divisions/piece-de-rechange/moteur/lubrification' },
          { name: 'Refroidissement', url: '/divisions/piece-de-rechange/moteur/refroidissement' },
          { name: 'Injection/Carburant', url: '/divisions/piece-de-rechange/moteur/injection' },
          { name: 'Admission/Echappement', url: '/divisions/piece-de-rechange/moteur/admission-echappement' },
          { name: 'Distribution', url: '/divisions/piece-de-rechange/moteur/distribution' },
          { name: 'Culasse', url: '/divisions/piece-de-rechange/moteur/culasse' },
          { name: 'Demarrage', url: '/divisions/piece-de-rechange/moteur/demarrage' },
          { name: 'Embrayage', url: '/divisions/piece-de-rechange/moteur/embrayage' }
        ],
      },
      {
        name: 'Electricite/Electronique',
        url: '/divisions/piece-de-rechange/electricite',
        items: [
          { name: 'Capteurs', url: '/divisions/piece-de-rechange/electricite/capteurs' },
          { name: 'Gestion moteur', url: '/divisions/piece-de-rechange/electricite/gestion-moteur' },
          { name: 'Charge', url: '/divisions/piece-de-rechange/electricite/charge' },
          { name: 'Habitacle', url: '/divisions/piece-de-rechange/electricite' }
        ],
      },
      {
        name: 'Filtration',
        url: '/divisions/piece-de-rechange/filtration',
        items: [
          { name: 'Filtre a huile', url: '/divisions/piece-de-rechange/filtration/filtre-a-huile' },
          { name: 'Filtre a air', url: '/divisions/piece-de-rechange/filtration/filtre-a-air' },
          { name: 'Filtre carburant', url: '/divisions/piece-de-rechange/filtration/filtre-a-carburant' },
          { name: 'Filtre habitacle', url: '/divisions/piece-de-rechange/filtration/filtre-habitacle' }
        ],
      },
      {
        name: 'Freinage',
        url: '/divisions/piece-de-rechange/freinage',
        items: [
          { name: 'Plaquettes', url: '/divisions/piece-de-rechange/freinage/plaquettes' },
          { name: 'Disques', url: '/divisions/piece-de-rechange/freinage/disques' },
          { name: 'Etriers', url: '/divisions/piece-de-rechange/freinage/etriers' },
          { name: 'Hydraulique', url: '/divisions/piece-de-rechange/freinage/hydraulique' },
          { name: 'Ressorts', url: '/divisions/piece-de-rechange/freinage/ressort' },
          { name: 'Rotules', url: '/divisions/piece-de-rechange/freinage/rotule' }
        ],
      },
      {
        name: 'Suspension/Direction',
        url: '/divisions/piece-de-rechange/suspension',
        items: [
          { name: 'Roulements', url: '/divisions/piece-de-rechange/suspension/boulements' },
          { name: 'Triangles', url: '/divisions/piece-de-rechange/suspension/triangles' },
          { name: 'Jantes/Roue', url: '/divisions/piece-de-rechange/suspension/jante-roue' },
          { name: 'Embrayage', url: '/divisions/piece-de-rechange/suspension/embrayage' }
        ],
      },
      {
        name: 'Transmission',
        url: '/divisions/piece-de-rechange/transmission',
        items: [
          { name: 'Cardans', url: '/divisions/piece-de-rechange/transmission/cardans' },
          { name: 'Boite de vitesse', url: '/divisions/piece-de-rechange/transmission/boitedevitesse' },
          { name: 'Support moteur', url: '/divisions/piece-de-rechange/transmission/gestion-moteur' }
        ],
      },
      {
        name: 'Carosserie',
        url: '/divisions/piece-de-rechange/carrosserie',
        items: [
          { name: 'Avant', url: '/divisions/piece-de-rechange/carrosserie/avant' },
          { name: 'Arriere', url: '/divisions/piece-de-rechange/carrosserie/arriere' },
          { name: 'Lateral', url: '/divisions/piece-de-rechange/carrosserie/lateral' },
          { name: 'Interieur/Exterieur', url: '/divisions/piece-de-rechange/carrosserie/interieurext' }
        ],
      },
      {
        name: 'Climatisation/Chauffage',
        url: '/divisions/piece-de-rechange/climatisation',
        items: [
          { name: 'Condenseur', url: '/divisions/piece-de-rechange/climatisation/condenseur' },
          { name: 'Compresseur', url: '/divisions/piece-de-rechange/climatisation/compresseur' },
          { name: 'Evaporateur', url: '/divisions/piece-de-rechange/climatisation/evaporateur' },
          { name: 'Ventilation', url: '/divisions/piece-de-rechange/climatisation/ventillation' }
        ],
      },
      {
        name: 'Consommables et divers',
        url: '/divisions/piece-de-rechange',
        items: [],
      },
    ],
  },
  {
    title: 'Division Industrielle',
    url: '/divisions/industrielle',
    sections: [
      {
        name: 'Transmission et mouvement',
        url: '/divisions/industrielle',
        items: [
          { name: 'Courroies industrielles', url: '/divisions/industrielle' },
          { name: 'Bandes transporteuses et courroie plate', url: '/divisions/industrielle' },
          { name: 'Chaines et pignons', url: '/divisions/industrielle' },
          { name: 'Accouplements et composants de transmission', url: '/divisions/industrielle' }
        ],
      },
      {
        name: 'Motorisation et entrainement',
        url: '/divisions/industrielle',
        items: [
          { name: 'Motoreducteurs', url: '/divisions/industrielle' },
          { name: 'Moteurs electriques et mecanique', url: '/divisions/industrielle' },
          { name: 'Variateurs electriques et mecanique', url: '/divisions/industrielle' },
          { name: 'Paliers', url: '/divisions/industrielle' }
        ],
      },
      {
        name: 'Roulement & Supports',
        url: '/divisions/industrielle',
        items: [
          { name: 'Roulements', url: '/divisions/industrielle' },
          { name: 'Paliers', url: '/divisions/industrielle' }
        ],
      },
    ],
  },
  {
    title: 'Division Travaux Publics',
    url: '/divisions/travaux-publics',
    sections: [
      { name: 'Moteurs et groupes electrogenes', url: '/divisions/travaux-publics/moteur-et-groupe-electrogene', items: [] },
      { name: 'Lubrification', url: '/divisions/travaux-publics/lubrifiant-moteur', items: [] },
      { name: 'Machine de soudure, outillage, consommable', url: '/divisions/travaux-publics/Machine-soudure', items: [] },
    ],
  },
  {
    title: 'Division Marine',
    url: '/divisions/marine',
    sections: [
      {
        name: 'Groupes electrogenes marin',
        url: '/divisions/marine',
        items: [
          { name: 'YACT', url: '/divisions/Divisionmarine/yact' },
          { name: 'Bateau de peche', url: '/divisions/marine' },
          { name: 'Travaux maritimes', url: '/divisions/marine' }
        ],
      },
      {
        name: 'SAV & consommable',
        url: '/divisions/marine',
        items: [
          { name: 'Consommables', url: '/divisions/marine' },
          { name: 'SAV', url: '/divisions/marine' }
        ],
      },
    ],
  },
]`;

// Replace division tree
content = content.replace(/const divisionTree = \[[\s\S]+?\](?=\n\nexport default function Navbar)/, data);

// Replace desktop render
const oldDesktop = `<ul className="absolute left-0 top-full z-50 mt-1 hidden min-w-[300px] bg-[#F3F3F3] py-2 text-black shadow-2xl group-hover/lvl1:block">
                {divisionTree.map((division) => (
                  <li key={division.title} className="group/div relative">
                    <span className="flex w-full cursor-default items-center justify-between px-4 py-3 text-sm font-medium transition hover:bg-sia-red hover:text-white">
                      {division.title}
                    </span>

                    <div className="absolute left-full top-0 hidden items-start group-hover/div:flex">
                      <ul className="min-w-[320px] border-l border-gray-300 bg-[#E5E5E5] shadow-2xl">
                        {division.sections.map((section) => (
                          <li
                            key={\`\${division.title}-\${section.name}\`}
                            className="group/section relative cursor-default border-b border-gray-300 bg-white px-4 py-3 transition-colors hover:bg-sia-red hover:text-white"
                          >
                            <p className="text-sm font-semibold">{section.name}</p>

                            <ul className="absolute left-full top-0 hidden min-w-[340px] border-l border-gray-300 bg-white shadow-2xl group-hover/section:block">
                              {section.items.map((item) => (
                                <li key={\`\${division.title}-\${section.name}-\${item}\`} className="cursor-default border-b border-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-sia-red hover:text-white">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>`;

const newDesktop = `<ul className="absolute left-0 top-full z-50 mt-1 hidden min-w-[300px] bg-[#F3F3F3] py-2 text-black shadow-2xl group-hover/lvl1:block">
                {divisionTree.map((division) => (
                  <li key={division.title} className="group/div relative">
                    <Link to={division.url} className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition hover:bg-sia-red hover:text-white">
                      {division.title}
                    </Link>

                    <div className="absolute left-full top-0 hidden items-start group-hover/div:flex">
                      <ul className="min-w-[320px] border-l border-gray-300 bg-[#E5E5E5] shadow-2xl flex flex-col items-stretch">
                        {division.sections.map((section) => (
                          <li
                            key={\`\${division.title}-\${section.name}\`}
                            className="group/section relative border-b border-gray-300 bg-white transition-colors hover:bg-sia-red hover:text-white"
                          >
                            <Link to={section.url} className="block w-full px-4 py-3 text-sm font-semibold hover:text-white">
                              {section.name}
                            </Link>

                            {section.items && section.items.length > 0 && (
                            <ul className="absolute left-full top-0 hidden min-w-[340px] border-l border-gray-300 bg-white shadow-2xl group-hover/section:block flex-col items-stretch">
                              {section.items.map((item) => (
                                <li key={\`\${division.title}-\${section.name}-\${item.name}\`} className="border-b border-gray-100 transition-colors bg-white hover:bg-sia-red hover:text-white text-gray-700">
                                  <Link to={item.url} className="block w-full px-4 py-2 text-sm color-inherit hover:text-white">
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>`;

content = content.replace(oldDesktop, newDesktop);

// And we need to read the mobile part to replace it properly
// Let's print out the mobile part first so I can copy it for replacement
fs.writeFileSync('src/components/Navbar.jsx', content, 'utf-8');
