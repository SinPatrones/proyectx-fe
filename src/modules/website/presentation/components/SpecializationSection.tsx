import {
  GraduationCap,
  Briefcase,
  Cog,
  Users,
  HeartPulse,
  Plane,
} from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
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
    <SectionWrapper id="especializacion">
      <AnimatedSection>
        <SectionHeading
          title={data.sectionTitle}
          subtitle={data.subtitle}
          accent="green"
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.areas.map((area, i) => {
          const Icon = iconMap[area.icon] ?? GraduationCap;
          const isRed = area.color === "brand-red";

          return (
            <AnimatedSection key={area.title} delay={80 * i}>
              <div
                className={`relative group p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-default ${
                  isRed
                    ? "border-gray-200 hover:border-brand-red/30"
                    : "border-gray-200 hover:border-brand-green/30"
                }`}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${
                    isRed ? "bg-brand-red" : "bg-brand-green"
                  }`}
                />

                {/* Corner number */}
                <span
                  className={`absolute top-4 right-4 text-3xl font-black select-none ${
                    isRed ? "text-red-100" : "text-green-100"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex items-start gap-4 pt-1">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isRed ? "bg-red-50" : "bg-green-50"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={isRed ? "text-brand-red" : "text-brand-green"}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5">{area.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
