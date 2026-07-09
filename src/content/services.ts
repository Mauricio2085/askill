import type { StaticImageData } from 'next/image'

import instalacionElectrica from '@/assets/statics/instalacion-electrica.jpg'
import mitsubishi from '@/assets/statics/mitsubishi.jpg'
import plc from '@/assets/statics/plc.jpg'
import robotic from '@/assets/statics/robotic.jpg'
import scada from '@/assets/statics/scada.jpg'

export type PlatformModule = {
  id: string
  label: string
  title: string
  subtitle: string
  problem: string
  solution: string
  impact: string
  impactBullets: string[]
}

export type EngineeringService = {
  id: string
  title: string
  subtitle: string
  problem: string
  solution: string
  impact: string
  image: StaticImageData
}

export const engineeringServices: EngineeringService[] = [
  {
    id: 'automatizacion-plc',
    title: 'Automatización Centralizada',
    subtitle: 'Programación e Instalación de PLC y HMI',
    problem:
      'Lógicas de relés obsoletas ("lógica cableada") que fallan constantemente, dificultad para diagnosticar fallas rápidamente o la necesidad de automatizar secuencias nuevas en la línea.',
    solution:
      'Montaje, integración y programación de Controladores Lógicos Programables (PLC) e interfaces HMI intuitivas para el operador.',
    impact:
      'Diagnóstico inmediato de fallas visualizando el estado del programa, flexibilidad total para modificar el proceso sin recablear tableros y líneas de producción autónomas, repetibles y seguras.',
    image: plc,
  },
  {
    id: 'control-motores-vdf',
    title: 'Optimización y Control de Motores',
    subtitle: 'Variadores de Frecuencia (VDF)',
    problem:
      'Motores con arranques bruscos, altos picos de consumo eléctrico, daños constantes en acoples mecánicos o procesos que requieren regular velocidad de forma manual o ineficiente.',
    solution:
      'Selección, parametrización, montaje en tablero e instalación de Variadores de Frecuencia (VDF) acoplados a tu necesidad real.',
    impact:
      'Reducción drástica del estrés mecánico, eliminación de picos de corriente en el arranque y un ahorro energético medible y comprobable para el área de proyectos.',
    image: instalacionElectrica,
  },
  {
    id: 'instrumentacion',
    title: 'Precisión en la Medición',
    subtitle: 'Sensores e Instrumentación Industrial',
    problem:
      'Mediciones erráticas que afectan la calidad del producto, sensores antiguos discontinuados difíciles de reemplazar o falta de control en variables críticas (presión, flujo, temperatura, nivel).',
    solution:
      'Migración y actualización de sensores existentes obsoletos y montaje de nuevas arquitecturas de instrumentación de procesos.',
    impact:
      'Estabilidad absoluta en la lectura de variables, selección del grado de protección (IP) exacto para tu entorno de fábrica y un control de lazo cerrado totalmente confiable.',
    image: mitsubishi,
  },
  {
    id: 'retrofitting',
    title: 'Modernización de Maquinaria',
    subtitle: 'Retrofitting Industrial',
    problem:
      'Máquinas con una estructura mecánica robusta y costosa, pero con un "cerebro" electrónico obsoleto, repuestos inexistentes en el mercado o pantallas (HMI) rotas que dejan la máquina fuera de servicio.',
    solution:
      'Retrofitting integral. Retiramos el control electrónico descontinuado y lo reemplazamos por tecnología moderna (PLC, HMI y drivers actuales), conservando la máquina existente.',
    impact:
      'Revives un activo estratégico por una fracción de lo que costaría una máquina nueva, garantizas stock de repuestos locales y actualizas los sistemas de seguridad de la máquina.',
    image: robotic,
  },
]

export const platformModules: PlatformModule[] = [
  {
    id: 'iiot',
    label: 'IIoT',
    title: 'Monitoreo Inteligente en Tiempo Real',
    subtitle: 'Industrial IoT bajo Modelo SaaS',
    problem:
      'Desconocimiento de las causas reales de los paros de máquina hasta que el daño ya está hecho, dependencia de registros manuales en papel o imposibilidad de supervisar las variables si no se está frente al tablero físico.',
    solution:
      'Conectamos tus variables de piso de planta (PLC, sensores) directamente a nuestra plataforma web SaaS (Software as a Service) segura en la nube.',
    impact:
      'Visibilidad continua de tu operación desde cualquier dispositivo, con datos centralizados para decisiones más rápidas y mantenimiento orientado a la eficiencia.',
    impactBullets: [
      'Dashboard Web: visualización del estado de tus máquinas en tiempo real desde PC, tablet o móvil.',
      'Alertas Tempranas: notificaciones inmediatas ante desviaciones de variables antes de que ocurra la falla.',
      'Control de Paros y OEE: centralización de datos históricos para análisis de eficiencia operativa y soporte real para mantenimiento predictivo.',
    ],
  },
  {
    id: 'sst',
    label: 'SST',
    title: 'Gestión de Seguridad y Salud en el Trabajo',
    subtitle: 'Cumplimiento operativo digital',
    problem:
      'Permisos de trabajo en formatos físicos difíciles de rastrear, capacitaciones y competencias sin evidencia centralizada, o procesos de SST que no resisten una auditoría interna o de cliente.',
    solution:
      'Digitalizamos permisos de trabajo, inspecciones, capacitaciones y evidencias en un flujo único dentro de la plataforma ASKILL, accesible desde terreno y oficina.',
    impact:
      'Menor exposición al riesgo operativo, trazabilidad completa por actividad y respuesta más ágil ante auditorías de seguridad y cumplimiento normativo.',
    impactBullets: [
      'Permisos de trabajo: flujos de aprobación con responsables, requisitos y validaciones antes de ejecutar.',
      'Evidencias en terreno: fotos, firmas y registros asociados a cada actividad crítica.',
      'Control por roles: acceso diferenciado para operación, contratistas, supervisión y HSE.',
    ],
  },
  {
    id: 'activos',
    label: 'Activos',
    title: 'Gestión de Activos',
    subtitle: 'Inventario, mantenimiento y trazabilidad',
    problem:
      'Activos críticos sin historial confiable, mantenimiento reactivo por fallas imprevistas, o falta de indicadores para priorizar intervenciones y repuestos.',
    solution:
      'Centralizamos inventario de activos, órdenes de trabajo, historial de intervenciones e indicadores de desempeño en la misma plataforma conectada a tu operación.',
    impact:
      'Mayor disponibilidad de equipos, planificación de mantenimiento basada en datos y visibilidad para líderes sobre criticidad, costos y cumplimiento de planes.',
    impactBullets: [
      'Inventario y criticidad: registro estructurado de activos con trazabilidad por equipo y ubicación.',
      'Mantenimiento planificado: órdenes, checklists e historial de intervenciones en un solo lugar.',
      'Métricas accionables: indicadores para reducir paros, reprocesos y tiempos de respuesta.',
    ],
  },
]

export const platformService = {
  id: 'plataforma-digital',
  title: 'Plataforma Digital ASKILL',
  subtitle: 'Software como servicio para operaciones industriales',
  description:
    'Complementamos la ingeniería en planta con módulos SaaS para monitoreo, seguridad y gestión de activos, integrados en una sola experiencia.',
  image: scada,
}

export const servicesTeaserContent = {
  eyebrow: 'Ingeniería + Industria 4.0',
  title: 'Nuestros servicios',
  description:
    'Desde automatización en planta hasta monitoreo en la nube: soluciones para diagnosticar, controlar y escalar tu operación industrial.',
  ctaLabel: 'Ver todos los servicios',
} as const
