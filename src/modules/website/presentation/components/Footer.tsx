import { MapPin, Phone, Mail } from "lucide-react";
import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

interface FooterProps {
  data: LandingPageContent["footer"];
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="relative w-full bg-gray-900 overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-red via-red-400 to-brand-green" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" className="inline-block mb-4">
              <span className="text-3xl font-black tracking-tighter select-none">
                <span className="text-brand-red">{data.brand.prefix}</span>
                <span className="text-brand-green">{data.brand.suffix}</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {data.tagline}
            </p>
            <div className="flex gap-1.5">
              <div className="w-8 h-1 rounded-full bg-brand-red" />
              <div className="w-4 h-1 rounded-full bg-brand-green" />
              <div className="w-2 h-1 rounded-full bg-gray-600" />
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">
              Navegación
            </h3>
            <ul className="space-y-3">
              {data.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-red text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">
              Servicios
            </h3>
            <ul className="space-y-3">
              {[
                "Asesoría de Tesis",
                "Estadística SPSS",
                "Turnitin",
                "Desarrollo de Software",
                "Trabajos Académicos",
                "Metodología",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-gray-400 hover:text-brand-green text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={15} className="text-brand-red flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {data.address}
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} className="text-brand-green flex-shrink-0" />
                <a
                  href={`tel:${data.phone.replace(/\s/g, "")}`}
                  className="text-gray-400 hover:text-brand-green text-sm transition-colors"
                >
                  {data.phone}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} className="text-brand-red flex-shrink-0" />
                <a
                  href={`mailto:${data.email}`}
                  className="text-gray-400 hover:text-brand-red text-sm transition-colors break-all"
                >
                  {data.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            {data.copyright}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-xs">Hecho con</span>
            <span className="text-brand-red text-xs">♥</span>
            <span className="text-gray-500 text-xs">en Perú</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
