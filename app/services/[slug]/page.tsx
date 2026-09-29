import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { services } from "@/lib/services-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "غير موجود" };
  return {
    title: `${service.title} | شرف للسفر والسياحة`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  const relatedServices = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <main>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-[45vh] lg:h-[55vh]">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
          <div className="absolute bottom-0 right-0 left-0 p-6 lg:p-12">
            <div className="mx-auto max-w-5xl">
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground text-sm mb-4 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                {"العودة إلى الخدمات"}
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground text-balance">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {"عن هذه الخدمة"}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-8">
                {service.fullDesc}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-8">
                {"نحرص في شركة شرف للسفر والسياحة على تقديم هذه الخدمة بأعلى معايير الجودة والاحترافية. فريقنا المتخصص يعمل على مدار الساعة لضمان حصولكم على أفضل تجربة ممكنة. نوفر دعماً متواصلاً باللغة العربية لتسهيل التواصل وضمان راحتكم التامة."}
              </p>

              {/* CTA */}
              <div className="bg-secondary rounded-xl p-6 lg:p-8">
                <h3 className="text-lg font-bold text-secondary-foreground mb-3">
                  {"هل تحتاج هذه الخدمة؟"}
                </h3>
                <p className="text-muted-foreground text-sm mb-5">
                  {"تواصل معنا الآن عبر واتساب للاستفسار عن التفاصيل والأسعار."}
                </p>
                <a
                  href="https://wa.me/79261038152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity text-sm"
                >
                  {"تواصل عبر واتساب"}
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-card rounded-xl border border-border p-5 mb-6">
                  <h3 className="text-base font-bold text-card-foreground mb-4">
                    {"تفاصيل الخدمة"}
                  </h3>
                  <div className="flex flex-col gap-3 text-sm">
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{"المدينة"}</span>
                      <span className="text-card-foreground font-medium">
                        {"جميع المدن الروسية"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{"اللغة"}</span>
                      <span className="text-card-foreground font-medium">
                        {"عربي / روسي / إنجليزي"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{"التوفر"}</span>
                      <span className="text-card-foreground font-medium">
                        {"متاح على مدار الساعة"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-muted-foreground">{"الحجز"}</span>
                      <span className="text-card-foreground font-medium">
                        {"عبر واتساب"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Navigation between services */}
                <div className="flex items-center gap-3">
                  {prevService ? (
                    <Link
                      href={`/services/${prevService.slug}`}
                      className="flex-1 flex items-center gap-2 bg-card border border-border rounded-lg p-3 hover:bg-secondary transition-colors text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                      <span className="text-card-foreground font-medium truncate">
                        {prevService.title}
                      </span>
                    </Link>
                  ) : (
                    <div className="flex-1" />
                  )}
                  {nextService ? (
                    <Link
                      href={`/services/${nextService.slug}`}
                      className="flex-1 flex items-center justify-end gap-2 bg-card border border-border rounded-lg p-3 hover:bg-secondary transition-colors text-sm"
                    >
                      <span className="text-card-foreground font-medium truncate">
                        {nextService.title}
                      </span>
                      <ChevronLeft className="w-4 h-4 text-muted-foreground shrink-0" />
                    </Link>
                  ) : (
                    <div className="flex-1" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            {"خدمات أخرى"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-colors duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {item.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
