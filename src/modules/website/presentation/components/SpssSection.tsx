import { BarChart3, CheckSquare, TrendingUp, Activity } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  CheckSquare,
  TrendingUp,
  Activity,
};

interface SpssSectionProps {
  data: LandingPageContent["spss"];
}

export function SpssSection({ data }: SpssSectionProps) {
  return (
    <SectionWrapper id="spss" tinted>
      <AnimatedSection>
        <SectionHeading
          title={data.sectionTitle}
          subtitle={data.subtitle}
          accent="red"
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {data.items.map((item, i) => {
          const Icon = iconMap[item.icon] ?? BarChart3;
          return (
            <AnimatedSection key={item.title} delay={100 + i * 80}>
              <div className="flex gap-5 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm group hover:shadow-md hover:border-brand-red/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                  <Icon size={22} className="text-brand-red" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Method tags */}
      <AnimatedSection delay={500}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {["SPSS", "Chi Cuadrado", "T Student", "Spearman", "Pearson", "Alfa de Cronbach"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-brand-red/20 bg-red-50 text-brand-red text-xs font-semibold tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
