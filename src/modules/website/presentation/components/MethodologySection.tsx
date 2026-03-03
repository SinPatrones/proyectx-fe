import { BookMarked, FlaskConical, CheckCircle } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

const iconMap: Record<string, React.ElementType> = {
  BookMarked,
  FlaskConical,
  CheckCircle,
};

interface MethodologySectionProps {
  data: LandingPageContent["methodology"];
}

export function MethodologySection({ data }: MethodologySectionProps) {
  return (
    <SectionWrapper id="metodologia" tinted>
      <AnimatedSection>
        <SectionHeading
          title={data.sectionTitle}
          subtitle={data.subtitle}
          accent="red"
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Items */}
        <AnimatedSection delay={100}>
          <div className="space-y-4">
            {data.items.map((item, i) => {
              const Icon = iconMap[item.icon] ?? BookMarked;
              const isGreen = i % 2 === 1;
              return (
                <div
                  key={item.title}
                  className={`flex gap-5 p-6 rounded-2xl border bg-white shadow-sm group hover:shadow-md transition-all duration-300 ${
                    isGreen
                      ? "border-gray-200 hover:border-brand-green/30"
                      : "border-gray-200 hover:border-brand-red/30"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isGreen ? "bg-green-50" : "bg-red-50"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={isGreen ? "text-brand-green" : "text-brand-red"}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Image */}
        <AnimatedSection delay={200}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-red-50 to-green-50 rounded-3xl -z-10" />
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg aspect-[4/3]">
              <img
                src={data.imageUrl}
                alt={data.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur shadow-sm inline-block border border-gray-100">
                  <p className="text-gray-900 text-sm font-semibold">
                    Investigación con Estándares Internacionales
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    APA · Vancouver · IEEE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
