import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Star, MapPin, Thermometer, Globe, Plane } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "السياحة الروسية | شرف للسفر والسياحة",
  description:
    "اكتشف جمال روسيا - دليلك الشامل للسياحة في روسيا مع شركة شرف",
};

const destinations = [
  {
    title: "موسكو",
    desc: "العاصمة الروسية - الكرملين والساحة الحمراء ومتاحف عالمية",
    image: "/places/moscow.avif",
  },
  {
    title: "سانت بطرسبرغ",
    desc: "مدينة الثقافة والفنون - متحف الهيرميتاج وقصر بيترهوف",
    image: "/places/saintpetersburg.jpg",
  },
  {
    title: "المناطق القطبية",
    desc: "مشاهدة الشفق القطبي والحياة البرية في الشمال",
    image: "/places/polar.jpg",
  },
  {
    title: "الريف الروسي",
    desc: "استكشاف القرى التقليدية والطبيعة الخلابة",
    image: "/places/pine_river.jpeg",
  },
];

const tips = [
  {
    icon: Plane,
    title: "السفر والتأشيرة",
    desc: "نساعدكم في إصدار التأشيرة الروسية وحجز أفضل رحلات الطيران بأسعار تنافسية.",
  },
  {
    icon: Thermometer,
    title: "الطقس والمناخ",
    desc: "روسيا تتميز بشتاء بارد (من -10 إلى -25) وصيف معتدل (15 إلى 30). أفضل أوقات الزيارة من يونيو إلى سبتمبر.",
  },
  {
    icon: Globe,
    title: "اللغة والثقافة",
    desc: "اللغة الرسمية هي الروسية. فريقنا يوفر مرشدين يتحدثون العربية لتسهيل تجربتكم.",
  },
  {
    icon: MapPin,
    title: "التنقل الداخلي",
    desc: "نوفر خدمات النقل الداخلي بسيارات خاصة وقطارات سريعة بين المدن الروسية.",
  },
];

export default function RussianTourismPage() {
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
              {"السياحة الروسية"}
            </h1>
            <Star className="w-5 h-5 text-primary-foreground/60" />
          </div>
          <p className="text-primary-foreground/70 text-lg">
            {"اكتشف جمال روسيا الساحر مع شركة شرف"}
          </p>
        </div>
      </section>

      {/* About Russia */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            {"لماذا روسيا؟"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base text-center mb-6">
            {"روسيا هي أكبر دولة في العالم وتتميز بتنوع ثقافي وجغرافي فريد. من القصور الفخمة والكنائس ذات القباب الملونة إلى الغابات الشاسعة والمناطق القطبية الساحرة، تقدم روسيا تجربة سياحية لا مثيل لها. تضم روسيا مواقع تراث عالمي عديدة ومتاحف من أشهر المتاحف في العالم."}
          </p>
          <p className="text-muted-foreground leading-relaxed text-base text-center">
            {"سواء كنتم من محبي التاريخ والثقافة، أو تبحثون عن مغامرات شتوية مثيرة، أو ترغبون في تجربة الحياة الروسية الأصيلة، فإن روسيا تلبي جميع الأذواق والاهتمامات."}
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            {"أبرز الوجهات السياحية"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinations.map((dest) => (
              <div
                key={dest.title}
                className="group relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">
                    {dest.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {dest.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            {"نصائح للمسافرين"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="flex gap-4 bg-card rounded-xl border border-border p-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <tip.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-card-foreground mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="/moscow-night.jpg"
          alt="موسكو في الليل"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            {"خطط لرحلتك إلى روسيا الآن"}
          </h2>
          <p className="text-primary-foreground/85 text-base md:text-lg leading-relaxed mb-8">
            {"نقدم بكجات سياحية مخصصة تشمل الإقامة والتنقل والجولات السياحية والفعاليات. تواصل معنا للحصول على عرض مخصص."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/79261038152"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-10 py-3 rounded-full font-bold hover:opacity-90 transition-opacity duration-200 shadow-lg"
            >
              {"احجز الآن"}
            </a>
            <Link
              href="/activities"
              className="inline-block bg-primary-foreground text-primary px-10 py-3 rounded-full font-bold hover:opacity-90 transition-opacity duration-200"
            >
              {"شاهد الفعاليات"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
