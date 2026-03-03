import { MessageCircle, Phone } from "lucide-react";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

interface CtaSectionProps {
  data: LandingPageContent["cta"];
}

export function CtaSection({ data }: CtaSectionProps) {
  return (
    <section id="cta" className="relative w-full py-24 md:py-32 overflow-hidden bg-brand-green">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-700/30 via-transparent to-green-800/20" />

      {/* Decorative shapes */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none"
        style={{ animation: "float 8s ease-in-out infinite" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none"
        style={{ animation: "float 8s ease-in-out infinite 4s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/30 bg-white/15 mb-6">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse block" />
          <span className="text-white text-xs font-semibold tracking-widest uppercase">
            {data.subtitle}
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          {data.title}
        </h2>
        <p className="text-green-100 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {data.description}
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 w-full max-w-xs mx-auto mb-10">
          <div className="flex-1 h-px bg-white/30" />
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="w-2 h-2 rounded-full bg-brand-red" />
          </div>
          <div className="flex-1 h-px bg-white/30" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={data.ctaPrimary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl bg-white hover:bg-gray-50 text-brand-green font-bold text-base transition-all duration-200 shadow-xl shadow-black/15 hover:shadow-black/25 hover:-translate-y-1"
          >
            <MessageCircle size={18} />
            {data.ctaPrimary.label}
          </a>
          <a
            href={data.ctaSecondary.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-semibold text-base transition-all duration-200 hover:-translate-y-1"
          >
            <Phone size={18} />
            {data.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
