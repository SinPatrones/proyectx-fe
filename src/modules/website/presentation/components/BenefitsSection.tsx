import { Clock, BookOpen, Award, TrendingUp } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

const iconMap: Record<string, React.ElementType> = {
  Clock,
  BookOpen,
  Award,
  TrendingUp,
};

interface BenefitsSectionProps {
  data: LandingPageContent["benefits"];
}

export function BenefitsSection({ data }: BenefitsSectionProps) {
  return (
    <section id="beneficios" className="relative overflow-hidden py-20 md:py-28">

      {/* Background image — person studying / writing */}
      <img
        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=85"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-900/72" />

      {/* Brand gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/18 via-transparent to-brand-green/15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/40 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold uppercase tracking-widest">
                Beneficios
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              {data.sectionTitle}
            </h2>
            {data.subtitle && (
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                {data.subtitle}
              </p>
            )}
            <div className="flex justify-center gap-2 mt-6">
              <div className="w-10 h-1 rounded-full bg-brand-red" />
              <div className="w-5 h-1 rounded-full bg-brand-green" />
              <div className="w-3 h-1 rounded-full bg-white/30" />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Award;
            const isGreen = i % 2 === 1;
            return (
              <AnimatedSection key={item.title} delay={80 * i}>
                <div
                  className={`relative p-7 rounded-2xl border bg-white shadow-lg group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden text-center ${
                    isGreen
                      ? "border-white/10 hover:border-brand-green/30"
                      : "border-white/10 hover:border-brand-red/30"
                  }`}
                >
                  {/* Bottom accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                      isGreen ? "bg-brand-green" : "bg-brand-red"
                    }`}
                  />
                  <div
                    className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110 ${
                      isGreen ? "bg-green-50" : "bg-red-50"
                    }`}
                  >
                    <Icon size={28} className={isGreen ? "text-brand-green" : "text-brand-red"} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
