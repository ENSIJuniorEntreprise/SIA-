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
import Moteur from './pages/moteur'
import Lubrification from './pages/lubrification'

export default function App() {
  const location = useLocation()
  const isServicesPage = location.pathname === '/services'
  const isHomePage = location.pathname === '/'
  const isDivisionsPage = location.pathname.startsWith('/divisions')
  const isPartenairesPage = location.pathname === '/partenaires'

  let mainClasses = "flex-grow";
  if (isHomePage || isServicesPage || isPartenairesPage) {
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
          <Route path="/divisions/piece-de-rechange/moteur" element={<Moteur />} />
          <Route path="/divisions/piece-de-rechange/moteur/lubrification" element={<Lubrification />} />
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
