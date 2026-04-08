import RotulesPage from './pages/freinage/rotules';
import HydrauliquePage from './pages/freinage/hydraulique';
import EtriersPage from './pages/freinage/etriers';
﻿import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import Partenaires from './pages/Partenaires'
import Contact from './pages/Contact'
import Divisions from './pages/Divisions'
import Services from './pages/Services'
import B2B from './pages/B2B'
import Marques from './pages/Marques'
import PieceDeRechange from './pages/piécederechange'
import DivisionIndustrielle from './pages/DivisionIndustrielle'
import Divisionmarine from './pages/Divisionmarine'
import TravauxPublic from './pages/travauxpublic'
import Moteur from './pages/moteur'
import AdmissionEchappement from './pages/moteur/admissionéchappement'
import Culasse from './pages/moteur/culasse'
import DeMarrage from './pages/moteur/Démarrage'
import Distribution from './pages/moteur/Distribution'
import Embrayage from './pages/moteur/Embrayage'
import Injection from './pages/moteur/Injection'
import Refroidissement from './pages/moteur/Refroidissement'
import Lubrification from './pages/lubrification'
import MoteurTravaux from './pages/moteur-et_groupe-electrogene'
import Lubrifiant from './pages/lubrifiant-moteur'
import Machine from './pages/Machine-soudure'
import Carrosserie from './pages/carroserie'
import Climatisation from './pages/Climatisation'
import Electricite from './pages/Eléctricité'
import CapteursElec from './pages/elec/capteurs'
import GestionMoteurElec from './pages/elec/gestion moteur'
import ChargeElec from './pages/elec/charge'
import Filtration from './pages/Filtration'
import Freinage from './pages/freinage'
import Suspension from './pages/suspension'
import Transmission from './pages/Transmission'
import Yact from './pages/yact'



// Carrosserie sub-pages
import ArrirePage from './pages/carroserie/Arriére'
import AvantPage from './pages/carroserie/Avant'
import InterieurextPage from './pages/carroserie/intérieurext'
import LatralPage from './pages/carroserie/latéral'

// Climatisation sub-pages
import CompresseurPage from './pages/climchauf/Compresseur'
import CondenseurPage from './pages/climchauf/condenseur'
import EvaporateurPage from './pages/climchauf/évaporateur'
import VentillationPage from './pages/climchauf/ventillation'
import VentillationCopyPage from './pages/climchauf/ventillation copy'

// Filtration sub-pages
import FiltreaairPage from './pages/filtration/filtre a air'
import FiltreacarburantPage from './pages/filtration/filtre a carburant'
import FiltreahuilePage from './pages/filtration/filtre a huile'
import FiltrehabitaclePage from './pages/filtration/filtre habitacle'

// Freinage sub-pages
import DisquesPage from './pages/freinage/Disques'
import PlaquettesPage from './pages/freinage/plaquettes'
import RessortPage from './pages/freinage/Ressort'
import Etriers from './pages/freinage/etriers'
import Hydraulique from './pages/freinage/hydraulique'
import Rotule from './pages/freinage/rotules'

// Suspension sub-pages
import BoulementsPage from './pages/suspenssion/boulements'
import EmbrayagePage from './pages/suspenssion/Embrayage'
import JanterouePage from './pages/suspenssion/jante roue'
import TrianglesPage from './pages/suspenssion/Triangles'

// Transmission sub-pages
import BoitedevitessePage from './pages/transmission/boitedevitesse'
import CardansPage from './pages/transmission/cardans'
import GestionmoteurTransPage from './pages/transmission/support-moteur'

