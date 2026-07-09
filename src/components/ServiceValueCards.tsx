import Image from "next/image";

import type { ServiceValueProp } from "@/content/services";
import { serviceValueProps } from "@/content/services";

type ServiceValueCardProps = {
  value: ServiceValueProp;
};

function ServiceValueCard({ value }: ServiceValueCardProps) {
  return (
    <li className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-askill-primary/50 hover:shadow-[0_0_0_1px_rgba(238,117,47,0.15),0_12px_40px_rgba(0,0,0,0.25)] sm:p-7">
      <span
        className="absolute inset-x-0 top-0 h-1 bg-askill-primary"
        aria-hidden
      />
      <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-askill-black bg-askill-primary p-2.5 shadow-sm">
        <Image
          src={value.icon}
          alt=""
          width={48}
          height={48}
          className="h-11 w-11 object-contain"
          aria-hidden
        />
      </div>
      <h3 className="mt-5 text-lg font-semibold leading-snug text-askill-primary sm:text-xl">
        {value.title}
      </h3>
      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
        {value.description}
      </p>
    </li>
  );
}

type ServiceValueCardsProps = {
  limit?: number;
  className?: string;
};

export function ServiceValueCards({
  limit,
  className = "",
}: ServiceValueCardsProps) {
  const items = limit ? serviceValueProps.slice(0, limit) : serviceValueProps;

  return (
    <ul
      className={`mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 ${className}`}
    >
      {items.map((value) => (
        <ServiceValueCard key={value.id} value={value} />
      ))}
    </ul>
  );
}
