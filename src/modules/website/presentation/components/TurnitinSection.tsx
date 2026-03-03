import { Shield, FileSearch, CheckCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  FileSearch,
  CheckCircle,
};

interface TurnitinSectionProps {
  data: LandingPageContent["turnitin"];
}

export function TurnitinSection({ data }: TurnitinSectionProps) {
  return (
    <section id="turnitin" className="relative overflow-hidden py-20 md:py-28">

      {/* Background image — academic documents / papers */}
      <img
        src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1400&q=85"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-900/75" />

      {/* Green brand tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green/18 via-transparent to-brand-green/12" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              <span className="text-brand-green text-xs font-semibold uppercase tracking-widest">
                Antiplagio
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

        {/* Orbital badge — stands out more on dark bg */}
        <AnimatedSection delay={100}>
          <div className="flex justify-center mb-10">
            <div className="relative flex items-center justify-center w-40 h-40 select-none">
              <div
                className="absolute w-40 h-40 rounded-full border-2 border-dashed border-brand-green/50"
                style={{ animation: "spin 25s linear infinite" }}
              />
              <div
                className="absolute w-28 h-28 rounded-full border border-brand-green/60"
                style={{ animation: "spin 15s linear infinite reverse" }}
              />
              <div className="relative z-10 w-20 h-20 rounded-full bg-white/10 border-2 border-brand-green/60 flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-sm">
                <Shield size={22} className="text-brand-green mb-0.5" />
                <span className="text-brand-green text-[10px] font-bold tracking-wider leading-tight">
                  TURNITIN
                </span>
              </div>
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand-green/60" />
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand-green/50" />
              <div className="absolute left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-brand-green/55" />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-brand-green/55" />
            </div>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {data.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Shield;
            return (
              <AnimatedSection key={item.title} delay={150 + i * 150}>
                <div className="relative p-7 rounded-2xl border border-white/10 bg-white shadow-lg group hover:shadow-2xl hover:border-brand-green/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full text-center">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-brand-green rounded-t-2xl" />

                  <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-green-100 transition-colors">
                    <Icon size={24} className="text-brand-green" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  <div className="mt-5 flex justify-center">
                    <div className="h-1 rounded-full bg-green-100 w-8 group-hover:w-16 transition-all duration-300 overflow-hidden">
                      <div className="h-full bg-brand-green w-full" />
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
