import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Star } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "خدماتنا | شرف للسفر والسياحة",
  description:
    "تعرف على جميع خدماتنا من حجز فنادق وجولات سياحية واستقبال وتوديع وتأشيرات",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 text-primary-foreground">
            <Star className="w-4 h-4" />
          </div>
          <div className="absolute top-20 left-32 text-primary-foreground">
            <Star className="w-3 h-3" />
          </div>
          <div className="absolute bottom-16 right-40 text-primary-foreground">
            <Star className="w-5 h-5" />
          </div>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Star className="w-5 h-5 text-primary-foreground/60" />
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              {"خدماتنا"}
            </h1>
            <Star className="w-5 h-5 text-primary-foreground/60" />
          </div>
          <p className="text-primary-foreground/70 text-lg">
            {"نقدم لكم مجموعة شاملة من الخدمات السياحية في روسيا"}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-colors duration-300" />
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
        <div className="absolute inset-0 bg-primary/75" />
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

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
