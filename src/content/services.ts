import type { StaticImageData } from "next/image";

import acompanamientoIcon from "@/assets/statics/Acompañamiento.png";
import disenoSolucionesIcon from "@/assets/statics/Diseño_soluciones.png";
import tiempoIcon from "@/assets/statics/Tiempo.png";
import documentacionIcon from "@/assets/statics/documentacion.png";
import ahorrarDineroIcon from "@/assets/statics/ahorrar-dinero.png";
import ingenieroIcon from "@/assets/statics/ingeniero.png";
import instrumentation from "@/assets/statics/sensores.webp";
import mitsubishi from "@/assets/statics/variador.webp";
import plc from "@/assets/statics/plc.webp";
import retrofitting from "@/assets/statics/gabinete_control.webp";
import software from "@/assets/statics/software.webp";
import iiot from "@/assets/statics/iiot.webp";

export type PlatformModule = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: string;
  impactBullets: string[];
};

export type EngineeringService = {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: string;
  image: StaticImageData;
};

export type ServiceValueProp = {
  id: string;
  title: string;
  description: string;
  icon: StaticImageData;
};

export const servicesPageIntro =
  "En ASKILL S.A.S, brindamos servicios de ingeniería electrónica especializados en la industria 4.0. Nuestra oferta se caracteriza por:";

export const serviceValueProps: ServiceValueProp[] = [
  {
    id: "acompanamiento-integral",
    title: "Acompañamiento Integral",
    description:
      "Nos involucramos desde el levantamiento de información inicial en cada proyecto, lo que garantiza que entendamos a fondo las necesidades de nuestros clientes.",
    icon: acompanamientoIcon,
  },
  {
    id: "soluciones-a-la-medida",
    title: "Soluciones a la Medida",
    description:
      "Diseñamos soluciones personalizadas y óptimas para cada cliente, asegurando que sus desafíos se aborden de manera precisa y eficiente.",
    icon: disenoSolucionesIcon,
  },
  {
    id: "respuesta-rapida",
    title: "Respuesta Rápida",
    description:
      "Nos enorgullece ofrecer tiempos de respuesta satisfactorios, lo que significa que nuestros clientes pueden contar con nosotros cuando más nos necesitan.",
    icon: tiempoIcon,
  },
  {
    id: "documentacion-precisa",
    title: "Documentación Precisa",
    description:
      "Nuestra documentación de ingeniería es clara y precisa, lo que facilita la implementación y el mantenimiento de las soluciones que proporcionamos.",
    icon: documentacionIcon,
  },
  {
    id: "precios-competitivos",
    title: "Precios Competitivos",
    description:
      "Nos esforzamos por ofrecer excelentes precios en nuestros servicios, lo que brinda a nuestros clientes un valor excepcional.",
    icon: ahorrarDineroIcon,
  },
  {
    id: "soporte-tecnico-personalizado",
    title: "Soporte Técnico Personalizado",
    description:
      "Durante la fase de oferta y diseño de soluciones, ofrecemos visitas técnicas ilimitadas. Esto garantiza que entendamos completamente las necesidades de nuestros clientes y diseñemos soluciones precisas y efectivas para abordar sus desafíos.",
    icon: ingenieroIcon,
  },
];

export const engineeringServices: EngineeringService[] = [
  {
    id: "automatizacion-plc",
    title: "Automatización Centralizada",
    subtitle: "Programación e Instalación de PLC y HMI",
    problem:
      'Lógicas de relés obsoletas ("lógica cableada") que fallan constantemente, dificultad para diagnosticar fallas rápidamente o la necesidad de automatizar secuencias nuevas en la línea.',
    solution:
      "Montaje, integración y programación de Controladores Lógicos Programables (PLC) e interfaces HMI intuitivas para el operador.",
    impact:
      "Diagnóstico inmediato de fallas visualizando el estado del programa, flexibilidad total para modificar el proceso sin recablear tableros y líneas de producción autónomas, repetibles y seguras.",
    image: plc,
  },
  {
    id: "control-motores-vdf",
    title: "Optimización y Control de Motores",
    subtitle: "Variadores de Frecuencia (VDF)",
    problem:
      "Motores con arranques bruscos, altos picos de consumo eléctrico, daños constantes en acoples mecánicos o procesos que requieren regular velocidad de forma manual o ineficiente.",
    solution:
      "Selección, parametrización, montaje en tablero e instalación de Variadores de Frecuencia (VDF) acoplados a tu necesidad real.",
    impact:
      "Reducción drástica del estrés mecánico, eliminación de picos de corriente en el arranque y un ahorro energético medible y comprobable para el área de proyectos.",
    image: mitsubishi,
  },
  {
    id: "instrumentacion",
    title: "Precisión en la Medición",
    subtitle: "Sensores e Instrumentación Industrial",
    problem:
      "Mediciones erráticas que afectan la calidad del producto, sensores antiguos discontinuados difíciles de reemplazar o falta de control en variables críticas (presión, flujo, temperatura, nivel).",
    solution:
      "Migración y actualización de sensores existentes obsoletos y montaje de nuevas arquitecturas de instrumentación de procesos.",
    impact:
      "Estabilidad absoluta en la lectura de variables, selección del grado de protección (IP) exacto para tu entorno de fábrica y un control de lazo cerrado totalmente confiable.",
    image: instrumentation,
  },
  {
    id: "retrofitting",
    title: "Modernización de Maquinaria",
    subtitle: "Retrofitting Industrial",
    problem:
      'Máquinas con una estructura mecánica robusta y costosa, pero con un "cerebro" electrónico obsoleto, repuestos inexistentes en el mercado o pantallas (HMI) rotas que dejan la máquina fuera de servicio.',
    solution:
      "Retrofitting integral. Retiramos el control electrónico descontinuado y lo reemplazamos por tecnología moderna (PLC, HMI y drivers actuales), conservando la máquina existente.",
    impact:
      "Revives un activo estratégico por una fracción de lo que costaría una máquina nueva, garantizas stock de repuestos locales y actualizas los sistemas de seguridad de la máquina.",
    image: retrofitting,
  },
  {
    id: "desarrollo-software",
    title: "Desarrollo de Software",
    subtitle: "Aplicaciones a la medida para operaciones industriales",
    problem:
      "Procesos críticos en Excel, WhatsApp o papel; sistemas desconectados entre planta, almacén y administración; o herramientas genéricas que no reflejan cómo opera realmente la empresa.",
    solution:
      "Diseñamos e implementamos software a la medida —web, móvil o integraciones— alineado a tus flujos: digitalización de procesos, paneles de control, APIs y conexión con equipos o sistemas existentes.",
    impact:
      "Menos errores manuales, trazabilidad confiable, decisiones con datos propios y una herramienta que crece con tu operación sin forzar procesos ajenos a tu planta.",
    image: software,
  },
];

