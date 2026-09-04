import { siteContact } from "@/lib/site";

export type ContactIntent = "engineering" | "platform";

export type ContactCtaContent = {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  href?: string;
};

export type ContactFormOption = {
  value: string;
  label: string;
};

/** Opciones para calificar la solicitud antes de la visita técnica. */
export const contactNeedOptions = [
  { value: "automatizacion-plc", label: "Automatización PLC / HMI" },
  { value: "control-motores-vdf", label: "Variadores de frecuencia (VDF)" },
  { value: "instrumentacion", label: "Sensores e instrumentación" },
  { value: "retrofitting", label: "Retrofitting / modernización" },
  { value: "desarrollo-software", label: "Software a la medida" },
  {
    value: "plataforma",
    label: "Askill Industrial Platform (SST / Activos / IIoT)",
  },
  { value: "otro", label: "Otro / aún no lo tengo claro" },
] as const satisfies readonly ContactFormOption[];

export const contactUrgencyOptions = [
  { value: "paro", label: "Paro o falla crítica" },
  { value: "demo", label: "Demo / prueba de plataforma" },
  { value: "proyecto", label: "Proyecto planificado" },
  { value: "mejora", label: "Mejora / optimización" },
] as const satisfies readonly ContactFormOption[];

export function isPlatformNeed(need: string | null | undefined): boolean {
  return need === "plataforma" || need === "sst";
}

