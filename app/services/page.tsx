import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/services-data";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "خدماتنا | شرف للسفر والسياحة",
  description:
    "تعرف على جميع خدماتنا من حجز فنادق وجولات سياحية واستقبال وتوديع وتأشيرات",
};

export default function ServicesPage() {
  return (
    <main>

      {/* Hero */}
      <PageHero
        title="خدماتنا"
        subtitle="نقدم لكم مجموعة شاملة من الخدمات السياحية في روسيا"
        image="/services/Reception_&_Send-off.jpg"
        imageAlt="سيارة استقبال من المطار"
        message='مرحبًا، أبغى أستفسر عن خدماتكم في روسيا'
      >
      </PageHero>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-card rounded-sm overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[hsl(var(--ink))]/55 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <Image
          src="/places/pine_river.jpeg"
          alt="روسيا"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(var(--ink))]/55" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6 text-balance">
            {"هل تحتاج مساعدة في التخطيط لرحلتك؟"}
          </h2>
          <p className="text-primary-foreground/85 leading-relaxed text-base mb-8">
            {
              "فريقنا مستعد لمساعدتك في كل تفاصيل رحلتك إلى روسيا. تواصل معنا الآن للحصول على عرض مخصص يناسب احتياجاتك."
            }
          </p>
          <a
            href="https://wa.me/79261038152"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-10 py-3 rounded-full font-bold hover:opacity-90 transition-opacity duration-200 shadow-lg"
          >
            {"تواصل معنا عبر واتساب"}
          </a>
        </div>
      </section>

    </main>
  );
}
