import Image from "next/image";
import Link from "next/link";

export default function PackagesBanner() {
	return (
		<section className="relative py-24 lg:py-32 overflow-hidden">
			<Image src="/moscow-night.jpg" alt="أفق موسكو الليلي" fill className="object-cover" />
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
			<div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
				<h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
					{"بكجات سياحية لروسيا بأسعار خاصة"}
				</h2>
				<Link
					href="/tour-programs"
					className="inline-block bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition"
				>
					اكتشف البكجات
				</Link>
			</div>
		</section>
	);
}
