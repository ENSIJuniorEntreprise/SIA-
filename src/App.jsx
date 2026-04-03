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
import Filtration from './pages/Filtration'
import Freinage from './pages/freinage'
import Suspension from './pages/suspension'
import Transmission from './pages/Transmission'

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
  if (isHomePage || isServicesPage || isPartenairesPage || isMarquesPage || isContactPage || isAProposPage || isB2bPage) {
    mainClasses = "flex-grow";
  } else if (isDivisionsPage) {
    mainClasses = "flex-grow pt-24 sm:pt-28";
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
        </Routes>
      </main>
      <SocialSidebar />
      <Footer />
    </div>
  )
}
