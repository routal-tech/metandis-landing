import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // New floating particle hemisphere
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Inject/replace keyframes for updated float (-15px)
    const styleId = 'hero-subtle-float-keyframes';
    let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }
    styleEl.innerHTML = `@keyframes subtle-float {0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}`;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.globalCompositeOperation = 'lighter';

    interface ParticleData {
      baseX: number; baseY: number; baseZ: number; // static base position on sphere
      x: number; y: number; z: number; projectedX: number; projectedY: number; projectedScale: number;
      size: number; alpha: number;
    }

    let particles: ParticleData[] = [];
    let animationId: number;
    let width = 0; let height = 0; let sphereRadius = 0; let centerX = 0; let centerY = 0;

    const particleCount = 450; // increased density
    // Rotation state
    let spinBaseY = 0; // continuous spin around Y
    let spinBaseX = 0; // slight spin around X
    let rotY = 0; // final applied Y rotation (with mouse influence)
    let rotX = 0; // final applied X rotation (with mouse influence)
    let mouseOffsetY = 0; // smoothed mouse offsets
    let mouseOffsetX = 0;
    const mouse = { x: undefined as number | undefined, y: undefined as number | undefined, radius: 150 };
    let running = false; // control de animación

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      sphereRadius = Math.min(width, height) * 0.4; // larger sphere
      centerX = width / 2;
      centerY = height / 2;
      init();
    };

    const createParticle = (): ParticleData => {
      // Fibonacci sphere distribution for even spread
      const i = particles.length + 1;
      const phi = Math.acos(1 - 2 * Math.random()); // random but fairly even
      const theta = Math.random() * Math.PI * 2;
      const baseRadius = sphereRadius + (Math.random() - 0.5) * 40;
      const baseX = baseRadius * Math.sin(phi) * Math.cos(theta);
      const baseY = baseRadius * Math.cos(phi);
      const baseZ = baseRadius * Math.sin(phi) * Math.sin(theta);
      const size = Math.random() * 3 + 1;
      const alpha = 0.35 + Math.random() * 0.55;
      return {
        baseX, baseY, baseZ,
        x: 0, y: 0, z: 0,
        projectedX: 0, projectedY: 0, projectedScale: 0,
        size, alpha
      };
    };

    const project = (p: ParticleData) => {
      const perspective = 1200 / (1200 + p.z + sphereRadius);
      p.projectedScale = perspective;
      p.projectedX = p.x * perspective + centerX;
      p.projectedY = p.y * perspective + centerY;
    };

    const applyRotation = (p: ParticleData) => {
      // First rotate around Y then X
      const cosY = Math.cos(rotY); const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX); const sinX = Math.sin(rotX);
      // Y rotation
      const x1 = p.baseX * cosY + p.baseZ * sinY;
      const z1 = -p.baseX * sinY + p.baseZ * cosY;
      // X rotation
      const y2 = p.baseY * cosX - z1 * sinX;
      const z2 = p.baseY * sinX + z1 * cosX;
      p.x = x1; p.y = y2; p.z = z2;
      project(p);
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const p = createParticle();
        applyRotation(p);
        particles.push(p);
      }
    };

    const updateRotation = () => {
      // continuous base spin
      spinBaseY += 0.0012; // speed of rotation around Y
      spinBaseX += 0.0004; // subtle tilt
      // target from mouse
      if (mouse.x !== undefined && mouse.y !== undefined) {
        const targetOffsetY = ((mouse.x - centerX) / width) * 0.6; // range ~ -0.6..0.6 rad
        const targetOffsetX = ((mouse.y - centerY) / height) * 0.6;
        // smooth easing
        mouseOffsetY += (targetOffsetY - mouseOffsetY) * 0.05;
        mouseOffsetX += (targetOffsetX - mouseOffsetX) * 0.05;
      } else {
        // decay to zero when no mouse
        mouseOffsetY *= 0.95;
        mouseOffsetX *= 0.95;
      }
      rotY = spinBaseY + mouseOffsetY;
      rotX = spinBaseX + mouseOffsetX;
    };

    const draw = (p: ParticleData) => {
      const r = p.size * p.projectedScale;
      if (r <= 0) return;
      const g = ctx.createRadialGradient(p.projectedX, p.projectedY, 0, p.projectedX, p.projectedY, r);
      g.addColorStop(0, `rgba(56,224,123,${p.alpha * 0.95 * p.projectedScale})`);
      g.addColorStop(0.4, `rgba(56,224,123,${p.alpha * 0.55 * p.projectedScale})`);
      g.addColorStop(0.7, `rgba(56,224,123,${0.08 * p.projectedScale})`);
      g.addColorStop(1, 'rgba(56,224,123,0)');
      ctx.beginPath();
      ctx.arc(p.projectedX, p.projectedY, r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    };

    const animate = () => {
      if (!running) return; // no avanzar si está pausado
      animationId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      updateRotation();
      particles.forEach(p => { applyRotation(p); draw(p); });
    };

    const start = () => {
      if (running) return;
      running = true;
      animate();
    };

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(animationId);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    const handleMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseOut = () => { mouse.x = undefined; mouse.y = undefined; };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('visibilitychange', handleVisibility);

    resize();
    start();

    return () => {
      stop();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#0A192F] text-[#F5F5F5]">
      {/* Floating animated canvas container */}
      <div ref={containerRef} id="particle-canvas-container" className="absolute inset-0" style={{ animation: 'subtle-float 15s ease-in-out infinite' }}>
        <canvas id="particle-canvas" ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A192F]/70 pointer-events-none" />
      <div className="relative z-10 w-full px-4 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <span className="inline-block rounded-full bg-[#38E07B]/10 px-4 py-1.5 text-sm font-medium text-[#38E07B]">Tecnología para un Futuro Sostenible</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-[#F5F5F5]">Software de gestión para <span className="text-primary">plantas de biogás</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-[#A3B3AC]">Metandis conecta documentación, trazabilidad y logística para operar tu planta con más producción, menos riesgo y auditoría instantánea.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button onClick={() => scrollToSection('contacto')} className="inline-flex h-12 items-center justify-center rounded-md bg-[#38E07B] px-8 text-base font-semibold text-[#0A192F] shadow-lg shadow-[#38E07B]/20 transition-all duration-300 hover:scale-105 hover:bg-white">Solicitar demo <ArrowRight className="ml-2" size={18} /></button>
            <button onClick={() => scrollToSection('producto')} className="inline-flex h-12 items-center justify-center rounded-md border border-[#8892B0]/20 bg-[#8892B0]/5 px-8 text-base font-semibold text-[#F5F5F5] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#8892B0]/40 hover:bg-[#8892B0]/10">Ver cómo funciona</button>
          </div>
        </div>
        <div className="mt-16 text-center text-sm text-[#8892B0]"><p>Confían en nosotros las principales empresas del sector energético.</p></div>
      </div>
    </section>
  );
};

export default Hero;