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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* ── Left: Pyramid ── */}
        <AnimatedSection delay={100}>
          <div className="flex flex-col items-center gap-3">
            {data.levels.map((level, i) => {
              const Icon = iconMap[level.icon] ?? Globe;
              const styles = [
                { bg: "bg-gradient-to-r from-red-700 to-brand-red", width: "w-52 sm:w-64" },
                { bg: "bg-gradient-to-r from-red-500 to-red-400",    width: "w-72 sm:w-80" },
                { bg: "bg-gradient-to-r from-brand-green to-green-500", width: "w-full max-w-sm sm:max-w-md" },
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

        {/* ── Right: image + description ── */}
        <AnimatedSection delay={200}>
          <div className="flex flex-col gap-6">

            {/* Image — libros / logro académico */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&q=85"
                alt="Libros académicos apilados"
                className="w-full h-56 sm:h-64 md:h-72 object-cover object-center"
                loading="lazy"
              />

              {/* Gradient overlay bottom for readability of the badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/15 to-transparent" />

              {/* Brand tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/25 via-transparent to-brand-red/15" />

              {/* Bottom caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  <span className="text-brand-green text-xs font-bold uppercase tracking-wider">
                    Nuestra Aspiración
                  </span>
                </div>
                {/* Stat badge */}
                <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm text-center">
                  <span className="text-xl font-black text-brand-red leading-none">250+</span>
                  <span className="text-gray-500 text-xs">Proyectos</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              {data.description}
            </p>

            {/* Accent line */}
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
