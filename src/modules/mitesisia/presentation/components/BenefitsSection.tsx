import { Clock, CheckCircle, Bot, GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/modules/website/presentation/components/AnimatedSection";
import type { BenefitsData } from "@/modules/mitesisia/domain/entities/MiTesiaContent";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Clock,
  CheckCircle,
  Bot,
  GraduationCap,
};

interface BenefitsSectionProps {
  data: BenefitsData;
}

export function BenefitsSection({ data }: BenefitsSectionProps) {
  return (
    <section id="beneficios" className="relative py-24 overflow-hidden">
      {/* Background */}
      <img
        src={data.backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#0A1628]/85" />

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

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.items.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] ?? CheckCircle;
            return (
              <AnimatedSection key={benefit.title} delay={i * 100}>
                <div className="group flex items-start gap-5 p-6 rounded-2xl bg-[#0A1628]/60 backdrop-blur-sm border-l-4 border-[#06B6D4] hover:bg-[#0F2040]/80 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)]">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/15 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-[#06B6D4]" />
                  </div>
                  <div>
                    <h3 className="text-[#F1F5F9] font-bold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{benefit.description}</p>
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
