import React from "react";
import { Star, MapPin, Phone, Wifi, Car, Coffee, Dumbbell } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "أفضل فنادق موسكو وسانت بطرسبرغ الفاخرة | شرف للسفر والسياحة",
  description: "اكتشف أفضل فنادق الخمس نجوم في موسكو وسانت بطرسبرغ القريبة من المعالم السياحية. حجوزات فندقية مميزة مع شرف.",
};

const hotels = [
  // St. Petersburg Hotels
  {
    name: "فندق فالو سيتي | Valo Hotel City",
    rating: { google: 4.6, tripAdvisor: 4.4, booking: 8.8 },
    description: "فندق عصري يقع في قلب سانت بطرسبرغ مع خدمات ممتازة وتصميم أنيق.",
    location: "سالوفا 61، سانت بطرسبرغ، 192102",
    features: ["واي فاي مجاني", "مركز لياقة", "مطعم فاخر", "خدمة غرف"],
    image: "/images/hotels/valo-city.jpg"
  },
  {
    name: "فندق GAMMA | ОТЕЛЬ ГАММА",
    rating: { google: 4.5, tripAdvisor: 4.3, booking: 8.7 },
    description: "فندق مريح يقع في موقع استراتيجي بالقرب من المرافق الرئيسية.",
    location: "130 جسر قناة Overodny، سانت بطرسبرغ، 198095",
    features: ["واي فاي مجاني", "مواقف سيارات", "مطعم", "خدمة 24 ساعة"],
    image: "/images/hotels/gamma.jpg"
  },
  {
    name: "فندق كورينثيا | Отель «Corinthia»",
    rating: { google: 4.7, tripAdvisor: 4.5, booking: 9.0 },
    description: "فندق فاخر يقدم خدمات خمس نجوم في قلب سانت بطرسبرغ.",
    location: "نيفسكي، 57، سانت بطرسبرغ، 191025",
    features: ["سبا فاخر", "مطاعم راقية", "قاعات اجتماعات", "مركز لياقة"],
    image: "/images/hotels/corinthia.jpg"
  },
  {
    name: "فندق Lotte | Lotte Hotel St. Petersburg",
    rating: { google: 4.8, tripAdvisor: 4.6, booking: 9.2 },
    description: "فندق فاخر من مجموعة LOTTE HOTELS في موقع متميز بقرب كاتدرائية القديس إسحاق.",
    location: "Antonenko lane, 2. سانت بطرسبرغ، 190000",
    features: ["سبا فاخر", "مطاعم عالمية", "قاعات مؤتمرات", "خدمة كونسيرج"],
    image: "/images/hotels/lotte-st-petersburg.jpg"
  },

  // Moscow Hotels
  {
    name: "فندق Swissôtel | Swissôtel Красные Холмы",
    rating: { google: 4.7, tripAdvisor: 4.5, booking: 9.1 },
    description: "فندق فاخر بإطلالات بانورامية على موسكو وخدمات عالمية المستوى.",
    location: "جسر Kosmodamianskaya، 52/6، موسكو",
    features: ["مسبح على السطح", "سبا فاخر", "مطعم بانورامي", "مركز لياقة"],
    image: "/images/hotels/swissotel.jpg"
  },
  {
    name: "فندق كوزموس بافيليتسكايا | КОСМОС ПАВЕЛЕЦКАЯ",
    rating: { google: 4.4, tripAdvisor: 4.2, booking: 8.6 },
    description: "فندق عصري من مجموعة Cosmos Hotel Group في موقع مركزي.",
    location: "Kozhevnicheskaya، 8، بناء 3، موسكو",
    features: ["واي فاي مجاني", "مطعم", "قاعات اجتماعات", "خدمة 24 ساعة"],
    image: "/images/hotels/cosmos-paveletskaya.jpg"
  },
  {
    name: "فندق 1-AZIMUT سيتي | 1-AZIMUT City Hotel Smolenskaya",
    rating: { google: 4.5, tripAdvisor: 4.3, booking: 8.8 },
    description: "فندق حديث من سلسلة AZIMUT في موقع مركزي مقابل الخاتم الذهبي.",
    location: "شارع سمولينسكايا، 8، موسكو",
    features: ["واي فاي مجاني", "مركز لياقة", "مطعم", "خدمة غرف"],
    image: "/images/hotels/azimut-smolenskaya.jpg"
  },
  {
    name: "فندق TURRIS | TURRIS HOTEL Tverskaya",
    rating: { google: 4.3, tripAdvisor: 4.1, booking: 8.5 },
    description: "سلسلة فنادق TURRIS مع عدة فروع في مواقع متميزة بموسكو.",
    location: "ميدان Tverskaya Zastava، 2، موسكو",
    features: ["واي فاي مجاني", "مطعم", "خدمة 24 ساعة", "مواقف سيارات"],
    image: "/images/hotels/turris-tverskaya.jpg"
  },
  {
    name: "فندق الحلقة الذهبية | ЗОЛОТОЕ КОЛЬЦО",
    rating: { google: 4.6, tripAdvisor: 4.4, booking: 8.9 },
    description: "فندق خمس نجوم فاخر في قلب موسكو.",
    location: "شارع Smolenskaya، 5، موسكو",
    features: ["مطاعم راقية", "سبا فاخر", "قاعات اجتماعات", "خدمة كونسيرج"],
    image: "/images/hotels/golden-ring.jpg"
  },
  {
    name: "فندق CONTINENTAL | Hotel CONTINENTAL",
    rating: { google: 4.7, tripAdvisor: 4.5, booking: 9.0 },
    description: "فندق خمس نجوم فاخر في موقع متميز بشارع Tverskaya.",
    location: "شارع Tverskaya، 22، موسكو",
    features: ["مطاعم فاخرة", "سبا ومركز لياقة", "قاعات أحداث", "خدمة كونسيرج"],
    image: "/images/hotels/continental.jpg"
  },
  {
    name: "فندق LOTTE موسكو | LOTTE HOTEL Moscow",
    rating: { google: 4.8, tripAdvisor: 4.6, booking: 9.2 },
    description: "فندق خمس نجوم فاخر من مجموعة LOTTE HOTELS.",
    location: "شارع Novinsky، 8، بناء 2، موسكو",
    features: ["سبا فاخر", "مطاعم عالمية", "قاعات مؤتمرات", "مركز لياقة بدنية"],
    image: "/images/hotels/lotte-moscow.jpg"
  },
  {
    name: "فندق Radisson Slavyanskaya | Radisson Slavyanskaya Hotel",
    rating: { google: 4.5, tripAdvisor: 4.3, booking: 8.7 },
    description: "فندق عالمي من سلسلة Radisson مع خدمات ممتازة.",
    location: "ميدان Eurasia، 2، موسكو",
    features: ["مسبح", "سبا", "مطعم", "قاعات اجتماعات", "مركز لياقة"],
    image: "/images/hotels/radisson-slavyanskaya.jpg"
  },
  {
    name: "فندق Radisson Collection | Radisson Collection Hotel Moscow",
    rating: { google: 4.8, tripAdvisor: 4.6, booking: 9.3 },
    description: "فندق خمس نجوم فاخر من مجموعة Radisson Collection.",
    location: "شارع Kutuzovsky، 2/1، بناء 1، موسكو",
    features: ["سبا فاخر", "مطاعم راقية", "قاعات مؤتمرات", "خدمة كونسيرج"],
    image: "/images/hotels/radisson-collection.jpg"
  },
  {
    name: "فندق The St. Regis | The St. Regis Moscow Nikolskaya",
    rating: { google: 4.9, tripAdvisor: 4.7, booking: 9.4 },
    description: "فندق فاخر جداً من مجموعة St. Regis في قلب موسكو.",
    location: "شارع Nikolskaya، 12، موسكو",
    features: ["مطاعم عالمية", "سبا فاخر", "قاعات مؤتمرات", "خدمة كونسيرج"],
    image: "/images/hotels/st-regis.jpg"
  },
  {
    name: "فندق أرارات بارك حياة | АРАРАТ ПАРК ХАЯТТ",
    rating: { google: 4.7, tripAdvisor: 4.5, booking: 9.1 },
    description: "فندق فاخر من مجموعة Hyatt في موقع متميز.",
    location: "شارع Neglinnaya، 4، موسكو",
    features: ["سبا فاخر", "مطاعم راقية", "مسبح", "مركز لياقة"],
    image: "/images/hotels/ararat-park-hyatt.jpg"
  },
  {
    name: "فندق PETR I | ООО ОТЕЛЬ «ПЕТР I»",
    rating: { google: 4.6, tripAdvisor: 4.4, booking: 9.0 },
    description: "فندق أنيق في موقع مركزي بالقرب من الكرملين.",
    location: "شارع Neglinnaya، 17، بناء 1، موسكو",
    features: ["مطعم", "واي فاي مجاني", "قاعات اجتماعات", "خدمة 24 ساعة"],
    image: "/images/hotels/peter-i.jpg"
  },
  {
    name: "فندق METROPOL | МЕТРОПОЛЬ",
    rating: { google: 4.6, tripAdvisor: 4.4, booking: 8.9 },
    description: "فندق تاريخي شهير في قلب موسكو بالقرب من الساحة الحمراء.",
    location: "Teatralny proezd، 2، موسكو",
    features: ["مطاعم تاريخية", "سبا", "قاعات فاخرة", "خدمة كونسيرج"],
    image: "/images/hotels/metropol-historical.jpg"
  },
  {
    name: "فندق BALCHUG KEMPINSKI | БАЛЧУГ КЕМПИНСКИ",
    rating: { google: 4.8, tripAdvisor: 4.6, booking: 9.2 },
    description: "فندق خمس نجوم فاخر من مجموعة Kempinski.",
    location: "شارع Balchug، 1، موسكو",
    features: ["سبا فاخر", "مطاعم عالمية", "قاعات مؤتمرات", "مركز لياقة"],
    image: "/images/hotels/balchug-kempinski.jpg"
  },
  {
    name: "فندق FOUR SEASONS | FOUR SEASONS HOTEL",
    rating: { google: 4.8, tripAdvisor: 4.6, booking: 9.2 },
    description: "فندق خمس نجوم فاخر في موقع متميز بالقرب من الكرملين.",
    location: "شارع Okhotny Ryad، 2، موسكو",
    features: ["مطاعم راقية", "سبا فاخر", "قاعات اجتماعات", "خدمة كونسيرج"],
    image: "/images/hotels/four-seasons-moscow.jpg"
  }
];

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-luxury-1 overlay-luxury">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">أفضل فنادق موسكو وسانت بطرسبرغ</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              فنادق خمس نجوم قريبة من الساحة الحمراء والكرملين ومعالم سانت بطرسبرغ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 shadow-luxury hover:scale-105"
              >
                احجز إقامتك الآن
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">مقارنة تصنيفات الفنادق</h2>
          <div className="overflow-x-auto shadow-luxury rounded-xl">
            <table className="w-full bg-white">
              <thead className="bg-gradient-luxury-2 text-white">
                <tr>
                  <th className="px-6 py-4 text-right">اسم الفندق</th>
                  <th className="px-6 py-4 text-center">جوجل</th>
                  <th className="px-6 py-4 text-center">تريب أدفايزر</th>
                  <th className="px-6 py-4 text-center">بوكينج</th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((hotel, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-red-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">{hotel.name}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{hotel.rating.google}/5</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{hotel.rating.tripAdvisor}/5</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{hotel.rating.booking}/10</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">الفنادق المميزة</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-luxury-lg overflow-hidden border-luxury hover:shadow-luxury-xl transition-all duration-300">
                {/* Hotel Image Placeholder */}
                <div className="h-48 bg-gradient-luxury-3 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Star className="w-8 h-8" />
                      </div>
                      <p className="text-sm opacity-90">صورة الفندق</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                    5 نجوم
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-800 mb-3">{hotel.name}</h3>
                  
                  {/* Ratings */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{hotel.rating.google}</span>
                      <span className="text-gray-500 text-xs">Google</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{hotel.rating.tripAdvisor}</span>
                      <span className="text-gray-500 text-xs">TripAdvisor</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{hotel.rating.booking}</span>
                      <span className="text-gray-500 text-xs">Booking</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{hotel.description}</p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">المرافق:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {hotel.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link 
                    href="/contact" 
                    className="w-full bg-gradient-luxury-2 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center block"
                  >
                    اطلب الحجز
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">لماذا تختار فنادقنا؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury-2 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-3">مواقع استراتيجية</h3>
              <p className="text-gray-600">جميع فنادقنا تقع في قلب موسكو بالقرب من المعالم السياحية الرئيسية</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury-2 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-3">خدمات فاخرة</h3>
              <p className="text-gray-600">خدمات خمس نجوم ومرافق عالمية المستوى تلبي جميع احتياجاتك</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-luxury-2 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-red-800 mb-3">دعم على مدار الساعة</h3>
              <p className="text-gray-600">فريق خدمة عملاء متخصص لمساعدتك على مدار 24 ساعة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury-1">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">جد فندق أحلامك في موسكو</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            دع فريقنا من الخبراء يساعدك في اختيار الإقامة المثالية لرحلتك إلى موسكو
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 shadow-luxury hover:scale-105"
            >
              استشارة مجانية
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
