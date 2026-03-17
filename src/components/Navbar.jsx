import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">SIA</Link>
        <nav>
          <ul className="flex gap-4">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">A propos</Link></li>
            <li><Link to="/partenaires">Partenaires</Link></li>
            <li><Link to="/divisions">Divisions</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/b2b">B2B</Link></li>
            <li><Link to="/marques">Marques</Link></li>
            <li><Link to="/contact" className="text-sm bg-indigo-600 text-white px-3 py-1 rounded">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
