import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 text-sm text-gray-600 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <div>© {new Date().getFullYear()} SIA</div>
          <div className="leading-relaxed">Mentions légales • Politique de confidentialité</div>
        </div>
      </div>
    </footer>
  )
}
