import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">Museo de Historia</h3>
            <p className="text-gray-400">
              Preservando y compartiendo la historia de la humanidad desde 1951.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#exhibiciones" className="text-gray-400 hover:text-white transition-colors">
                  Exhibiciones
                </a>
              </li>
              <li>
                <a href="#colecciones" className="text-gray-400 hover:text-white transition-colors">
                  Colecciones
                </a>
              </li>
              <li>
                <a href="#visita" className="text-gray-400 hover:text-white transition-colors">
                  Visítanos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Educación
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Calle de la Historia, 123<br />28001 Madrid, España</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={20} className="flex-shrink-0" />
                <span>+34 91 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={20} className="flex-shrink-0" />
                <span>info@museohistoria.es</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="mb-3">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="bg-gray-800 px-4 py-2 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-amber-900"
                />
                <button className="bg-amber-900 px-4 py-2 rounded-md hover:bg-amber-800 transition-colors">
                  <Mail size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Museo de Historia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
