import type { Metadata } from "next";
import { landingData } from "@/modules/website/presentation/data/landing.data";
import { Navbar } from "@/modules/website/presentation/components/Navbar";
import { HeroSection } from "@/modules/website/presentation/components/HeroSection";
import { AboutSection } from "@/modules/website/presentation/components/AboutSection";
import { MissionSection } from "@/modules/website/presentation/components/MissionSection";
import { VisionSection } from "@/modules/website/presentation/components/VisionSection";
import { ProjectsSection } from "@/modules/website/presentation/components/ProjectsSection";
import { MethodologySection } from "@/modules/website/presentation/components/MethodologySection";
import { SpecializationSection } from "@/modules/website/presentation/components/SpecializationSection";
import { SpssSection } from "@/modules/website/presentation/components/SpssSection";
import { AcademicWorksSection } from "@/modules/website/presentation/components/AcademicWorksSection";
import { SoftwareSection } from "@/modules/website/presentation/components/SoftwareSection";
import { TurnitinSection } from "@/modules/website/presentation/components/TurnitinSection";
import { ProcessSection } from "@/modules/website/presentation/components/ProcessSection";
import { BenefitsSection } from "@/modules/website/presentation/components/BenefitsSection";
import { TestimonialsSection } from "@/modules/website/presentation/components/TestimonialsSection";
import { ScheduleSection } from "@/modules/website/presentation/components/ScheduleSection";
import { FaqSection } from "@/modules/website/presentation/components/FaqSection";
import { ContactSection } from "@/modules/website/presentation/components/ContactSection";
import { WhyUsSection } from "@/modules/website/presentation/components/WhyUsSection";
import { CtaSection } from "@/modules/website/presentation/components/CtaSection";
import { Footer } from "@/modules/website/presentation/components/Footer";

export const metadata: Metadata = {
  title: landingData.meta.title,
  description: landingData.meta.description,
  keywords: landingData.meta.keywords,
  authors: [{ name: "Proyect-X" }],
  robots: "index, follow",
  openGraph: {
    title: landingData.meta.title,
    description: landingData.meta.description,
    type: "website",
    locale: "es_PE",
    siteName: "Proyect-X",
  },
  twitter: {
    card: "summary_large_image",
    title: landingData.meta.title,
    description: landingData.meta.description,
  },
};

export default function Home() {
  const d = landingData;

  return (
    <>
      <Navbar data={d.navbar} />

      <main>
        <HeroSection data={d.hero} />
        <AboutSection data={d.about} />
        <MissionSection data={d.mission} />
        <VisionSection data={d.vision} />
        <ProjectsSection data={d.projects} />
        <MethodologySection data={d.methodology} />
        <SpecializationSection data={d.specialization} />
        <SpssSection data={d.spss} />
        <AcademicWorksSection data={d.academicWorks} />
        <SoftwareSection data={d.software} />
        <TurnitinSection data={d.turnitin} />
        <ProcessSection data={d.process} />
        <BenefitsSection data={d.benefits} />
        <TestimonialsSection data={d.testimonials} />
        <ScheduleSection data={d.schedule} whatsappHref={d.contact.whatsappHref} />
        <FaqSection data={d.faq} />
        <ContactSection data={d.contact} />
        <WhyUsSection data={d.whyUs} />
        <CtaSection data={d.cta} />
      </main>

      <Footer data={d.footer} />
    </>
  );
}
