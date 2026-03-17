import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600">
        <div className="flex justify-between items-center">
          <div>© {new Date().getFullYear()} SIA</div>
          <div>Mentions légales • Politique de confidentialité</div>
        </div>
      </div>
    </footer>
  )
}
