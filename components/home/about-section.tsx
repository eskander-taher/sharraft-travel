import Link from "next/link";

export default function AboutSection() {
	return (
		<section className="py-16 lg:py-24 bg-white">
			<div className="mx-auto max-w-4xl px-4 text-center">
				<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
					{"لماذا تختارنا؟"}
				</h2>
				<p className="text-center text-gray-500 mb-8">
					{"Почему выбирают нас? | Почему вы выбираете нас?"}
				</p>
				<p className="text-gray-700 leading-relaxed text-base md:text-lg mb-10">
					{
						"شركة شرف للسفر والسياحة هي وجهتكم الموثوقة لتنظيم رحلاتكم إلى روسيا. نقدم خدمات متميزة تشمل الاستقبال والتوديع، حجوزات الفنادق، الجولات السياحية، إصدار الدعوات، وتنظيم الفعاليات. نحن نفخر بتقديم تجارب سفر لا تُنسى بأعلى معايير الجودة والاحترافية. فريقنا المتخصص يعمل على مدار الساعة لضمان راحتكم وسعادتكم خلال رحلتكم في روسيا، من دبي إلى موسكو."
					}
				</p>
				<p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
					{
						"Туристическая компания Шарраф — ваш надёжный партнёр в организации поездок в Россию. Мы предоставляем отличные услуги, включая встречу и проводы, бронирование отелей, туристические экскурсии, оформление приглашений и организацию мероприятий. Мы гордимся предоставлением незабываемых впечатлений от путешествий высочайшего качества и профессионализма. Наша специализированная команда работает, чтобы обеспечить ваш комфорт и счастье во время вашего путешествия по России."
					}
				</p>
				<Link
					href="/contact"
					className="inline-block bg-primary text-white px-10 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors duration-200"
				>
					{"تواصل معنا"}
				</Link>
			</div>
		</section>
	);
}
