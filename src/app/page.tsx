const services = [
  {
    title: "Estudiantes",
    desc: "Apoyo académico y orientación en proyectos de grado, tesis y trabajos de investigación.",
    accent: "brand-red",
  },
  {
    title: "Académicos",
    desc: "Asesoría especializada para investigación científica, publicaciones y docencia.",
    accent: "brand-green",
  },
  {
    title: "Profesionales",
    desc: "Desarrollo de proyectos, consultoría técnica y crecimiento en etapas formativas.",
    accent: "brand-red",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-base flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">

      {/* Glow decorativo superior — rojo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-red/8 rounded-full blur-3xl pointer-events-none" />

      {/* Glow decorativo inferior — verde */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-brand-green/8 rounded-full blur-3xl pointer-events-none" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">

        {/* Logotipo */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-none mb-8 select-none">
          <span className="text-brand-red">PROYECT-</span>
          <span className="text-brand-green">X</span>
        </h1>

        {/* Badge de estado */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-brand-red/30 bg-brand-red/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse block" />
          <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">
            En Construcción
          </span>
        </div>

        {/* Titular */}
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-5 leading-tight">
          Algo grande está por llegar
        </h2>

        {/* Misión */}
        <p className="text-ink-soft text-base md:text-lg leading-relaxed mb-10 max-w-xl">
          Estamos construyendo una plataforma dedicada a brindar{" "}
          <span className="text-brand-green font-medium">
            apoyo, asesoría y desarrollo de proyectos
          </span>{" "}
          para estudiantes, académicos y profesionales en sus etapas formativas
          e investigativas.
        </p>

        {/* Divisor */}
        <div className="flex items-center gap-3 w-full mb-10">
          <div className="flex-1 h-px bg-border" />
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-red" />
            <span className="w-2 h-2 rounded-full bg-brand-green" />
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-12">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-5 rounded-xl border border-border bg-surface text-left hover:border-border/60 transition-colors"
            >
              <div
                className={`w-8 h-1 rounded-full mb-4 ${
                  s.accent === "brand-green"
                    ? "bg-brand-green"
                    : "bg-brand-red"
                }`}
              />
              <h3 className="text-ink font-semibold mb-1.5">{s.title}</h3>
              <p className="text-ink-faint text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Nota final */}
        <p className="text-ink-faint text-sm tracking-wide">
          Próximamente en línea &mdash; Mantente al tanto
        </p>
      </div>
    </main>
  );
}
