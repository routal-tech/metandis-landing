import { Shield, Lock, Globe, Database } from 'lucide-react';

const IntegrationsSection = () => {
  return (
    <section id="integraciones" className="py-16 md:py-24 bg-metandis-off-white scroll-mt-16" style={{ scrollMarginTop: '4rem' }}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Integraciones y seguridad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conectividad total con tus sistemas existentes y máxima protección de datos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Integración completa</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Metandis se conecta con portales y organismos oficiales (incluyendo e-SIR), 
              sistemas ERP, balanzas y equipos SCADA. API abierta para integraciones 
              personalizadas y flujos específicos de tu organización.
            </p>

            {/* Integration logos placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {['e-SIR', 'SAP', 'SCADA', 'APIs'].map((integration) => (
                <div key={integration} className="bg-card rounded-xl p-4 border border-border text-center">
                  <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Database className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium">{integration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Features */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Seguridad empresarial</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cifrado extremo a extremo</h4>
                  <p className="text-muted-foreground">
                    Datos cifrados en tránsito y reposo con estándares bancarios. 
                    Acceso controlado por roles y permisos granulares.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Auditoría completa</h4>
                  <p className="text-muted-foreground">
                    Histórico inmutable de todas las acciones y cambios. 
                    Trazas de auditoría preparadas para inspecciones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hosting en la UE</h4>
                  <p className="text-muted-foreground">
                    Infraestructura europea conforme a GDPR. 
                    SLA del 99.9% con respaldo y recuperación garantizada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;