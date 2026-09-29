import React from "react";
import { Trees, Calendar, Music, Users, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "حديقة غوركي موسكو | شرف للسفر والسياحة",
  description: "اكتشف حديقة غوركي في موسكو، وجهة الترفيه والثقافة الأبرز. أنشطة متنوعة ومناظر طبيعية خلابة مع شرف.",
};

export default function GorkyParkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-luxury-1 overlay-luxury">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">حديقة غوركي</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              حديقة الثقافة والترفيه في قلب موسكو - تجربة لا تُفوت
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 shadow-luxury hover:scale-105"
              >
                احجز جولتك الآن
              </Link>
              <Link 
                href="/activities" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-all duration-300"
              >
                المزيد من الأنشطة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-2xl shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-red-800 mb-6">نظرة عامة</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    تقع حديقة الثقافة والترفيه (Gorky Central Park of Culture and Leisure) باسم ماكسيم جوركي في قلب العاصمة الروسية موسكو، وتُعدّ واحدة من أبرز وجهات الترفيه والثقافة في المدينة. تجمع بين الماضي العريق والحاضر المتجدد، وتستقبل عشرات آلاف الزوار يوميًا من مختلف الأعمار.
                  </p>
                  <p>
                    أُنشئت الحديقة في عام 1928، وكانت تُعرف آنذاك باسم "حديقة الثقافة والترفيه رقم 1″، لكنها سميت لاحقًا باسم الكاتب الروسي المعروف ماكسيم غوركي، تخليدًا لمساهماته في الأدب الروسي.
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-red-800 mb-6">الموقع والوصول</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    تُقعَد حديقة جوركي في منطقة كريميسكي فال (Krymsky Val)، وهي قريبة جدًا من العديد من معالم موسكو الشهيرة مثل متحف تريتياكوف، وجسر ستالينغراد، ومبنى راديو موسكو.
                  </p>
                  <p>
                    يمكن الوصول إليها بسهولة عبر مترو أنفاق موسكو من محطة Okrutchny Bridge أو Park Kultury، مما يجعلها وجهة مفضلة للسياح والسكان المحليين على حد سواء.
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-red-800 mb-6">ماذا تقدم الحديقة؟</h2>
                <div className="space-y-6">
                  <div className="border-r-4 border-red-600 pl-6">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">حديقة ملاهي (Lunapark)</h3>
                    <p className="text-gray-600">
                      تحتوي على ألعاب ميكانيكية حديثة تناسب الأطفال والكبار، مع تجارب مثيرة وممتعة للجميع.
                    </p>
                  </div>
                  <div className="border-r-4 border-red-600 pl-6">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">مسرح خارجي</h3>
                    <p className="text-gray-600">
                      حيث تُقام عروض موسيقية وفنية طوال العام، مع فنانين محليين ودوليين.
                    </p>
                  </div>
                  <div className="border-r-4 border-red-600 pl-6">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">مقاهٍ ومطاعم خارجية</h3>
                    <p className="text-gray-600">
                      تقدم الأطباق التقليدية الروسية والأوروبية في أجواء طبيعية جميلة.
                    </p>
                  </div>
                  <div className="border-r-4 border-red-600 pl-6">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">مسارات مشي مُظللة</h3>
                    <p className="text-gray-600">
                      تتيح للمشي أو ركوب الدراجات في بيئة صحية ومريحة بعيدًا عن صخب المدينة.
                    </p>
                  </div>
                  <div className="border-r-4 border-red-600 pl-6">
                    <h3 className="text-xl font-semibold text-red-700 mb-2">منطقة شواطئ نهر موسكو</h3>
                    <p className="text-gray-600">
                      يمكن للزوار الاستمتاع بالجلوس على الأرصفة والاستمتاع بمنظر النهر الخلاب.
                    </p>
                  </div>
                </div>
              </div>

              {/* Seasons */}
              <div className="bg-white rounded-2xl shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-red-800 mb-6">جمال الحديقة عبر الفصول</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      الربيع
                    </h3>
                    <p className="text-gray-700 text-sm">مناظر خضراء مبهجة، مثالية للتنزه والصور الفوتوغرافية</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      الصيف
                    </h3>
                    <p className="text-gray-700 text-sm">حرارة معتدلة، السباحة في نهر موسكو، الأنشطة الخارجية</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      الخريف
                    </h3>
                    <p className="text-gray-700 text-sm">ألوان زاهية للأوراق، مثالية للمشي والتأمل</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      الشتاء
                    </h3>
                    <p className="text-gray-700 text-sm">مناظر ثلجية ساحرة، التزلج على الجليد، المتاجر الموسمية</p>
                  </div>
                </div>
              </div>

              {/* Cultural Activities */}
              <div className="bg-white rounded-2xl shadow-luxury p-8 border-luxury">
                <h2 className="text-3xl font-bold text-red-800 mb-6">أنشطة ثقافية وفنية</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Music className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">الموسيقى الحية</h3>
                      <p className="text-gray-600 text-sm">عروض موسيقية في المسارح الخارجية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">ورش عمل إبداعية</h3>
                      <p className="text-gray-600 text-sm">للأطفال والكبار في مختلف الفنون</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trees className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">معارض فنية مفتوحة</h3>
                      <p className="text-gray-600 text-sm">معارض فنية في الهواء الطلق</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">أفلام تحت السماء</h3>
                      <p className="text-gray-600 text-sm">عروض سينمائية في فصل الصيف</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="bg-gradient-luxury-2 text-white rounded-2xl p-6 shadow-luxury-lg">
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
              <div className="bg-white rounded-2xl shadow-luxury p-6 border-luxury">
                <h3 className="text-xl font-bold text-red-800 mb-4">معالم قريبة</h3>
                <div className="space-y-3">
                  <Link href="/activities/kremlin" className="block p-3 rounded-lg hover:bg-red-50 transition-colors">
                    <h4 className="font-semibold text-red-700">الكرملين</h4>
                    <p className="text-sm text-gray-600">قلعة موسكو التاريخية</p>
                  </Link>
                  <Link href="/activities/red-square" className="block p-3 rounded-lg hover:bg-red-50 transition-colors">
                    <h4 className="font-semibold text-red-700">الساحة الحمراء</h4>
                    <p className="text-sm text-gray-600">أشهر ميدان في موسكو</p>
                  </Link>
                  <Link href="/activities/vdnkh" className="block p-3 rounded-lg hover:bg-red-50 transition-colors">
                    <h4 className="font-semibold text-red-700">حديقة فدنخا</h4>
                    <p className="text-sm text-gray-600">أكبر مجمع ترفيهي</p>
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-6 text-center shadow-luxury-xl">
                <h3 className="text-xl font-bold mb-3">جولة في حديقة غوركي</h3>
                <p className="mb-4 opacity-90">استمتع بيوم ممتع في أجمل حدائق موسكو</p>
                <Link 
                  href="/contact" 
                  className="bg-white text-red-700 px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 inline-block"
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
