import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CalendarDays, Clock, Plane, Check, ArrowLeft } from "lucide-react";
import { cities, whatsappLink } from "@/lib/cities-data";

export const metadata: Metadata = {
  title: "وجهاتنا في روسيا | شرف للسفر والسياحة",
  description:
    "رحلات سياحية إلى موسكو وسانت بطرسبرغ وسوتشي ومورمانسك بمرشد عربي واستقبال من المطار وفنادق مختارة",
};

export default function CitiesPage() {
  return (
    <main>

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <Image
          src="/cities/spb-winter-palace.jpg"
          alt="قصر الشتاء في سانت بطرسبرغ"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            {"أجمل مدن روسيا في رحلة واحدة"}
          </h1>
          <p className="text-white/85 text-lg mb-8">
            {"موسكو، سانت بطرسبرغ، سوتشي ومورمانسك — برامج مصممة خصيصًا لعملائنا من الخليج والعالم العربي"}
          </p>
          <a
            href={whatsappLink("مرحبًا، أبغى أخطط رحلة إلى روسيا. ممكن تساعدوني أختار المدن المناسبة؟")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-wa px-8 py-3 rounded-full text-lg font-bold hover:opacity-90 transition-opacity shadow-lg"
          >
            {"خطط رحلتك مجانًا عبر واتساب"}
          </a>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 flex flex-col gap-10">
          {cities.map((city, i) => (
            <article
              key={city.slug}
              className="grid grid-cols-1 lg:grid-cols-2 bg-card rounded-sm overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <Link
                href={`/cities/${city.slug}`}
                className={`group relative min-h-[260px] lg:min-h-[380px] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={city.heroImage}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow">
                  {city.badge}
                </span>
              </Link>
              <div className="p-6 lg:p-10 flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-1">
                  {city.name}
                </h2>
                <p className="text-primary font-semibold mb-4">{city.tagline}</p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {city.shortDescription}
                </p>
                <ul className="grid grid-cols-2 gap-2 mb-6 text-sm">
                  {city.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-card-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground mb-8">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="w-4 h-4" />
                    {city.bestTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {city.idealStay}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Plane className="w-4 h-4" />
                    {city.gettingThere}
                  </span>
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/cities/${city.slug}`}
                    className="inline-flex items-center justify-center gap-1 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors text-sm"
                  >
                    {"شاهد البرامج"}
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                  <a
                    href={whatsappLink(`مرحبًا، أبغى عرض سعر لرحلة إلى ${city.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border-2 border-primary text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
                  >
                    {"اطلب عرض سعر"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Combo CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <Image src="/moscow-night.jpg" alt="أفق موسكو الليلي" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-balance">
            {"لا تستطيع الاختيار؟ اجمع أكثر من مدينة"}
          </h2>
          <p className="text-white/85 mb-8">
            {"أشهر برامجنا: موسكو + سانت بطرسبرغ في 7 ليالٍ، أو موسكو + سوتشي للعائلات، أو موسكو + مورمانسك لمشاهدة الشفق القطبي."}
          </p>
          <a
            href={whatsappLink("مرحبًا، أبغى برنامج يجمع أكثر من مدينة في روسيا")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-wa px-8 py-3 rounded-full text-lg font-bold hover:opacity-90 transition-opacity shadow-lg"
          >
            {"صمم برنامجك معنا"}
          </a>
        </div>
      </section>

    </main>
  );
}
