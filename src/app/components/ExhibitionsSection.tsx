import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, ArrowRight } from 'lucide-react';

const exhibitions = [
  {
    id: 1,
    title: 'Tesoros del Antiguo Egipto',
    description: 'Descubre la fascinante civilización del Nilo a través de artefactos únicos, momias y jeroglíficos.',
    image: 'https://images.unsplash.com/photo-1761143551108-d4cb55afd1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHRpYW4lMjBhcmNoYWVvbG9neXxlbnwxfHx8fDE3NzMzMDcxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Permanente',
    type: 'Exhibición Permanente'
  },
  {
    id: 2,
    title: 'Guerreros Medievales',
    description: 'Armaduras, espadas y relatos de la época medieval. Una colección única de armas y vestimenta.',
    image: 'https://images.unsplash.com/photo-1560339795-43309a7a8e30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGtuaWdodCUyMGFybW9yJTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3NzMzMDcxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Marzo - Agosto 2026',
    type: 'Exhibición Temporal'
  },
  {
    id: 3,
    title: 'Imperio Romano',
    description: 'Explora la grandeza de Roma con esculturas, monedas y objetos cotidianos de la antigua civilización.',
    image: 'https://images.unsplash.com/photo-1721253341604-51e3b77a4313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbiUyMGVtcGlyZSUyMHJ1aW5zfGVufDF8fHx8MTc3MzMwNzE0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'Permanente',
    type: 'Exhibición Permanente'
  }
];

export function ExhibitionsSection() {
  return (
    <section id="exhibiciones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-900 mb-2">Nuestras Colecciones</p>
          <h2 className="text-4xl md:text-5xl mb-4">Exhibiciones Destacadas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sumérgete en experiencias únicas que te transportarán a diferentes épocas y culturas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((exhibition) => (
            <div
              key={exhibition.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-900 text-white px-3 py-1 rounded-full text-sm">
                    {exhibition.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Calendar size={16} />
                  <span className="text-sm">{exhibition.date}</span>
                </div>
                <h3 className="text-2xl mb-3">{exhibition.title}</h3>
                <p className="text-gray-600 mb-4">{exhibition.description}</p>
                <button className="text-amber-900 flex items-center gap-2 hover:gap-3 transition-all">
                  Más información
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-900 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition-colors">
            Ver Todas las Exhibiciones
          </button>
        </div>
      </div>
    </section>
  );
}
