import type { FooterData } from "@/modules/mitesisia/domain/entities/MiTesiaContent";

interface FooterProps {
  data: FooterData;
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-[#050A14] border-t border-[#2563EB]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-0.5 font-bold text-xl tracking-wider mb-3">
              <span className="text-[#3B82F6]">{data.brandPrimary}</span>
              <span className="text-[#06B6D4]"> {data.brandAccent}</span>
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed">{data.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#F1F5F9] font-semibold text-sm mb-4 uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2">
              {data.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#64748B] hover:text-[#06B6D4] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F1F5F9] font-semibold text-sm mb-4 uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-2">
              {data.contact.map((item) => (
                <li key={item.label} className="text-sm">
                  <span className="text-[#94A3B8]">{item.label}: </span>
                  <span className="text-[#64748B]">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-[#2563EB]/10 text-center">
          <p className="text-[#64748B] text-xs">{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
