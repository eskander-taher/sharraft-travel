import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Building2,
  Plane,
  Briefcase,
  HeartPulse,
  Hotel,
  Car,
  Users,
  FileCheck,
  CalendarCheck,
  Tag,
  BadgePercent,
  Zap,
  Languages,
  Headphones,
  MapPinned,
  ChevronDown,
  Mail,
} from "lucide-react";
import B2BInquiryForm from "@/components/b2b-inquiry-form";
import { cities, whatsappLink } from "@/lib/cities-data";

export const metadata: Metadata = {
  title: "للشركات ووكالات السفر (B2B) | شرف للسفر والسياحة",
  description:
    "شريككم المحلي في روسيا: أسعار خاصة للفنادق، خدمات أرضية، رحلات جماعية، دعوات التأشيرة، وتنظيم الفعاليات لوكالات السفر والشركات",
};

const audiences = [
  { icon: Building2, title: "وكالات السفر", description: "بيعوا روسيا لعملائكم ونحن ننفذ الرحلة على الأرض باسمكم." },
  { icon: Plane, title: "منظمو الرحلات", description: "برامج جماعية جاهزة أو مصممة حسب الطلب لكل المواسم." },
  { icon: Briefcase, title: "الشركات", description: "رحلات حوافز، وفود عمل، معارض ومؤتمرات في موسكو وسانت بطرسبرغ." },
  { icon: HeartPulse, title: "الوكلاء المتخصصون", description: "تنسيق السياحة العلاجية والتعليمية مع المستشفيات والجامعات الروسية." },
];

const services = [
  { icon: Hotel, title: "أسعار فنادق خاصة", description: "أسعار صافية (Net) لدى فنادق مختارة في موسكو وسانت بطرسبرغ وسوتشي ومورمانسك." },
  { icon: Car, title: "الخدمات الأرضية", description: "استقبال وتوديع، سيارات وحافلات بسائقين، ومرشدون يتحدثون العربية." },
  { icon: Users, title: "الرحلات الجماعية", description: "تنفيذ كامل للمجموعات من الوصول حتى المغادرة مع منسق مرافق." },
  { icon: FileCheck, title: "دعوات وتأشيرات بالجملة", description: "استخراج دعوات السفر ومتابعة التأشيرات للمجموعات بسرعة." },
  { icon: CalendarCheck, title: "الفعاليات والمؤتمرات (MICE)", description: "قاعات، فعاليات، رحلات حوافز وبرامج ترفيهية لوفود الشركات." },
  { icon: Tag, title: "برامج باسم علامتكم", description: "برامج ومواد تسويقية جاهزة تبيعونها باسم وكالتكم (White Label)." },
];

const benefits = [
  { icon: BadgePercent, title: "أسعار تنافسية", description: "أسعار شركاء تمنحكم هامش ربح واضح." },
  { icon: Zap, title: "عروض أسعار سريعة", description: "نرد على طلباتكم بعروض مفصلة في وقت قصير." },
  { icon: Languages, title: "فريق عربي في روسيا", description: "تواصل بلغتكم مع فريق يعرف السوق المحلي." },
  { icon: Headphones, title: "دعم تشغيلي 24/7", description: "متابعة عملائكم على مدار الساعة أثناء الرحلة." },
];

const steps = [
  { title: "تواصلوا معنا", description: "أرسلوا بيانات شركتكم ونوع الرحلات التي تبيعونها." },
  { title: "اتفاقية الشراكة", description: "نتفق على الأسعار وشروط الدفع والخدمات المطلوبة." },
  { title: "أرسلوا الحجوزات", description: "نجهز لكم البرنامج والعرض لكل عميل أو مجموعة." },
  { title: "ننفذ الرحلة", description: "نستقبل عملاءكم ونتابعهم حتى عودتهم بسلام." },
];

