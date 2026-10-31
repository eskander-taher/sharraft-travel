import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { arabicDigits } from "@/lib/journey";

/** What Sharraf arranges, in the order a traveller needs it, set as a departures board. */
const steps = [
  { title: "دعوة وتأشيرة السفر", note: "من الدعوة إلى الفيزا السياحية", href: "/services/visa-tourism" },
  { title: "حجز الطيران", note: "نرتب رحلتك الجوية", href: "/services/flight" },
  { title: "حجوزات الفنادق", note: "إقامة تناسب برنامجك", href: "/services/hotel" },
  { title: "الاستقبال والتوديع", note: "من المطار إلى الفندق وبالعكس", href: "/services/reception" },
  { title: "جولات سياحية", note: "برامج في أجمل المدن الروسية", href: "/services/tours" },
  { title: "الفعاليات", note: "أنشطة تختارها لرحلتك", href: "/activities" },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[hsl(var(--ink))] text-white relative z-10 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
        <div className="rise">
          <p className="text-sm font-bold text-[hsl(var(--amber))] mb-3">{"قبل الإقلاع"}</p>
          <h2 className="text-4xl lg:text-6xl mb-5 text-balance">{"أنت تختار الوجهة، والباقي علينا"}</h2>
          <p className="text-white/85 leading-loose mb-7 max-w-md">{"خدمات متكاملة لرحلة مريحة إلى روسيا، خطوة بعد خطوة."}</p>
          <Link href="/services" className="inline-block border border-white/50 rounded-full px-7 py-3 font-bold hover:bg-white hover:text-[hsl(var(--ink))] transition-colors">
            {"اكتشف خدماتنا"}
          </Link>
        </div>
        <ol className="border-t border-white/15">
          {steps.map((step, i) => (
            <li key={step.href}>
              <Link href={step.href} className="board-row group">
                <span aria-hidden="true" className="font-display text-3xl text-[hsl(var(--amber))]">
                  {arabicDigits(i + 1)}
                </span>
                <span>
                  <span className="block text-lg lg:text-xl font-bold">{step.title}</span>
                  <span className="block text-sm text-white/75">{step.note}</span>
                </span>
                <ArrowLeft aria-hidden="true" className="w-5 h-5 text-white/70 transition-transform group-hover:-translate-x-1" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
