import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { cities, whatsappLink } from "@/lib/cities-data";
import { arabicDigits, journeyStops } from "@/lib/journey";

/** Four chapters ordered by real latitude: each one is further north than the last. */
export default function CitiesSection() {
  const stops = journeyStops.map((stop) => ({
    ...stop,
    city: cities.find((c) => c.slug === stop.slug)!,
  }));

  return (
    <section id="destinations" aria-labelledby="destinations-title" className="north relative">
      <div className="relative z-10 bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 id="destinations-title" className="text-4xl lg:text-6xl mb-2 text-balance">
            {"كل مدينة، خطوة أبعد نحو الشمال"}
          </h2>
          <p className="text-muted-foreground mb-6">{"اختر مدينتك وسنصمم لك رحلة متكاملة بمرشد عربي واستقبال من المطار"}</p>
          <nav aria-label="انتقل إلى مدينة" className="flex flex-wrap gap-2">
            {stops.map(({ slug, city, latitude }) => (
              <a key={slug} href={`#stop-${slug}`} className="inline-flex items-center gap-2 border border-input rounded-full px-4 min-h-11 font-bold hover:bg-[hsl(var(--ink))] hover:text-white transition-colors">
                {city.name}
                <span aria-hidden="true" className="text-sm font-normal">{`${arabicDigits(latitude)}°`}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {stops.map(({ slug, city, latitude, tint }) => (
        <article key={slug} id={`stop-${slug}`} className="chapter">
          <div className="chapter-photo absolute inset-0 -z-20">
            <Image src={city.heroImage} alt={city.name} fill sizes="100vw" className="object-cover" />
          </div>
          <div className={`absolute inset-x-0 bottom-0 h-3/4 -z-10 bg-gradient-to-t ${tint} to-transparent`} />
          <div className="mx-auto max-w-7xl h-full px-4 pt-20 pb-6 lg:pb-14 flex flex-col justify-end">
            <p className="chapter-lat rise" aria-hidden="true">
              {arabicDigits(latitude)}
              <span className="chapter-deg">°</span>
            </p>
            <h3 className="font-display text-5xl lg:text-8xl mb-1 lg:mb-3">{city.name}</h3>
            <p className="text-lg lg:text-2xl mb-2">{city.tagline}</p>
            <p className="flex items-center gap-2 text-sm mb-4 lg:mb-6">
              <CalendarDays aria-hidden="true" className="w-4 h-4 shrink-0" />
              {city.bestTime}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-x-5 gap-y-1">
              <a
                href={whatsappLink(`مرحبًا، أبغى عرض سعر لرحلة إلى ${city.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-bold"
              >
                <WhatsAppIcon />
                {`اطلب عرض رحلة ${city.name}`}
              </a>
              <Link href={`/cities/${slug}`} className="inline-flex items-center justify-center gap-1 font-bold py-2.5 underline underline-offset-4">
                {"اكتشف الرحلات"}
                <ArrowLeft aria-hidden="true" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
