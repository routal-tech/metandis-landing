import { Linkedin } from 'lucide-react';
import metandisLogo from '@/assets/metandis-logo.svg';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 bg-metandis-navy text-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img src={metandisLogo} alt="Metandis" className="h-10 w-auto mb-6 filter brightness-0 invert" />
            <p className="text-white/80 mb-6 max-w-md">
              Software de gestión integral para plantas de biogás. 
              Trazabilidad, documentación y operación unificadas.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com/company/metandis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="LinkedIn de Metandis"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('producto')}
                className="block text-white/80 hover:text-white transition-colors text-left"
              >
                Producto
              </button>
              <button 
                onClick={() => scrollToSection('trazabilidad')}
                className="block text-white/80 hover:text-white transition-colors text-left"
              >
                Trazabilidad
              </button>
              <button 
                onClick={() => scrollToSection('integraciones')}
                className="block text-white/80 hover:text-white transition-colors text-left"
              >
                Integraciones
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block text-white/80 hover:text-white transition-colors text-left"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block text-white/80 hover:text-white transition-colors text-left"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <nav className="space-y-2">
              <a 
                href="/aviso-legal" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Aviso Legal
              </a>
              <a 
                href="/privacidad" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Política de Privacidad
              </a>
              <a 
                href="/cookies" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Política de Cookies
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60">
              © 2024 Metandis. Todos los derechos reservados.
            </p>
            <p className="text-white/60 text-sm">
              Diseñado y desarrollado con ❤️ para el sector del biogás
            </p>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://metandis.com/#organization",
              "name": "Metandis",
              "url": "https://metandis.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://metandis.com/metandis-logo.svg"
              },
              "sameAs": [
                "https://linkedin.com/company/metandis"
              ]
            },
            {
              "@type": "SoftwareApplication",
              "name": "Metandis",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web, Android, iOS",
              "description": "Plataforma SaaS que centraliza trazabilidad, documentación y logística del biogás. Cumplimiento SANDACH y e-SIR, balances de masa y auditoría en 1 clic.",
              "url": "https://metandis.com",
              "publisher": {
                "@id": "https://metandis.com/#organization"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Metandis se integra con e-SIR y normativa SANDACH?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí. Gestionamos documentación y estados de forma automática, y mantenemos trazas completas por lote para auditoría. Cumplimiento total con los requerimientos SANDACH y sincronización directa con e-SIR."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cómo se realiza la trazabilidad del residuo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cada lote viaja con identificadores únicos, eventos y evidencias (carga, transporte, recepción, digestión), enlazados a documentos y usuarios responsables. Control completo desde origen hasta destino final."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Qué necesita el transportista?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "App móvil intuitiva con itinerarios, documentos digitales y prueba de entrega. Opera offline y sincroniza automáticamente cuando recupera señal de red."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Podemos adaptar flujos a nuestra comunidad autónoma?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí. Los flujos documentales y permisos son completamente configurables y versionados. Adaptamos el sistema a los requisitos específicos de cada comunidad autónoma."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿En cuánto tiempo podemos empezar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Implantación por fases progresivas: configuración de integraciones, definición de flujos, pruebas en campo y puesta en producción. Típicamente entre 4-8 semanas según complejidad."
                  }
                }
              ]
            }
          ]
        })}
      </script>
    </footer>
  );
};

export default Footer;