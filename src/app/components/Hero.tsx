import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1498473956271-69e18b4dde5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbnRlcmlvciUyMGdhbGxlcnl8ZW58MXx8fHwxNzczMzA3MTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Interior del museo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <p className="text-amber-400 mb-4">Descubre nuestro patrimonio</p>
          <h2 className="text-5xl md:text-6xl mb-6">
            Viaja a Través del Tiempo
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Explora miles de años de historia humana a través de nuestra excepcional colección de artefactos y exhibiciones interactivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-900 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition-colors flex items-center justify-center gap-2">
              Explorar Exhibiciones
              <ChevronRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors">
              Planifica tu Visita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
