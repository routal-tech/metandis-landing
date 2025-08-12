import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Metandis se integra con e-SIR y normativa SANDACH?",
      answer: "Sí. Gestionamos documentación y estados de forma automática, y mantenemos trazas completas por lote para auditoría. Cumplimiento total con los requerimientos SANDACH y sincronización directa con e-SIR."
    },
    {
      question: "¿Cómo se realiza la trazabilidad del residuo?",
      answer: "Cada lote viaja con identificadores únicos, eventos y evidencias (carga, transporte, recepción, digestión), enlazados a documentos y usuarios responsables. Control completo desde origen hasta destino final."
    },
    {
      question: "¿Qué necesita el transportista?",
      answer: "App móvil intuitiva con itinerarios, documentos digitales y prueba de entrega. Opera offline y sincroniza automáticamente cuando recupera señal de red."
    },
    {
      question: "¿Podemos adaptar flujos a nuestra comunidad autónoma?",
      answer: "Sí. Los flujos documentales y permisos son completamente configurables y versionados. Adaptamos el sistema a los requisitos específicos de cada comunidad autónoma."
    },
    {
      question: "¿En cuánto tiempo podemos empezar?",
      answer: "Implantación por fases progresivas: configuración de integraciones, definición de flujos, pruebas en campo y puesta en producción. Típicamente entre 4-8 semanas según complejidad."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 scroll-mt-16" style={{ scrollMarginTop: '4rem' }}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre Metandis
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-2xl mb-4 overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between bg-card hover:bg-muted/50 transition-colors"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    openItem === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openItem === index && (
                <div className="px-8 pb-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;