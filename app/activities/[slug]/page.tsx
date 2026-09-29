import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { activities } from "@/lib/activities-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) return { title: "غير موجود" };
  return {
    title: `${activity.title} | شرف للسفر والسياحة`,
    description: activity.description,
  };
}

export default async function ActivityDetailPage({ params }: Props) {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) notFound();

  const currentIndex = activities.findIndex((a) => a.slug === slug);
  const prevActivity = currentIndex > 0 ? activities[currentIndex - 1] : null;
  const nextActivity =
    currentIndex < activities.length - 1 ? activities[currentIndex + 1] : null;

  const relatedActivities = activities
    .filter((a) => a.slug !== slug)
    .slice(0, 4);

  return (
    <main>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-[50vh] lg:h-[60vh]">
          <Image
            src={activity.image || "/placeholder.svg"}
            alt={activity.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
          <div className="absolute bottom-0 right-0 left-0 p-6 lg:p-12">
            <div className="mx-auto max-w-5xl">
              <Link
                href="/activities"
                className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground text-sm mb-4 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                {"العودة إلى الفعاليات"}
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground text-balance">
                {activity.title}
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
                {"عن هذه الفعالية"}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-8">
                {activity.description}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-8">
                {
                  "نحرص في شركة شرف للسفر والسياحة على تقديم أفضل التجارب السياحية لعملائنا. يتم تنظيم هذه الفعالية بإشراف فريق متخصص يضمن سلامتكم وراحتكم طوال الرحلة. نوفر لكم جميع المستلزمات والتجهيزات اللازمة مع مرشدين يتحدثون العربية لتسهيل التواصل وضمان تجربة ممتعة لا تُنسى."
                }
              </p>

              {/* CTA */}
              <div className="bg-secondary rounded-xl p-6 lg:p-8">
                <h3 className="text-lg font-bold text-secondary-foreground mb-3">
                  {"هل أنت مهتم بهذه الفعالية؟"}
                </h3>
                <p className="text-muted-foreground text-sm mb-5">
                  {
                    "تواصل معنا الآن عبر واتساب للحجز والاستفسار عن الأسعار والمواعيد المتاحة."
                  }
                </p>
                <a
                  href="https://wa.me/79261038152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity text-sm"
                >
                  {"احجز عبر واتساب"}
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-card rounded-xl border border-border p-5 mb-6">
                  <h3 className="text-base font-bold text-card-foreground mb-4">
                    {"معلومات سريعة"}
                  </h3>
                  <div className="flex flex-col gap-3 text-sm">
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">
                        {"الموقع"}
                      </span>
                      <span className="text-card-foreground font-medium">
                        {"موسكو، روسيا"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">
                        {"المدة"}
                      </span>
                      <span className="text-card-foreground font-medium">
                        {"2-4 ساعات"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">
                        {"المستوى"}
                      </span>
                      <span className="text-card-foreground font-medium">
                        {"مناسب للجميع"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-muted-foreground">
                        {"اللغة"}
                      </span>
                      <span className="text-card-foreground font-medium">
                        {"عربي / روسي"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Navigation between activities */}
                <div className="flex items-center gap-3">
                  {prevActivity ? (
                    <Link
                      href={`/activities/${prevActivity.slug}`}
                      className="flex-1 flex items-center gap-2 bg-card border border-border rounded-lg p-3 hover:bg-secondary transition-colors text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                      <span className="text-card-foreground font-medium truncate">
                        {prevActivity.title}
                      </span>
                    </Link>
                  ) : (
                    <div className="flex-1" />
                  )}
                  {nextActivity ? (
                    <Link
                      href={`/activities/${nextActivity.slug}`}
                      className="flex-1 flex items-center justify-end gap-2 bg-card border border-border rounded-lg p-3 hover:bg-secondary transition-colors text-sm"
                    >
                      <span className="text-card-foreground font-medium truncate">
                        {nextActivity.title}
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

      {/* Related Activities */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            {"فعاليات أخرى قد تعجبك"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedActivities.map((item) => (
              <Link
                key={item.slug}
                href={`/activities/${item.slug}`}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/60 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-sm font-bold text-primary-foreground text-center px-3">
                    {item.title}
                  </h3>
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
