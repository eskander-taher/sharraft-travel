import type { ReactNode } from "react";
import Image from "next/image";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { whatsappLink } from "@/lib/whatsapp";

/** The opening of every inner page: same arch, same order of text, one clear action. */
export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt = "",
  eyebrow,
  message,
  cta = "اسألنا على واتساب",
  children,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
  /** WhatsApp text for the main button. Leave out when the page passes its own actions. */
  message?: string;
  cta?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-14 items-end">
        <div className="pb-2 lg:pb-14">
          {eyebrow && <p className="text-sm font-bold text-primary mb-3">{eyebrow}</p>}
          <h1 className="text-4xl md:text-6xl mb-4 text-balance">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-loose mb-6 text-pretty">{subtitle}</p>
          )}
          <div className="flex flex-wrap items-center gap-3">
            {message && (
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa inline-flex items-center gap-2 rounded-full px-7 py-3 font-bold"
              >
                <WhatsAppIcon />
                {cta}
              </a>
            )}
            {children}
          </div>
        </div>
        {image && (
          <div className="arch-frame relative aspect-[5/4] lg:aspect-[4/5] w-full max-w-lg mx-auto lg:ms-auto lg:me-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
