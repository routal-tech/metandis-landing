import { CheckCircle, ArrowRight } from 'lucide-react';
import biogasFlow from '@/assets/biogas-flow-diagram.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background to-metandis-off-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Software de gestión para{' '}
              <span className="text-primary">plantas de biogás</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Metandis conecta documentación, trazabilidad y logística para operar tu planta con más producción, menos riesgo y auditoría instantánea.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="btn-primary flex items-center gap-2"
              >
                Solicitar demo
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('producto')}
                className="btn-outline"
              >
                Ver cómo funciona
              </button>
            </div>

            {/* Trust Bullets */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Cumplimiento SANDACH y e-SIR</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>API abierta</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Datos en la UE</span>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img 
                src={biogasFlow} 
                alt="Flujo de producción de biogás: generador, transporte, planta, biometano" 
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-metandis-navy/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;