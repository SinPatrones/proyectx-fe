// Domain entities for the landing page content

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroData {
  badge: string;
  title: { prefix: string; suffix: string };
  subtitle: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface AboutData {
  sectionTitle: string;
  commitmentTitle: string;
  commitmentText: string;
  locationTitle: string;
  locationText: string;
  locationAddress: string;
}

export interface MissionItem {
  title: string;
  description: string;
  icon: string;
}

export interface MissionData {
  sectionTitle: string;
  mainText: string;
  items: MissionItem[];
}

export interface VisionLevel {
  title: string;
  description: string;
  icon: string;
  width: string;
}

export interface VisionData {
  sectionTitle: string;
  description: string;
  levels: VisionLevel[];
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectsData {
  sectionTitle: string;
  subtitle: string;
  cards: ServiceCard[];
}

export interface MethodologyItem {
  title: string;
  description: string;
  icon: string;
}

export interface MethodologyData {
  sectionTitle: string;
  subtitle: string;
  items: MethodologyItem[];
  imageUrl: string;
  imageAlt: string;
}

export interface SpecializationArea {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface SpecializationData {
  sectionTitle: string;
  subtitle: string;
  areas: SpecializationArea[];
}

export interface SpssItem {
  title: string;
  description: string;
  icon: string;
}

export interface SpssData {
  sectionTitle: string;
  subtitle: string;
  items: SpssItem[];
}

export interface AcademicWorkCard {
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  imageAlt: string;
}

export interface AcademicWorksData {
  sectionTitle: string;
  subtitle: string;
  cards: AcademicWorkCard[];
}

export interface SoftwareCard {
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  imageAlt: string;
}

export interface SoftwareData {
  sectionTitle: string;
  subtitle: string;
  cards: SoftwareCard[];
}

export interface TurnitinItem {
  title: string;
  description: string;
  icon: string;
}

export interface TurnitinData {
  sectionTitle: string;
  subtitle: string;
  items: TurnitinItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessData {
  sectionTitle: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface BenefitsData {
  sectionTitle: string;
  subtitle: string;
  items: BenefitItem[];
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface TestimonialsData {
  sectionTitle: string;
  subtitle: string;
  stats: StatItem[];
}

export interface ScheduleDay {
  days: string;
  hours: string;
  range: string;
}

export interface ScheduleData {
  sectionTitle: string;
  subtitle: string;
  message: string;
  schedule: ScheduleDay[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  sectionTitle: string;
  subtitle: string;
  items: FaqItem[];
}

export interface ContactData {
  sectionTitle: string;
  subtitle: string;
  address: string;
  addressDetail: string;
  phone: string;
  email: string;
  whatsappHref: string;
  mapsHref: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
  icon: string;
}

export interface WhyUsData {
  sectionTitle: string;
  subtitle: string;
  items: WhyUsItem[];
}

export interface CtaData {
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface FooterData {
  brand: { prefix: string; suffix: string };
  tagline: string;
  navLinks: NavLink[];
  address: string;
  phone: string;
  email: string;
  copyright: string;
}

export interface LandingPageContent {
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
  };
  navbar: {
    brand: { prefix: string; suffix: string };
    links: NavLink[];
    ctaLabel: string;
    ctaHref: string;
  };
  hero: HeroData;
  about: AboutData;
  mission: MissionData;
  vision: VisionData;
  projects: ProjectsData;
  methodology: MethodologyData;
  specialization: SpecializationData;
  spss: SpssData;
  academicWorks: AcademicWorksData;
  software: SoftwareData;
  turnitin: TurnitinData;
  process: ProcessData;
  benefits: BenefitsData;
  testimonials: TestimonialsData;
  schedule: ScheduleData;
  faq: FaqData;
  contact: ContactData;
  whyUs: WhyUsData;
  cta: CtaData;
  footer: FooterData;
}
