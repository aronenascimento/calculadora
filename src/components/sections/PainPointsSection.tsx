import { X, AlertTriangle } from "lucide-react";

const PainPointsSection = () => {
  const painPoints = [
    "Estuda muito, mas esquece rápido",
    "Assiste aulas demais e pratica de menos",
    "Resolve questões sem saber exatamente o que errou e por quê",
    "Acumula matéria e vive com a sensação de estar sempre atrasado",
    "Não sabe se está indo no ritmo certo",
  ];

  return (
    <section className="bg-dark text-dark-foreground section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            AS DORES QUE TE TROUXERAM ATÉ AQUI
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Pain Points */}
          <div>
            <ul className="space-y-4">
              {painPoints.map((pain, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-4 bg-dark-foreground/5 rounded-lg p-4 transition-colors hover:bg-dark-foreground/10"
                >
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-dark-foreground/90">{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Diagnosis Box */}
          <div className="flex items-center">
            <div className="bg-secondary/30 border border-accent/30 rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-accent">O Diagnóstico</h3>
              </div>
              
              <p className="text-dark-foreground/90 leading-relaxed text-lg">
                Então o problema <strong className="text-dark-foreground">não é disciplina</strong>. 
                É <strong className="text-accent">método</strong>.
              </p>
              
              <p className="text-dark-foreground/80 leading-relaxed mt-4">
                Sem revisão espaçada, sem prática ativa e sem feedback direcionado, 
                o cérebro simplesmente não consolida memória de longo prazo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
