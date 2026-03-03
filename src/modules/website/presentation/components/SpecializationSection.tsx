import {
  GraduationCap,
  Briefcase,
  Cog,
  Users,
  HeartPulse,
  Plane,
} from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Briefcase,
  Cog,
  Users,
  HeartPulse,
  Plane,
};

interface SpecializationSectionProps {
  data: LandingPageContent["specialization"];
}

export function SpecializationSection({ data }: SpecializationSectionProps) {
  return (
    <section id="especializacion" className="relative overflow-hidden py-20 md:py-28">

      {/* Background image — math/science academic board */}
      <img
        src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1400&q=85"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-900/75" />

      {/* Brand tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/20 via-transparent to-brand-red/15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              <span className="text-brand-green text-xs font-semibold uppercase tracking-widest">
                Especialización
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.areas.map((area, i) => {
            const Icon = iconMap[area.icon] ?? GraduationCap;
            const isRed = area.color === "brand-red";

            return (
              <AnimatedSection key={area.title} delay={80 * i}>
                <div
                  className={`relative group p-6 rounded-2xl border bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-default ${
                    isRed
                      ? "border-white/10 hover:border-brand-red/30"
                      : "border-white/10 hover:border-brand-green/30"
                  }`}
                >
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${isRed ? "bg-brand-red" : "bg-brand-green"}`} />

                  {/* Corner number */}
                  <span className={`absolute top-4 right-4 text-3xl font-black select-none ${isRed ? "text-red-100" : "text-green-100"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-start gap-4 pt-1">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${isRed ? "bg-red-50" : "bg-green-50"}`}>
                      <Icon size={22} className={isRed ? "text-brand-red" : "text-brand-green"} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1.5">{area.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                    </div>
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
