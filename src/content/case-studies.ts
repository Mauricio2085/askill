/**
 * Plantillas y casos de éxito / mini casos comerciales.
 *
 * Cómo usarlas:
 * 1. Completa o adapta casos reales (reemplaza texto entre corchetes en plantillas).
 * 2. Usa `notesForInternalUse` (no se publica) para evidencias y restricciones de nombre.
 * 3. Confirma autorización del cliente para mostrar nombre; si no, anonimiza.
 * 4. Pasa `status` a `"published"` para que aparezca en el home.
 *
 * Solo los casos con `status: "published"` se renderizan en el sitio.
 */

export type CaseStudyStatus = "draft" | "published";

export type CaseStudy = {
  id: string;
  status: CaseStudyStatus;
  /** Id alineado a `engineeringServices` o `platformModules` cuando aplique. */
  serviceId: string;
  /** Etiqueta corta del servicio para la UI. */
  serviceLabel: string;
  /**
   * Id de `clients` si el logo/nombre están autorizados.
   * Dejar `null` mientras no haya permiso explícito.
   */
  clientId: string | null;
  /** Nombre visible; puede ser anónimo si no hay autorización. */
  clientDisplayName: string;
  sector: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  /** Métrica opcional y verificable (evitar cifras inventadas). */
  resultMetric: string | null;
  /** Notas internas: no se muestran en la web. */
  notesForInternalUse: string;
};

export const caseStudiesSectionContent = {
  eyebrow: "Casos en planta",
  title: "Resultados que parten de un diagnóstico en sitio",
  description:
    "Así convertimos un reto de mantenimiento o proyectos en una solución medible. ¿Te suena familiar? Agenda una visita técnica.",
  ctaLabel: "Agenda una visita técnica",
  problemLabel: "El reto",
  solutionLabel: "Lo que hicimos",
  resultLabel: "El resultado",
} as const;

/**
 * Casos reales + plantillas pendientes.
 * Publicados en home solo con `status: "published"`.
 */
