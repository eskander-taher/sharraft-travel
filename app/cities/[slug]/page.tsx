import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Plane,
  Users,
  Check,
  MapPin,
  Languages,
  Car,
  UtensilsCrossed,
  Headphones,
  FileCheck,
  ChevronDown,
} from "lucide-react";
import { cities, whatsappLink } from "@/lib/cities-data";
import { arabicDigits, latitudeOf } from "@/lib/journey";

interface Props {
  params: Promise<{ slug: string }>;
}

const perks = [
  { icon: Plane, label: "استقبال وتوديع من المطار" },
  { icon: Languages, label: "مرشد يتحدث العربية" },
  { icon: Car, label: "سيارة خاصة مع سائق" },
  { icon: UtensilsCrossed, label: "ترشيح مطاعم حلال" },
  { icon: FileCheck, label: "دعوة وتأشيرة السفر" },
  { icon: Headphones, label: "دعم على مدار الساعة" },
];

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return { title: "غير موجود" };
  return {
    title: `رحلات ${city.name} | شرف للسفر والسياحة`,
    description: `${city.tagline} — ${city.shortDescription}`,
    openGraph: { images: [city.heroImage] },
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const otherCities = cities.filter((c) => c.slug !== slug);
  const quoteMessage = `مرحبًا، أبغى عرض سعر لرحلة إلى ${city.name}`;

  const facts = [
    { icon: CalendarDays, label: "أفضل وقت للزيارة", value: city.bestTime },
    { icon: Clock, label: "المدة المثالية", value: city.idealStay },
    { icon: Plane, label: "الوصول", value: city.gettingThere },
    { icon: Users, label: "مناسبة لـ", value: city.idealFor },
  ];

  return (
    <main>

      {/* Hero */}
      <section className="relative min-h-[calc(100svh-var(--bar-h))] flex items-end overflow-hidden pt-24">
        <Image
          src={city.heroImage}
          alt={city.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/50" />
        <div className="relative z-10 w-full mx-auto max-w-6xl px-4 pb-14 lg:pb-20">
          <Link
            href="/cities"
            className="inline-flex items-center gap-1 text-white hover:underline text-sm mb-5 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            {"جميع الوجهات"}
          </Link>
          <span className="block w-fit bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
            {city.badge}
          </span>
          <p aria-hidden="true" className="chapter-lat mb-2">
            {arabicDigits(latitudeOf(slug) ?? 0)}
            <span className="chapter-deg">°</span>
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-3">
            {city.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">{city.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink(quoteMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center btn-wa px-8 py-3 rounded-full text-lg font-bold hover:opacity-90 transition-opacity shadow-lg"
            >
              {"احصل على عرض سعر الآن"}
            </a>
            <a
              href="#packages"
              className="inline-block text-center border-2 border-white text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-card hover:text-primary transition-colors"
            >
              {"شاهد البرامج"}
            </a>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-[hsl(var(--ink))]">
        <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((f) => (
            <div key={f.label} className="flex items-start gap-3 text-primary-foreground">
              <f.icon className="w-6 h-6 shrink-0 mt-0.5 text-[hsl(var(--amber))]" />
              <div>
                <p className="text-xs text-white/75">{f.label}</p>
                <p className="text-sm font-semibold">{f.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About + gallery */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {`لماذا ${city.name}؟`}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
              {city.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {city.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-foreground font-medium">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {city.gallery.map((img, i) => (
              <div
                key={img.src}
                className={`relative rounded-sm overflow-hidden shadow-md ${
                  i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            {`أبرز ما ستعيشه في ${city.name}`}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {"معالم وتجارب نرتبها لك ضمن برنامج رحلتك"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {city.attractions.map((a) => (
              <div
                key={a.title}
                className="bg-card rounded-sm border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-lg font-bold text-card-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 lg:py-24 bg-background scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            {`برامج ${city.name} المقترحة`}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {"كل البرامج قابلة للتعديل حسب ميزانيتك وعدد الأشخاص ومواعيدك"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {city.packages.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-sm p-6 lg:p-8 border-2 ${
                  p.popular
                    ? "border-primary bg-primary text-primary-foreground shadow-luxury-lg md:-translate-y-3"
                    : "border-border bg-card text-card-foreground"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 right-6 bg-[hsl(var(--amber))] text-[hsl(var(--ink))] text-xs font-bold px-3 py-1 rounded-full">
                    {"الأكثر حجزًا"}
                  </span>
                )}
                <p className={`text-sm mb-1 ${p.popular ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                  {p.duration}
                </p>
                <h3 className="text-xl font-bold mb-5">{p.name}</h3>
                <ul className="flex flex-col gap-3 mb-8 text-sm">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.popular ? "text-[hsl(var(--amber))]" : "text-primary"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`مرحبًا، أبغى عرض سعر لبرنامج "${p.name}" (${p.duration}) في ${city.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto text-center px-6 py-3 rounded-full font-bold transition-opacity hover:opacity-90 text-sm ${
                    p.popular ? "bg-card text-primary" : "bg-primary text-primary-foreground"
                  }`}
                >
                  {"اطلب السعر عبر واتساب"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-14 bg-gradient-luxury-1">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-10">
            {"مع شرف، كل رحلة تشمل راحتك الكاملة"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {perks.map((perk) => (
              <div key={perk.label} className="flex flex-col items-center text-center gap-3 text-white">
                <span className="w-14 h-14 rounded-full bg-white/15 border border-white/20 flex items-center justify-center">
                  <perk.icon className="w-6 h-6" />
                </span>
                <span className="text-sm font-medium">{perk.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            {"أسئلة شائعة"}
          </h2>
          <div className="flex flex-col gap-3">
            {city.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-card border border-border rounded-sm p-5 open:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-card-foreground">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        <Image src={city.gallery[0].src} alt={city.gallery[0].alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-balance">
            {`جاهز لرحلتك إلى ${city.name}؟`}
          </h2>
          <p className="text-white/85 mb-8">
            {"أرسل لنا مواعيدك وعدد المسافرين، ونرسل لك برنامجًا وعرض سعر خلال وقت قصير."}
          </p>
          <a
            href={whatsappLink(quoteMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-wa px-10 py-3 rounded-full text-lg font-bold hover:opacity-90 transition-opacity shadow-lg"
          >
            {"تواصل معنا عبر واتساب"}
          </a>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            {"أكمل رحلتك بمدينة أخرى"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/cities/${c.slug}`}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={c.heroImage}
                  alt={c.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{c.name}</h3>
                  <p className="text-sm text-white/80">{c.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
