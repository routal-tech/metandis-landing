import { Package, Route, ClipboardCheck } from 'lucide-react';
import Logo from '../../assets/logo.svg';

const TrazabilidadSection = () => {
  return (
    <section id="trazabilidad" className="py-16 md:py-24 scroll-mt-16 bg-metandis-off-white" style={{ scrollMarginTop: '4rem' }}>
      <div className="section-container">
        <div className="text-center mb-16">
          <img src={Logo} alt="Metandis" className="mx-auto mb-8 h-14 w-auto" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Trazabilidad integral</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Control extremo a extremo del residuo: origen, transporte, recepción, digestión y salida de biometano.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Identificación por lote</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Cada lote viaja con un identificador único y eventos sellados temporalmente. Evidencias fotográficas y firma digital.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Route className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Rutas y logística</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Planificación de recogidas, geolocalización y control de incidencias en tiempo real. Sincronización offline -&gt; online.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <ClipboardCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Auditoría instantánea</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Línea de vida completa disponible en un clic para inspecciones y reporting regulatorio (SANDACH / e-SIR).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrazabilidadSection;
