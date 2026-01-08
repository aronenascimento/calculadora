import { useRef, useEffect, useState } from "react";

import depoimento1 from "@/assets/testimonials/depoimento-1.jpeg";
import depoimento2 from "@/assets/testimonials/depoimento-2.jpeg";
import depoimento3 from "@/assets/testimonials/depoimento-3.jpeg";
import depoimento4 from "@/assets/testimonials/depoimento-4.jpeg";
import depoimento5 from "@/assets/testimonials/depoimento-5.jpeg";
import depoimento6 from "@/assets/testimonials/depoimento-6.jpeg";
import depoimento7 from "@/assets/testimonials/depoimento-7.jpeg";
import depoimento8 from "@/assets/testimonials/depoimento-8.jpeg";
import depoimento9 from "@/assets/testimonials/depoimento-9.jpeg";
import depoimento10 from "@/assets/testimonials/depoimento-10.jpeg";

const testimonials = [
  depoimento1,
  depoimento2,
  depoimento3,
  depoimento4,
  depoimento5,
  depoimento6,
  depoimento7,
  depoimento8,
  depoimento9,
  depoimento10,
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef<number>();
  const speedRef = useRef(0.5);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current && !isDragging) {
        scrollRef.current.scrollLeft += speedRef.current;
        
        const maxScroll = scrollRef.current.scrollWidth / 2;
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          O que nossos alunos dizem
        </h2>
        <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
          Depoimentos reais de quem já faz parte da nossa comunidade
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {duplicatedTestimonials.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={img}
              alt={`Depoimento ${(index % testimonials.length) + 1}`}
              className="h-[280px] sm:h-[320px] md:h-[400px] w-auto max-w-[85vw] sm:max-w-none object-contain pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
