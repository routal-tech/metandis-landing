import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-metandis-navy">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para transformar tu planta?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Únete a las plantas de biogás que ya confían en Metandis para 
            optimizar sus operaciones y cumplir la normativa.
          </p>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="bg-white text-metandis-navy hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg inline-flex items-center gap-2"
          >
            Solicitar demo gratuita
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;