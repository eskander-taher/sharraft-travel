import Image from "next/image";
import Link from "next/link";

const includes = [
  "استقبال وتوديع من المطار",
  "مرشد يتحدث العربية",
  "سيارة خاصة مع سائق",
  "ترشيح مطاعم حلال",
  "دعوة وتأشيرة السفر",
];

export default function AboutSection() {
  return (
    <section className="defer-section relative z-10 bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
        <div className="rise">
          <h2 className="text-4xl lg:text-6xl mb-5 text-balance">{"لماذا تسافر مع شرف؟"}</h2>
          <p className="text-muted-foreground leading-loose text-lg mb-6">
            {"نرتب رحلتك إلى روسيا كاملة: الاستقبال والتوديع، حجوزات الفنادق، الجولات السياحية، إصدار الدعوات، وتنظيم الفعاليات."}
          </p>
          <ul className="mb-8 border-t border-border">
            {includes.map((item) => (
              <li key={item} className="py-3 border-b border-border font-medium">{item}</li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-bold">
            <Link href="/contact" className="bg-primary text-primary-foreground rounded-full px-8 py-3 hover:bg-primary/90 transition-colors">
              {"تواصل معنا"}
            </Link>
            <Link href="/about" className="underline underline-offset-4 py-2">{"معلومات عنا"}</Link>
          </div>
        </div>
        <div className="arch-frame relative aspect-[4/5] w-full max-w-md mx-auto">
          <Image src="/moscow-night.jpg" alt="أفق موسكو الليلي" fill sizes="(max-width: 1024px) 90vw, 448px" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
