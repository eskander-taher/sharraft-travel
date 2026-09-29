import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="min-h-[60vh] flex items-center justify-center bg-background pt-20">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6">
            {"404"}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {"الصفحة غير موجودة"}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {"عذراً، الصفحة التي تبحث عنها غير موجودة. يمكنك العودة إلى الصفحة الرئيسية."}
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity duration-200"
          >
            {"العودة للرئيسية"}
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
