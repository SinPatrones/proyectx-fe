export interface MetaData {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
}

export interface NavbarData {
  brandPrimary: string;
  brandAccent: string;
  links: { label: string; href: string }[];
  cta: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroData {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  typingPhrases: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  stats: HeroStat[];
  backgroundImage: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesData {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

export interface StepItem {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorksData {
  sectionLabel: string;
  title: string;
  subtitle: string;
  steps: StepItem[];
  backgroundImage: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface BenefitsData {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: BenefitItem[];
  backgroundImage: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  priceAnnual: string;
  period: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

export interface PricingData {
  sectionLabel: string;
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterData {
  brandPrimary: string;
  brandAccent: string;
  tagline: string;
  links: FooterLink[];
  contact: { label: string; value: string }[];
  copyright: string;
}

export interface MiTesiaContent {
  meta: MetaData;
  navbar: NavbarData;
  hero: HeroData;
  features: FeaturesData;
  howItWorks: HowItWorksData;
  benefits: BenefitsData;
  pricing: PricingData;
  footer: FooterData;
}
