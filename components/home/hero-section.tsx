import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
          {"اكتشف جمال روسيا مع شرف"}
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-4">
          {"رحلات سياحية لا تُنسى في أجمل المدن الروسية"}
        </p>
        <p className="text-sm md:text-base text-primary-foreground/70 mb-8">
          {"Откройте красоту России с Шарраф | Незабываемые туристические поездки по красивейшим городам России"}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-full text-lg font-bold hover:opacity-90 transition-opacity duration-200 shadow-lg"
          >
            {"استكشف الخدمات"}
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-white hover:text-primary transition-all duration-200"
          >
            {"تواصل معنا"}
          </Link>
        </div>
      </div>
    </section>
  );
}
