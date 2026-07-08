export type AboutPrinciple = {
  title: string
  description: string
}

export const aboutContent = {
  title: 'Sobre nosotros',
  intro: [
    'En ASKILL S.A.S. somos una empresa pereirana especializada en la automatización, control e ingeniería electrónica para procesos industriales. Fusionamos la experiencia en piso de planta con el desarrollo de software e Industria 4.0 para transformar los desafíos operativos de las empresas de nuestra región en soluciones eficientes, rentables y de alta calidad.',
    'Nos convertimos en el aliado estratégico de las áreas de Mantenimiento y Proyectos gracias a tres principios innegociables en cada proyecto:',
  ],
  principles: [
    {
      title: 'Planificación Excepcional',
      description:
        'Diseños rigurosos que evitan sobrecostos e imprevistos en la ejecución.',
    },
    {
      title: 'Organización Impecable',
      description:
        'Entregas a tiempo, metodologías claras y documentación técnica de ingeniería al día.',
    },
    {
      title: 'Resultados Sostenibles',
      description:
        'Soluciones diseñadas a la medida para garantizar la continuidad y el retorno de inversión de tu planta.',
    },
  ] satisfies AboutPrinciple[],
}
