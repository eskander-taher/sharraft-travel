import React from "react";
import { MapPin, Calendar, Clock, Users, Star } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "البرامج السياحية | شرف للسفر والسياحة",
  description: "اكتشف أفضل البرامج السياحية في روسيا مع شرف. رحلات منظمة إلى موسكو وسانت بطرسبرغ.",
};

const tourPrograms = [
  {
    title: "برنامج سياحي في موسكو - 11 يوم / 10 ليالي",
    duration: "11 يوم / 10 ليالي",
    type: "برنامج متكامل",
    description: "رحلة شاملة لاكتشاف جمال موسكو والريف الروسي",
    highlights: ["الساحة الحمراء والكرملين", "موسكو سيتي وناطحات السحاب", "الريف الروسي والطبيعة الخلابة", "جولات نهرية ومتاحف عالمية"],
    href: "/contact"
  },
  {
    title: "برنامج سياحي في روسيا - 9 ليالي / 10 أيام",
    duration: "9 ليالي / 10 أيام",
    type: "برنامج مكثف",
    description: "اكتشاف أفضل معالم روسيا في رحلة مكثفة",
    highlights: ["موسكو الكبرى", "الريف الروسي", "المتاحف والحدائق", "التجارب التقليدية"],
    href: "/contact"
  },
  {
    title: "برنامج 3 أيام في موسكو",
    duration: "3 أيام",
    type: "برنامج سريع",
    description: "جولة سريعة لأهم معالم موسكو",
    highlights: ["الساحة الحمراء", "الكرملين", "حديقة زاريادي", "متحف تريتياكوف"],
    href: "/contact"
  },
  {
    title: "برنامج سانت بطرسبرغ - 6 أيام",
    duration: "6 أيام",
    type: "برنامج شمالي",
    description: "استكشاف جمال سانت بطرسبرغ التاريخي",
    highlights: ["قصر بيترهوف", "متحف الأرميتاج", "جسر أنيشكوف", "قصر يوسوبوف"],
    href: "/contact"
  }
];

