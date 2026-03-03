interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  tinted?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  tinted = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative overflow-hidden ${
        tinted ? "bg-slate-50" : "bg-white"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: "red" | "green";
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  accent = "red",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase ${
          accent === "red"
            ? "border-brand-red/30 bg-red-50 text-brand-red"
            : "border-brand-green/30 bg-green-50 text-brand-green"
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            accent === "red" ? "bg-brand-red" : "bg-brand-green"
          }`}
        />
        {title}
      </div>
      {subtitle && (
        <p
          className={`text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
