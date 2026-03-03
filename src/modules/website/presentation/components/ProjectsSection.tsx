import { FlaskConical, BookOpen, MessageCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

const iconMap: Record<string, React.ElementType> = {
  FlaskConical,
  BookOpen,
  MessageCircle,
};

interface ProjectsSectionProps {
  data: LandingPageContent["projects"];
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <section id="servicios" className="relative overflow-hidden py-20 md:py-28">

      {/* Background image — library shelves */}
      <img
        src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1400&q=85"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gray-900/72" />

      {/* Brand gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-brand-green/18" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading — light text on dark bg */}
        <AnimatedSection>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              <span className="text-brand-green text-xs font-semibold uppercase tracking-widest">
                Servicios
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
              <div className="w-10 h-1 rounded-full bg-brand-green" />
              <div className="w-5 h-1 rounded-full bg-brand-red" />
              <div className="w-3 h-1 rounded-full bg-white/30" />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {data.cards.map((card, i) => {
            const Icon = iconMap[card.icon] ?? BookOpen;
            const styles = [
              { top: "bg-brand-red", icon: "bg-red-50 text-brand-red", num: "text-red-100" },
              { top: "bg-brand-green", icon: "bg-green-50 text-brand-green", num: "text-green-100" },
              { top: "bg-brand-red", icon: "bg-red-50 text-brand-red", num: "text-red-100" },
            ];
            const s = styles[i] ?? styles[0];

            return (
              <AnimatedSection key={card.title} delay={100 + i * 120}>
                <div className="relative rounded-2xl border border-white/10 bg-white shadow-lg group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full">
                  {/* Top color bar */}
                  <div className={`h-1.5 w-full ${s.top}`} />

                  <div className="p-8">
                    {/* Background number */}
                    <div className={`absolute top-4 right-5 text-5xl font-black select-none ${s.num}`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${s.icon}`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="relative z-10 text-lg font-bold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="relative z-10 text-gray-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