export const platformModules: PlatformModule[] = [
  {
    id: "iiot",
    label: "IIoT",
    title: "Monitoreo Inteligente en Tiempo Real",
    subtitle: "Industrial IoT bajo Modelo SaaS",
    problem:
      "Desconocimiento de las causas reales de los paros de máquina hasta que el daño ya está hecho, dependencia de registros manuales en papel o imposibilidad de supervisar las variables si no se está frente al tablero físico.",
    solution:
      "Conectamos tus variables de piso de planta (PLC, sensores) directamente a nuestra plataforma web SaaS (Software as a Service) segura en la nube.",
    impact:
      "Visibilidad continua de tu operación desde cualquier dispositivo, con datos centralizados para decisiones más rápidas y mantenimiento orientado a la eficiencia.",
    impactBullets: [
      "Dashboard Web: visualización del estado de tus máquinas en tiempo real desde PC, tablet o móvil.",
      "Alertas Tempranas: notificaciones inmediatas ante desviaciones de variables antes de que ocurra la falla.",
      "Control de Paros y OEE: centralización de datos históricos para análisis de eficiencia operativa y soporte real para mantenimiento predictivo.",
    ],
  },
  {
    id: "sst",
    label: "SST",
    title: "Gestión de Seguridad y Salud en el Trabajo",
    subtitle: "Cumplimiento operativo digital",
    problem:
      "Permisos de trabajo en formatos físicos difíciles de rastrear, capacitaciones y competencias sin evidencia centralizada, o procesos de SST que no resisten una auditoría interna o de cliente.",
    solution:
      "Digitalizamos permisos de trabajo, inspecciones, capacitaciones y evidencias en un flujo único dentro de la plataforma ASKILL, accesible desde terreno y oficina.",
    impact:
      "Menor exposición al riesgo operativo, trazabilidad completa por actividad y respuesta más ágil ante auditorías de seguridad y cumplimiento normativo.",
    impactBullets: [
      "Permisos de trabajo: flujos de aprobación con responsables, requisitos y validaciones antes de ejecutar.",
      "Evidencias en terreno: fotos, firmas y registros asociados a cada actividad crítica.",
      "Control por roles: acceso diferenciado para operación, contratistas, supervisión y HSE.",
    ],
  },
  {
    id: "activos",
    label: "Activos",
    title: "Gestión de Activos",
    subtitle: "Inventario, mantenimiento y trazabilidad",
    problem:
      "Activos críticos sin historial confiable, mantenimiento reactivo por fallas imprevistas, o falta de indicadores para priorizar intervenciones y repuestos.",
    solution:
      "Centralizamos inventario de activos, órdenes de trabajo, historial de intervenciones e indicadores de desempeño en la misma plataforma conectada a tu operación.",
    impact:
      "Mayor disponibilidad de equipos, planificación de mantenimiento basada en datos y visibilidad para líderes sobre criticidad, costos y cumplimiento de planes.",
    impactBullets: [
      "Inventario y criticidad: registro estructurado de activos con trazabilidad por equipo y ubicación.",
      "Mantenimiento planificado: órdenes, checklists e historial de intervenciones en un solo lugar.",
      "Métricas accionables: indicadores para reducir paros, reprocesos y tiempos de respuesta.",
    ],
  },
];

export const platformService = {
  id: "plataforma-digital",
  title: "Plataforma Digital ASKILL",
  subtitle: "Software como servicio para operaciones industriales",
  description:
    "Complementamos la ingeniería en planta con módulos SaaS para monitoreo, seguridad y gestión de activos, integrados en una sola experiencia.",
  image: iiot,
};

export const servicesTeaserContent = {
  eyebrow: "Ingeniería + Industria 4.0",
  title: "Nuestros servicios",
  description: servicesPageIntro,
  ctaLabel: "Ver todos los servicios",
  valuePropsPreviewCount: 3,
} as const;
