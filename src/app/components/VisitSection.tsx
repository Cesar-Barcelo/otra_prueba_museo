import { Clock, MapPin, Ticket, Info } from 'lucide-react';

const visitInfo = [
  {
    icon: Clock,
    title: 'Horarios',
    details: [
      'Martes - Domingo: 10:00 - 18:00',
      'Lunes: Cerrado',
      'Último acceso: 17:00'
    ]
  },
  {
    icon: Ticket,
    title: 'Entradas',
    details: [
      'Adultos: €15',
      'Estudiantes: €10',
      'Menores de 12: Gratis'
    ]
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    details: [
      'Calle de la Historia, 123',
      '28001 Madrid, España',
      'Metro: Línea 2, Estación Museo'
    ]
  },
  {
    icon: Info,
    title: 'Servicios',
    details: [
      'Visitas guiadas disponibles',
      'Audioguías en 8 idiomas',
      'Cafetería y tienda'
    ]
  }
];

export function VisitSection() {
  return (
    <section id="visita" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-900 mb-2">Información Práctica</p>
          <h2 className="text-4xl md:text-5xl mb-4">Planifica tu Visita</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas saber antes de visitarnos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {visitInfo.map((info, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-900 text-white rounded-full mb-4">
                <info.icon size={24} />
              </div>
              <h3 className="text-xl mb-4">{info.title}</h3>
              <ul className="space-y-2">
                {info.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-600">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl mb-4">Mapa del Museo</h3>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <MapPin size={48} className="text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
