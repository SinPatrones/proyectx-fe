"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { AnimatedSection } from "@/modules/website/presentation/components/AnimatedSection";
import type { PricingData } from "@/modules/mitesisia/domain/entities/MiTesiaContent";

interface PricingSectionProps {
  data: PricingData;
}

export function PricingSection({ data }: PricingSectionProps) {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="precios" className="py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 text-[#22D3EE] text-xs font-semibold uppercase tracking-widest mb-4">
            {data.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F1F5F9] mb-4">
            {data.title}
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-8">{data.subtitle}</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-xl bg-[#0F2040] border border-[#2563EB]/20">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                !annual
                  ? "bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white"
                  : "text-[#94A3B8] hover:text-[#F1F5F9]"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                annual
                  ? "bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white"
                  : "text-[#94A3B8] hover:text-[#F1F5F9]"
              }`}
            >
              Anual
              <span className="ml-2 text-xs text-[#22D3EE]">-20%</span>
            </button>
          </div>
        </AnimatedSection>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {data.plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 100}>
              <div
                className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-[#0F2040] to-[#0A1628] border-2 border-[#2563EB] shadow-[0_0_50px_rgba(37,99,235,0.2)] md:scale-105"
                    : "bg-[#0F2040] border border-[#2563EB]/20 hover:border-[#2563EB]/50"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold text-[#050A14] bg-gradient-to-r from-[#06B6D4] to-[#22D3EE]">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-[#F1F5F9] font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-[#94A3B8] text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-black text-[#F1F5F9]">
                    {annual ? plan.priceAnnual : plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[#94A3B8] text-sm ml-1">{plan.period}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check size={16} className="text-[#06B6D4] shrink-0" />
                      ) : (
                        <X size={16} className="text-[#64748B] shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-[#94A3B8]" : "text-[#64748B]"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:scale-105"
                      : "border border-[#2563EB]/40 text-[#3B82F6] hover:border-[#2563EB] hover:bg-[#2563EB]/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
