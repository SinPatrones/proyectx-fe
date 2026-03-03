import { FlaskConical, BookOpen, MessageCircle } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
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
    <SectionWrapper id="servicios">
      <AnimatedSection>
        <SectionHeading
          title={data.sectionTitle}
          subtitle={data.subtitle}
          accent="green"
        />
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
              <div className="relative rounded-2xl border border-gray-200 bg-white shadow-sm group hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full">
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
    </SectionWrapper>
  );
}