export default function TourProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-luxury-1 overlay-luxury">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">البرامج السياحية</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              رحلات منظمة مميزة لاكتشاف جمال روسيا مع شرف
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 shadow-luxury hover:scale-105"
              >
                استشر خبير السياحة
              </Link>
              <Link 
                href="/activities" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-all duration-300"
              >
                استكشف الخدمات
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">اختر رحلتك المثالية</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {tourPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-luxury-lg overflow-hidden border-luxury hover:shadow-luxury-xl transition-all duration-300">
                {/* Program Header */}
                <div className="bg-gradient-luxury-2 text-white p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                      <div className="flex items-center gap-2 text-white/90">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                      {program.type}
                    </span>
                  </div>
                  <p className="text-white/90">{program.description}</p>
                </div>

                {/* Program Content */}
                <div className="p-6">
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      أبرز المعالم:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {program.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-red-600" />
                      <span className="text-sm">دليل سياحي متخصص</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4 text-red-600" />
                      <span className="text-sm">مجموعات صغيرة</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-red-600" />
                      <span className="text-sm">برنامج مرن</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Star className="w-4 h-4 text-red-600" />
                      <span className="text-sm">خدمة فاخرة</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link 
                    href={program.href}
                    className="w-full bg-gradient-luxury-2 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center block"
                  >
                    عرض التفاصيل
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">لماذا تختار شرف؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury-2 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-3">خبراء محليون</h3>
              <p className="text-gray-600">فريق من المرشدين السياحيين المحترفين الذين يعرفون روسيا جيدًا</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury-2 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-3">برامج مخصصة</h3>
              <p className="text-gray-600">رحلات مصممة خصيصًا لتلبية احتياجاتك واهتماماتك</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury-2 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-3">خدمة فاخرة</h3>
              <p className="text-gray-600">أفضل الفنادق والمطاعم والخدمات على مدار الساعة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itineraries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">البرامج السياحية بالتفصيل</h2>
          
          {/* Moscow 11 Days Program */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">برنامج سياحي في موسكو - 11 يوم / 10 ليالي</h3>
            <div className="bg-card rounded-xl p-6 shadow-luxury">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الأول</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>الاستقبال في المطار من قبل أحد مندوبي الشركة</li>
                    <li>التوجه إلى الفندق واخذ قسط من الراحة</li>
                    <li>جولة مسائية في سنتر موسكو وتناول وجبة العشاء</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الثاني</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>زيارة الساحة الحمراء (Красный площад) والكرملين (Кремль)</li>
                    <li>المشي في شارع نيكولسكيا (никольская улица)</li>
                    <li>زيارة مجمع GUM</li>
                    <li>جولة في بارك زرياد (парк зарядье) والنظر إلى نهر موسكو من الجسر الطائر</li>
                    <li>زيارة مجمع ЦУМ</li>
                    <li>مشاهدة حراس الكرملين وتغيير الحراسة</li>
                    <li>زيارة أخوتني رياد (Охотный ряд) - مول تحت الأرض بـ4 أدوار</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الثالث</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>زيارة أكبر حديقة حيوان في أوروبا (зоопарк) - أكثر من 3000 نوع من الحيوانات</li>
                    <li>زيارة شارع أربات الجديد والقديم (арбат улица)</li>
                    <li>زيارة موسكو سيتي (Москва сити) وناطحات السحاب</li>
                    <li>زيارة أفيا مول (Афивмолл)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الرابع</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>زيارة إيزمايلوفسكي كريمل (Измайловский Кремль) والأسواق الشعبية والبازار</li>
                    <li>زيارة مدينة العاب موسكو (остров мечты)</li>
                    <li>زيارة أفيابارك (Авиапарк) - أكبر مركز تسوق في أوروبا وأطول حوض سمك في العالم</li>
                    <li>زيارة بارك الحرية (парк Свободы)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الخامس</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>رحلة إلى الريف الروسي - طبيعة خلابة وأكواخ ريفية وشواء</li>
                    <li>الفعاليات: ركوب عربة تجرها الهاسكي / ركوب الهليكوبتر / ركوب الدباب / ركوب الأحصنة</li>
                    <li>زيارة هولندا الصغيرة (маленькая голландия)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم السادس</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>زيارة ВДНХ (فدنخا) - مجمع البيوت السوفيتية والمتاحف</li>
                    <li>شمس موسكو (солнце Москва) - أكبر دولاب هواء في أوروبا</li>
                    <li>متحف الفضاء (павильон космос)</li>
                    <li>مزرعة المدينة (городская ферма ВДНХ)</li>
                    <li>المدينة المائية (ОКЕАНАРИУМ)</li>
                    <li>جولة مسائية على نهر موسكو - راديسون كروز ساعتين مع العشاء</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم السابع</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>زيارة مول أكواريوم لحضور السيرك الكبير</li>
                    <li>جولة في متحف كروكس المائي (КРОКУС СИТИ ОКЕАНАРИУМ)</li>
                    <li>زيارة بارك توبياري (Парк AIVA) - منحوتات من نباتات حية</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الثامن</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>زيارة أكبر شلال في منطقة موسكو (ГРЕМЯЧИЙ КЛЮЧ)</li>
                    <li>زيارة منتزه المستقبل (Сад будущего) - أشجار بلوط عمرها +300 عام</li>
                    <li>زيارة الحديقة النباتية</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم التاسع</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>زيارة آرت أوسادبا فيريتيوفو (Арт УСАДЬБА ВЕРЕТЬЕВО) - غابات وريف وتغذية الغزلان</li>
                    <li>منازل التايغا المطلة على النهر مع التدفئة الخشبية والشواء</li>
                    <li>التنزه في منتزه باومنا (Сад баумана)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم العاشر</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>مخيم الهوبيت في ريف موسكو - تخييم وصيد السمك</li>
                    <li>زيارة سوق موسكو الكبير الشعبي</li>
                    <li>جولة في بارك النصر العسكري (Парк победы)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الحادي عشر</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>الإفطار وحزم الأمتعة</li>
                    <li>التوجه إلى الأوت لت موسكو الكبير ثم المطار</li>
                  </ul>
                </div>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">البرنامج لا يشمل:</h5>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>تذاكر الطيران</li>
                    <li>وجبة الغداء والعشاء</li>
                    <li>تذاكر دخول الأماكن السياحية</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Russia 9 Days Program */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">برنامج سياحي في روسيا - 9 ليالي / 10 أيام</h3>
            <div className="bg-card rounded-xl p-6 shadow-luxury">
              <div className="space-y-6">
                <p className="text-muted-foreground">(نفس البرنامج أعلاه من اليوم الأول إلى التاسع، وينتهي باليوم العاشر)</p>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم العاشر</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>الإفطار وحزم الأمتعة</li>
                    <li>التوجه إلى الأوت لت موسكو الكبير ثم المطار</li>
                  </ul>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">البرنامج يشمل:</h5>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>الاستقبال من المطار من قبل أحد مندوبي الشركة</li>
                    <li>سيارة خاصة طول الرحلة</li>
                    <li>وجبة الإفطار بوفيه مفتوح في جميع الفنادق</li>
                    <li>جولات يومية من 8 إلى 10 ساعات</li>
                    <li>سائق مرشد سياحي</li>
                    <li>شرائح اتصال وباقات إنترنت</li>
                    <li>التوديع والتوصيل إلى المطار</li>
                    <li>خدمة عملاء على مدار 24 ساعة</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">البرنامج لا يشمل:</h5>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>تذاكر الطيران</li>
                    <li>وجبة الغداء والعشاء</li>
                    <li>تذاكر دخول الأماكن السياحية</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Days Moscow Program */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">برنامج 3 أيام في موسكو</h3>
            <div className="bg-card rounded-xl p-6 shadow-luxury">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الأول: قلب موسكو التاريخي</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>الساحة الحمراء، كاتدرائية سانت باسيل، متحف الدولة التاريخي، ضريح لينين، تسوق في GUM</li>
                    <li>المساء: شارع الأضواء، حديقة زاريادي</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الثاني: عظمة الكرملين والمتاحف</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>زيارة مجمع الكرملين (القصور والكاتدرائيات)، متحف مستودع الكرملين</li>
                    <li>زيارة معرض تريتياكوف أو متحف بوشكين للفنون</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الثالث: حدائق وتجارب فريدة</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>زيارة حديقة تساريتسينو أو حديقة فدنخا (VDNKh)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* St Petersburg 6 Days Program */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">برنامج سانت بطرسبرغ - 6 أيام</h3>
            <div className="bg-card rounded-xl p-6 shadow-luxury">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الأول: الوصول</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>استقبال بسيارة خاصة، تسجيل الدخول للفندق، وقت حر</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الثاني: جولة سانت بطرسبرغ (6-7 ساعات)</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>شارع نيفسكي بروسبكت، جسر أنيشكوف، ساحة القصر</li>
                    <li>كاتدرائية القديس إسحاق، كنيسة المخلص على الدم، كاتدرائية كازان</li>
                    <li>لافرا ألكسندر نيفسكي، الطراد أورورا، قلعة بطرس وبولس</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الثالث: بيترهوف - كرونشتاد (6-7 ساعات)</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>قصر بيترهوف العظيم والنوافير والحدائق</li>
                    <li>مدينة كرونشتاد الساحلية في جزيرة كوتلين، الكاتدرائية البحرية</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الرابع: سانت بطرسبرغ (5-6 ساعات)</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>قصر يوسوبوف (موقع اغتيال راسبوتين)</li>
                    <li>متحف الأرميتاج في قصر الشتاء</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم الخامس: بوشكين / تسارسكوي سيلو (5-6 ساعات)</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>قصر كاترين وغرفة العنبر "عجوبة العالم الثامنة"</li>
                    <li>حديقة كاثرين</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">اليوم السادس: المغادرة</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>إفطار، تسجيل خروج، التوجه للمطار</li>
                  </ul>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">الرحلات تشمل:</h5>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>جميع وسائل النقل</li>
                    <li>الإقامة بغرفة مزدوجة شاملة الإفطار</li>
                    <li>مرشد سياحي</li>
                    <li>تذاكر دخول المواقع</li>
                    <li>دعم تأشيرة روسية</li>
                    <li>تذاكر القطار موسكو - سانت بطرسبرغ</li>
                    <li>أسعار خاصة للمجموعات والشركات السياحية</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury-1">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">ابدأ رحلتك إلى روسيا اليوم</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            تواصل معنا الآن لتصميم الرحلة المثالية لك وعائلتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 shadow-luxury hover:scale-105"
            >
              اطلب استشارة مجانية
            </Link>
            <Link 
              href="/hotels" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-all duration-300"
            >
              استكشف الفنادق
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
