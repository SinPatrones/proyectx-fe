import { Calculator, FileText, BookOpen } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

const iconMap: Record<string, React.ElementType> = {
  Calculator,
  FileText,
  BookOpen,
};

interface AcademicWorksSectionProps {
  data: LandingPageContent["academicWorks"];
}

export function AcademicWorksSection({ data }: AcademicWorksSectionProps) {
  return (
    <SectionWrapper id="trabajos-academicos">
      <AnimatedSection>
        <SectionHeading
          title={data.sectionTitle}
          subtitle={data.subtitle}
          accent="green"
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {data.cards.map((card, i) => {
          const Icon = iconMap[card.icon] ?? FileText;
          const isGreen = i % 2 === 1;
          return (
            <AnimatedSection key={card.title} delay={100 + i * 120}>
              <div
                className="rounded-2xl border border-gray-200 bg-white shadow-sm group hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={card.imageUrl}
                    alt={card.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 ${
                      isGreen
                        ? "bg-gradient-to-t from-brand-green/60 via-brand-green/10 to-transparent"
                        : "bg-gradient-to-t from-brand-red/60 via-brand-red/10 to-transparent"
                    }`}
                  />
                  <div
                    className={`absolute bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
                      isGreen ? "bg-brand-green" : "bg-brand-red"
                    }`}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {card.description}
                  </p>
                  <div
                    className={`mt-5 h-1 rounded-full ${
                      isGreen ? "bg-green-100" : "bg-red-100"
                    } overflow-hidden`}
                  >
                    <div
                      className={`h-full w-2/3 rounded-full ${
                        isGreen ? "bg-brand-green" : "bg-brand-red"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
