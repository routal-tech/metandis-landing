import { FileText, Layers, ShieldCheck } from 'lucide-react';

const DocumentacionSection = () => {
  return (
    <section id="documentacion" className="py-16 md:py-24 scroll-mt-16" style={{ scrollMarginTop: '4rem' }}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Documentación y cumplimiento</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Centraliza expedientes, versiones y evidencias con control total de permisos.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Versionado y firma</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Flujos de aprobación, firmas digitales y registro inmutable de cambios para auditoría inmediata.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Expedientes completos</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Documentos, evidencias y relaciones entre lotes y procesos consolidados en un único panel.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border card-hover">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Cumplimiento normativo</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Plantillas y reportes alineados a SANDACH y e-SIR, con controles de acceso basados en roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentacionSection;
