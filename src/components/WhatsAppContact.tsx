import Image from "next/image";

import whatsappLogo from "@/assets/statics/whatsapp.svg";
import { contactContent } from "@/content/contact";
import { getWhatsAppUrl } from "@/lib/site";

function WhatsAppLogo({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={whatsappLogo}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      aria-hidden
      unoptimized
    />
  );
}

/** Floating logo-only WhatsApp entry point (site-wide). */
export function WhatsAppFloatingButton() {
  const href = getWhatsAppUrl(contactContent.whatsapp.prefilledMessage);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={contactContent.whatsapp.ariaLabel}
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-md transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <WhatsAppLogo size={56} />
    </a>
  );
}

type WhatsAppContactLinkProps = {
  className?: string;
  variant?: "primary" | "outline";
};

export function WhatsAppContactLink({
  className = "",
  variant = "primary",
}: WhatsAppContactLinkProps) {
  const href = getWhatsAppUrl(contactContent.whatsapp.prefilledMessage);
  const variantClassName =
    variant === "outline"
      ? "border border-border bg-background text-foreground hover:bg-accent"
      : "border border-[#25D366]/40 bg-[#25D366]/10 text-foreground hover:bg-[#25D366]/15";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto ${variantClassName} ${className}`}
    >
      <WhatsAppLogo size={22} />
      {contactContent.whatsapp.label}
    </a>
  );
}
