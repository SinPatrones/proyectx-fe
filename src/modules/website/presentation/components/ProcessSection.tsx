import { PhoneCall, Calendar, Code2, CheckCircle2 } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

const iconMap: Record<string, React.ElementType> = {
  PhoneCall,
  Calendar,
  Code2,
  CheckCircle2,
};

interface ProcessSectionProps {
  data: LandingPageContent["process"];
}

export function ProcessSection({ data }: ProcessSectionProps) {
  return (
    <SectionWrapper id="proceso" tinted>
      <AnimatedSection>
        <SectionHeading
          title={data.sectionTitle}
          subtitle={data.subtitle}
          accent="red"
        />
      </AnimatedSection>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line (mobile) */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand-red via-brand-green to-brand-red sm:hidden" />
        {/* Horizontal line (desktop) */}
        <div className="hidden sm:block absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-red via-brand-green to-brand-red" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {data.steps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? PhoneCall;
            const isRed = i % 2 === 0;
            return (
              <AnimatedSection key={step.number} delay={100 + i * 150}>
                <div className="relative pl-14 sm:pl-0 sm:text-center group">
                  {/* Step circle */}
                  <div
                    className={`absolute left-0 top-0 sm:static sm:mx-auto sm:mb-5 w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-sm shadow-md transition-all duration-300 ${
                      isRed
                        ? "border-brand-red bg-white text-brand-red group-hover:bg-brand-red group-hover:text-white"
                        : "border-brand-green bg-white text-brand-green group-hover:bg-brand-green group-hover:text-white"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Icon row (desktop) */}
                  <div
                    className={`hidden sm:flex mx-auto mb-4 w-10 h-10 rounded-xl items-center justify-center ${
                      isRed ? "bg-red-50 text-brand-red" : "bg-green-50 text-brand-green"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <div className="sm:px-2">
                    <h3 className="font-bold text-gray-900 mb-2 text-base">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
