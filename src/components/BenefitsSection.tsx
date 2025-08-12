import { TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Resultados que importan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Impacto medible en eficiencia, aprovechamiento y reducción de riesgos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="text-center bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                <TrendingDown className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">-40%</div>
            <h3 className="text-xl font-semibold mb-4">Tiempo en documentación</h3>
            <p className="text-muted-foreground">
              Automatización de reportes y trazas. Reducción significativa del tiempo 
              dedicado a tareas administrativas y cumplimiento normativo.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="text-center bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">+25%</div>
            <h3 className="text-xl font-semibold mb-4">Aprovechamiento del residuo</h3>
            <p className="text-muted-foreground">
              Mayor estabilidad del proceso mediante monitorización continua 
              y alertas tempranas. Optimización de la cadena de suministro.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="text-center bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">-60%</div>
            <h3 className="text-xl font-semibold mb-4">Incidencias en operación</h3>
            <p className="text-muted-foreground">
              Prevención proactiva de problemas en rutas y recepción. 
              Reducción de reprocesos y pérdidas operacionales.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            * Rangos promedio basados en clientes piloto. Resultados variables según configuración inicial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;