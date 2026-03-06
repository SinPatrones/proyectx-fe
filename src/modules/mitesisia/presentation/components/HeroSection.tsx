"use client";

import { useState, useEffect } from "react";
import type { HeroData } from "@/modules/mitesisia/domain/entities/MiTesiaContent";

interface HeroSectionProps {
  data: HeroData;
}

export function HeroSection({ data }: HeroSectionProps) {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const phrase = data.typingPhrases[currentPhrase];
    let i = typing ? displayed.length : displayed.length - 1;
    let timer: ReturnType<typeof setTimeout>;

    if (typing) {
      if (i < phrase.length) {
        timer = setTimeout(() => setDisplayed(phrase.slice(0, i + 1)), 50);
      } else {
        timer = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (i >= 0) {
        timer = setTimeout(() => setDisplayed(phrase.slice(0, i)), 25);
      } else {
        setCurrentPhrase((prev) => (prev + 1) % data.typingPhrases.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, typing, currentPhrase, data.typingPhrases]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={data.backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#050A14]/85" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          animation: "grid-move 8s linear infinite",
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(6,182,212,0.08) 50%, transparent 70%)",
          animation: "ai-glow-pulse 4s ease-in-out infinite",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${4 + (i % 3) * 3}px`,
            height: `${4 + (i % 3) * 3}px`,
            background: i % 2 === 0 ? "rgba(37,99,235,0.6)" : "rgba(6,182,212,0.6)",
            top: `${15 + i * 12}%`,
            left: `${8 + i * 14}%`,
            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 text-[#22D3EE] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
          {data.badge}
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#F1F5F9] leading-tight mb-4">
          {data.title}{" "}
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #06B6D4, #3B82F6)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradient-shift 4s ease infinite",
            }}
          >
            {data.titleHighlight}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#94A3B8] mb-4">{data.subtitle}</p>

        {/* Typing effect */}
        <div className="h-8 flex items-center justify-center mb-10">
          <span
            className="font-mono text-base sm:text-lg font-semibold"
            style={{ color: "#ffffff", textShadow: "0 0 20px rgba(6,182,212,0.8)" }}
          >
            {displayed}
            <span style={{ color: "#22D3EE" }}>|</span>
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#precios"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white text-center bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-105"
          >
            {data.ctaPrimary}
          </a>
          <a
            href="#como-funciona"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white text-center border-2 border-[#22D3EE] bg-[#22D3EE]/15 hover:bg-[#22D3EE]/25 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            {data.ctaSecondary}
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {data.stats.map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-3 rounded-xl bg-[#0A1628]/80 border border-[#2563EB]/20 backdrop-blur-sm text-center"
            >
              <div className="text-2xl font-black text-[#F1F5F9]">{stat.value}</div>
              <div className="text-xs text-[#94A3B8] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
