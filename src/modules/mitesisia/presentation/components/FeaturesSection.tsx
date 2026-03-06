import {
  FileText,
  Brain,
  BookOpen,
  ShieldCheck,
  MessageSquare,
  Download,
} from "lucide-react";
import { AnimatedSection } from "@/modules/website/presentation/components/AnimatedSection";
import type { FeaturesData } from "@/modules/mitesisia/domain/entities/MiTesiaContent";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FileText,
  Brain,
  BookOpen,
  ShieldCheck,
  MessageSquare,
  Download,
};

interface FeaturesSectionProps {
  data: FeaturesData;
}

export function FeaturesSection({ data }: FeaturesSectionProps) {
  return (
    <section id="caracteristicas" className="py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? FileText;
            return (
              <AnimatedSection key={feature.title} delay={i * 100}>
                <div className="group h-full p-6 rounded-2xl bg-[#0F2040] border border-[#2563EB]/20 hover:border-[#06B6D4]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#06B6D4]" />
                  </div>
                  <h3 className="text-[#F1F5F9] font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
