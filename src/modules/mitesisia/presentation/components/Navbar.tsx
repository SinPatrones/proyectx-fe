"use client";

import { useState, useEffect } from "react";
import type { NavbarData } from "@/modules/mitesisia/domain/entities/MiTesiaContent";

interface NavbarProps {
  data: NavbarData;
}

export function Navbar({ data }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !menuOpen && scrolled
          ? "bg-[#050A14]/90 backdrop-blur-md border-b border-[#2563EB]/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="flex items-center gap-0.5 font-bold text-xl tracking-wider">
            <span className="text-[#3B82F6]">{data.brandPrimary}</span>
            <span className="text-[#06B6D4]"> {data.brandAccent}</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {data.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#precios"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300"
          >
            {data.cta}
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-[#F1F5F9] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#F1F5F9] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#F1F5F9] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop blur */}
        <div className="absolute inset-0 bg-[#050A14]/95 backdrop-blur-xl" />

        {/* Gradient accents */}
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#2563EB]/10 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#06B6D4]/10 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
          className="absolute top-4 right-4 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-[#2563EB]/30 bg-[#0A1628]/60 text-[#94A3B8] hover:text-white hover:border-[#06B6D4]/60 hover:bg-[#06B6D4]/10 transition-all duration-300"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="2" y1="2" x2="16" y2="16" />
            <line x1="16" y1="2" x2="2" y2="16" />
          </svg>
        </button>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 px-8">
          {/* Brand */}
          <div className="mb-10 font-bold text-2xl tracking-wider">
            <span className="text-[#3B82F6]">{data.brandPrimary}</span>
            <span className="text-[#06B6D4]"> {data.brandAccent}</span>
          </div>

          {/* Links */}
          {data.links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-4 text-lg font-semibold text-[#94A3B8] hover:text-white border-b border-[#2563EB]/10 hover:border-[#06B6D4]/40"
              style={{
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                opacity: menuOpen ? 1 : 0,
                transition: `color 0.3s, border-color 0.3s, opacity 0.4s ${i * 60}ms, transform 0.4s ${i * 60}ms`,
              }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#precios"
            onClick={() => setMenuOpen(false)}
            className="mt-8 w-full text-center px-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"
            style={{
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              opacity: menuOpen ? 1 : 0,
              transition: `box-shadow 0.3s, opacity 0.4s ${data.links.length * 60}ms, transform 0.4s ${data.links.length * 60}ms`,
            }}
          >
            {data.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
