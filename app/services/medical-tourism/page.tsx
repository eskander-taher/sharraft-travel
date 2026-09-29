import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Star, Phone, Mail, MapPin, CheckCircle, Stethoscope, Eye, Bone } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "السياحة العلاجية في روسيا | شرف للسفر والسياحة",
  description: "علاج الأمراض في أفضل المستشفيات الروسية المتخصصة في العيون والأورام والعظام مع أطباء خبراء",
};

export default function MedicalTourismPage() {
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
            <Stethoscope className="w-8 h-8 text-primary-foreground/60" />
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">
              {"السياحة العلاجية"}
            </h1>
            <Stethoscope className="w-8 h-8 text-primary-foreground/60" />
          </div>
          <p className="text-primary-foreground/70 text-lg mb-4">
            {"علاج متقدم في روسيا مع أفضل الأطباء"}
          </p>
          <p className="text-primary-foreground/60 text-base">
            {"Медицинский туризм в России | Передовое лечение с лучшими врачами"}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {"لماذا روسيا للعلاج؟"}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              {
                "روسيا تشتهر بتقديم خدمات طبية متطورة في مجالات علاج العيون والأورام وأمراض العظام. ننسق لكم العلاج في أفضل المستشفيات الروسية المتخصصة مع أطباء ذوي خبرة عالمية. تشمل خدماتنا حجز المواعيد الطبية، الترجمة الطبية، الإقامة، والنقل. نضمن لكم الحصول على أفضل رعاية طبية بتكاليف مناسبة في مستشفيات مجهزة بأحدث التقنيات الطبية."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground text-center mb-12">
            {"التخصصات الطبية المتاحة"}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Eye Treatment */}
            <div className="bg-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                {"علاج أمراض العيون"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {"جراحات الليزر للبصر، علاج الجلوكوما، المياه البيضاء، وزراعة القرنية"}
              </p>
              <ul className="text-right text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>جراحات الليزر الدقيقة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>أحدث التقنيات الطبية</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>أطباء استشاريون عالميون</span>
                </li>
              </ul>
            </div>

            {/* Cancer Treatment */}
            <div className="bg-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                {"علاج الأورام السرطانية"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {"علاج كيميائي، إشعاعي، جراحي، وعلاج مناعي متقدم"}
              </p>
              <ul className="text-right text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>بروتوكولات علاج حديثة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>فرق طبية متخصصة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>رعاية ما بعد العلاج</span>
                </li>
              </ul>
            </div>

            {/* Bone Treatment */}
            <div className="bg-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                {"أمراض العظام والمفاصل"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {"جراحات استبدال المفاصل، علاج الكسور، وجراحات العمود الفقري"}
              </p>
              <ul className="text-right text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>جراحات بسيطة وتدخلية</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>إعادة تأهيل متكاملة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>علاج طبيعي متخصص</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            {"خدماتنا تشمل"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">
                  {"حجز المواعيد الطبية"}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {"تنسيق المواعيد مع أفضل الأطباء والمستشفيات المتخصصة"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">
                  {"الترجمة الطبية"}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {"مترجمون طبيون معتمدون لجميع الاستشارات والعلاجات"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">
                  {"الإقامة والنقل"}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {"إقامة مريحة بالقرب من المستشفى وخدمات نقل مخصصة"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">
                  {"المتابعة المستمرة"}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {"متابعة الحالة الصحية قبل وأثناء وبعد العلاج"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground text-center mb-12">
            {"خطوات العلاج في روسيا"}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                1
              </div>
              <h4 className="font-semibold text-accent-foreground mb-2">
                {"استشارة أولية"}
              </h4>
              <p className="text-sm text-accent-foreground/80">
                {"مراجعة التقارير الطبية وتحديد العلاج المناسب"}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                2
              </div>
              <h4 className="font-semibold text-accent-foreground mb-2">
                {"حجز المواعيد"}
              </h4>
              <p className="text-sm text-accent-foreground/80">
                {"تنسيق المواعيد مع الأطباء والمستشفيات المتخصصة"}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                3
              </div>
              <h4 className="font-semibold text-accent-foreground mb-2">
                {"السفر والعلاج"}
              </h4>
              <p className="text-sm text-accent-foreground/80">
                {"السفر إلى روسيا وتلقي العلاج في أفضل المستشفيات"}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                4
              </div>
              <h4 className="font-semibold text-accent-foreground mb-2">
                {"المتابعة والعودة"}
              </h4>
              <p className="text-sm text-accent-foreground/80">
                {"متابعة ما بعد العلاج والعودة إلى بلدك"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {"ابدأ رحلتك العلاجية اليوم"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {
              "فريقنا جاهز لمساعدتك في الحصول على أفضل رعاية طبية في روسيا. تواصل معنا الآن لبدء إجراءات العلاج."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/79261038152"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-full font-bold hover:bg-accent/90 transition-colors duration-200"
            >
              {"استشارة طبية مجانية"}
            </a>
            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors duration-200"
            >
              {"تواصل معنا"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
