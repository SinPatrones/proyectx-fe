import { MapPin, Heart } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

interface AboutSectionProps {
  data: LandingPageContent["about"];
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <SectionWrapper id="quienes-somos" tinted>
      <AnimatedSection>
        <SectionHeading title={data.sectionTitle} accent="red" />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Commitment card */}
        <AnimatedSection delay={100}>
          <div className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm group hover:shadow-md hover:border-brand-red/30 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-red-400 to-brand-red rounded-t-2xl" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                <Heart size={20} className="text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{data.commitmentTitle}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-base">
              {data.commitmentText}
            </p>
            <div className="mt-6 flex gap-1.5">
              <div className="w-8 h-1 rounded-full bg-brand-red" />
              <div className="w-4 h-1 rounded-full bg-brand-green" />
              <div className="w-2 h-1 rounded-full bg-gray-200" />
            </div>
          </div>
        </AnimatedSection>

        {/* Location card */}
        <AnimatedSection delay={200}>
          <div className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm group hover:shadow-md hover:border-brand-green/30 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-green-400 to-brand-green rounded-t-2xl" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{data.locationTitle}</h3>
            </div>
            <p className="text-gray-500 text-sm mb-3">{data.locationText}</p>
            <p className="text-gray-800 leading-relaxed text-base font-medium">
              {data.locationAddress}
            </p>
            <a
              href="https://www.google.com/maps/search/Av.+Independencia+Centro+Comercial+Héroes+Anónimos+624+Arequipa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-brand-green hover:text-brand-green-dark text-sm font-semibold transition-colors group"
            >
              <MapPin size={14} />
              Ver en Google Maps
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <div className="mt-4 flex gap-1.5">
              <div className="w-8 h-1 rounded-full bg-brand-green" />
              <div className="w-4 h-1 rounded-full bg-brand-red" />
              <div className="w-2 h-1 rounded-full bg-gray-200" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
