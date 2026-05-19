import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Building2, Globe } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '50,000+',
    label: 'Artefactos en Colección'
  },
  {
    icon: Users,
    value: '500,000+',
    label: 'Visitantes Anuales'
  },
  {
    icon: Globe,
    value: '100+',
    label: 'Países Representados'
  },
  {
    icon: Award,
    value: '75+',
    label: 'Años de Historia'
  }
];

export function AboutSection() {
  return (
    <section id="colecciones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-900 mb-2">Sobre Nosotros</p>
            <h2 className="text-4xl md:text-5xl mb-6">
              Preservando la Historia para las Futuras Generaciones
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Desde 1951, nuestro museo se ha dedicado a la preservación, investigación y exhibición de artefactos históricos que cuentan la historia de la humanidad.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Con una colección que abarca desde la prehistoria hasta la era moderna, ofrecemos una experiencia educativa única que inspira curiosidad y aprecio por nuestro pasado compartido.
            </p>
            <button className="bg-amber-900 text-white px-8 py-3 rounded-md hover:bg-amber-800 transition-colors">
              Nuestra Historia
            </button>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1765969934330-d0d43845f669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBhbmNpZW50JTIwYXJ0aWZhY3RzJTIwaGlzdG9yeXxlbnwxfHx8fDE3NzMzMDcxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Artefactos del museo"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <stat.icon className="text-amber-900" size={32} />
              </div>
              <div className="text-3xl md:text-4xl text-amber-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