const faqs = [
  {
    question: "هل يجب أن نكون وكالة سفر مرخصة؟",
    answer: "نعمل مع وكالات السفر والشركات ومنظمي الرحلات. تواصلوا معنا وسنوضح لكم المتطلبات حسب نوع نشاطكم.",
  },
  {
    question: "كيف تتم عملية الدفع؟",
    answer: "يتم الاتفاق على شروط الدفع وطرقه ضمن اتفاقية الشراكة، ونوفر خيارات تحويل مناسبة لشركائنا من خارج روسيا.",
  },
  {
    question: "هل تتعاملون مع حجوزات فردية أم مجموعات فقط؟",
    answer: "نتعامل مع الاثنين: الحجوزات الفردية والعائلية والمجموعات الكبيرة ووفود الشركات.",
  },
  {
    question: "هل يمكن تنفيذ البرامج باسم وكالتنا؟",
    answer: "نعم، يمكننا تقديم الخدمة لعملائكم باسم وكالتكم دون ظهور علامتنا التجارية.",
  },
];

export default function B2BPage() {
  return (
    <main>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24">
        <Image src="/cities/moscow-city.jpg" alt="أبراج موسكو سيتي" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/60 to-black/30" />
        <div className="relative z-10 w-full mx-auto max-w-6xl px-4 py-16">
          <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-5">
            {"للشركات ووكالات السفر — B2B"}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 max-w-3xl leading-tight text-balance">
            {"شريككم المحلي في روسيا"}
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl">
            {"نحن ننفذ، وأنتم تبيعون. أسعار خاصة للشركاء وخدمات أرضية متكاملة وفريق عربي في موسكو يتابع عملاءكم من الوصول حتى المغادرة."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#partner-form"
              className="inline-block text-center bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-bold hover:bg-primary/90 transition-colors shadow-lg"
            >
              {"كن شريكًا لنا"}
            </a>
            <a
              href={whatsappLink("مرحبًا، أنا من وكالة سفر وأرغب بمعرفة أسعار الشركاء")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center border-2 border-white text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-card hover:text-primary transition-colors"
            >
              {"اطلب أسعار الشركاء"}
            </a>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">{"من نخدم؟"}</h2>
          <p className="text-center text-muted-foreground mb-12">
            {"حلول مصممة لكل نوع من شركائنا في الخليج والعالم العربي"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map((a) => (
              <div key={a.title} className="bg-card rounded-sm border border-border p-6 text-center hover:shadow-lg transition-shadow">
                <span className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <a.icon className="w-7 h-7" />
                </span>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">{"خدماتنا للشركاء"}</h2>
          <p className="text-center text-muted-foreground mb-12">{"كل ما تحتاجه رحلة عملائكم في روسيا من مزود واحد"}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="flex gap-4 bg-card rounded-sm border border-border p-6 hover:shadow-lg transition-shadow">
                <s.icon className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-gradient-luxury-1">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">{"لماذا يختارنا شركاؤنا؟"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col items-center text-center gap-3 text-white">
                <span className="w-16 h-16 rounded-full bg-white/15 border border-white/20 flex items-center justify-center">
                  <b.icon className="w-7 h-7" />
                </span>
                <h3 className="text-lg font-bold">{b.title}</h3>
                <p className="text-sm text-white/80">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">{"كيف تبدأ الشراكة؟"}</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="relative bg-card rounded-sm border border-border p-6 pt-10">
                <span className="absolute -top-5 right-6 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center shadow">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">{"وجهات نغطيها لعملائكم"}</h2>
          <p className="flex items-center justify-center gap-2 text-center text-muted-foreground mb-10">
            <MapPinned className="w-4 h-4" />
            {"برامج جاهزة قابلة للتخصيص في أكثر المدن طلبًا"}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/cities/${c.slug}`}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={c.heroImage}
                  alt={c.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h3 className="absolute bottom-3 right-4 text-lg font-bold text-white">{c.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner form */}
      <section id="partner-form" className="py-16 lg:py-24 bg-background scroll-mt-20">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{"انضموا إلى شبكة شركائنا"}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {"املؤوا البيانات وسيتواصل معكم فريق الشركات لإرسال أسعار الشركاء واتفاقية التعاون."}
            </p>
            <a
              href="mailto:booking@sharraftravels.com?subject=B2B%20Partnership"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:underline"
            >
              <Mail className="w-5 h-5" />
              <span dir="ltr">booking@sharraftravels.com</span>
            </a>
          </div>
          <div className="lg:col-span-3 bg-card rounded-sm border border-border p-6 lg:p-8 shadow-sm">
            <B2BInquiryForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">{"أسئلة الشركاء"}</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-card border border-border rounded-sm p-5 open:shadow-md transition-shadow">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-card-foreground">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
