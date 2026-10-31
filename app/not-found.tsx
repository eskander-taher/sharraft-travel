import Link from "next/link";
import PageHero from "@/components/page-hero";

export default function NotFound() {
  return (
    <main>
      <PageHero
        eyebrow="404"
        title="الصفحة غير موجودة"
        subtitle="عذراً، الصفحة التي تبحث عنها غير موجودة. يمكنك العودة إلى الصفحة الرئيسية."
        image="/cities/murmansk-teriberka.jpg"
        imageAlt="قرية تيريبيركا عند أطراف الشمال الروسي"
        message="مرحبًا، أبغى برنامج رحلة إلى روسيا"
      >
        <Link href="/" className="underline underline-offset-4 font-bold py-2">
          {"العودة للرئيسية"}
        </Link>
      </PageHero>
    </main>
  );
}
