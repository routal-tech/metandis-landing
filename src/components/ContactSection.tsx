import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.empresa.trim()) newErrors.empresa = 'La empresa es requerida';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es requerido';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-16 md:py-24 bg-metandis-off-white scroll-mt-16" style={{ scrollMarginTop: '4rem' }}>
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-12 border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">¡Solicitud enviada con éxito!</h3>
              <p className="text-muted-foreground mb-6">
                Hemos recibido tu solicitud de demo. Nuestro equipo se pondrá en contacto contigo 
                en las próximas 24 horas para agendar una demostración personalizada.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-outline"
              >
                Enviar otra solicitud
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-metandis-off-white scroll-mt-16" style={{ scrollMarginTop: '4rem' }}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Lleva tu planta a la siguiente fase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agenda una demo y descubre cómo Metandis reduce riesgo regulatorio y mejora la producción
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Hablemos de tu proyecto</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">hola@metandis.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Teléfono</h4>
                  <p className="text-muted-foreground">+34 900 123 456</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Oficinas</h4>
                  <p className="text-muted-foreground">Madrid, España</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h4 className="font-semibold mb-4">¿Qué incluye la demo?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Revisión de tus procesos actuales
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Demo personalizada de Metandis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Análisis de ROI estimado
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Plan de implementación
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                    errors.nombre ? 'border-red-500' : 'border-border'
                  } focus:border-primary focus:outline-none`}
                  placeholder="Tu nombre completo"
                />
                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                    errors.empresa ? 'border-red-500' : 'border-border'
                  } focus:border-primary focus:outline-none`}
                  placeholder="Nombre de tu empresa"
                />
                {errors.empresa && <p className="text-red-500 text-sm mt-1">{errors.empresa}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                    errors.email ? 'border-red-500' : 'border-border'
                  } focus:border-primary focus:outline-none`}
                  placeholder="tu@empresa.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                    errors.telefono ? 'border-red-500' : 'border-border'
                  } focus:border-primary focus:outline-none`}
                  placeholder="+34 600 000 000"
                />
                {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none resize-none"
                  placeholder="Cuéntanos sobre tu planta y necesidades específicas..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Solicitar demo gratuita
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;