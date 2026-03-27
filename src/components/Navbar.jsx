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
    sections: [
      {
        name: 'Moteur',
        items: ['Lubrification', 'Refroidissement', 'Injection/Carburant', 'Admission/Echappement', 'Distribution', 'Culasse', 'Demarrage', 'Embrayage'],
      },
      {
        name: 'Electricite/Electronique',
        items: ['Capteurs', 'Gestion moteur', 'Charge', 'Habitacle'],
      },
      {
        name: 'Filtration',
        items: ['Filtre a huile', 'Filtre a air', 'Filtre carburant', 'Filtre habitacle'],
      },
      {
        name: 'Freinage',
        items: ['Plaquettes', 'Disques', 'Etriers', 'Hydraulique', 'Ressorts', 'Rotules'],
      },
      {
        name: 'Suspension/Direction',
        items: ['Roulements', 'Triangles', 'Jantes/Roue', 'Embrayage'],
      },
      {
        name: 'Transmission',
        items: ['Cardans', 'Boite de vitesse', 'Support moteur'],
      },
      {
        name: 'Carosserie',
        items: ['Avant', 'Arriere', 'Lateral', 'Interieur/Exterieur'],
      },
      {
        name: 'Climatisation/Chauffage',
        items: ['Condenseur', 'Compresseur', 'Evaporateur', 'Ventilation'],
      },
      {
        name: 'Consommables et divers',
        items: [],
      },
    ],
  },
  {
    title: 'Division Industrielle',
    sections: [
      {
        name: 'Transmission et mouvement',
        items: ['Courroies industrielles', 'Bandes transporteuses et courroie plate', 'Chaines et pignons', 'Accouplements et composants de transmission'],
      },
      {
        name: 'Motorisation et entrainement',
        items: ['Motoreducteurs', 'Moteurs electriques et mecanique', 'Variateurs electriques et mecanique', 'Paliers'],
      },
      {
        name: 'Roulement & Supports',
        items: ['Roulements', 'Paliers'],
      },
    ],
  },
  {
    title: 'Division Travaux Publics',
    sections: [
      { name: 'Moteurs et groupes electrogenes', items: [] },
      { name: 'Lubrification', items: [] },
      { name: 'Machine de soudure, outillage, consommable', items: [] },
    ],
  },
  {
    title: 'Division Marine',
    sections: [
      {
        name: 'Groupes electrogenes marin',
        items: ['YACT', 'Bateau de peche', 'Travaux maritimes'],
      },
      {
        name: 'SAV & consommable',
        items: ['Consommables', 'SAV'],
      },
    ],
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isPartenairesPage = location.pathname === '/partenaires'
  const isContactPage = location.pathname.startsWith('/contact')
  const isTransparentTheme = isHomePage || isPartenairesPage || isContactPage
  const useLightTheme = !isTransparentTheme || isScrolled

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

              <ul className="absolute left-0 top-full z-50 mt-1 hidden min-w-[300px] bg-[#F3F3F3] py-2 text-black shadow-2xl group-hover/lvl1:block">
                {divisionTree.map((division) => (
                  <li key={division.title} className="group/div relative">
                    <span className="flex w-full cursor-default items-center justify-between px-4 py-3 text-sm font-medium transition hover:bg-sia-red hover:text-white">
                      {division.title}
                    </span>

                    <div className="absolute left-full top-0 hidden items-start group-hover/div:flex">
                      <ul className="min-w-[320px] border-l border-gray-300 bg-[#E5E5E5] shadow-2xl">
                        {division.sections.map((section) => (
                          <li
                            key={`${division.title}-${section.name}`}
                            className="group/section relative cursor-default border-b border-gray-300 bg-white px-4 py-3 transition-colors hover:bg-sia-red hover:text-white"
                          >
                            <p className="text-sm font-semibold">{section.name}</p>

                            <ul className="absolute left-full top-0 hidden min-w-[340px] border-l border-gray-300 bg-white shadow-2xl group-hover/section:block">
                              {section.items.map((item) => (
                                <li key={`${division.title}-${section.name}-${item}`} className="cursor-default border-b border-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-sia-red hover:text-white">
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
                    <div key={`mobile-${division.title}`} className="rounded-md border border-gray-200 bg-white">
                      <p className="bg-sky-500 px-3 py-2 text-xs font-bold text-white">{division.title}</p>
                      <div className="space-y-2 p-3">
                        {division.sections.map((section) => (
                          <div key={`mobile-${division.title}-${section.name}`}>
                            <p className="text-xs font-semibold text-gray-900">{section.name}</p>
                            {section.items.length > 0 && (
                              <p className="mt-1 text-xs leading-relaxed text-gray-600">{section.items.join(', ')}</p>
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
