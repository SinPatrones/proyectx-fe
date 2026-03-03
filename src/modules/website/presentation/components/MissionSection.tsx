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

      {/* Mission statement */}
      <AnimatedSection delay={100}>
        <div className="relative text-center mb-14 max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-green-50 rounded-2xl -z-10" />
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="text-4xl text-brand-green font-black mb-3 leading-none">"</div>
            <blockquote className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
              {data.mainText}
            </blockquote>
            <div className="text-4xl text-brand-green font-black mt-2 leading-none flex justify-end">"</div>
          </div>
        </div>
      </AnimatedSection>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {data.items.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Star;
          const styles = [
            { border: "border-red-100 hover:border-brand-red/40", bg: "bg-red-50", icon: "text-brand-red", bar: "bg-brand-red", hover: "hover:bg-red-50/80" },
            { border: "border-green-100 hover:border-brand-green/40", bg: "bg-green-50", icon: "text-brand-green", bar: "bg-brand-green", hover: "hover:bg-green-50/80" },
            { border: "border-red-100 hover:border-brand-red/40", bg: "bg-red-50", icon: "text-brand-red", bar: "bg-brand-red", hover: "hover:bg-red-50/80" },
          ];
          const s = styles[i] ?? styles[0];

          return (
            <AnimatedSection key={item.title} delay={150 + i * 100}>
              <div
                className={`relative p-7 rounded-2xl border bg-white shadow-sm group hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full ${s.border}`}
              >
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
