import { UserPlus, Cpu, PenLine, GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/modules/website/presentation/components/AnimatedSection";
import type { HowItWorksData } from "@/modules/mitesisia/domain/entities/MiTesiaContent";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  UserPlus,
  Cpu,
  PenLine,
  GraduationCap,
};

interface HowItWorksSectionProps {
  data: HowItWorksData;
}

export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  return (
    <section id="como-funciona" className="relative py-24 overflow-hidden">
      {/* Background */}
      <img
        src={data.backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#050A14]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 text-[#22D3EE] text-xs font-semibold uppercase tracking-widest mb-4">
            {data.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F1F5F9] mb-4">
            {data.title}
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">{data.subtitle}</p>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#2563EB] opacity-40" />

          {data.steps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? UserPlus;
            return (
              <AnimatedSection key={step.number} delay={i * 150}>
                <div className="flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 z-10"
                    style={{
                      background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                    }}
                  >
                    <Icon size={28} className="text-white" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0F2040] border border-[#2563EB]/40 flex items-center justify-center text-[#22D3EE] text-xs font-black">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="text-[#F1F5F9] font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
