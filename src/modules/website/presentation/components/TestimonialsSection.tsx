import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

interface TestimonialsSectionProps {
  data: LandingPageContent["testimonials"];
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
  return (
    // This section uses a bold brand-red background for maximum visual impact
    <section id="testimonios" className="relative w-full py-20 md:py-28 overflow-hidden bg-brand-red">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-red-700/40 via-transparent to-red-800/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/30 bg-white/15 text-xs font-semibold tracking-widest uppercase text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              {data.sectionTitle}
            </div>
            <p className="text-red-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {data.stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={100 + i * 100}>
              <div className="relative p-8 rounded-2xl bg-white/15 border border-white/25 backdrop-blur-sm group hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="text-5xl sm:text-6xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-bold text-lg mb-2">{stat.label}</div>
                <p className="text-red-100 text-sm leading-relaxed">{stat.description}</p>
                <div className="mt-5 h-px bg-white/20" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
