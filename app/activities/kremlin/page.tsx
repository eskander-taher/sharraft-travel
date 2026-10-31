import React from "react";
import { Mountain, Clock, MapPin, Star } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata = {
  title: "الكرملين موسكو | شرف للسفر والسياحة",
  description: "اكتشف جمال وتاريخ الكرملين في موسكو، القلعة التاريخية التي ترمز إلى القوة والسلطة الروسية. جولات سياحية مميزة مع شرف.",
};

export default function KremlinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background">
      {/* Hero Section */}
      <PageHero
        title="الكرملين موسكو"
        subtitle="قلعة تاريخية مزخرفة تحفة معمارية فريدة في قلب موسكو"
        image="/cities/moscow-hero.jpg"
        imageAlt="الكرملين والساحة الحمراء في موسكو"
        message='مرحبًا، أبغى أضيف "الكرملين" إلى رحلتي في روسيا'
      >
        <Link href="/contact" className="underline underline-offset-4 font-bold py-2">احجز جولتك الآن</Link>
        <Link href="/activities" className="underline underline-offset-4 font-bold py-2">المزيد من الأنشطة</Link>
      </PageHero>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-card rounded-sm shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-primary mb-6">نظرة عامة</h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    الكرملين في موسكو هو عبارة عن قصور مزخرفة وتحف معمارية ليس لها مثيل في العالم وهي محصنة وتقع في وسط العاصمة الروسية موسكو، ويضم خمسة قصور وأربع كاتدرائيات وسور الكرملين المحيط به بالإضافة إلى أبراج الكرملين.
                  </p>
                  <p>
                    يرمز الكرملين إلى القوة والسلطة الروسية والسوفييتية (لفترة من الوقت)، وهو المقر الرسمي لرئيس الاتحاد الروسي منذ عام 1991. تم بناء جدران الكرملين ذات الطوب الأحمر المسنن وأبراجه العشرين (19 برجًا بها أبراج) في نهاية القرن الخامس عشر، عندما وصل عدد كبير من البنائين الإيطاليين إلى موسكو بدعوة من إيفان الثالث (العظيم).
                  </p>
                </div>
              </div>

              {/* Towers */}
              <div className="bg-card rounded-sm shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-primary mb-6">الأبراج الشهيرة</h2>
                <div className="space-y-6">
                  <div className="border-r-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">برج المنقذ (سباسكايا)</h3>
                    <p className="text-muted-foreground">
                      أحد أهم الأبراج، المؤدي إلى الساحة الحمراء، تم بناؤه في عام 1491 من قبل بييترو سولاريو، الذي صمم معظم الأبراج الرئيسية. وتُذاع دقات الساعة عبر الراديو كإشارة زمنية إلى البلاد بأكملها.
                    </p>
                  </div>
                  <div className="border-r-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">برج القديس نيكولاس (نيكولسكايا)</h3>
                    <p className="text-muted-foreground">
                      الذي بُني في الأصل عام 1491 وأُعيد بناؤه عام 1806، يعد من أبرز المعالم المعمارية في الكرملين.
                    </p>
                  </div>
                  <div className="border-r-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">الأبراج الرئيسية الأخرى</h3>
                    <p className="text-muted-foreground">
                      برج الثالوث (ترويتسكايا)، برج بوروفيتسكايا، وغيرها من الأبراج التي ترتفع من الجدران المحيطة بالكرملين.
                    </p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-card rounded-sm shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-primary mb-6">ماذا تشمل الزيارة؟</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mountain className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">القصور الإمبراطورية</h3>
                      <p className="text-muted-foreground text-sm">استكشف القصور الخمسة الفاخرة داخل الكرملين</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">الكاتدرائيات الأربع</h3>
                      <p className="text-muted-foreground text-sm">زيارة الكاتدرائيات التاريخية الشهيرة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">الأسوار والأبراج</h3>
                      <p className="text-muted-foreground text-sm">تجول along السور التاريخي و20 برجًا</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">متاحف الكرملين</h3>
                      <p className="text-muted-foreground text-sm">استكشاف الكنوز والتحف الفنية</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="bg-gradient-luxury-2 text-white rounded-sm p-6 shadow-luxury-lg">
                <h3 className="text-xl font-bold mb-4">معلومات سريعة</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold">📍 الموقع:</span>
                    <p className="text-sm opacity-90">وسط موسكو التاريخي</p>
                  </div>
                  <div>
                    <span className="font-semibold">⏰ ساعات العمل:</span>
                    <p className="text-sm opacity-90">10:00 - 17:00 (ما عدا الخميس)</p>
                  </div>
                  <div>
                    <span className="font-semibold">🎫 تذاكر:</span>
                    <p className="text-sm opacity-90">الحجز المسبق مطلوب</p>
                  </div>
                  <div>
                    <span className="font-semibold">👥 أفضل وقت للزيارة:</span>
                    <p className="text-sm opacity-90">صباحًا خلال أيام الأسبوع</p>
                  </div>
                </div>
              </div>

              {/* Related Activities */}
              <div className="bg-card rounded-sm shadow-luxury p-6 border-luxury">
                <h3 className="text-xl font-bold text-primary mb-4">أنشطة مقترحة</h3>
                <div className="space-y-3">
                  <Link href="/activities/red-square" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                    <h4 className="font-semibold text-primary">الساحة الحمراء</h4>
                    <p className="text-sm text-muted-foreground">أشهر ميدان في موسكو</p>
                  </Link>
                  <Link href="/activities/gorky-park" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                    <h4 className="font-semibold text-primary">حديقة غوركي</h4>
                    <p className="text-sm text-muted-foreground">أجمل حدائق موسكو</p>
                  </Link>
                  <Link href="/activities/vdnkh" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                    <h4 className="font-semibold text-primary">حديقة فدنخا</h4>
                    <p className="text-sm text-muted-foreground">أكبر مجمع ترفيهي</p>
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[hsl(var(--ink))] to-[hsl(var(--ink))] text-white rounded-sm p-6 text-center shadow-luxury-xl">
                <h3 className="text-xl font-bold mb-3">جولة خاصة للكرملين</h3>
                <p className="mb-4 opacity-90">استكشف الكرملين مع مرشد سياحي متخصص</p>
                <Link 
                  href="/contact" 
                  className="bg-card text-primary px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition-all duration-300 inline-block"
                >
                  اطلب التفاصيل
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
