import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar';
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

import ArrirePage from './pages/carroserie/Arriére';
import AvantPage from './pages/carroserie/Avant';
import intrieurextPage from './pages/carroserie/intérieurext';
import latralPage from './pages/carroserie/latéral';
import CompresseurPage from './pages/climchauf/Compresseur';
import condenseurPage from './pages/climchauf/condenseur';
import ventillationcopyPage from './pages/climchauf/ventillation copy';
import vaporateurPage from './pages/climchauf/évaporateur';
import filtreaairPage from './pages/filtration/filtre a air';
import filtreacarburantPage from './pages/filtration/filtre a carburant';
import filtreahuilePage from './pages/filtration/filtre a huile';
import filtrehabitaclePage from './pages/filtration/filtre habitacle';
import DisquesPage from './pages/freinage/Disques';
import plaquettesPage from './pages/freinage/plaquettes';
import RessortPage from './pages/freinage/Ressort';
import boulementsPage from './pages/suspenssion/boulements';
import EmbrayagePage from './pages/suspenssion/Embrayage';
import janterouePage from './pages/suspenssion/jante roue';
import TrianglesPage from './pages/suspenssion/Triangles';
import boitedevitessePage from './pages/transmission/boitedevitesse';
import cardansPage from './pages/transmission/cardans';
import gestionmoteurPage from './pages/transmission/gestion moteur';

import ventillationPage from './pages/climchauf/ventillation';
import admissionchappementPage from './pages/moteur/admissionéchappement';
import InjectionPage from './pages/moteur/Injection';
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

  let mainClasses = "flex-grow";
  if (isHomePage || isServicesPage || isPartenairesPage || isMarquesPage || isContactPage || isAProposPage || isB2bPage || isDivisionsPage) {
    mainClasses = "flex-grow";
  } else {
    mainClasses = "mx-auto w-full max-w-7xl flex-grow px-4 pb-6 pt-24 sm:px-6 sm:pb-8 sm:pt-28 lg:px-8";
  }

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className={mainClasses}>
        <Routes>
          
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/divisions/piece-de-rechange" element={<PieceDeRechange />} />
          <Route path="/divisions/industrielle" element={<DivisionIndustrielle />} />
          <Route path="/divisions/marine" element={<Divisionmarine />} />
          <Route path="/divisions/piece-de-rechange/moteur" element={<Moteur />} />
          <Route path="/divisions/piece-de-rechange/carrosserie" element={<Carrosserie />} />
          <Route path="/divisions/piece-de-rechange/electricite" element={<Electricite />} />
          <Route path="/divisions/piece-de-rechange/electricite/capteurs" element={<CapteursElec />} />
          <Route path="/divisions/piece-de-rechange/electricite/gestion-moteur" element={<GestionMoteurElec />} />
          <Route path="/divisions/piece-de-rechange/electricite/charge" element={<ChargeElec />} />
          <Route path="/divisions/piece-de-rechange/filtration" element={<Filtration />} />
          <Route path="/divisions/piece-de-rechange/suspension" element={<Suspension />} />
          <Route path="/divisions/piece-de-rechange/transmission" element={<Transmission />} />
          <Route path="/divisions/piece-de-rechange/carosserie" element={<Carrosserie />} />
          <Route path="/divisions/piece-de-rechange/climatisation" element={<Climatisation />} />
          <Route path="/divisions/piece-de-rechange/freinage" element={<Freinage />} />
          <Route path="/divisions/piece-de-rechange/moteur/lubrification" element={<Lubrification />} />
          <Route path="/divisions/piece-de-rechange/moteur/injection-carburant" element={<Injection />} />
          <Route path="/divisions/piece-de-rechange/moteur/demarrage" element={<DeMarrage />} />
          <Route path="/divisions/piece-de-rechange/moteur/refroidissement" element={<Refroidissement />} />
          <Route path="/divisions/piece-de-rechange/moteur/distribution" element={<Distribution />} />
          <Route path="/divisions/piece-de-rechange/moteur/embrayage" element={<Embrayage />} />
          <Route path="/divisions/piece-de-rechange/moteur/admission-echappement" element={<AdmissionEchappement />} />
          <Route path="/divisions/piece-de-rechange/moteur/culasse" element={<Culasse />} />
          <Route path="/divisions/travaux-publics" element={<TravauxPublic />} />
          <Route path="/divisions/travaux-publics/moteur-et-groupe-electrogene" element={<MoteurTravaux />} />
          <Route path="/divisions/travaux-publics/lubrifiant-moteur" element={<Lubrifiant />} />
          <Route path="/divisions/travaux-publics/Machine-soudure" element={<Machine />} />
          <Route path="/services" element={<Services />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/marques" element={<Marques />} />
                  <Route path="/divisions/piece-de-rechange/carosserie/arriere" element={<ArrirePage />} />
          <Route path="/divisions/piece-de-rechange/carosserie/avant" element={<AvantPage />} />
          <Route path="/divisions/piece-de-rechange/carosserie/interieurext" element={<intrieurextPage />} />
          <Route path="/divisions/piece-de-rechange/carosserie/lateral" element={<latralPage />} />
          <Route path="/divisions/piece-de-rechange/climatisation/compresseur" element={<CompresseurPage />} />
          <Route path="/divisions/piece-de-rechange/climatisation/condenseur" element={<condenseurPage />} />
          <Route path="/divisions/piece-de-rechange/climatisation/ventillation-copy" element={<ventillationcopyPage />} />
          <Route path="/divisions/piece-de-rechange/climatisation/ventillation" element={<ventillationPage />} />
          <Route path="/divisions/piece-de-rechange/climatisation/evaporateur" element={<vaporateurPage />} />
          <Route path="/divisions/piece-de-rechange/filtration/filtre-a-air" element={<filtreaairPage />} />
          <Route path="/divisions/piece-de-rechange/filtration/filtre-a-carburant" element={<filtreacarburantPage />} />
          <Route path="/divisions/piece-de-rechange/filtration/filtre-a-huile" element={<filtreahuilePage />} />
          <Route path="/divisions/piece-de-rechange/filtration/filtre-habitacle" element={<filtrehabitaclePage />} />
          <Route path="/divisions/piece-de-rechange/freinage/disques" element={<DisquesPage />} />
          <Route path="/divisions/piece-de-rechange/freinage/plaquettes" element={<plaquettesPage />} />
          <Route path="/divisions/piece-de-rechange/freinage/ressort" element={<RessortPage />} />
          <Route path="/divisions/piece-de-rechange/moteur/admissionechappement" element={<admissionchappementPage />} />
          <Route path="/divisions/piece-de-rechange/moteur/injection" element={<InjectionPage />} />
          <Route path="/divisions/piece-de-rechange/suspension/boulements" element={<boulementsPage />} />
          <Route path="/divisions/piece-de-rechange/suspension/embrayage" element={<EmbrayagePage />} />
          <Route path="/divisions/piece-de-rechange/suspension/jante-roue" element={<janterouePage />} />
          <Route path="/divisions/piece-de-rechange/suspension/triangles" element={<TrianglesPage />} />
          <Route path="/divisions/piece-de-rechange/transmission/boitedevitesse" element={<boitedevitessePage />} />
          <Route path="/divisions/piece-de-rechange/transmission/cardans" element={<cardansPage />} />
          <Route path="/divisions/piece-de-rechange/transmission/gestion-moteur" element={<gestionmoteurPage />} />
        </Routes>
      </main>
      <SocialSidebar />
      <Footer />
    </div>
  )
}

