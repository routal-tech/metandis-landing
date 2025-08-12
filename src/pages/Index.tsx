import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import CTABanner from '@/components/CTABanner';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TrazabilidadSection from '@/components/TrazabilidadSection';
import DocumentacionSection from '@/components/DocumentacionSection';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <TrazabilidadSection />
        <DocumentacionSection />
        <HowItWorksSection />
        <BenefitsSection />
        <IntegrationsSection />
        <CTABanner />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
