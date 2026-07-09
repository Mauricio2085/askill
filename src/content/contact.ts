export type ContactCtaContent = {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel?: string;
};

export const contactContent = {
  title: "Contacto",
  intro:
    "Cuéntanos sobre tu planta, tu reto operativo o el proyecto que quieres impulsar. Nuestro equipo de ingeniería te responderá para evaluar la mejor solución.",
  form: {
    nameLabel: "Nombre completo",
    companyLabel: "Empresa",
    emailLabel: "Correo electrónico",
    phoneLabel: "Teléfono",
    messageLabel: "Mensaje",
    submitLabel: "Enviar mensaje",
    submittingLabel: "Enviando...",
    helperText:
      "Completa el formulario y nuestro equipo de ingeniería te contactará.",
    successMessage:
      "¡Gracias! Recibimos tu mensaje y te responderemos pronto desde ingeniería.",
    errorMessage:
      "No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos directamente por correo.",
  },
  info: {
    title: "Datos de contacto",
    email: "ingenieria@askillco.com",
    phone: "+57 310 678 9371",
    location: "Pereira, Risaralda — Colombia",
    hours: "Lunes a viernes, 8:00 a.m. – 5:00 p.m.",
    responseNote:
      "Respondemos solicitudes de lunes a viernes en horario laboral. Si tu necesidad es urgente, indícalo en el mensaje.",
  },
} as const;

export const contactCtaByPage = {
  home: {
    eyebrow: "Tu proyecto, nuestro expertise",
    title: "¿Listo para llevar tu planta al siguiente nivel?",
    description:
      "Automatización, control industrial e Industria 4.0 con ingeniería en piso de planta. Escríbenos y diseñemos juntos la solución que tu operación necesita.",
    buttonLabel: "Contáctanos",
  },
  about: {
    eyebrow: "Trabajemos juntos",
    title: "¿Buscas un aliado en mantenimiento y proyectos?",
    description:
      "Combinamos planificación rigurosa, ejecución impecable y resultados sostenibles. Cuéntanos tu reto y te proponemos el camino técnico más claro.",
    buttonLabel: "Contáctanos",
  },
  services: {
    eyebrow: "Hablemos de tu operación",
    title: "¿Cuál de estos retos tiene tu planta hoy?",
    description:
      "Cuéntanos tu contexto y te proponemos el servicio de ingeniería o el módulo digital más adecuado para tu operación.",
    buttonLabel: "Contáctanos",
  },
} satisfies Record<string, ContactCtaContent>;
