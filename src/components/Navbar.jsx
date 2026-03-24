import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'ACCUEIL' },
  { to: '/a-propos', label: 'A PROPOS' },
  { to: '/divisions', label: 'DIVISIONS' },
  { to: '/marques', label: 'MARQUES' },
  { to: '/b2b', label: 'B2B' },
  { to: '/partenaires', label: 'PARTENAIRES' },
  { to: '/services', label: 'SERVICES' },
  { to: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2" onClick={() => setMobileOpen(false)}>
          <img src="/src/assets/logo.png" alt="SIA Logo" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
          <span className="text-lg font-bold sm:text-xl">SIA</span>
        </Link>

        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 xl:gap-x-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm font-semibold tracking-wide transition-colors hover:text-sia-red"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-sia-red-claire px-5 py-2 text-sm font-semibold text-sia-red-claire transition-colors hover:bg-sia-red-claire hover:text-white"
          >
            Demander un devis
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-800 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
        >
          <span className="text-xl leading-none">{mobileOpen ? 'x' : '|||'}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-white px-4 pb-5 pt-3 shadow-lg lg:hidden sm:px-6">
          <nav>
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={`mobile-${item.to}`}>
                  <Link
                    to={item.to}
                    className="block rounded-md px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:text-sia-red"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-sia-red-claire px-5 py-2 text-sm font-semibold text-sia-red-claire transition-colors hover:bg-sia-red-claire hover:text-white"
          >
            Demander un devis
          </Link>
        </div>
      )}
    </header>
  )
}
