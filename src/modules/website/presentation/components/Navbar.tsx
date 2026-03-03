"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

interface NavbarProps {
  data: LandingPageContent["navbar"];
}

export function Navbar({ data }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Brand */}
          <a href="#inicio" className="flex items-center" onClick={handleLinkClick}>
            <span className="text-2xl font-black tracking-tighter select-none">
              <span className="text-brand-red">{data.brand.prefix}</span>
              <span className="text-brand-green">{data.brand.suffix}</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {data.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={data.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-red hover:bg-brand-red-light text-white text-sm font-semibold transition-all duration-200 shadow-md shadow-brand-red/25 hover:shadow-brand-red/40 hover:-translate-y-0.5"
          >
            {data.ctaLabel}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-gray-200">
            {data.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={data.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="mt-2 px-5 py-3 rounded-xl bg-brand-red hover:bg-brand-red-light text-white text-sm font-semibold text-center transition-all duration-200"
            >
              {data.ctaLabel}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
