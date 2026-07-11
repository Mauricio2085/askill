import Image from "next/image";

import jumbotronImage from "@/assets/statics/Jumbotron_Askill.webp";

export function Jumbotron() {
  return (
    <section
      aria-label="ASKILL automatización industrial"
      className="relative w-full overflow-hidden"
    >
      <div className="relative h-[220px] w-full sm:h-[300px] md:h-[380px] lg:h-[450px]">
        <Image
          src={jumbotronImage}
          alt="Ingeniería de planos y automatización industrial"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-askill-secondary/20 via-transparent to-background"
          aria-hidden
        />
      </div>
    </section>
  );
}
