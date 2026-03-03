import { Star, Users, TrendingUp } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

const iconMap: Record<string, React.ElementType> = {
  Star,
  Users,
  TrendingUp,
};

interface MissionSectionProps {
  data: LandingPageContent["mission"];
}

export function MissionSection({ data }: MissionSectionProps) {
  return (
    <SectionWrapper id="mision">
      <AnimatedSection>
        <SectionHeading title={data.sectionTitle} accent="green" />
      </AnimatedSection>

      {/* ── Full-width image banner with quote overlay ── */}
      <AnimatedSection delay={100}>
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-xl">
          {/* Image — equipo académico / colaboración */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=85"
            alt="Equipo académico colaborando"
            className="w-full h-60 sm:h-80 md:h-96 object-cover object-center"
            loading="lazy"
          />

          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/85 via-brand-red/60 to-brand-red/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />

          {/* Quote text on top of image */}
          <div className="absolute inset-0 flex items-center px-7 sm:px-12 lg:px-16 py-8">
            <div className="max-w-lg">
              <div className="text-5xl sm:text-6xl text-white/40 font-black leading-none select-none">
                "
              </div>
              <blockquote className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug -mt-3">
                {data.mainText}
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-1 rounded-full bg-white" />
                <div className="w-5 h-1 rounded-full bg-white/50" />
                <div className="w-3 h-1 rounded-full bg-white/25" />
              </div>
            </div>
          </div>

          {/* Floating label bottom-right */}
          <div className="absolute bottom-5 right-5 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white text-xs font-semibold tracking-widest uppercase">
              Nuestra Misión
            </span>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Three value cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {data.items.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Star;
          const styles = [
            { border: "border-red-100 hover:border-brand-red/40", bg: "bg-red-50", icon: "text-brand-red", bar: "bg-brand-red" },
            { border: "border-green-100 hover:border-brand-green/40", bg: "bg-green-50", icon: "text-brand-green", bar: "bg-brand-green" },
            { border: "border-red-100 hover:border-brand-red/40", bg: "bg-red-50", icon: "text-brand-red", bar: "bg-brand-red" },
          ];
          const s = styles[i] ?? styles[0];

          return (
            <AnimatedSection key={item.title} delay={200 + i * 100}>
              <div
                className={`relative p-7 rounded-2xl border bg-white shadow-sm group hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full ${s.border}`}
              >
                {/* Left accent bar */}
                <div className={`absolute top-0 left-0 w-1 h-full rounded-l-2xl ${s.bar}`} />

                <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={s.icon} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
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
