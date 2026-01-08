import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
import PainPointsSection from "@/components/sections/PainPointsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FooterSection from "@/components/sections/FooterSection";
import TeamSection from "@/components/sections/TeamSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <DifferentiationSection />
      <PainPointsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <TeamSection />
      <PricingSection />
      <FooterSection />
    </main>
  );
};

export default Index;