import { Target, TrendingUp } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-narrow">
        {/* YouTube Video Player - Centralizado e Maior */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative w-full rounded-lg overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/44G2R8EWAF4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              O Método que Transforma Estudo em Aprovação
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              O <strong className="text-foreground">Residente de Elite</strong> nasce para resolver exatamente isso. 
              Criado por médicos que estiveram entre os primeiros lugares e decidiram 
              transformar experiência real + ciência da aprendizagem em um método 
              estruturado de aprovação.
            </p>

            <div className="bg-muted rounded-lg p-6 border-l-4 border-accent">
              <p className="text-foreground font-medium leading-relaxed">
                Aqui, você não compra planilhas soltas e mentorias genéricas. Você entra em um{" "}
                <span className="text-accent font-bold">plano de aprovação</span>, 
                com estratégia clara, aulas complementares direcionadas, acompanhamento contínuo 
                e ajustes baseados no seu desempenho e rotina. Estaremos juntos do primeiro dia 
                até sua aprovação.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Método</h3>
                  <p className="text-sm text-primary-foreground/80">Estruturado e validado</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Direção</h3>
                  <p className="text-sm text-primary-foreground/80">Baseada em dados</p>
                </div>
              </div>
              
              {/* Removed the +500 students section */}
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;