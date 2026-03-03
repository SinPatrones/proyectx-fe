import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { SectionWrapper, SectionHeading } from "./SectionWrapper";
import { AnimatedSection } from "./AnimatedSection";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

interface ContactSectionProps {
  data: LandingPageContent["contact"];
}

export function ContactSection({ data }: ContactSectionProps) {
  const contactItems = [
    {
      icon: MapPin,
      label: "Dirección",
      value: `${data.address} — ${data.addressDetail}`,
      href: data.mapsHref,
      isRed: true,
    },
    {
      icon: Phone,
      label: "Teléfono / WhatsApp",
      value: data.phone,
      href: data.whatsappHref,
      isRed: false,
    },
    {
      icon: Mail,
      label: "Correo Electrónico",
      value: data.email,
      href: `mailto:${data.email}`,
      isRed: true,
    },
  ];

  return (
    <SectionWrapper id="contacto" tinted>
      <AnimatedSection>
        <SectionHeading
          title={data.sectionTitle}
          subtitle={data.subtitle}
          accent="red"
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact info */}
        <AnimatedSection delay={100}>
          <div className="space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex gap-5 p-6 rounded-2xl border bg-white shadow-sm group hover:shadow-md transition-all duration-300 ${
                    item.isRed
                      ? "border-gray-200 hover:border-brand-red/30"
                      : "border-gray-200 hover:border-brand-green/30"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.isRed ? "bg-red-50" : "bg-green-50"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={item.isRed ? "text-brand-red" : "text-brand-green"}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium leading-relaxed break-words transition-colors ${
                        item.isRed
                          ? "text-gray-800 hover:text-brand-red"
                          : "text-gray-800 hover:text-brand-green"
                      }`}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* CTA card */}
        <AnimatedSection delay={200}>
          <div className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-red-400 to-brand-green rounded-t-2xl" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-red-50 blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                ¿Listo para comenzar?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-7">
                Contáctanos por WhatsApp para una consulta rápida y sin compromiso. Estamos listos para ayudarte.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={data.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-light text-white font-bold text-sm transition-all duration-200 shadow-md shadow-brand-red/25 hover:shadow-brand-red/40 hover:-translate-y-0.5"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href={`mailto:${data.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-gray-200 hover:border-brand-green/40 hover:bg-green-50 text-gray-700 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
