import { Code, Globe, Smartphone } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Globe,
  Smartphone,
};

interface SoftwareSectionProps {
  data: LandingPageContent["software"];
}

export function SoftwareSection({ data }: SoftwareSectionProps) {
  return (
    <SectionWrapper id="software" tinted>
      <AnimatedSection>
        <SectionHeading
          title={data.sectionTitle}
          subtitle={data.subtitle}
          accent="red"
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {data.cards.map((card, i) => {
          const Icon = iconMap[card.icon] ?? Code;
          const styles = [
            { icon: "bg-red-50 text-brand-red", bar: "bg-brand-red" },
            { icon: "bg-green-50 text-brand-green", bar: "bg-brand-green" },
            { icon: "bg-red-50 text-brand-red", bar: "bg-brand-red" },
          ];
          const s = styles[i] ?? styles[0];

          return (
            <AnimatedSection key={card.title} delay={100 + i * 120}>
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm group hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Small image */}
                <div className="relative h-36 overflow-hidden flex-shrink-0">
                  <img
                    src={card.imageUrl}
                    alt={card.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-white/30" />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${s.icon}`}>
                    <Icon size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {card.description}
                  </p>
                  <div className={`mt-5 h-1 rounded-full ${s.bar} opacity-20`} />
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Tech tags */}
      <AnimatedSection delay={500}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {[".NET", "C#", "Java", "React", "HTML/CSS", "JavaScript", "Android", "iOS"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-semibold tracking-wider hover:border-brand-red/30 hover:text-brand-red hover:bg-red-50 transition-colors shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
