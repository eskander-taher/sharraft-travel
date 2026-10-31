import Link from "next/link";
import WhatsAppIcon from "@/components/whatsapp-icon";
import HeroVideo from "@/components/home/hero-video";
import { whatsappLink } from "@/lib/whatsapp";

const PHONE = "(max-width: 767px)";

/**
 * A Gulf doorway that opens onto Red Square. The headline, the action and the poster are
 * plain server-rendered HTML, so they appear before any video or JavaScript arrives.
 * Scrolling walks the visitor through the arch, on browsers that support it.
 */
export default function HeroSection() {
  return (
    <section className="hero-stage">
      <div className="hero-frame">
        {/* A plain high-priority image, found early by the browser. A phone never downloads the wide poster. */}
        <picture>
          <source media={PHONE} srcSet="/hero/poster-phone.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized files, skip the image optimizer on purpose */}
          <img
            src="/hero/poster-1600.webp"
            alt="كاتدرائية القديس باسيل في الساحة الحمراء بموسكو"
            fetchPriority="high"
            decoding="async"
            className="hero-media"
          />
        </picture>
        <HeroVideo />

        <div className="hero-copy">
          <p className="text-sm font-bold text-primary mb-1 lg:mb-3">{"شرف للسفر والسياحة"}</p>
          <h1 className="text-[1.95rem] leading-[1.3] sm:text-[2.5rem] lg:text-[clamp(2.75rem,4.7vw,4.25rem)] lg:leading-[1.25] text-balance">
            {"رحلتك من الخليج إلى روسيا، مرتّبة من المطار إلى المطار"}
          </h1>
          <p className="mt-2 lg:mt-5 text-[0.95rem] leading-relaxed lg:text-xl lg:leading-loose text-[hsl(var(--muted-foreground))] max-w-xl">
            {"للعائلات والأزواج والمجموعات: فندق، سيارة خاصة، مرشد يتكلم عربي، ودعوة التأشيرة."}
          </p>
        </div>

        <div className="hero-arch-slot" aria-hidden="true">
          <svg className="hero-wall" viewBox="0 0 400 520" preserveAspectRatio="xMidYMax meet" focusable="false">
            <path
              fill="hsl(var(--background))"
              fillRule="evenodd"
              d="M-6000-6000H6400V6500H-6000Z M20 520V215C20 120 115 70 200 10 285 70 380 120 380 215V520Z"
            />
            <path
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              d="M8 520V212C8 112 105 62 200-4 295 62 392 112 392 212V520"
            />
          </svg>
        </div>

        <div className="hero-actions flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-5 gap-y-1">
          <a
            href={whatsappLink("مرحبًا، أبغى برنامج رحلة إلى روسيا")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-bold whitespace-nowrap xl:text-lg"
          >
            <WhatsAppIcon className="w-6 h-6" />
            {"اطلب برنامج رحلتك على واتساب"}
          </a>
          <div className="flex items-center justify-center gap-x-5 text-sm font-bold whitespace-nowrap">
            <a href="#trip-pass" className="underline underline-offset-4 py-2">
              {"صمّم رحلتك بثلاث نقرات"}
            </a>
            <Link href="/services" className="underline underline-offset-4 py-2">
              {"خدماتنا"}
            </Link>
            <Link href="/contact" className="underline underline-offset-4 py-2">
              {"تواصل معنا"}
            </Link>
          </div>
        </div>

        <p className="hero-arrival font-display text-4xl lg:text-6xl" aria-hidden="true">
          {"وصلت. الساحة الحمراء، موسكو"}
        </p>
      </div>
    </section>
  );
}
