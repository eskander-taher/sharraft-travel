import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "الاستقبال والتوديع", image: "/services/Reception_&_Send-off.jpg", href: "/services" },
  { title: "الفعاليات", image: "/services/Events_&_Activities.jpg", href: "/activities" },
  { title: "حجوزات الفنادق", image: "/services/Hotel_Booking.jpg", href: "/services" },
  { title: "جولات سياحية", image: "/services/Tours.jpg", href: "/services" },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          {"بعض الخدمات التي نقدمها"}
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          {"Наши услуги | Услуги, которые мы предоставляем"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-bold text-primary-foreground text-center px-4">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors duration-200 shadow-lg"
          >
            {"اكتشف خدماتنا"}
          </Link>
        </div>
      </div>
    </section>
  );
}
