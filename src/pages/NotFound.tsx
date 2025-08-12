import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">Página no encontrada</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <Home size={20} />
            Volver al inicio
          </a>
          <button 
            onClick={() => window.history.back()}
            className="btn-outline inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Página anterior
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;