function firstSearchParam(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export function getContactIntent(params: {
  need?: string | string[];
  origen?: string | string[];
}): ContactIntent {
  const need = firstSearchParam(params.need);
  const origen = firstSearchParam(params.origen);

  if (origen === "plataforma" || isPlatformNeed(need)) return "platform";
  return "engineering";
}

export function resolveContactNeedValue(
  need: string | undefined,
  intent: ContactIntent,
): string {
  if (isPlatformNeed(need)) return "plataforma";
  if (need && contactNeedOptions.some((option) => option.value === need)) {
    return need;
  }
  if (intent === "platform") return "plataforma";
  return "";
}

export const contactPreferenceOptions = [
  { value: "visita", label: "Visita técnica en planta" },
  { value: "llamada", label: "Llamada" },
  { value: "whatsapp", label: "WhatsApp" },
] as const satisfies readonly ContactFormOption[];

export const contactContent = {
  title: "Agenda una visita técnica",
  intro:
    "En la fase de oferta y diseño, visitamos tu planta sin límite de veces para entender el reto en sitio. Cuéntanos tu contexto y coordinamos el diagnóstico con ingeniería.",
  visitOffer: {
    title: "Qué incluye la visita",
    description:
      "Recorrido por planta, levantamiento de necesidades, hallazgos iniciales y una propuesta alineada a tu operación — sin compromiso de compra.",
  },
  form: {
    title: "Solicita tu visita",
    nameLabel: "Nombre completo",
    companyLabel: "Empresa",
    emailLabel: "Correo electrónico",
    phoneLabel: "Teléfono",
    needLabel: "Tipo de necesidad",
    needPlaceholder: "Selecciona una opción",
    plantCityLabel: "Ciudad / planta",
    plantCityPlaceholder: "Ej. Pereira — Planta norte",
    urgencyLabel: "Urgencia",
    urgencyPlaceholder: "Selecciona una opción",
    preferenceLabel: "Preferencia de contacto",
    preferencePlaceholder: "Selecciona una opción",
    messageLabel: "Detalle del reto",
    messagePlaceholder:
      "Describe el equipo, el síntoma o el resultado que buscas. Mientras más contexto, mejor preparamos la visita.",
    privacyLabel:
      "Autorizo el tratamiento de mis datos personales de acuerdo con la",
    privacyLinkLabel: "Política de privacidad",
    submitLabel: "Solicitar visita técnica",
    submittingLabel: "Enviando...",
    helperText:
      "Con estos datos priorizamos la visita y llegamos a planta con contexto técnico.",
    successMessage:
      "¡Gracias! Recibimos tu solicitud y te contactaremos para agendar la visita técnica.",
    errorMessage:
      "No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos directamente por correo.",
    subject: "Solicitud de visita técnica — ASKILL S.A.S",
  },
  info: {
    title: "Datos de contacto",
    email: siteContact.email,
    phone: siteContact.telephoneDisplay,
    location: "Pereira, Risaralda — Colombia",
    hours: "Lunes a viernes, 8:00 a.m. – 5:00 p.m.",
    responseNote:
      "Respondemos de lunes a viernes en horario laboral. Si hay paro o falla crítica, escríbenos por WhatsApp e indícalo como urgente.",
  },
  whatsapp: {
    label: "Escribir por WhatsApp",
    floatingLabel: "WhatsApp",
    ariaLabel: "Abrir chat de WhatsApp con ASKILL",
    helperText:
      "Canal rápido para urgencias operativas. Respondemos en horario laboral.",
    prefilledMessage:
      "Hola ASKILL, quiero consultar un reto en planta / agendar una visita técnica.",
    platformLabel: "Pedir demo por WhatsApp",
    platformAriaLabel: "Abrir WhatsApp para pedir una demo de la plataforma",
    platformHelperText:
      "Canal rápido para pedir una demo o un acceso de prueba. Respondemos en horario laboral.",
    platformPrefilledMessage:
      "Hola ASKILL, quiero una demo de Askill Industrial Platform (SST / Activos / IIoT).",
  },
  platformPage: {
    title: "Demo de Askill Industrial Platform",
    intro:
      "Sin visita técnica. Te mostramos SST, Activos e IIoT y cómo operan juntos en la misma plataforma.",
    offer: {
      title: "Qué incluye la demo",
      description:
        "Recorrido por el producto, alcance del MVP y cómo activar una prueba para tu operación — sin compromiso de compra.",
    },
  },
  platformForm: {
    title: "Pide una demo",
    helperText:
      "Con estos datos te contactamos para activar una prueba. No hace falta visita técnica.",
    submitLabel: "Pedir demo",
    successMessage:
      "¡Gracias! Recibimos tu solicitud y te contactaremos para coordinar la demo o el acceso de prueba.",
    messageLabel: "Qué quieres ver",
    messagePlaceholder:
      "Cuéntanos si te interesa SST, Activos, IIoT o la plataforma completa. Número aproximado de trabajadores o plantas ayuda a preparar la demo.",
    subject: "Solicitud de demo — Askill Industrial Platform",
  },
} as const;

export const contactCtaByPage = {
  home: {
    eyebrow: "Visita técnica en planta",
    title: "¿Listo para que un ingeniero vea tu operación en sitio?",
    description:
      "En oferta y diseño, las visitas técnicas son ilimitadas: recorrido, levantamiento y propuesta clara. Agenda el diagnóstico sin compromiso.",
    buttonLabel: "Agenda una visita técnica",
  },
  about: {
    eyebrow: "De la conversación a la planta",
    title: "¿Buscas un aliado que baje a piso de planta?",
    description:
      "Una planificación rigurosa empieza con entender tu realidad en sitio. Solicita una visita técnica y te proponemos el camino más claro.",
    buttonLabel: "Agenda una visita técnica",
  },
  services: {
    eyebrow: "Diagnóstico en sitio",
    title: "¿Cuál de estos retos tiene tu planta hoy?",
    description:
      "Elige el servicio que más se acerque a tu necesidad y agenda una visita técnica: levantamos el caso en planta y te devolvemos una propuesta concreta.",
    buttonLabel: "Agenda una visita técnica",
  },
  platform: {
    eyebrow: "Sin visita técnica",
    title: "¿Quieres ver Askill Industrial Platform en tu operación?",
    description:
      "Pide una demo o un acceso de prueba. SST, Activos e IIoT se operan en la misma plataforma.",
    buttonLabel: "Pedir demo",
    href: "/contacto?origen=plataforma",
  },
} satisfies Record<string, ContactCtaContent>;
