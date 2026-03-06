import type { LandingPageContent } from "@/modules/website/domain/entities/LandingContent";

const WHATSAPP_NUMBER = "51913258623";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;

export const landingData: LandingPageContent = {
  meta: {
    title:
      "Proyect-X | Asesoría Académica y Desarrollo de Proyectos",
    description:
      "Somos tu socio académico en Arequipa. Brindamos servicios de alta calidad en asesoría académica, investigación, estadística SPSS, Turnitin, desarrollo de tesis y software. Cercado Arequipa.",
    keywords:
      "asesoría académica Arequipa, tesis Arequipa, SPSS Arequipa, Turnitin, desarrollo de proyectos, investigación, estadística, software académico",
    ogImage: "/og-image.jpg",
  },

  navbar: {
    brand: { prefix: "PROYECT-", suffix: "X" },
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Servicios", href: "#servicios" },
      { label: "Metodología", href: "#metodologia" },
      { label: "Proceso", href: "#proceso" },
      { label: "Contacto", href: "#contacto" },
    ],
    ctaLabel: "Contáctanos",
    ctaHref: WHATSAPP_HREF,
  },

  hero: {
    badge: "Tu Socio Académico",
    title: { prefix: "PROYECT-", suffix: "X" },
    subtitle: "Tu Socio Académico",
    description:
      "Servicios de alta calidad en asesoría académica, investigación y desarrollo de proyectos. Comprometidos con tu éxito educativo y profesional.",
    ctaPrimary: { label: "Contáctanos Ahora", href: WHATSAPP_HREF },
    ctaSecondary: { label: "Nuestros Servicios", href: "#servicios" },
  },

  about: {
    sectionTitle: "Quiénes Somos",
    commitmentTitle: "Nuestro Compromiso",
    commitmentText:
      "Somos un equipo dedicado a proporcionar servicios de alta calidad en el ámbito académico y de investigación, abarcando diversas especialidades para apoyarte en cada etapa de tu camino educativo y profesional.",
    locationTitle: "Ubicación",
    locationText: "Encuéntranos en el corazón de Arequipa",
    locationAddress:
      "Av. Independencia, Centro Comercial Héroes Anónimos 624, 2do piso, tienda Proyect-X, Cercado Arequipa.",
  },

  mission: {
    sectionTitle: "Nuestra Misión",
    mainText:
      "Ser el socio confiable y experto de estudiantes, académicos y profesionales en su búsqueda de excelencia educativa y desarrollo académico.",
    items: [
      {
        title: "Servicios de Alta Calidad",
        description:
          "Brindamos servicios excepcionales en diseño, investigación y estadísticas.",
        icon: "Star",
      },
      {
        title: "Enfoque Personalizado",
        description:
          "Guiamos y empoderamos a nuestros clientes con atención individualizada.",
        icon: "Users",
      },
      {
        title: "Crecimiento Intelectual",
        description:
          "Promovemos el desarrollo académico y el logro de resultados sobresalientes.",
        icon: "TrendingUp",
      },
    ],
  },

  vision: {
    sectionTitle: "Nuestra Visión",
    description:
      "En Proyect-X aspiramos a ser reconocidos por nuestra excelencia en la aplicación de metodologías de investigación y diseño innovador, así como por nuestro compromiso con la calidad y la ética en todos los aspectos de nuestra labor.",
    levels: [
      {
        title: "Liderazgo Global",
        description: "Referencia mundial en asesoría académica",
        icon: "Globe",
        width: "w-48 sm:w-56",
      },
      {
        title: "Excelencia Metodológica",
        description: "Reconocidos por metodologías innovadoras",
        icon: "Award",
        width: "w-64 sm:w-72",
      },
      {
        title: "Puente al Éxito",
        description: "Conectando conocimiento y logro",
        icon: "Zap",
        width: "w-80 sm:w-96",
      },
    ],
  },

  projects: {
    sectionTitle: "Asesoría y Diseño de Proyectos Académicos",
    subtitle:
      "Acompañamos cada etapa de tu proyecto con rigor metodológico y dedicación.",
    cards: [
      {
        title: "Proyectos de Investigación",
        description:
          "Desarrollo completo de proyectos de investigación educativa con metodologías rigurosas y actualizadas.",
        icon: "FlaskConical",
      },
      {
        title: "Desarrollo de Tesis",
        description:
          "Asistencia integral en la elaboración de tesis en diversas especialidades académicas.",
        icon: "BookOpen",
      },
      {
        title: "Orientación Personalizada",
        description:
          "Asesoramiento detallado en cada fase de tu proyecto de tesis, desde la concepción hasta la defensa.",
        icon: "MessageCircle",
      },
    ],
  },

  methodology: {
    sectionTitle: "Metodología de Investigación Profesional",
    subtitle:
      "Aplicamos estándares internacionales para garantizar la calidad de tu investigación.",
    items: [
      {
        title: "Normas Académicas",
        description:
          "Experiencia en aplicación de normas como APA, Vancouver, IEEE y otras referencias estándar.",
        icon: "BookMarked",
      },
      {
        title: "Métodos Rigurosos",
        description:
          "Especialización en metodologías de investigación científica y académica de alto nivel.",
        icon: "FlaskConical",
      },
      {
        title: "Validación de Resultados",
        description:
          "Procesos de verificación y validación para garantizar la calidad de la investigación.",
        icon: "CheckCircle",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=80",
    imageAlt: "Investigación y metodología académica",
  },

  specialization: {
    sectionTitle: "Áreas de Especialización",
    subtitle:
      "Cubrimos un amplio espectro de disciplinas para atender todas tus necesidades académicas.",
    areas: [
      {
        title: "Educación",
        description: "Pedagogía, didáctica y gestión educativa",
        icon: "GraduationCap",
        color: "brand-red",
      },
      {
        title: "Ciencias Administrativas",
        description: "Administración, contabilidad y economía",
        icon: "Briefcase",
        color: "brand-green",
      },
      {
        title: "Ingenierías",
        description: "Civil, sistemas, industrial y más",
        icon: "Cog",
        color: "brand-red",
      },
      {
        title: "Ciencias Sociales",
        description: "Sociología, psicología y antropología",
        icon: "Users",
        color: "brand-green",
      },
      {
        title: "Ciencias Médicas",
        description: "Medicina, enfermería y salud pública",
        icon: "HeartPulse",
        color: "brand-red",
      },
      {
        title: "Turismo y Hotelería",
        description: "Gestión turística y administración hotelera",
        icon: "Plane",
        color: "brand-green",
      },
    ],
  },

  spss: {
    sectionTitle: "Servicios Estadísticos en SPSS",
    subtitle:
      "Análisis estadístico profesional para validar tu investigación con rigor científico.",
    items: [
      {
        title: "Pruebas Estadísticas",
        description:
          "Chi Cuadrado, T Student y otras pruebas especializadas para validar tus hipótesis.",
        icon: "BarChart3",
      },
      {
        title: "Comprobación de Hipótesis",
        description:
          "Análisis riguroso para verificar o refutar las hipótesis de tu investigación.",
        icon: "CheckSquare",
      },
      {
        title: "Análisis de Correlación",
        description:
          "Métodos Spearman y Pearson para determinar relaciones entre variables.",
        icon: "TrendingUp",
      },
      {
        title: "Alfa de Cronbach",
        description:
          "Cálculo de fiabilidad para instrumentos de investigación y encuestas.",
        icon: "Activity",
      },
    ],
  },

  academicWorks: {
    sectionTitle: "Trabajos Académicos",
    subtitle:
      "Desarrollamos todo tipo de trabajos académicos con rigor metodológico y científico.",
    cards: [
      {
        title: "Resolución de Problemas",
        description:
          "Física (I, II, III) y otras materias técnicas con explicaciones detalladas.",
        icon: "Calculator",
        imageUrl:
          "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&q=80",
        imageAlt: "Resolución de problemas académicos",
      },
      {
        title: "Documentos Académicos",
        description:
          "Monografías, ensayos y artículos con rigor metodológico y científico.",
        icon: "FileText",
        imageUrl:
          "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80",
        imageAlt: "Documentos académicos y monografías",
      },
      {
        title: "Publicaciones Científicas",
        description:
          "Papers y artículos para revistas académicas y conferencias.",
        icon: "BookOpen",
        imageUrl:
          "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&q=80",
        imageAlt: "Publicaciones y papers científicos",
      },
    ],
  },

  software: {
    sectionTitle: "Desarrollo de Software y Diseño Web",
    subtitle:
      "Soluciones tecnológicas a medida para proyectos académicos y empresariales.",
    cards: [
      {
        title: "Programación de Sistemas",
        description:
          "Desarrollo en .Net, Visual Studio C#, Sharp C#, Java y más.",
        icon: "Code",
        imageUrl:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
        imageAlt: "Programación y desarrollo de sistemas",
      },
      {
        title: "Diseño Web Personalizado",
        description:
          "Creación de sitios web para proyectos académicos y empresariales.",
        icon: "Globe",
        imageUrl:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80",
        imageAlt: "Diseño web personalizado",
      },
      {
        title: "Aplicaciones Móviles",
        description: "Desarrollo de soluciones para dispositivos móviles.",
        icon: "Smartphone",
        imageUrl:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
        imageAlt: "Aplicaciones móviles",
      },
    ],
  },

  turnitin: {
    sectionTitle: "Servicio de Turnitin",
    subtitle:
      "Garantizamos la originalidad de tu trabajo con análisis profesional y parafraseo especializado.",
    items: [
      {
        title: "Verificación de Originalidad",
        description:
          "Análisis completo de tu trabajo para garantizar que cumple con los estándares de originalidad requeridos por tu institución.",
        icon: "Shield",
      },
      {
        title: "Parafraseo Profesional",
        description:
          "Servicio especializado para reformular contenido manteniendo el significado original y mejorando la originalidad.",
        icon: "FileSearch",
      },
      {
        title: "Cumplimiento Académico",
        description:
          "Aseguramos que tu trabajo cumpla con el porcentaje de originalidad exigido por tu universidad.",
        icon: "CheckCircle",
      },
    ],
  },

  process: {
    sectionTitle: "Nuestro Proceso de Trabajo",
    subtitle:
      "Un proceso claro y transparente para garantizar los mejores resultados.",
    steps: [
      {
        number: "01",
        title: "Consulta Inicial",
        description:
          "Evaluamos tus necesidades y establecemos objetivos claros para tu proyecto.",
        icon: "PhoneCall",
      },
      {
        number: "02",
        title: "Planificación",
        description:
          "Desarrollamos un plan detallado con metodología, plazos y entregables.",
        icon: "Calendar",
      },
      {
        number: "03",
        title: "Desarrollo",
        description:
          "Ejecutamos el proyecto con seguimiento constante y comunicación fluida.",
        icon: "Code2",
      },
      {
        number: "04",
        title: "Revisión y Entrega",
        description:
          "Verificamos la calidad y realizamos los ajustes necesarios antes de la entrega final.",
        icon: "CheckCircle2",
      },
    ],
  },

  benefits: {
    sectionTitle: "Beneficios de Nuestros Servicios",
    subtitle: "Razones por las que nuestros clientes confían en nosotros.",
    items: [
      {
        title: "Ahorro de Tiempo",
        description:
          "Optimiza tu tiempo para concentrarte en otros aspectos importantes de tu formación académica.",
        icon: "Clock",
      },
      {
        title: "Asesoría Experta",
        description:
          "Accede a conocimientos especializados en diversas áreas académicas y metodológicas.",
        icon: "BookOpen",
      },
      {
        title: "Calidad Garantizada",
        description:
          "Trabajos desarrollados con rigor académico y profesional que cumplen con los estándares más exigentes.",
        icon: "Award",
      },
      {
        title: "Mejores Resultados",
        description:
          "Aumenta tus posibilidades de éxito académico y profesional con nuestro apoyo.",
        icon: "TrendingUp",
      },
    ],
  },

  testimonials: {
    sectionTitle: "Testimonios de Clientes",
    subtitle: "Números que respaldan nuestro compromiso con la excelencia.",
    stats: [
      {
        value: "98%",
        label: "Satisfacción",
        description: "De nuestros clientes recomendarían nuestros servicios",
      },
      {
        value: "250+",
        label: "Proyectos",
        description: "Completados exitosamente en el último año",
      },
      {
        value: "15+",
        label: "Especialidades",
        description: "Académicas cubiertas por nuestro equipo experto",
      },
    ],
  },

  schedule: {
    sectionTitle: "Horarios de Atención",
    subtitle: "Estamos disponibles para atender todas tus consultas.",
    message:
      "Estamos disponibles de lunes a sábado para atender todas tus consultas y necesidades académicas. Nuestro equipo está listo para brindarte la mejor atención y asesoría personalizada.",
    schedule: [
      {
        days: "Lunes a Viernes",
        hours: "8 horas",
        range: "9:00 AM – 7:00 PM",
      },
      {
        days: "Sábados",
        hours: "6 horas",
        range: "9:00 AM – 3:00 PM",
      },
    ],
  },

  faq: {
    sectionTitle: "Preguntas Frecuentes",
    subtitle: "Resolvemos tus dudas más comunes.",
    items: [
      {
        question: "¿Qué garantías ofrecen en sus servicios?",
        answer:
          "Garantizamos la calidad académica, originalidad y cumplimiento de plazos en todos nuestros servicios. Trabajamos con revisiones hasta que el cliente esté completamente satisfecho con el resultado.",
      },
      {
        question: "¿Cómo funciona el servicio de Turnitin?",
        answer:
          "Analizamos tu documento con el software Turnitin para verificar su originalidad. Si es necesario, realizamos un parafraseo profesional para asegurar que cumpla con los requisitos de tu institución, manteniendo la integridad del contenido.",
      },
      {
        question: "¿Trabajan con plazos ajustados?",
        answer:
          "Sí, podemos adaptarnos a diferentes plazos, incluso los más ajustados. Sin embargo, recomendamos contactarnos con la mayor anticipación posible para garantizar los mejores resultados.",
      },
    ],
  },

  contact: {
    sectionTitle: "Contacto",
    subtitle:
      "Estamos listos para atenderte. Comunícate con nosotros por el canal que prefieras.",
    address: "Av. Independencia",
    addressDetail:
      "Centro Comercial Héroes Anónimos 624, 2do piso tienda Proyect-X, Cercado Arequipa.",
    phone: "+51 913 258 623",
    email: "zpq61@hotmail.com",
    whatsappHref: WHATSAPP_HREF,
    mapsHref:
      "https://www.google.com/maps/search/Av.+Independencia+Centro+Comercial+Héroes+Anónimos+624+Arequipa",
  },

  whyUs: {
    sectionTitle: "Por Qué Elegirnos",
    subtitle:
      "Somos tu mejor opción para el éxito académico y profesional.",
    items: [
      {
        title: "Experiencia Comprobada",
        description:
          "Años de trayectoria brindando servicios académicos de calidad a estudiantes y profesionales.",
        icon: "Award",
      },
      {
        title: "Equipo Multidisciplinario",
        description:
          "Profesionales especializados en diversas áreas académicas y técnicas.",
        icon: "Users",
      },
      {
        title: "Atención Personalizada",
        description:
          "Cada proyecto recibe atención individualizada según sus necesidades específicas.",
        icon: "Heart",
      },
      {
        title: "Resultados Garantizados",
        description:
          "Compromiso con la excelencia y satisfacción total del cliente.",
        icon: "CheckCircle",
      },
    ],
  },

  cta: {
    title: "¡Comienza Tu Proyecto Hoy!",
    subtitle: "Da el primer paso hacia tu éxito académico",
    description:
      "En Proyect-X estamos listos para ayudarte a alcanzar tus metas académicas y profesionales. Contáctanos ahora y descubre cómo podemos ser parte de tu éxito.",
    ctaPrimary: {
      label: "Agendar Consulta",
      href: WHATSAPP_HREF,
    },
    ctaSecondary: {
      label: "Llamar Ahora",
      href: "tel:+51913258623",
    },
  },

  footer: {
    brand: { prefix: "PROYECT-", suffix: "X" },
    tagline: "Tu Socio Académico en Arequipa",
    navLinks: [
      { label: "Inicio", href: "#inicio" },
      { label: "Quiénes Somos", href: "#quienes-somos" },
      { label: "Servicios", href: "#servicios" },
      { label: "Metodología", href: "#metodologia" },
      { label: "Proceso", href: "#proceso" },
      { label: "Contacto", href: "#contacto" },
    ],
    address:
      "Av. Independencia, CC. Héroes Anónimos 624, 2do piso, Cercado Arequipa.",
    phone: "+51 913 258 623",
    email: "zpq61@hotmail.com",
    copyright: "© 2025 Proyect-X. Todos los derechos reservados.",
  },
};
