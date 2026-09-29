import React from "react";
import { Calendar, MapPin, Clock, Users, Star, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "برنامج سياحي في موسكو 11 يوم 10 ليالي | شرف للسفر والسياحة",
  description: "برنامج سياحي شامل في موسكو لمدة 11 يوم و10 ليالي. استكشف أفضل معالم موسكو مع شرف.",
};

const tourDays = [
  {
    day: 1,
    title: "اليوم الأول: الوصول والاستقبال",
    activities: [
      "الاستقبال في المطار من قبل أحد مندوبي الشركة",
      "التوجه إلى الفندق وأخذ قسط من الراحة",
      "جولة مسائية في سنتر موسكو وتناول وجبة العشاء"
    ],
    highlights: ["استقبال شخصي", "فندق فاخر", "جولة مسائية"]
  },
  {
    day: 2,
    title: "اليوم الثاني: قلب موسكو التاريخي",
    activities: [
      "زيارة الساحة الحمراء (Красный полшад)",
      "زيارة الكرملين (Кремль)",
      "المشي في شارع نيكولسكيا (никольская улица)",
      "زيارة مجمع GUM",
      "جولة في بارك زريад (парк зарядье)",
      "النظر إلى نهر موسكو من على الجسر الطائر",
      "زيارة مجمع Цум",
      "مشاهدة حراس الكرملين وتغيير الحراسة كل ساعة",
      "زيارة Охотный ряд (مول تحت الأرض ب 4 أدوار)"
    ],
    highlights: ["الساحة الحمراء", "الكرملين", "شارع نيكولسكيا", "GUM", "بارك زرياد"]
  },
  {
    day: 3,
    title: "اليوم الثالث: حديقة الحيوان وشارع أربات",
    activities: [
      "زيارة أكبر حديقة حيوان في أوروبا (зоопарк) تحتوي على أكثر من 3000 نوع من الحيوانات",
      "زيارة شارع أربات الجديد والقديм (арбат улица)",
      "زيارة موسكو سيتي (Москва сити) ناطحات السحاب",
      "زيارة المولات في موسكو سيتي وأهمها أفيا مول (Афивмолл)",
      "تناول وجبة العشاء والعودة إلى الفندق"
    ],
    highlights: ["حديقة الحيوان", "شارع أربات", "موسكو سيتي", "أفيا مول"]
  },
  {
    day: 4,
    title: "اليوم الرابع: إيزمايلوفسكي ومدينة الألعاب",
    activities: [
      "زيارة إيزمايلوفسكي كريمل (Измайловский Кремль)",
      "زيارة الأسواق الشعبية الروسية القديمة والبازار",
      "زيارة مدينة العاب موسكو (остров мечты)",
      "زيارة أفيابارك (Авиапарк) أكبر مركز تسوق في أوروبا",
      "مشاهدة أطول حوض سمك في العالم مسجل في سجل جينيس",
      "زيارة بارك الحرية (парк Свободы)",
      "تناول العشاء والعودة للفندق"
    ],
    highlights: ["إيزمايلوفسكي كريمل", "مدينة العاب", "أفيابارك", "حوض السمك"]
  },
  {
    day: 5,
    title: "اليوم الخامس: الريف الروسي وهولندا الصغيرة",
    activities: [
      "الانطلاق إلى الريف الروسي",
      "التمتع بالطبيعة الخلابة والهواء النقي",
      "مشاهدة الأكواخ الريفية والشواء",
      "القيام بفعاليات حسب الرغبة:",
      "ركوب عربة تجرها الهاسكي",
      "ركوب الهليكوبتر والتحليق في سماء موسكو",
      "ركوب الدباب",
      "ركوب الخيول",
      "زيارة هولندا الصغير (маленькая голландия)",
      "تناول العشاء والعودة إلى الفندق"
    ],
    highlights: ["الريف الروسي", "هولندا الصغيرة", "فعاليات متنوعة", "طبيعة خلابة"]
  },
  {
    day: 6,
    title: "اليوم السادس: VDNKh والمتاحف",
    activities: [
      "زيارة ВДНХ منطقة البيوت السوفيتية القديمة",
      "زيارة شمس موسكо (солнце Москва) أكبر دولاب هواء في أوروبا",
      "زيارة متحف الفضاء (павильон космос)",
      "زيارة مزرعة المدينة (городская ферма ВДНХ)",
      "جولة في المدينة المائية (ОКЕАНАРИУМ)",
      "جولة مسائية على نهر موسكو",
      "الراديسون كروز لمدة ساعتين وتناول وجبة العشاء",
      "العودة إلى الفندق"
    ],
    highlights: ["VDNKh", "شمس موسكو", "متحف الفضاء", "كروز نهر موسكو"]
  },
  {
    day: 7,
    title: "اليوم السابع: المتاحف المائية والحدائق",
    activities: [
      "زيارة مول أكواريوم لحضور السيرك الكبير",
      "جولة في КРОКУС СИТИ ОКЕАНАРИУМ متحف كروكس المائي",
      "زيارة بارك توبياري (Парк AIVA)",
      "الانغماس في جو خيالي وترفيهي فريد",
      "مشاهدة منحوتات لأشكال مختلفة من نباتات حية",
      "العودة إلى الفندق بعد تناول العشاء"
    ],
    highlights: ["متحف كروكس المائي", "بارك توبياري", "منحوتات نباتية", "سيرك"]
  },
  {
    day: 8,
    title: "اليوم الثامن: الشلالات والحدائق النباتية",
    activities: [
      "زيارة ГРЕМЯЧИЙ КЛЮЧ أكبر شلال في منطقة موسكو",
      "زيارة منتزه المستقبل (Сад будущего)",
      "التنزه ومشاهدة أشجار البلوط المعمرة (أكثر من 300 عام)",
      "زيارة الحديقة النباتية المجاورة",
      "تناول وجبة العشاء والعودة للفندق"
    ],
    highlights: ["شلال غريماشي كليوتش", "منتزه المستقبل", "أشجار البلوط", "الحديقة النباتية"]
  },
  {
    day: 9,
    title: "اليوم التاسع: الغابات والمنتزهات",
    activities: [
      "زيارة Арт УСАДЬБА ВЕРЕТЬЕВО غابات بالقرب من موسكو",
      "إطعام الغزلان واللعب معها في أحضان الطبيعة",
      "الاسترخاء في منازل التايغا المطلة على النهر",
      "القيام بالشواء",
      "التنزه في منتزه باومنا (Сад баумана)",
      "تناول العشاء والعودة للفندق"
    ],
    highlights: ["غابات فيريتييفو", "إطعام الغزلان", "منتزه باومنا", "منازل التايغا"]
  },
  {
    day: 10,
    title: "اليوم العاشر: التخييم والأسواق",
    activities: [
      "زيارة مخيم الهوبيت في ريف موسكو",
      "التخييم وسط الطبيعة والنهر والبحيرات",
      "صيد الأسماك واستئجار المنازل المفروشة",
      "زيارة سوق موسكو الكبير (سوق شعبي في ضواحي موسكو)",
      "جولة في بارك النصر العسكري (Парк победы)",
      "التعرف على الآليات العسكرية الروسية",
      "تناول وجبة العشاء والعودة للفندق"
    ],
    highlights: ["مخيم الهوبيت", "سوق موسكو الكبير", "حديقة النصر", "التخييم"]
  },
  {
    day: 11,
    title: "اليوم الحادي عشر: المغادرة",
    activities: [
      "تناول وجبة الإفطار",
      "حزم الأمتعة",
      "التوجه إلى أوتليت موسكو الكبير",
      "التوجه إلى المطار والعودة إلى أرض الوطن"
    ],
    highlights: ["التسوق في الأوتليت", "التوديع في المطار", "نهاية الرحلة"]
  }
];

