import Image from "next/image";

import {
  clients,
  clientsLogoFrame,
  clientsSectionContent,
} from "@/content/clients";
import { siteContainerClassName } from "@/lib/site-container";

export function ClientsSection() {
  return (
    <section
      className="border-t border-border bg-secondary/20"
      aria-labelledby="clients-heading"
    >
      <div className={`${siteContainerClassName} py-14 sm:py-16`}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-askill-primary">
            {clientsSectionContent.eyebrow}
          </p>
          <h2
            id="clients-heading"
            className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {clientsSectionContent.title}
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
            {clientsSectionContent.description}
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-4">
          {clients.map((client) => (
            <li key={client.id} className="flex items-center justify-center">
              <div
                className="relative w-full"
                style={{ aspectRatio: clientsLogoFrame.aspectRatio }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(max-width: 1024px) 45vw, 20vw"
                  className="object-contain opacity-80 grayscale transition-[opacity,filter] hover:opacity-100 hover:grayscale-0"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