export const caseStudies = [
  {
    id: "inyeccion-aire-zetinox",
    status: "published",
    serviceId: "automatizacion-plc",
    serviceLabel: "PLC, VDF e instrumentación",
    clientId: "zetinox",
    clientDisplayName: "Zetinox",
    sector: "Automotriz / área de pintura",
    title: "Sistema de inyección de aire con control de presión diferencial",
    problem:
      "Zetinox requería un sistema de inyección y extracción de aire para mejorar el confort térmico en un área de pintura de gran volumen. El desafío era mantener una presión diferencial estable y operable en un recinto amplio, donde un lazo PID continuo no es la estrategia más adecuada.",
    solution:
      'Integramos el sistema completo: dos motores de inyección con variadores Delta Electronics (5 HP y 3 HP), un extractor con variador Delta de 2 HP, sensor de presión diferencial Yokogawa y control en PLC Unitronics con HMI de 7". Desde el diseño propusimos control on-off con una banda de presión diferencial de operación óptima; en planta validamos el criterio con pruebas de PID para contrastar comportamientos y confirmar la estrategia definitiva.',
    result:
      "Sistema en operación con inyección y extracción coordinadas y presión diferencial bajo un control estable, simple de operar y alineado al volumen real del área, con una decisión técnica validada en sitio, no improvisada.",
    resultMetric: null,
    notesForInternalUse:
      'Cliente contratante: Zetinox. Destino: área de pintura UMA (confort térmico) — NO nombrar UMA en web. Equipos: VDF Delta 5HP + 3HP (inyección), VDF Delta 2HP (extractor), Yokogawa ΔP, Unitronics 7". Contexto interno: el cliente pidió PID; ASKILL explicó desde el inicio que por el volumen no iba a funcionar bien; se hicieron pruebas de PID en sitio para confirmar el criterio; se implementó on-off con delta óptimo. No presentar el PID como error de dimensionamiento de ASKILL. Evidencia útil: fotos de tablero, HMI y sensor.',
  },
  {
    id: "cabina-retoque-ingocol",
    status: "published",
    serviceId: "control-motores-vdf",
    serviceLabel: "Tablero de control y VDF",
    clientId: "ingocol",
    clientDisplayName: "Ingocol",
    sector: "Automotriz / acabados de pintura",
    title: "Control e iluminación de cabina de retoque de pintura",
    problem:
      "Ingocol desarrollaba una cabina de retoque de pintura para un proyecto de ampliación en planta del cliente final. Se requería instalar el control eléctrico y la iluminación según las especificaciones del proyecto, listos para operar de forma segura.",
    solution:
      "Instalación del tablero de control e iluminación de la cabina, con variador Schneider y comando remoto montado en la tapa del tablero para operación directa desde el gabinete.",
    result:
      "Cabina entregada con control e iluminación operativos, mando remoto accesible en el tablero y variador Schneider integrado al proceso de retoque.",
    resultMetric: null,
    notesForInternalUse:
      "Cliente contratante: Ingocol. Cliente final de la cabina: UMA — NO nombrar en web (sin autorización). Evidencia útil: fotos del tablero y de la tapa con comando remoto. Marca: Schneider.",
  },
  {
    id: "tpl-instrumentacion-variables",
    status: "draft",
    serviceId: "instrumentacion",
    serviceLabel: "Instrumentación",
    clientId: null,
    clientDisplayName: "[Cliente o anonimizado]",
    sector: "[Sector]",
    title:
      "Medición confiable de [presión / flujo / temperatura / nivel] en [proceso]",
    problem:
      "[Síntoma]: lecturas erráticas, sensores discontinuados o falta de control en variable crítica. [Impacto]: calidad, scrap o paros.",
    solution:
      "Migración o montaje de instrumentación. [Detalle]: tipo de sensor, señal (4-20 mA / digital), grado IP y lazo cerrado si aplica.",
    result:
      "[Resultado]: lectura estable y control confiable de la variable crítica en el entorno de planta.",
    resultMetric:
      "[Opcional: reducción de scrap, desviación de proceso, tiempo entre fallas — o null]",
    notesForInternalUse:
      "Buscar reemplazos de sensores obsoletos o nuevos lazos. Confirmar ambiente (polvo, lavado, ATEX si aplica).",
  },
  {
    id: "retrofitting-hmi-terrano",
    status: "published",
    serviceId: "retrofitting",
    serviceLabel: "Retrofitting HMI / PLC",
    clientId: "terrano",
    clientDisplayName: "Terrano",
    sector: "Calzado / inyección de suelas",
    title: "Actualización de HMI y PLC para ampliar el mix de suelas",
    problem:
      "En la línea de inyección de Terrano, la mecánica seguía vigente, pero el software de control solo permitía configurar una parte del portafolio (tiempos de inyección por tipo de suela, componente y talla). Ampliar a tradicional, punta de pala y cementados exigía tocar HMI y lógica PLC, sin cambiar la máquina.",
    solution:
      "Retrofitting de interfaz y programa: rediseñamos el menú de la HMI (estaciones y moldería, motores/bombas, tiempos de precolada, apertura de molde, volúmenes por talla, lavado, alarmas y monitoreo), actualizamos el código del PLC para habilitar el set completo de configuraciones y selección por estación del tipo de suela a inyectar, y alineamos la terminología operativa (p. ej. volúmenes de tallas en lugar de gramajes).",
    result:
      "La misma línea quedó lista para operar el portafolio completo de configuraciones de inyección, con una HMI más clara para el operador y lógica PLC alineada al producto real, sin invertir en maquinaria nueva.",
    resultMetric: "72 configuraciones de tiempo de inyección habilitadas",
    notesForInternalUse:
      "Cliente: Calzado Terrano (mostrar como Terrano; logo en clients). Alcance: UI HMI + código PLC. Matriz: Tradicional / Punta de pala / Dama cementado / Hombre cementado × suela completa / tapín / expanso × tallas; total 72 configs (antes solo las celdas en amarillo). Menú 3 columnas según reqs. Selección por estación: Convencional, Punta de pala, Dama cementado, Hombre cementado. Monitoreo por estación (másico, tiempo inyección, talla). Sync frecuencias máx. con VDF. No publicar mockups de HMI con datos internos sin autorización. Evidencia: pantallas antes/después si se autorizan.",
  },
  {
    id: "tpl-software-operaciones",
    status: "draft",
    serviceId: "desarrollo-software",
    serviceLabel: "Software a la medida",
    clientId: null,
    clientDisplayName: "[Cliente o anonimizado]",
    sector: "[Sector]",
    title:
      "Digitalización de [proceso: órdenes / calidad / almacén / ...] fuera de Excel y WhatsApp",
    problem:
      "[Síntoma]: proceso crítico en Excel, WhatsApp o papel; sistemas desconectados; herramienta genérica que no encaja. [Dolor]: errores, falta de trazabilidad.",
    solution:
      "Software a la medida (web/móvil/integraciones). [Detalle]: usuarios, flujos digitalizados, APIs o equipos conectados.",
    result:
      "[Resultado]: menos errores manuales, trazabilidad y decisiones con datos propios de la operación.",
    resultMetric:
      "[Opcional: horas/semana ahorradas, % errores evitados — o null]",
    notesForInternalUse:
      "No publicar capturas con datos sensibles. Anonimizar pantallas si se agregan imágenes después.",
  },
  {
    id: "tpl-sst-permisos-alturas",
    status: "draft",
    serviceId: "sst",
    serviceLabel: "Askill Industrial Platform — SST",
    clientId: null,
    clientDisplayName: "[Cliente o anonimizado]",
    sector: "[Sector con trabajos en alturas / contratistas]",
    title: "Permisos de alturas y ATS con evidencia digital",
    problem:
      "[Síntoma]: permisos y ATS en papel/Excel; firmas difíciles en campo; auditoría lenta; vigencias de personal/contratistas dispersas.",
    solution:
      "Módulo SST: permisos y ATS digitales, firmas en celular/kiosco, PDF con integridad, control de personal y catálogos operativos.",
    result:
      "[Resultado]: operación más ágil en campo y evidencia lista para auditoría.",
    resultMetric:
      "[Opcional: tiempo de cierre de permiso, % auditoría sin hallazgos de documentación — o null]",
    notesForInternalUse:
      "Ideal como puerta de entrada digital. Confirmar piloto o cliente real del módulo SST antes de publicar.",
  },
] as const satisfies readonly CaseStudy[];

export function getPublishedCaseStudies(
  items: readonly CaseStudy[] = caseStudies,
): CaseStudy[] {
  return items.filter((item) => item.status === "published");
}
