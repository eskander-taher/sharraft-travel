import React from "react";
import { MapPin, Clock, Camera, Building } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/page-hero";

export const metadata = {
  title: "الساحة الحمراء | شرف للسفر والسياحة",
  description: "اكتشف الساحة الحمراء في موسكو، أحد أقدم وأكبر الميادين التاريخية. جولات سياحية مميزة مع شرف.",
};

export default function RedSquarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background">
      {/* Hero Section */}
      <PageHero
        title="الساحة الحمراء"
        subtitle="قلب موسكو النابض وأشهر ميدان تاريخي في روسيا"
        image="/cities/moscow-red-square.jpg"
        imageAlt="الساحة الحمراء في موسكو"
        message='مرحبًا، أبغى أضيف "الساحة الحمراء" إلى رحلتي في روسيا'
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
                    الميدان الأحمر هو أحد أقدم وأكبر الميادين في موسكو، روسيا. يقع في وسط موسكو التاريخي، على طول الأسوار الشرقية للكرملين. وهو أبرز معالم المدينة، حيث يضم مباني شهيرة مثل كاتدرائية القديس باسيل وضريح لينين ومتجر GUM.
                  </p>
                  <p>
                    تاريخيًا، كانت الساحة الحمراء مكانًا للأسواق والاحتفالات العامة وإعلانات القيصر. اليوم، أصبحت مركزًا سياحيًا رئيسيًا ومكانًا للأحداث الهامة والمهرجانات والحفلات الموسيقية.
                  </p>
                </div>
              </div>

              {/* Main Attractions */}
              <div className="bg-card rounded-sm shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-primary mb-6">أهم المعالم في الساحة الحمراء</h2>
                <div className="space-y-6">
                  <div className="border-r-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">كاتدرائية القديس باسيل</h3>
                    <p className="text-muted-foreground">
                      تحفة معمارية فريدة بقبابها الملونة الشهيرة، بنيت في القرن السادس عشر بأمر من إيفان الرابع. تُعتبر من أشهر معالم روسيا ورمزًا لموسكو.
                    </p>
                  </div>
                  <div className="border-r-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">ضريح لينين</h3>
                    <p className="text-muted-foreground">
                      النصب التذكاري الذي يضم جثمان فلاديمير لينين، مؤسس الاتحاد السوفيتي. يقع في قلب الساحة ويستقبل الزوار من جميع أنحاء العالم.
                    </p>
                  </div>
                  <div className="border-r-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">متجر GUM</h3>
                    <p className="text-muted-foreground">
                      مركز تسوق فاخر يضم العلامات التجارية العالمية والمطاعم الراقية. يتميز بتصميمه المعماري الرائع وواجهته الزجاجية الضخمة.
                    </p>
                  </div>
                  <div className="border-r-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">متحف الدولة التاريخي</h3>
                    <p className="text-muted-foreground">
                      يقع في المبنى الشمالي للساحة، ويضم مجموعة ضخمة من القطع الأثرية والتاريخية التي تروي قصة روسيا عبر العصور.
                    </p>
                  </div>
                  <div className="border-r-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">سور الكرملين</h3>
                    <p className="text-muted-foreground">
                      يشكل خلفية رائعة للساحة الحمراء، مع أبراجه الشهيرة وأبوابه التاريخية التي تؤدي إلى مجمع الكرملين.
                    </p>
                  </div>
                </div>
              </div>

              {/* Activities */}
              <div className="bg-card rounded-sm shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-primary mb-6">أنشطة وتجارب</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Camera className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">التصوير الفوتوغرافي</h3>
                      <p className="text-muted-foreground text-sm">التقاط صور لا تُنسى للمعالم الشهيرة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">جولات معمارية</h3>
                      <p className="text-muted-foreground text-sm">استكشاف التحف المعمارية التاريخية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">تسوق فاخر</h3>
                      <p className="text-muted-foreground text-sm">تجربة تسوق مميزة في GUM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">مهرجانات ثقافية</h3>
                      <p className="text-muted-foreground text-sm">المشاركة في الفعاليات السنوية</p>
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
                    <p className="text-sm opacity-90">مفتوحة على مدار 24 ساعة</p>
                  </div>
                  <div>
                    <span className="font-semibold">🎫 تذاكر:</span>
                    <p className="text-sm opacity-90">مجانية للساحة، مدفوعة للمتاحف</p>
                  </div>
                  <div>
                    <span className="font-semibold">👥 أفضل وقت للزيارة:</span>
                    <p className="text-sm opacity-90">صباحًا أو مساءً لتجنب الازدحام</p>
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
                  <Link href="/activities/nikolskaya-street" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                    <h4 className="font-semibold text-primary">شارع نيكولسكايا</h4>
                    <p className="text-sm text-muted-foreground">شارع تاريخي للمشاة</p>
                  </Link>
                  <Link href="/activities/zaryadye-park" className="block p-3 rounded-lg hover:bg-secondary transition-colors">
                    <h4 className="font-semibold text-primary">حديقة زاريادي</h4>
                    <p className="text-sm text-muted-foreground">حديقة حديثة بجوار الكرملين</p>
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[hsl(var(--ink))] to-[hsl(var(--ink))] text-white rounded-sm p-6 text-center shadow-luxury-xl">
                <h3 className="text-xl font-bold mb-3">جولة خاصة في الساحة الحمراء</h3>
                <p className="mb-4 opacity-90">اكتشف تاريخ وأسرار الساحة الحمراء مع مرشد متخصص</p>
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