export default function App() {
  const location = useLocation()
  const isServicesPage = location.pathname === '/services'
  const isHomePage = location.pathname === '/'
  const isDivisionsPage = location.pathname.startsWith('/divisions')
  const isPartenairesPage = location.pathname === '/partenaires'
  const isMarquesPage = location.pathname === '/marques'
  const isContactPage = location.pathname === '/contact'
  const isAProposPage = location.pathname === '/a-propos'
  const isB2bPage = location.pathname === '/b2b'

  const mainClasses =
    isHomePage || isServicesPage || isPartenairesPage || isMarquesPage ||
    isContactPage || isAProposPage || isB2bPage || isDivisionsPage
      ? 'flex-grow'
      : 'mx-auto w-full max-w-7xl flex-grow px-4 pb-6 pt-24 sm:px-6 sm:pb-8 sm:pt-28 lg:px-8'

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className={mainClasses}>
        <Routes>
          {/* Top-level pages */}
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/marques" element={<Marques />} />

          {/* Divisions */}
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/divisions/industrielle" element={<DivisionIndustrielle />} />
          <Route path="/divisions/marine" element={<Divisionmarine />} />
          <Route path="/divisions/Divisionmarine/yact" element={<Yact />} />

          {/* Travaux Publics */}
          <Route path="/divisions/travaux-publics" element={<TravauxPublic />} />
          <Route path="/divisions/travaux-publics/moteur-et-groupe-electrogene" element={<MoteurTravaux />} />
          <Route path="/divisions/travaux-publics/lubrifiant-moteur" element={<Lubrifiant />} />
          <Route path="/divisions/travaux-publics/Machine-soudure" element={<Machine />} />

          {/* Pièce de rechange */}
          <Route path="/divisions/piece-de-rechange" element={<PieceDeRechange />} />

          {/* Moteur */}
          <Route path="/divisions/piece-de-rechange/moteur" element={<Moteur />} />
          <Route path="/divisions/piece-de-rechange/moteur/admission-echappement" element={<AdmissionEchappement />} />
          <Route path="/divisions/piece-de-rechange/moteur/culasse" element={<Culasse />} />
          <Route path="/divisions/piece-de-rechange/moteur/demarrage" element={<DeMarrage />} />
          <Route path="/divisions/piece-de-rechange/moteur/distribution" element={<Distribution />} />
          <Route path="/divisions/piece-de-rechange/moteur/embrayage" element={<Embrayage />} />
          <Route path="/divisions/piece-de-rechange/moteur/injection" element={<Injection />} />
          <Route path="/divisions/piece-de-rechange/moteur/refroidissement" element={<Refroidissement />} />
          <Route path="/divisions/piece-de-rechange/moteur/lubrification" element={<Lubrification />} />

          {/* Carrosserie */}
          <Route path="/divisions/piece-de-rechange/carrosserie" element={<Carrosserie />} />
          <Route path="/divisions/piece-de-rechange/carrosserie/arriere" element={<ArrirePage />} />
          <Route path="/divisions/piece-de-rechange/carrosserie/avant" element={<AvantPage />} />
          <Route path="/divisions/piece-de-rechange/carrosserie/interieurext" element={<InterieurextPage />} />
          <Route path="/divisions/piece-de-rechange/carrosserie/lateral" element={<LatralPage />} />

          {/* Electricité */}
          <Route path="/divisions/piece-de-rechange/electricite" element={<Electricite />} />
          <Route path="/divisions/piece-de-rechange/electricite/capteurs" element={<CapteursElec />} />
          <Route path="/divisions/piece-de-rechange/electricite/gestion-moteur" element={<GestionMoteurElec />} />
          <Route path="/divisions/piece-de-rechange/electricite/charge" element={<ChargeElec />} />

          {/* Climatisation */}
          <Route path="/divisions/piece-de-rechange/climatisation" element={<Climatisation />} />
          <Route path="/divisions/piece-de-rechange/climatisation/compresseur" element={<CompresseurPage />} />
          <Route path="/divisions/piece-de-rechange/climatisation/condenseur" element={<CondenseurPage />} />
          <Route path="/divisions/piece-de-rechange/climatisation/evaporateur" element={<EvaporateurPage />} />
          <Route path="/divisions/piece-de-rechange/climatisation/ventillation" element={<VentillationPage />} />
          <Route path="/divisions/piece-de-rechange/climatisation/ventillation-copy" element={<VentillationCopyPage />} />

          {/* Filtration */}
          <Route path="/divisions/piece-de-rechange/filtration" element={<Filtration />} />
          <Route path="/divisions/piece-de-rechange/filtration/filtre-a-air" element={<FiltreaairPage />} />
          <Route path="/divisions/piece-de-rechange/filtration/filtre-a-carburant" element={<FiltreacarburantPage />} />
          <Route path="/divisions/piece-de-rechange/filtration/filtre-a-huile" element={<FiltreahuilePage />} />
          <Route path="/divisions/piece-de-rechange/filtration/filtre-habitacle" element={<FiltrehabitaclePage />} />

          {/* Freinage */}
          <Route path="/divisions/piece-de-rechange/freinage" element={<Freinage />} />
          <Route path="/divisions/piece-de-rechange/freinage/disques" element={<DisquesPage />} />
          <Route path="/divisions/piece-de-rechange/freinage/plaquettes" element={<PlaquettesPage />} />
          <Route path="/divisions/piece-de-rechange/freinage/ressort" element={<RessortPage />} />
          <Route path="/divisions/piece-de-rechange/freinage/etriers" element={<Etriers />} />
          <Route path="/divisions/piece-de-rechange/freinage/hydraulique" element={<Hydraulique />} />
          <Route path="/divisions/piece-de-rechange/freinage/rotule" element={<Rotule />} />

          {/* Suspension */}
          <Route path="/divisions/piece-de-rechange/suspension" element={<Suspension />} />
          <Route path="/divisions/piece-de-rechange/suspension/boulements" element={<BoulementsPage />} />
          <Route path="/divisions/piece-de-rechange/suspension/embrayage" element={<EmbrayagePage />} />
          <Route path="/divisions/piece-de-rechange/suspension/jante-roue" element={<JanterouePage />} />
          <Route path="/divisions/piece-de-rechange/suspension/triangles" element={<TrianglesPage />} />
          {/* Transmission */}
          <Route path="/divisions/piece-de-rechange/transmission" element={<Transmission />} />
          <Route path="/divisions/piece-de-rechange/transmission/boitedevitesse" element={<BoitedevitessePage />} />
          <Route path="/divisions/piece-de-rechange/transmission/cardans" element={<CardansPage />} />
          <Route path="/divisions/piece-de-rechange/transmission/gestion-moteur" element={<GestionmoteurTransPage />} />
        </Routes>
      </main>
      <SocialSidebar />
      <Footer />
    </div>
  )
}