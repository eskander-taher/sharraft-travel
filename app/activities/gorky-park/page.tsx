import React from "react";
import { Trees, Calendar, Music, Users, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata = {
  title: "حديقة غوركي موسكو | شرف للسفر والسياحة",
  description: "اكتشف حديقة غوركي في موسكو، وجهة الترفيه والثقافة الأبرز. أنشطة متنوعة ومناظر طبيعية خلابة مع شرف.",
};

export default function GorkyParkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background">
      {/* Hero Section */}
      <PageHero
        title="حديقة غوركي"
        subtitle="حديقة الثقافة والترفيه في قلب موسكو - تجربة لا تُفوت"
        image="/places/pine_river.jpeg"
        imageAlt="طبيعة روسيا"
        message='مرحبًا، أبغى أضيف "حديقة غوركي" إلى رحلتي في روسيا'
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
                    تقع حديقة الثقافة والترفيه (Gorky Central Park of Culture and Leisure) باسم ماكسيم جوركي في قلب العاصمة الروسية موسكو، وتُعدّ واحدة من أبرز وجهات الترفيه والثقافة في المدينة. تجمع بين الماضي العريق والحاضر المتجدد، وتستقبل عشرات آلاف الزوار يوميًا من مختلف الأعمار.
                  </p>
                  <p>
                    أُنشئت الحديقة في عام 1928، وكانت تُعرف آنذاك باسم "حديقة الثقافة والترفيه رقم 1″، لكنها سميت لاحقًا باسم الكاتب الروسي المعروف ماكسيم غوركي، تخليدًا لمساهماته في الأدب الروسي.
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="bg-card rounded-sm shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-primary mb-6">الموقع والوصول</h2>
                <div className="space-y-4 text-foreground">
                  <p>
                    تُقعَد حديقة جوركي في منطقة كريميسكي فال (Krymsky Val)، وهي قريبة جدًا من العديد من معالم موسكو الشهيرة مثل متحف تريتياكوف، وجسر ستالينغراد، ومبنى راديو موسكو.
                  </p>
                  <p>
                    يمكن الوصول إليها بسهولة عبر مترو أنفاق موسكو من محطة Okrutchny Bridge أو Park Kultury، مما يجعلها وجهة مفضلة للسياح والسكان المحليين على حد سواء.
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="bg-card rounded-sm shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-primary mb-6">ماذا تقدم الحديقة؟</h2>
                <div className="space-y-6">
                  <div className="border-r-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">حديقة ملاهي (Lunapark)</h3>
                    <p className="text-muted-foreground">
                      تحتوي على ألعاب ميكانيكية حديثة تناسب الأطفال والكبار، مع تجارب مثيرة وممتعة للجميع.
                    </p>
                  </div>
                  <div className="border-r-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">مسرح خارجي</h3>
                    <p className="text-muted-foreground">
                      حيث تُقام عروض موسيقية وفنية طوال العام، مع فنانين محليين ودوليين.
                    </p>
                  </div>
                  <div className="border-r-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">مقاهٍ ومطاعم خارجية</h3>
                    <p className="text-muted-foreground">
                      تقدم الأطباق التقليدية الروسية والأوروبية في أجواء طبيعية جميلة.
                    </p>
                  </div>
                  <div className="border-r-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">مسارات مشي مُظللة</h3>
                    <p className="text-muted-foreground">
                      تتيح للمشي أو ركوب الدراجات في بيئة صحية ومريحة بعيدًا عن صخب المدينة.
                    </p>
                  </div>
                  <div className="border-r-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">منطقة شواطئ نهر موسكو</h3>
                    <p className="text-muted-foreground">
                      يمكن للزوار الاستمتاع بالجلوس على الأرصفة والاستمتاع بمنظر النهر الخلاب.
                    </p>
                  </div>
                </div>
              </div>

              {/* Seasons */}
              <div className="bg-card rounded-sm shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-primary mb-6">جمال الحديقة عبر الفصول</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      الربيع
                    </h3>
                    <p className="text-foreground text-sm">مناظر خضراء مبهجة، مثالية للتنزه والصور الفوتوغرافية</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      الصيف
                    </h3>
                    <p className="text-foreground text-sm">حرارة معتدلة، السباحة في نهر موسكو، الأنشطة الخارجية</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      الخريف
                    </h3>
                    <p className="text-foreground text-sm">ألوان زاهية للأوراق، مثالية للمشي والتأمل</p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      الشتاء
                    </h3>
                    <p className="text-foreground text-sm">مناظر ثلجية ساحرة، التزلج على الجليد، المتاجر الموسمية</p>
                  </div>
                </div>
              </div>

              {/* Cultural Activities */}
              <div className="bg-card rounded-sm shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-primary mb-6">أنشطة ثقافية وفنية</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Music className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">الموسيقى الحية</h3>
                      <p className="text-muted-foreground text-sm">عروض موسيقية في المسارح الخارجية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">ورش عمل إبداعية</h3>
                      <p className="text-muted-foreground text-sm">للأطفال والكبار في مختلف الفنون</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trees className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">معارض فنية مفتوحة</h3>
                      <p className="text-muted-foreground text-sm">معارض فنية في الهواء الطلق</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">أفلام تحت السماء</h3>
                      <p className="text-muted-foreground text-sm">عروض سينمائية في فصل الصيف</p>
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
                    <p className="text-sm opacity-90">Krymsky Val, موسكو</p>
                  </div>
                  <div>
                    <span className="font-semibold">⏰ ساعات العمل:</span>
                    <p className="text-sm opacity-90">مفتوحة على مدار 24 ساعة</p>
                  </div>
                  <div>
                    <span className="font-semibold">🎫 تذاكر:</span>
                    <p className="text-sm opacity-90">مجانية الدخول</p>
                  </div>
                  <div>
                    <span className="font-semibold">🚇 أقرب محطة مترو:</span>
                    <p className="text-sm opacity-90">Park Kultury</p>
                  </div>
                </div>
              </div>

              {/* Related Activities */}
              <div className="bg-card rounded-sm shadow-luxury p-6 border-luxury">
                <h3 className="text-xl font-bold text-primary mb-4">معالم قريبة</h3>
                <div className="space-y-3">
                  <Link href="/activities/kremlin" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                    <h4 className="font-semibold text-primary">الكرملين</h4>
                    <p className="text-sm text-muted-foreground">قلعة موسكو التاريخية</p>
                  </Link>
                  <Link href="/activities/red-square" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                    <h4 className="font-semibold text-primary">الساحة الحمراء</h4>
                    <p className="text-sm text-muted-foreground">أشهر ميدان في موسكو</p>
                  </Link>
                  <Link href="/activities/vdnkh" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                    <h4 className="font-semibold text-primary">حديقة فدنخا</h4>
                    <p className="text-sm text-muted-foreground">أكبر مجمع ترفيهي</p>
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[hsl(var(--ink))] to-[hsl(var(--ink))] text-white rounded-sm p-6 text-center shadow-luxury-xl">
                <h3 className="text-xl font-bold mb-3">جولة في حديقة غوركي</h3>
                <p className="mb-4 opacity-90">استمتع بيوم ممتع في أجمل حدائق موسكو</p>
                <Link 
                  href="/contact" 
                  className="bg-card text-primary px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition-all duration-300 inline-block"
                >
                  احجز الجولة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
