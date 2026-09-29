import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Star } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { activities } from "@/lib/activities-data";

export const metadata: Metadata = {
  title: "الفعاليات | شرف للسفر والسياحة",
  description: "اكتشف أفضل الفعاليات والأنشطة السياحية في روسيا مع شركة شرف",
};

export default function ActivitiesPage() {
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
          <div className="absolute top-16 left-1/4 text-primary-foreground">
            <Star className="w-2 h-2" />
          </div>
          <div className="absolute bottom-20 left-20 text-primary-foreground">
            <Star className="w-4 h-4" />
          </div>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Star className="w-5 h-5 text-primary-foreground/60" />
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">{"الفعاليات"}</h1>
            <Star className="w-5 h-5 text-primary-foreground/60" />
          </div>
          <p className="text-primary-foreground/70 text-lg">{"اكتشف أفضل الأنشطة السياحية في روسيا"}</p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activities
              .filter((activity) => activity.image && !activity.image.includes("placeholder"))
              .map((activity) => (
                <Link
                  key={activity.slug}
                  href={`/activities/${activity.slug}`}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-base font-bold text-white text-center drop-shadow-lg">
                      {activity.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
          
          {/* Show message if no activities with images */}
          {activities.filter((activity) => activity.image && !activity.image.includes("placeholder")).length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                لا توجد صور متاحة للأنشطة حالياً. جاري إضافتها قريباً.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <Image src="/places/saintpetersburg.jpg" alt="موسكو" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="text-primary-foreground/85 leading-relaxed text-base md:text-lg mb-8">
            {"اكتشفوا أفضل الأنشطة والفعاليات السياحية في موسكو وروسيا مع شركة شرف للسفر والسياحة. نقدم لكم تجارب فريدة ومميزة تشمل الرحلات البحرية، جولات الهليكوبتر، ركوب الخيل، التزلج على الجليد، والعديد من الأنشطة الشتوية والصيفية المثيرة. فريقنا المتخصص يضمن لكم تجربة آمنة وممتعة لا تُنسى."}
          </p>
          <a
            href="https://wa.me/79261038152"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-10 py-3 rounded-full font-bold hover:opacity-90 transition-opacity duration-200 shadow-lg"
          >
            {"تواصل والاستعلام"}
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
