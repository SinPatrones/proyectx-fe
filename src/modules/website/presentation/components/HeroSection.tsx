import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

interface HeroSectionProps {
  data: LandingPageContent["hero"];
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-white flex"
    >
      {/* ─────────────────────────────────────────────────
          MOBILE: image fills background at low opacity
          so it shows clearly behind the content
      ───────────────────────────────────────────────── */}
      <div className="lg:hidden absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Only 45% white = image is clearly visible on mobile */}
        <div className="absolute inset-0 bg-white/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/10 to-brand-green/8" />
      </div>

      {/* ─────────────────────────────────────────────────
          LEFT PANEL — content (full width mobile, 58% desktop)
      ───────────────────────────────────────────────── */}
      <div className="relative z-10 w-full lg:w-[58%] min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-24 pb-16">

        {/* Desktop-only left panel background decorations */}
        <div className="hidden lg:block absolute inset-0 bg-white" />

        {/* Dot grid (left panel, desktop) */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #E2E8F0 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            opacity: 0.7,
          }}
        />

        {/* Brand blobs decorating the left panel */}
        <div
          className="hidden lg:block absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(220,38,38,0.09)", animation: "glow-pulse 5s ease-in-out infinite" }}
        />
        <div
          className="hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(22,163,74,0.08)", animation: "glow-pulse 5s ease-in-out infinite 2.5s" }}
        />

        {/* Gradient fade on the right edge of left panel → blends into image */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-28 bg-gradient-to-r from-transparent to-white/0 pointer-events-none" />

        {/* ── Content ── */}
        <div className="relative z-10 max-w-xl">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-brand-red/30 bg-red-50 mb-8"
            style={{ animation: "fade-up 0.6s ease both" }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse block" />
            <span className="text-brand-red text-xs sm:text-sm font-semibold tracking-widest uppercase">
              {data.badge}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none mb-5 select-none"
            style={{ animation: "fade-up 0.8s ease 0.2s both" }}
          >
            <span className="text-brand-red">{data.title.prefix}</span>
            <span className="text-brand-green">{data.title.suffix}</span>
          </h1>

          {/* Subtitle */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5 leading-tight"
            style={{ animation: "fade-up 0.8s ease 0.35s both" }}
          >
            {data.subtitle}
          </h2>

          {/* Description */}
          <p
            className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            style={{ animation: "fade-up 0.8s ease 0.5s both" }}
          >
            {data.description}
          </p>

          {/* Divider */}
          <div
            className="flex items-center gap-3 w-64 mb-8"
            style={{ animation: "fade-up 0.8s ease 0.6s both" }}
          >
            <div className="w-10 h-1 rounded-full bg-brand-red" />
            <div className="w-5 h-1 rounded-full bg-brand-green" />
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-10"
            style={{ animation: "fade-up 0.8s ease 0.7s both" }}
          >
            <a
              href={data.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-red hover:bg-brand-red-light text-white font-bold text-base transition-all duration-200 shadow-lg shadow-brand-red/30 hover:shadow-xl hover:shadow-brand-red/40 hover:-translate-y-1"
            >
              {data.ctaPrimary.label}
            </a>
            <a
              href={data.ctaSecondary.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-300 bg-white hover:border-brand-green hover:bg-green-50 text-gray-800 font-semibold text-base transition-all duration-200 hover:-translate-y-1 shadow-sm"
            >
              {data.ctaSecondary.label}
            </a>
          </div>

          {/* Trust row */}
          <div
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500"
            style={{ animation: "fade-up 0.8s ease 0.9s both" }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
              <span>98% clientes satisfechos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
              <span>250+ proyectos completados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
              <span>15+ especialidades</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="relative z-10 mt-14 flex items-center gap-3"
          style={{ animation: "fade-up 0.8s ease 1.1s both" }}
        >
          <div className="w-5 h-9 rounded-full border-2 border-gray-300 flex items-start justify-center pt-1.5">
            <div
              className="w-1 h-2 rounded-full bg-brand-red/60"
              style={{ animation: "float 2s ease-in-out infinite" }}
            />
          </div>
          <span className="text-gray-400 text-xs tracking-widest uppercase">
            Ver más
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────
          RIGHT PANEL — image, fully visible (desktop only)
      ───────────────────────────────────────────────── */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 left-[58%]">
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=85"
          alt="Biblioteca académica"
          className="w-full h-full object-cover object-center"
        />

        {/* Left-edge fade → blends smoothly with white left panel */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />

        {/* Subtle brand color tint — adds warmth and brand identity */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(220,38,38,0.22) 0%, transparent 45%, rgba(22,163,74,0.18) 100%)" }}
        />

        {/* Bottom vignette so page transition to next section feels natural */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

        {/* Floating decorative shapes over the image */}
        <div
          className="absolute top-24 right-16 w-5 h-5 rounded-full bg-white/60"
          style={{ animation: "float 6s ease-in-out infinite" }}
        />
        <div
          className="absolute top-40 right-44 w-3 h-3 rounded-full bg-brand-red/50"
          style={{ animation: "float 6s ease-in-out infinite 1.5s" }}
        />
        <div
          className="absolute bottom-44 right-24 w-4 h-4 rounded-full bg-brand-green/50"
          style={{ animation: "float 6s ease-in-out infinite 3s" }}
        />
        <div
          className="absolute bottom-28 right-52 w-2.5 h-2.5 rounded-full bg-white/50"
          style={{ animation: "float 6s ease-in-out infinite 0.8s" }}
        />

        {/* Image caption card */}
        <div
          className="absolute bottom-20 right-8 left-8 lg:left-auto lg:w-72 p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-white shadow-xl"
          style={{ animation: "fade-up 1s ease 0.8s both" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-8 rounded-full bg-brand-red" />
            <div>
              <p className="text-gray-900 font-bold text-sm">Arequipa, Perú</p>
              <p className="text-gray-500 text-xs">Centro Comercial Héroes Anónimos 624</p>
            </div>
          </div>
          <div className="flex gap-2 pt-2 border-t border-gray-100">
            <span className="px-2 py-1 rounded-md bg-red-50 text-brand-red text-xs font-semibold">Tesis</span>
            <span className="px-2 py-1 rounded-md bg-green-50 text-brand-green text-xs font-semibold">SPSS</span>
            <span className="px-2 py-1 rounded-md bg-red-50 text-brand-red text-xs font-semibold">Turnitin</span>
          </div>
        </div>
      </div>
    </section>
  );
}
