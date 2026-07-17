import type { StaticImageData } from "next/image";

import ingocolLogo from "@/assets/clients/logo_ingocol.jpg";
import terranoLogo from "@/assets/clients/logo_terrano.jpg";
import zetaLogo from "@/assets/clients/logo_zeta.png";
import zetinoxLogo from "@/assets/clients/logo_zetinox.jpg";

export type ClientLogo = {
  id: string;
  /** Nombre comercial autorizado para mostrar. */
  name: string;
  logo: StaticImageData;
};

export const clientsSectionContent = {
  eyebrow: "Clientes",
  title: "Empresas que confían en ASKILL",
  description:
    "Trabajamos con operaciones industriales que necesitan ingeniería confiable y digitalización con impacto en planta.",
};

export const clients = [
  {
    id: "ingocol",
    name: "Ingocol",
    logo: ingocolLogo,
  },
  {
    id: "zetinox",
    name: "Zetinox",
    logo: zetinoxLogo,
  },
  {
    id: "terrano",
    name: "Terrano",
    logo: terranoLogo,
  },
  {
    id: "zeta",
    name: "Zeta",
    logo: zetaLogo,
  },
] as const satisfies readonly ClientLogo[];

/**
 * Caja uniforme: normaliza cada logo para que su lado mayor = 1,
 * luego toma el ancho máximo y el alto máximo del conjunto.
 */
export function getClientsLogoFrame(items: readonly ClientLogo[]) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (const client of items) {
    const { width, height } = client.logo;
    const scale = 1 / Math.max(width, height);
    maxWidth = Math.max(maxWidth, width * scale);
    maxHeight = Math.max(maxHeight, height * scale);
  }

  return {
    maxWidth,
    maxHeight,
    aspectRatio: `${maxWidth} / ${maxHeight}`,
  };
}

export const clientsLogoFrame = getClientsLogoFrame(clients);
