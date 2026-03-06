import type { MiTesiaContent } from "@/modules/mitesisia/domain/entities/MiTesiaContent";

export const miTesiaData: MiTesiaContent = {
  meta: {
    title: "Mi Tesis IA | Genera tu Tesis con Inteligencia Artificial",
    description:
      "Desarrolla tu tesis de grado con el apoyo de inteligencia artificial. Genera capítulos, metodología, referencias APA/ISO y exporta en Word o PDF en minutos.",
    keywords:
      "generar tesis con IA, asistente tesis inteligencia artificial, tesis automática IA Perú, escribir tesis IA, generador de tesis, tesis con chatgpt, tesis universitaria IA, metodología de investigación IA",
    ogImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
  },

  navbar: {
    brandPrimary: "MI TESIS",
    brandAccent: "IA",
    links: [
      { label: "Características", href: "#caracteristicas" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Beneficios", href: "#beneficios" },
      { label: "Precios", href: "#precios" },
    ],
    cta: "Comenzar Gratis",
  },

  hero: {
    badge: "Potenciado por Inteligencia Artificial",
    title: "Desarrolla tu Tesis con el",
    titleHighlight: "poder de la IA",
    subtitle: "El asistente inteligente que transforma tu idea en una tesis completa.",
    typingPhrases: [
      "Genera capítulos completos automáticamente",
      "Estructura tu metodología de investigación",
      "Crea referencias APA e ISO al instante",
      "Verifica la originalidad del contenido",
      "Exporta a Word o PDF listo para presentar",
    ],
    ctaPrimary: "Comenzar Gratis",
    ctaSecondary: "Ver Demo",
    stats: [
      { value: "500+", label: "Tesis generadas" },
      { value: "98%", label: "Tasa de aprobación" },
      { value: "24/7", label: "Disponibilidad" },
    ],
    backgroundImage:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80",
  },

  features: {
    sectionLabel: "Características",
    title: "Todo lo que necesitas para tu tesis",
    subtitle:
      "Herramientas de IA diseñadas específicamente para el proceso de investigación académica.",
    items: [
      {
        icon: "FileText",
        title: "Generación de Capítulos",
        description:
          "La IA redacta cada capítulo de tu tesis según tu tema, carrera y requerimientos académicos.",
      },
      {
        icon: "Brain",
        title: "Metodología Automática",
        description:
          "Detecta el tipo de investigación ideal y estructura la metodología adecuada para tu proyecto.",
      },
      {
        icon: "BookOpen",
        title: "Referencias APA / ISO",
        description:
          "Genera bibliografía con formato correcto y actualizado automáticamente desde tus fuentes.",
      },
      {
        icon: "ShieldCheck",
        title: "Anti-Plagio",
        description:
          "Verifica la originalidad del contenido generado y garantiza la autenticidad de tu trabajo.",
      },
      {
        icon: "MessageSquare",
        title: "Chat con tu Tesis",
        description:
          "Haz preguntas sobre tu investigación y recibe respuestas contextualizadas al instante.",
      },
      {
        icon: "Download",
        title: "Exportar a Word / PDF",
        description:
          "Descarga tu tesis lista para presentar en el formato requerido por tu universidad.",
      },
    ],
  },

  howItWorks: {
    sectionLabel: "Proceso",
    title: "Cuatro pasos hacia tu tesis",
    subtitle:
      "Un proceso guiado por IA que te lleva desde la idea hasta la sustentación.",
    steps: [
      {
        number: "01",
        icon: "UserPlus",
        title: "Regístrate y crea tu proyecto",
        description:
          "Ingresa tu tema de investigación, carrera y los requerimientos específicos de tu universidad.",
      },
      {
        number: "02",
        icon: "Cpu",
        title: "La IA analiza tu tema",
        description:
          "El asistente genera una estructura completa con todos los capítulos y objetivos de investigación.",
      },
      {
        number: "03",
        icon: "PenLine",
        title: "Revisa y edita",
        description:
          "Ajusta cada sección con la asistencia de la IA, agrega tu información y personaliza el contenido.",
      },
      {
        number: "04",
        icon: "GraduationCap",
        title: "Exporta y presenta",
        description:
          "Descarga tu tesis en Word o PDF, lista para la revisión de tu asesor y sustentación final.",
      },
    ],
    backgroundImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80",
  },

  benefits: {
    sectionLabel: "Beneficios",
    title: "¿Por qué elegir Mi Tesis IA?",
    subtitle:
      "Diseñado para estudiantes que buscan calidad, rapidez y resultados académicos reales.",
    items: [
      {
        icon: "Clock",
        title: "Ahorra semanas de trabajo",
        description:
          "Lo que antes tomaba meses, ahora lo logras en días. Optimiza tu tiempo sin sacrificar calidad.",
      },
      {
        icon: "CheckCircle",
        title: "Metodología correcta garantizada",
        description:
          "La IA aplica metodologías de investigación validadas académicamente para cada tipo de tesis.",
      },
      {
        icon: "Bot",
        title: "Asesoría disponible 24/7",
        description:
          "Tu asistente de IA está disponible en cualquier momento para guiarte en el proceso.",
      },
      {
        icon: "GraduationCap",
        title: "Cumple normas universitarias",
        description:
          "Formatos APA, ISO y normas específicas de universidades peruanas integradas en cada salida.",
      },
    ],
    backgroundImage:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80",
  },

  pricing: {
    sectionLabel: "Precios",
    title: "Planes para cada estudiante",
    subtitle:
      "Elige el plan que se adapta a tu proyecto. Sin compromisos, cancela cuando quieras.",
    plans: [
      {
        name: "Gratuito",
        price: "S/ 0",
        priceAnnual: "S/ 0",
        period: "/mes",
        description: "Para comenzar y explorar la plataforma.",
        features: [
          { text: "1 proyecto de tesis", included: true },
          { text: "Hasta 3 capítulos", included: true },
          { text: "Exportar en PDF", included: true },
          { text: "Referencias APA básicas", included: true },
          { text: "Anti-plagio", included: false },
          { text: "Soporte prioritario", included: false },
          { text: "Capítulos ilimitados", included: false },
        ],
        cta: "Comenzar Gratis",
        highlighted: false,
      },
      {
        name: "Pro",
        price: "S/ 49",
        priceAnnual: "S/ 39",
        period: "/mes",
        description: "Para estudiantes que necesitan resultados rápidos y completos.",
        badge: "Más Popular",
        features: [
          { text: "Proyectos ilimitados", included: true },
          { text: "Capítulos ilimitados", included: true },
          { text: "Exportar Word y PDF", included: true },
          { text: "Referencias APA e ISO", included: true },
          { text: "Anti-plagio incluido", included: true },
          { text: "Soporte prioritario", included: true },
          { text: "Chat con tu tesis", included: true },
        ],
        cta: "Comenzar con Pro",
        highlighted: true,
      },
      {
        name: "Institucional",
        price: "Consultar",
        priceAnnual: "Consultar",
        period: "",
        description: "Para universidades e institutos que quieren integrar la plataforma.",
        features: [
          { text: "Todo lo de Pro", included: true },
          { text: "Integración con universidad", included: true },
          { text: "Reportes de avance", included: true },
          { text: "Múltiples usuarios", included: true },
          { text: "API de integración", included: true },
          { text: "Soporte dedicado 24/7", included: true },
          { text: "Capacitaciones incluidas", included: true },
        ],
        cta: "Contactar ventas",
        highlighted: false,
      },
    ],
  },

  footer: {
    brandPrimary: "MI TESIS",
    brandAccent: "IA",
    tagline: "El asistente de IA para tu investigación académica.",
    links: [
      { label: "Características", href: "#caracteristicas" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Beneficios", href: "#beneficios" },
      { label: "Precios", href: "#precios" },
      { label: "Proyect-X", href: "/" },
    ],
    contact: [
      { label: "Email", value: "contacto@mitesisia.com" },
      { label: "WhatsApp", value: "+51 999 999 999" },
    ],
    copyright: "© 2026 Mi Tesis IA — Proyect-X. Todos los derechos reservados.",
  },
};
