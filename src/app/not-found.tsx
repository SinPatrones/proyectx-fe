import Link from 'next/link';
import type { Metadata } from 'next';
import BackButton from './_components/BackButton';

export const metadata: Metadata = {
  title: '404 — Página no encontrada | PROYECT-X',
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-base flex flex-col items-center justify-center overflow-hidden px-4 py-16">

      {/* ── Scan line ─────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green/20 to-transparent z-20"
        style={{ animation: 'scan-line 8s linear infinite' }}
      />

      {/* ── Dot grid ──────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #F9FAFB 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Glows ─────────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] bg-brand-red rounded-full blur-[110px]"
        style={{ animation: 'glow-pulse 5s ease-in-out infinite' }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-[360px] h-[360px] bg-brand-green rounded-full blur-[110px]"
        style={{ animation: 'glow-pulse 5s ease-in-out 2.5s infinite' }}
      />

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md gap-8 sm:gap-10">

        {/* 404 — glitch hero */}
        <div
          className="relative select-none leading-none"
          style={{ animation: 'fade-up 0.5s ease both, float 7s ease-in-out 0.6s infinite' }}
        >
          {/* Glitch layer 1 — red shift */}
          <span
            aria-hidden="true"
            className="absolute inset-0 text-[6.5rem] sm:text-[9rem] md:text-[12rem] font-black tracking-tighter leading-none text-brand-red"
            style={{
              animation: 'glitch-1 3s steps(2) infinite',
              willChange: 'clip-path, transform',
            }}
          >
            404
          </span>

          {/* Glitch layer 2 — green shift */}
          <span
            aria-hidden="true"
            className="absolute inset-0 text-[6.5rem] sm:text-[9rem] md:text-[12rem] font-black tracking-tighter leading-none text-brand-green"
            style={{
              animation: 'glitch-2 3s steps(2) 0.1s infinite',
              willChange: 'clip-path, transform',
            }}
          >
            404
          </span>

          {/* Main text — accessible */}
          <span className="relative text-[6.5rem] sm:text-[9rem] md:text-[12rem] font-black tracking-tighter leading-none text-ink">
            404
          </span>
        </div>

        {/* Divider with badge */}
        <div
          className="flex items-center gap-3 w-full"
          style={{ animation: 'fade-up 0.5s ease 0.25s both' }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
          <span className="px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-mono uppercase tracking-[0.15em] text-ink-faint whitespace-nowrap">
            Error 404
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
        </div>

        {/* Message */}
        <div
          className="flex flex-col gap-3"
          style={{ animation: 'fade-up 0.5s ease 0.4s both' }}
        >
          <h1 className="text-xl sm:text-2xl font-bold text-ink">
            Página no encontrada
          </h1>
          <p className="text-sm sm:text-base text-ink-soft leading-relaxed max-w-xs sm:max-w-sm mx-auto">
            La ruta que buscas no existe o fue movida.
            Verifica la URL o regresa a un lugar seguro.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          style={{ animation: 'fade-up 0.5s ease 0.55s both' }}
        >
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-green hover:bg-brand-green-dark rounded-lg text-sm font-semibold text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Ir al inicio
          </Link>

          <BackButton />
        </div>
      </div>

      {/* ── Brand watermark ───────────────────────────────────── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        style={{ animation: 'fade-up 0.5s ease 0.7s both' }}
      >
        <span className="text-sm font-black tracking-tighter select-none">
          <span className="text-brand-red/30">PROYECT-</span>
          <span className="text-brand-green/30">X</span>
        </span>
      </div>

    </main>
  );
}
