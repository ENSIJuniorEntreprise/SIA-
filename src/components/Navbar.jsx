import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'ACCUEIL' },
  { to: '/a-propos', label: 'A PROPOS' },
  { to: '/marques', label: 'MARQUES' },
  { to: '/b2b', label: 'B2B' },
  { to: '/partenaires', label: 'PARTENAIRES' },
  { to: '/services', label: 'SERVICES' },
  { to: '/contact', label: 'CONTACT' },
]

const divisionTree = [
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
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(false)
  const location = useLocation()
  
  const useLightTheme = isScrolled;
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileDivisionsOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        useLightTheme ? 'bg-white py-2 text-black shadow-md' : 'bg-transparent py-4 text-white'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-3 md:px-8 xl:px-12 md:py-4">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src="/src/assets/logo.png" alt="SIA Logo" className="h-12 w-12 object-contain md:h-14 md:w-14" />
          <span className="text-xl font-bold md:text-2xl">SIA</span>
        </Link>

        <nav className="hidden flex-grow items-center justify-center lg:flex">
          <ul className="flex items-center gap-6 xl:gap-9">
            <li className="group/main relative">
              <Link to="/" className="relative text-sm font-medium transition-colors hover:text-sia-red xl:text-base">
                ACCUEIL
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-sia-red transition-all duration-300 group-hover/main:w-full" />
              </Link>
            </li>

            <li className="group relative">
              <Link to="/a-propos" className="relative text-sm font-medium transition-colors hover:text-sia-red xl:text-base">
                A PROPOS
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-sia-red transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>

            <li className="group/lvl1 relative">
              <Link to="/divisions" className="relative text-sm font-medium transition-colors hover:text-sia-red xl:text-base">
                DIVISIONS ▼
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-sia-red transition-all duration-300 group-hover/lvl1:w-full" />
              </Link>

              <ul className="absolute left-0 top-full z-50 mt-1 min-w-[300px] bg-[#F3F3F3] py-2 text-black shadow-2xl invisible opacity-0 transition-all duration-300 delay-150 group-hover/lvl1:visible group-hover/lvl1:opacity-100 group-hover/lvl1:delay-0">
                {divisionTree.map((division) => (
                  <li key={division.title} className="group/div relative">
                    <Link to={division.url} className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition hover:bg-sia-red hover:text-white">
                      {division.title}
                    </Link>

                    <div className="absolute left-full top-0 items-start invisible opacity-0 transition-all duration-300 delay-150 group-hover/div:flex group-hover/div:visible group-hover/div:opacity-100 group-hover/div:delay-0">
                      <ul className="min-w-[320px] border-l border-gray-300 bg-[#E5E5E5] shadow-2xl flex flex-col items-stretch">
                        {division.sections.map((section) => (
                          <li
                            key={`${division.title}-${section.name}`}
                            className="group/section relative border-b border-gray-300 bg-white transition-colors hover:bg-sia-red hover:text-white"
                          >
                            <Link to={section.url} className="block w-full px-4 py-3 text-sm font-semibold hover:text-white">
                              {section.name}
                            </Link>

                            {section.items && section.items.length > 0 && (
                            <ul className="absolute left-full top-0 min-w-[340px] flex-col items-stretch border-l border-gray-300 bg-white shadow-2xl invisible opacity-0 transition-all duration-300 delay-150 group-hover/section:flex group-hover/section:visible group-hover/section:opacity-100 group-hover/section:delay-0">
                              {section.items.map((item) => (
                                <li key={`${division.title}-${section.name}-${item.name}`} className="border-b border-gray-100 transition-colors bg-white hover:bg-sia-red hover:text-white text-gray-700">
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
              </ul>
            </li>

            <li className="group/lvl1 relative">
              <Link to="/marques" className="text-sm font-medium transition-colors hover:text-red-600 xl:text-base">
                MARQUES
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-sia-red transition-all duration-300 group-hover/lvl1:w-full" />
              </Link>
            </li>
            <li className="group/lvl1 relative">
              <Link to="/b2b" className="text-sm font-medium transition-colors hover:text-red-600 xl:text-base">
                B2B
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-sia-red transition-all duration-300 group-hover/lvl1:w-full" />
              </Link>
            </li>
            <li className="group/lvl1 relative">
              <Link to="/partenaires" className="text-sm font-medium transition-colors hover:text-red-600 xl:text-base">
                PARTENAIRES
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-sia-red transition-all duration-300 group-hover/lvl1:w-full" />
              </Link>
            </li>
            <li className="group/lvl1 relative">
              <Link to="/services" className="text-sm font-medium transition-colors hover:text-red-600 xl:text-base">
                SERVICES
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-sia-red transition-all duration-300 group-hover/lvl1:w-full" />
              </Link>
            </li>
            <li className="group/lvl1 relative">
              <Link to="/contact" className="text-sm font-medium transition-colors hover:text-red-600 xl:text-base">
                CONTACT
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-sia-red transition-all duration-300 group-hover/lvl1:w-full" />
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          to="/contact"
          className={`hidden border px-5 py-2 text-sm font-medium transition-all duration-300 lg:inline-flex xl:px-6 ${
            useLightTheme
              ? 'border-sia-red-claire text-sia-red-claire hover:bg-sia-red-claire hover:text-white'
              : 'border-white text-white hover:bg-white hover:text-sia-red-claire'
          }`}
        >
          Demander un devis
        </Link>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md border lg:hidden ${
            useLightTheme
              ? 'border-gray-300 text-gray-800'
              : 'border-white/70 text-white'
          }`}
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-white px-4 pb-5 pt-3 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-1">
            <li>
              <button
                type="button"
                onClick={() => setMobileDivisionsOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100 hover:text-sia-red"
              >
                <span>DIVISIONS</span>
                {mobileDivisionsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {mobileDivisionsOpen && (
                <div className="mt-2 space-y-2 rounded-md border border-gray-200 bg-gray-50 p-3">
                  {divisionTree.map((division) => (
                    <div key={`mobile-${division.title}`} className="rounded-md border border-gray-200 bg-white overflow-hidden">
                      <Link to={division.url} onClick={() => { setMobileOpen(false); setMobileDivisionsOpen(false); }} className="block bg-sky-500 px-3 py-2 text-xs font-bold text-white hover:bg-sky-600 transition-colors">
                        {division.title}
                      </Link>
                      <div className="space-y-3 p-3">
                        {division.sections.map((section) => (
                          <div key={`mobile-${division.title}-${section.name}`}>
                            <Link to={section.url} onClick={() => { setMobileOpen(false); setMobileDivisionsOpen(false); }} className="block text-xs font-semibold text-gray-900 hover:text-sia-red transition-colors">
                              {section.name}
                            </Link>
                            {section.items && section.items.length > 0 && (
                              <ul className="mt-1 space-y-1 pl-2 border-l-2 border-gray-100">
                                {section.items.map((item) => (
                                  <li key={`mobile-${item.name}`}>
                                    <Link to={item.url} onClick={() => { setMobileOpen(false); setMobileDivisionsOpen(false); }} className="block text-[11px] leading-relaxed text-gray-600 hover:text-sia-red transition-colors">
                                      • {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>

            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100 hover:text-sia-red"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-sia-red-claire px-5 py-2 text-sm font-semibold text-sia-red-claire transition-colors hover:bg-sia-red-claire hover:text-white"
          >
            Demander un devis
          </Link>
        </div>
      )}
    </header>
  )
}