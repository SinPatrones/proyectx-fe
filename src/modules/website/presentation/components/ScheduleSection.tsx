import { Clock, Calendar, MessageCircle } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

interface ScheduleSectionProps {
  data: LandingPageContent["schedule"];
  whatsappHref: string;
}

export function ScheduleSection({ data, whatsappHref }: ScheduleSectionProps) {
  return (
    <SectionWrapper id="horarios" tinted>
      <AnimatedSection>
        <SectionHeading
          title={data.sectionTitle}
          subtitle={data.subtitle}
          accent="green"
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Schedule cards */}
        <AnimatedSection delay={100}>
          <div className="space-y-4">
            {data.schedule.map((day, i) => {
              const isGreen = i % 2 === 0;
              return (
                <div
                  key={day.days}
                  className={`flex items-center gap-5 p-6 rounded-2xl border bg-white shadow-sm group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${
                    isGreen
                      ? "border-gray-200 hover:border-brand-green/30"
                      : "border-gray-200 hover:border-brand-red/30"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isGreen ? "bg-green-50" : "bg-red-50"
                    }`}
                  >
                    <Calendar
                      size={20}
                      className={isGreen ? "text-brand-green" : "text-brand-red"}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900">{day.days}</p>
                    <p
                      className={`text-sm font-semibold mt-0.5 ${
                        isGreen ? "text-brand-green" : "text-brand-red"
                      }`}
                    >
                      {day.range}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Clock size={14} />
                      <span className="text-sm font-medium">{day.hours}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Message & CTA */}
        <AnimatedSection delay={200}>
          <div className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-green-400 to-brand-green rounded-t-2xl" />

            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-5">
              <MessageCircle size={22} className="text-brand-green" />
            </div>
            <p className="text-gray-600 leading-relaxed text-base mb-6">
              {data.message}
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-green hover:bg-brand-green-light text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-brand-green/25 hover:shadow-brand-green/40 hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              Consultar por WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
