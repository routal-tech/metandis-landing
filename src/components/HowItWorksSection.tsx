import { Settings, Users, BarChart } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-metandis-off-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Cómo funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tres pasos para transformar la gestión de tu planta de biogás
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <Settings className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="bg-primary/5 rounded-full px-4 py-2 inline-block mb-4">
              <span className="text-primary font-semibold">Paso 1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Conecta tus sistemas</h3>
            <p className="text-muted-foreground leading-relaxed">
              Integración con e-SIR, ERP, balanzas y SCADA/sensórica existente. 
              Configuración rápida sin interrumpir operaciones.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="bg-primary/5 rounded-full px-4 py-2 inline-block mb-4">
              <span className="text-primary font-semibold">Paso 2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Define flujos y permisos</h3>
            <p className="text-muted-foreground leading-relaxed">
              Configura los roles por actor: generadores, transportistas y personal de planta. 
              Flujos adaptados a tu comunidad autónoma.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <BarChart className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="bg-primary/5 rounded-full px-4 py-2 inline-block mb-4">
              <span className="text-primary font-semibold">Paso 3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Opera y audita</h3>
            <p className="text-muted-foreground leading-relaxed">
              Panel único con métricas en tiempo real, alertas proactivas y 
              reportes automáticos listos para auditoría.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;