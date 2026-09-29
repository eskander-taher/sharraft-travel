import Image from "next/image";
import type { Metadata } from "next";
import { Star, Shield, Award, Users, Clock } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "معلومات عنا | شرف للسفر والسياحة",
  description:
    "تعرف على شركة شرف للسفر والسياحة - شريككم الموثوق لتنظيم الرحلات السياحية إلى روسيا من دبي",
};

const values = [
  {
    icon: Shield,
    title: "الموثوقية",
    desc: "فريق متخصص يتابع كل تفاصيل رحلتكم من الحجز حتى العودة",
  },
  {
    icon: Award,
    title: "الجودة",
    desc: "نلتزم بأعلى معايير الجودة في جميع خدماتنا السياحية",
  },
  {
    icon: Users,
    title: "خدمة العملاء",
    desc: "فريق متخصص يتحدث العربية متاح لخدمتكم في كل خطوة",
  },
  {
    icon: Clock,
    title: "المرونة",
    desc: "برامج سياحية مخصصة تناسب رغباتكم وميزانيتكم",
  },
];

export default function AboutPage() {
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
              {"معلومات عنا"}
            </h1>
            <Star className="w-5 h-5 text-primary-foreground/60" />
          </div>
          <p className="text-primary-foreground/70 text-lg">
            {"تعرف على شركة شرف للسفر والسياحة"}
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/moscow-night.jpg"
                alt="موسكو مع شرف للسفر والسياحة"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {"شركة شرف للسفر والسياحة"}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                {"شركة شرف للسفر والسياحة هي وجهتكم الموثوقة لتنظيم الرحلات السياحية إلى روسيا. نحن متخصصون في تقديم خدمات سياحية متكاملة للمسافرين العرب والخليجيين، من التخطيط الأولي حتى العودة إلى الوطن."}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                {"يقع مقرنا الرئيسي في دبي، الإمارات العربية المتحدة، ولدينا فريق يتحدث العربية والروسية لتسهيل تواصلكم معنا في كل خطوة. نسعى دائماً لتقديم تجارب سفر استثنائية تجمع بين الراحة والمتعة والأمان."}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                {"نقدم خدمات متنوعة تشمل الاستقبال والتوديع في المطارات، حجوزات الفنادق، الجولات السياحية، تنظيم الفعاليات والأنشطة، إصدار التأشيرات والدعوات، وغيرها الكثير من الخدمات التي تجعل رحلتكم إلى روسيا تجربة لا تُنسى."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            {"لماذا تختارنا؟"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-xl p-6 text-center shadow-sm"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <Image
          src="/moscow-night.jpg"
          alt="موسكو"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                {"11+"}
              </div>
              <p className="text-primary-foreground/80 text-sm">
                {"خدمة سياحية متكاملة"}
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                {"20+"}
              </div>
              <p className="text-primary-foreground/80 text-sm">
                {"نشاط وفعالية"}
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                {"دبي"}
              </div>
              <p className="text-primary-foreground/80 text-sm">
                {"مقرنا الرئيسي"}
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                {"24/7"}
              </div>
              <p className="text-primary-foreground/80 text-sm">
                {"دعم العملاء"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {"ابدأ رحلتك معنا اليوم"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {"تواصل مع فريقنا المتخصص للحصول على عرض مخصص يناسب احتياجاتك ورغباتك. نحن هنا لمساعدتك في كل خطوة من رحلتك إلى روسيا."}
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
