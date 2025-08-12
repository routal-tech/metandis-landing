import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/assets/logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Metandis" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('producto')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Producto
            </button>
            <button 
              onClick={() => scrollToSection('trazabilidad')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Trazabilidad
            </button>
            <button 
              onClick={() => scrollToSection('documentacion')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Documentación
            </button>
            <button 
              onClick={() => scrollToSection('integraciones')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Integraciones
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contacto')}
            className="hidden md:block btn-primary"
          >
            Solicitar demo
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('producto')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Producto
              </button>
              <button 
                onClick={() => scrollToSection('trazabilidad')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Trazabilidad
              </button>
              <button 
                onClick={() => scrollToSection('documentacion')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Documentación
              </button>
              <button 
                onClick={() => scrollToSection('integraciones')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Integraciones
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="btn-primary text-center mt-4"
              >
                Solicitar demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;