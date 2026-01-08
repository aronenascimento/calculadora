import { User } from "lucide-react";
import MirellaImg from "@/assets/team/Mirella.webp";
// Placeholder imports for future images
import BarbaraImg from "@/assets/team/Barbara.webp";
import MillenaImg from "@/assets/team/Millena.webp";
import GabrielImg from "@/assets/team/Gabriel.webp";
import PedroImg from "@/assets/team/Pedro.webp";

const teamMembers = [
  { 
    name: "Mirella Laranjeira", 
    role: "Prof. Ginecologia e Obstetrícia", 
    description: [
      "Professora de Ginecologia UFPE",
      "1° Lugar geral Mastologia SES-PE",
      "1º Lugar ENARE GO - HC UFPE",
      "3º Lugar SES-PE GO - CISAM/UPE",
      "Professora GO UPE Garanhuns",
    ],
    image: MirellaImg,
  },
  { 
    name: "Bárbara Lucinda", 
    role: "Prof. Ginecologia e Obstetrícia", 
    description: [
      "1° Lugar geral SES-PE GO",
      "2º Lugar ENARE Medicina Fetal - HC UFPE",
      "3º Lugar SES-PE Medicina Fetal",
    ], 
    image: BarbaraImg // Updated to use new reference
  },
  { 
    name: "Millena Andrade", 
    role: "Prof. Pediatria", 
    description: [
      "Médica formada pela Universidade de Pernambuco",
      "1º Lugar geral SES-PE em pediatria",
      "Residência em Pediatria no Instituto de Medicina Integral Professor Fernando Figueira (IMIP)",
    ], 
    image: MillenaImg // Updated to use new reference
  },
  { 
    name: "Gabriel Morais", 
    role: "Prof. Clínica Médica", 
    description: [
      "8º lugar SES-PE Clínica Médica",
      "Médico Diarista Hospital Alfa",
      "Facilitador Centro de Simulação FPS",
    ], 
    image: GabrielImg // Updated to use new reference
  },
  { 
    name: "Pedro Brainer", 
    role: "Prof. Cirurgia Geral", 
    description: [
      "1º Lugar geral ENARE Cirurgia Geral",
      "1º Lugar geral SES-PE Cirurgia Geral",
      "Observership Cleveland Clinic, Toronto, UPMC",
    ], 
    image: PedroImg // Updated to use new reference
  },
];

const TeamSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            NOSSO TIME DE PROFESSORES
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Conheça os médicos que transformam experiência em aprovação.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-card border border-border transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 flex flex-col items-center"
            >
              {/* Avatar / Image */}
              {member.image ? (
                <img
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border-4 border-accent/50"
                />
              ) : (
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center border-4 border-accent/50">
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
              )}
              
              <h3 className="text-lg font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-accent mb-3">
                {member.role}
              </p>
              
              {/* Description List */}
              <ul className="text-xs text-muted-foreground leading-relaxed text-left w-full space-y-1 mt-2">
                {member.description.map((item, descIndex) => (
                  <li key={descIndex} className="flex items-start gap-2">
                    <span className="text-accent font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;