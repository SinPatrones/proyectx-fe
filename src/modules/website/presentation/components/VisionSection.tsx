import { Globe, Award, Zap } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Award,
  Zap,
};

interface VisionSectionProps {
  data: LandingPageContent["vision"];
}

export function VisionSection({ data }: VisionSectionProps) {
  return (
    <SectionWrapper id="vision" tinted>
      <AnimatedSection>
        <SectionHeading title={data.sectionTitle} accent="red" />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Pyramid */}
        <AnimatedSection delay={100}>
          <div className="flex flex-col items-center gap-3">
            {data.levels.map((level, i) => {
              const Icon = iconMap[level.icon] ?? Globe;
              const styles = [
                { bg: "bg-gradient-to-r from-red-600 to-brand-red", text: "text-white", width: "w-52 sm:w-64" },
                { bg: "bg-gradient-to-r from-red-500 to-red-400", text: "text-white", width: "w-72 sm:w-80" },
                { bg: "bg-gradient-to-r from-brand-green to-green-500", text: "text-white", width: "w-full max-w-sm sm:max-w-md" },
              ];
              const s = styles[i] ?? styles[0];

              return (
                <div
                  key={level.title}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default ${s.bg} ${s.width}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm sm:text-base">{level.title}</p>
                    <p className="text-white/80 text-xs sm:text-sm mt-0.5">{level.description}</p>
                  </div>
                </div>
              );
            })}
            <p className="text-gray-400 text-xs tracking-widest uppercase mt-2">
              Nuestra Pirámide de Visión
            </p>
          </div>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection delay={200}>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-green/30 bg-green-50">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              <span className="text-brand-green text-xs font-semibold tracking-widest uppercase">
                Nuestra Aspiración
              </span>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {data.description}
            </p>
            <div className="flex gap-2">
              <div className="w-12 h-1 rounded-full bg-brand-red" />
              <div className="w-6 h-1 rounded-full bg-brand-green" />
              <div className="w-3 h-1 rounded-full bg-gray-300" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
