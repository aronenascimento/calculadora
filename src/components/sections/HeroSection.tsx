import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import mentoresImg from "@/assets/hero.webp"; // Updated import path

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-left relative z-20">
            {/* Top Tag */}
            <div className="mb-6 animate-fade-in">
              <span className="text-accent font-medium text-sm md:text-base tracking-wide uppercase">
                Em meio a tanto conteúdo, estudar sozinho pode ser arriscado
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
              Prepare-se para a residência com{" "}
              <span className="relative inline-block px-3 py-1 -rotate-1">
                <span className="absolute inset-0 bg-accent -z-10" />
                <span className="relative z-10">método e direcionamento</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-primary-foreground/85 max-w-xl mb-8 leading-relaxed animate-fade-in">
              O problema da maioria dos candidatos à residência{" "}
              <strong className="uppercase font-bold">NÃO É FALTA DE ESFORÇO.</strong>{" "}
              É excesso de conteúdo, estudo passivo e ausência de um sistema que{" "}
              <strong className="uppercase font-bold">TRANSFORME ESTUDO EM DESEMPENHO DE PROVA.</strong>{" "}
              E isso que vai diferenciar quem passa de quem vai adiar mais um ano do seu sonho.
            </p>

            {/* CTA Button */}
            <div className="mb-6 lg:mb-8 animate-fade-in">
              <Button 
                variant="cta" 
                size="xl"
                data-gtm-click="cta_hero"
                data-gtm-label="Quero Garantir Minha Vaga"
                onClick={() => {
                  (window as any).dataLayer = (window as any).dataLayer || [];
                  (window as any).dataLayer.push({
                    event: 'cta_hero_click',
                    category: 'hero_section',
                    action: 'clique_cta',
                    label: 'Quero Garantir Minha Vaga'
                  });
                  document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                QUERO GARANTIR MINHA VAGA
              </Button>
            </div>

            {/* Mobile Mentors Image - visible only on mobile */}
            <div className="relative flex lg:hidden justify-center items-center mb-6 animate-fade-in">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
                <img 
                  src={mentoresImg} 
                  alt="Equipe de mentores médicos" 
                  className="relative z-10 w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 animate-fade-in">
              {/* Ícones de usuário removidos daqui */}
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                <span className="text-xs md:text-base font-medium">
                  Criado por médicos que estiveram entre os primeiros lugares. E agora ensinam você a chegar lá.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Mentors Image (Desktop only) */}
          <div className="relative hidden lg:flex justify-center items-center animate-fade-in">
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
              <img 
                src={mentoresImg} 
                alt="Equipe de mentores médicos" 
                className="relative z-10 w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(0 0% 100%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;