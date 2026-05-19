import { Menu, X, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl text-amber-900">Museo de Historia</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-gray-700 hover:text-amber-900 transition-colors">
              Inicio
            </a>
            <a href="#exhibiciones" className="text-gray-700 hover:text-amber-900 transition-colors">
              Exhibiciones
            </a>
            <a href="#colecciones" className="text-gray-700 hover:text-amber-900 transition-colors">
              Colecciones
            </a>
            <a href="#visita" className="text-gray-700 hover:text-amber-900 transition-colors">
              Planifica tu Visita
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-amber-900 transition-colors">
              Contacto
            </a>
            <button className="bg-amber-900 text-white px-6 py-2 rounded-md hover:bg-amber-800 transition-colors">
              Comprar Entradas
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a
              href="#inicio"
              className="text-gray-700 hover:text-amber-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#exhibiciones"
              className="text-gray-700 hover:text-amber-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Exhibiciones
            </a>
            <a
              href="#colecciones"
              className="text-gray-700 hover:text-amber-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Colecciones
            </a>
            <a
              href="#visita"
              className="text-gray-700 hover:text-amber-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Planifica tu Visita
            </a>
            <a
              href="#contacto"
              className="text-gray-700 hover:text-amber-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
            <button className="bg-amber-900 text-white px-6 py-2 rounded-md hover:bg-amber-800 transition-colors w-full">
              Comprar Entradas
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
