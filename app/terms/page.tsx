import React from "react";

export default function TermsOfService() {
	return (
		<div className="min-h-screen bg-background pt-28 pb-16 lg:pt-36">
			<div className="mx-auto max-w-4xl px-4">
				<h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
					شروط الخدمة
				</h1>

				<div className="prose prose-lg max-w-none">
					<div className="bg-card rounded-lg p-8 shadow-sm space-y-6 text-foreground">
						<section>
							<h2 className="text-2xl font-semibold mb-4">قبول الشروط</h2>
							<p className="leading-relaxed">
								باستخدام موقع شرف للسفر والسياحة وخدماتنا، فإنك توافق على
								الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط، يرجى
								عدم استخدام موقعنا أو خدماتنا.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">عن الشركة</h2>
							<p className="leading-relaxed">
								شرف للسفر والسياحة هي وكالة سفر متخصصة في تنظيم الرحلات السياحية
								إلى روسيا وتقديم خدمات السياحة والفنادق والجولات السياحية والاستقبال
								والتوديع.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">الخدمات المقدمة</h2>
							<ul className="list-disc pr-6 space-y-2">
								<li>تنظيم الرحلات السياحية إلى روسيا</li>
								<li>حجوزات الفنادق والإقامة</li>
								<li>الجولات السياحية والأنشطة</li>
								<li>خدمات الاستقبال والتوديع في المطارات</li>
								<li>تأشيرات الدخوم والمساعدة في الإجراءات</li>
								<li>النقل البري والجوي</li>
								<li>خدمات المرشدين السياحيين</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">إجراءات الحجز</h2>

							<h3 className="text-xl font-medium mt-4 mb-2">التأكيد والدفع:</h3>
							<ul className="list-disc pr-6 space-y-2">
								<li>يتطلب الحجز تقديم معلومات شخصية دقيقة وكاملة</li>
								<li>يجب دفع مقدم حجز لتأكيد الحجز</li>
								<li>يتم إرسال تأكيد الحجز عبر البريد الإلكتروني</li>
								<li>يجب التحقق من جميع التفاصيل في تأكيد الحجز</li>
							</ul>

							<h3 className="text-xl font-medium mt-4 mb-2">المستندات المطلوبة:</h3>
							<ul className="list-disc pr-6 space-y-2">
								<li>جواز سفر ساري المفعول</li>
								<li>تأشيرة دخول (إذا لزم الأمر)</li>
								<li>صور شخصية حديثة</li>
								<li>أي مستندات أخرى حسب متطلبات الرحلة</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">
								سياسة الإلغاء والاسترداد
							</h2>

							<h3 className="text-xl font-medium mt-4 mb-2">إلغاء من قبل العميل:</h3>
							<ul className="list-disc pr-6 space-y-2">
								<li>إلغاء قبل 30 يوم: استرداد كامل مطروحاً منه رسوم إدارية 10%</li>
								<li>إلغاء قبل 15-29 يوم: استرداد 70% من المبلغ المدفوع</li>
								<li>إلغاء قبل 7-14 يوم: استرداد 50% من المبلغ المدفوع</li>
								<li>إلغاء أقل من 7 أيام: لا يوجد استرداد</li>
							</ul>

							<h3 className="text-xl font-medium mt-4 mb-2">حالات استثنائية:</h3>
							<ul className="list-disc pr-6 space-y-2">
								<li>حالات القوة القاهرة: لا يوجد استرداد</li>
								<li>رفض التأشيرة: استرداد كامل مطروحاً منه رسوم التأشيرة</li>
								<li>أمر طبي طارئ: استرداد جزئي حسب الحالة</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">مسؤوليات العميل</h2>
							<ul className="list-disc pr-6 space-y-2">
								<li>تقديم معلومات صحيحة ودقيقة</li>
								<li>الالتزام بالقوانين المحلية والدولية</li>
								<li>الحصول على تأمين سفر</li>
								<li>الالتزام بمواعيد السفر المحددة</li>
								<li>التعاون مع المرشدين السياحيين</li>
								<li>الحفاظ على الممتلكات والمرافق</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">مسؤوليات الشركة</h2>
							<ul className="list-disc pr-6 space-y-2">
								<li>تقديم الخدمات المتفق عليها بالجودة المتوقعة</li>
								<li>توفير معلومات دقيقة عن الرحلات</li>
								<li>المساعدة في حالات الطوارئ</li>
								<li>ضمان السلامة والأمان خلال الرحلات</li>
								<li>تقديم الدعم الفني والمساعدة</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">الأسعار والمدفوعات</h2>
							<ul className="list-disc pr-6 space-y-2">
								<li>الأسعار المعلنة صالحة للفترة المحددة</li>
								<li>قد تتغير الأسعار بسبب تقلبات العملة</li>
								<li>الأسعار تشمل الخدمات المذكورة فقط</li>
								<li>الضرائب والرسوم الحكومية غير مشمولة</li>
								<li>طرق الدفع المتاحة: تحويل بنكي، بطاقات ائتمان</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">القوة القاهرة</h2>
							<p className="leading-relaxed">
								لا نتحمل مسؤولية أي تأخير أو إلغاء أو تغيير في الخدمات بسبب ظروف
								خارجة عن سيطرتنا مثل الكوارث الطبيعية، الحروب، الإضرابات، الأوبئة،
								أو قرارات حكومية.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">الملكية الفكرية</h2>
							<p className="leading-relaxed">
								جميع المحتويات والمواد على هذا الموقع محمية بموجب قوانين حقوق الطبع
								والنشر. يمنع نسخ أو استخدام أي مواد دون موافقة كتابية مسبقة.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">حل النزاعات</h2>
							<p className="leading-relaxed">
								أي نزاع ينشأ عن استخدام خدماتنا سيتم حله أولاً عبر المفاوضات الودية.
								إذا لم يتم التوصل إلى حل، يتم اللجوء إلى القوانين المعمول بها في
								دولة الإمارات العربية المتحدة.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">اتصل بنا</h2>
							<p className="leading-relaxed">
								لأي استفسارات بخصوص شروط الخدمة، يرجى التواصل معنا:
							</p>
							<div className="mt-4 space-y-2">
								<p>
									<strong>البريد الإلكتروني:</strong> info@sharraftravels.com
								</p>
								<p>
									<strong>الهاتف:</strong> +7 926 103 8152
								</p>
								<p>
									<strong>WhatsApp:</strong> +7 926 103 8152
								</p>
							</div>
						</section>

						<section className="pt-6 border-t">
							<p className="text-sm text-muted-foreground">
								آخر تحديث: {new Date().toLocaleDateString("ar-SA")}
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
