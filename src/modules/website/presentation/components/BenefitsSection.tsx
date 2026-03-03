import { Clock, BookOpen, Award, TrendingUp } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
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
    <SectionWrapper id="beneficios">
      <AnimatedSection>
        <SectionHeading
          title={data.sectionTitle}
          subtitle={data.subtitle}
          accent="green"
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.items.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Award;
          const isGreen = i % 2 === 1;
          return (
            <AnimatedSection key={item.title} delay={80 * i}>
              <div
                className={`relative p-7 rounded-2xl border bg-white shadow-sm group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden text-center ${
                  isGreen
                    ? "border-gray-200 hover:border-brand-green/30"
                    : "border-gray-200 hover:border-brand-red/30"
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
                  <Icon
                    size={28}
                    className={isGreen ? "text-brand-green" : "text-brand-red"}
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