export default function Moscow11DaysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-luxury-1 overlay-luxury">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">برنامج سياحي في موسكو</h1>
            <p className="text-xl md:text-2xl mb-4">11 يوم • 10 ليالي</p>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              رحلة شاملة لاكتشاف جمال وتاريخ موسكو ومعالمها السياحية الأبرز
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 shadow-luxury hover:scale-105"
              >
                احجز الرحلة الآن
              </Link>
              <Link 
                href="/tour-programs" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-all duration-300"
              >
                المزيد من البرامج
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-luxury-4 rounded-2xl p-8 shadow-luxury">
              <h2 className="text-2xl font-bold text-red-800 mb-6">البرنامج يشمل:</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">الاستقبال من المطار من قبل أحد مندوبي الشركة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">سيارة شخصية خاصة طول الرحلة</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">وجبة الإفطار بوفية مفتوح في جميع الفنادق</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">جولات يومية من 8 إلى 10 ساعات</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">سائق مرشد سياحي</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">شرائح اتصال وباقات إنترنت</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">التوديع والتوصيل إلى المطار</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">خدمة عملاء على مدار 24 ساعة</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 shadow-luxury border-luxury">
              <h2 className="text-2xl font-bold text-red-800 mb-6">البرنامج لا يشمل:</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-red-400 rounded-full mt-1 flex-shrink-0"></div>
                  <span className="text-gray-700">تذاكر الطيران</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-red-400 rounded-full mt-1 flex-shrink-0"></div>
                  <span className="text-gray-700">وجبة الغداء والعشاء</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 border-2 border-red-400 rounded-full mt-1 flex-shrink-0"></div>
                  <span className="text-gray-700">تذاكر دخول الأماكن السياحية</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Program */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">تفاصيل الرحلة اليومية</h2>
          <div className="space-y-8">
            {tourDays.map((day, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-luxury overflow-hidden border-luxury">
                <div className="bg-gradient-luxury-2 text-white p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold">{day.day}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{day.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      أبرز المعالم:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {day.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Activities */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      الأنشطة:
                    </h4>
                    <ul className="space-y-2">
                      {day.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury-1">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">استعد لرحلة لا تُنسى في موسكو</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            احجز مكانك الآن في رحلتنا الشاملة لاكتشاف أجمل معالم موسكو
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 shadow-luxury hover:scale-105"
            >
              احجز الآن
            </Link>
            <Link 
              href="/hotels" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-all duration-300"
            >
              اختار الفندق
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
