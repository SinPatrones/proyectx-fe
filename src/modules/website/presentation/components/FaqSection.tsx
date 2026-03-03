"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

interface FaqSectionProps {
  data: LandingPageContent["faq"];
}

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
        isOpen
          ? "border-brand-red/30 bg-red-50 shadow-md"
          : "border-gray-200 bg-white hover:border-brand-red/20 hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-base transition-colors ${isOpen ? "text-brand-red" : "text-gray-900"}`}>
          {item.question}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 transition-all duration-300 ${
            isOpen ? "text-brand-red rotate-180" : "text-gray-400"
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">
          <div className="h-px bg-brand-red/20 mb-4" />
          <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection({ data }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <SectionWrapper id="faq">
      <AnimatedSection>
        <SectionHeading
          title={data.sectionTitle}
          subtitle={data.subtitle}
          accent="red"
        />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="max-w-3xl mx-auto space-y-4">
          {data.items.map((item, i) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
