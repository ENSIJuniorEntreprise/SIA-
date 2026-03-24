import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import Partenaires from './pages/Partenaires'
import Contact from './pages/Contact'
import Divisions from './pages/Divisions'
import Services from './pages/Services'
import B2B from './pages/B2B'
import Marques from './pages/Marques'

export default function App() {
  const location = useLocation()
  const isServicesPage = location.pathname === '/services'

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className={isServicesPage ? 'flex-grow' : 'mx-auto w-full max-w-7xl flex-grow px-4 py-6 sm:px-6 sm:py-8 lg:px-8'}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/b2b" element={<B2B />} />
          <Route path="/marques" element={<Marques />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
