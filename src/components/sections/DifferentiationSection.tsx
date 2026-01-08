import { Brain, CheckCircle, BarChart3 } from "lucide-react";

const DifferentiationSection = () => {
  const checkItems = [
    "O que, quando e como estudar (incidência real de prova)",
    "Como priorizar (o que realmente gera ponto)",
    "Como revisar sem recomeçar do zero",
    "Como corrigir erros antes que eles se repitam",
    "Como adaptar o estudo à sua rotina",
  ];

  return (
    <section className="bg-muted section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            POR QUE O RESIDENTE DE ELITE É DIFERENTE
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1 */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Direção Cognitiva
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A maioria das mentorias entrega planilhas soltas ou suportes vagos. O residente de Elite te entrega direção cognitiva.
            </p>
          </div>

          {/* Column 2 - Checklist */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              O Que Você Aprende
            </h3>
            <ul className="space-y-3">
              {checkItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Base Científica
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Tudo isso baseado em: <strong className="text-foreground">padrão real de banca</strong>, 
              dados de desempenho, acompanhamento humano e princípios sólidos da{" "}
              <strong className="text-foreground">neurociência da aprendizagem</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
