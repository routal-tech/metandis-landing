import { Truck, FileText, BarChart3 } from 'lucide-react';

const ProductSection = () => {
  return (
    <section id="producto" className="py-16 md:py-24 scroll-mt-16" style={{ scrollMarginTop: '4rem' }}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Todo lo que necesitas, en un solo lugar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Centraliza trazabilidad, documentación y operación para optimizar tu planta de biogás
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Trazabilidad */}
          <div className="bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Trazabilidad de residuos</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Control por lote desde el generador hasta el digestor y salida de biometano. 
              Eventos, incidencias y evidencias en tiempo real.
            </p>
          </div>

          {/* Documentación */}
          <div className="bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Gestión documental y auditoría</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Documentos digitales, firmas, versiones y registro de cambios. 
              Preparado para inspecciones y reporting.
            </p>
          </div>

          {/* Operación */}
          <div className="bg-card rounded-2xl p-8 border border-border card-hover md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Operación y logística</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Planificación de recogidas y rutas, inventarios y balances de masa. 
              Alertas para actuar antes del problema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;