import { Award, Users, Heart, CheckCircle } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Users,
  Heart,
  CheckCircle,
};

interface WhyUsSectionProps {
  data: LandingPageContent["whyUs"];
}

export function WhyUsSection({ data }: WhyUsSectionProps) {
  return (
    <SectionWrapper id="por-que-elegirnos">
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
                className={`relative p-7 rounded-2xl border bg-white shadow-sm group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full ${
                  isGreen
                    ? "border-gray-200 hover:border-brand-green/30"
                    : "border-gray-200 hover:border-brand-red/30"
                }`}
              >
                {/* Top line on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                    isGreen ? "bg-brand-green" : "bg-brand-red"
                  }`}
                />
                <div
                  className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    isGreen ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <Icon
                    size={22}
                    className={isGreen ? "text-brand-green" : "text-brand-red"}
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2.5">{item.title}</h3>
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
