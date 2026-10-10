import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { cities } from "@/lib/cities-data";

export default function CitiesSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          {"وجهاتنا الأكثر طلبًا"}
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          {"اختر مدينتك وسنصمم لك رحلة متكاملة بمرشد عربي واستقبال من المطار"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/cities/${city.slug}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={city.heroImage}
                alt={city.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow">
                {city.badge}
              </span>
              <div className="absolute bottom-0 right-0 left-0 p-5 text-white">
                <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                <p className="text-sm text-white/85 mb-3">{city.tagline}</p>
                <p className="flex items-center gap-1.5 text-xs text-white/70 mb-4">
                  <CalendarDays className="w-3.5 h-3.5 shrink-0" />
                  {city.bestTime}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-yellow-300 group-hover:gap-2 transition-all">
                  {"اكتشف الرحلات"}
                  <ArrowLeft className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
