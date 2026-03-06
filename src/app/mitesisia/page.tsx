import type { Metadata } from "next";
import { miTesiaData } from "@/modules/mitesisia/presentation/data/mitesisia.data";
import { Navbar } from "@/modules/mitesisia/presentation/components/Navbar";
import { HeroSection } from "@/modules/mitesisia/presentation/components/HeroSection";
import { FeaturesSection } from "@/modules/mitesisia/presentation/components/FeaturesSection";
import { HowItWorksSection } from "@/modules/mitesisia/presentation/components/HowItWorksSection";
import { BenefitsSection } from "@/modules/mitesisia/presentation/components/BenefitsSection";
import { PricingSection } from "@/modules/mitesisia/presentation/components/PricingSection";
import { Footer } from "@/modules/mitesisia/presentation/components/Footer";

export const metadata: Metadata = {
  title: miTesiaData.meta.title,
  description: miTesiaData.meta.description,
  keywords: miTesiaData.meta.keywords,
  robots: "index, follow",
  openGraph: {
    title: miTesiaData.meta.title,
    description: miTesiaData.meta.description,
    siteName: "Mi Tesis IA",
    locale: "es_PE",
    images: [{ url: miTesiaData.meta.ogImage }],
  },
};

export default function MiTesiaPage() {
  return (
    <>
      <Navbar data={miTesiaData.navbar} />
      <main>
        <HeroSection data={miTesiaData.hero} />
        <FeaturesSection data={miTesiaData.features} />
        <HowItWorksSection data={miTesiaData.howItWorks} />
        <BenefitsSection data={miTesiaData.benefits} />
        <PricingSection data={miTesiaData.pricing} />
      </main>
      <Footer data={miTesiaData.footer} />
    </>
  );
}
