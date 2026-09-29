import Image from "next/image";
import Link from "next/link";

export default function HolidaysBanner() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <Image
        src="/images/moscow-night.jpg"
        alt="موسكو في الليل"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/65" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-8 text-balance">
          {"المشاهدة جميع العطلات الموسمية لدينا"}
        </h2>
        <Link
          href="/activities"
          className="inline-block bg-accent text-accent-foreground px-10 py-3 rounded-full font-bold hover:opacity-90 transition-opacity duration-200 shadow-lg"
        >
          {"اطلع عليها"}
        </Link>
      </div>
    </section>
  );
}
