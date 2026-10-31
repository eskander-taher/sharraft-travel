import React from "react";

export default function PrivacyPolicy() {
	return (
		<div className="min-h-screen bg-background pt-28 pb-16 lg:pt-36">
			<div className="mx-auto max-w-4xl px-4">
				<h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
					سياسة الخصوصية
				</h1>

				<div className="prose prose-lg max-w-none">
					<div className="bg-card rounded-lg p-8 shadow-sm space-y-6 text-foreground">
						<section>
							<h2 className="text-2xl font-semibold mb-4">مقدمة</h2>
							<p className="leading-relaxed">
								في شركة شرف للسفر والسياحة، نحن ملتزمون بحماية خصوصيتك وبياناتك
								الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك عند
								استخدام موقعنا الإلكتروني وخدماتنا السياحية.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">المعلومات التي نجمعها</h2>

							<h3 className="text-xl font-medium mt-4 mb-2">المعلومات الشخصية:</h3>
							<ul className="list-disc pr-6 space-y-2">
								<li>الاسم الكامل</li>
								<li>رقم الهاتف</li>
								<li>البريد الإلكتروني</li>
								<li>العنوان</li>
								<li>معلومات جواز السفر</li>
								<li>التاريخ الميلاد</li>
							</ul>

							<h3 className="text-xl font-medium mt-4 mb-2">معلومات الحجز:</h3>
							<ul className="list-disc pr-6 space-y-2">
								<li>تفاصيل الرحلات السياحية</li>
								<li>معلومات الفنادق</li>
								<li>تفضيلات السفر</li>
								<li>طرق الدفع</li>
							</ul>

							<h3 className="text-xl font-medium mt-4 mb-2">معلومات تقنية:</h3>
							<ul className="list-disc pr-6 space-y-2">
								<li>عنوان IP</li>
								<li>نوع المتصفح وجهاز الكمبيوتر</li>
								<li>معلومات التصفح والاستخدام</li>
								<li>ملفات تعريف الارتباط (Cookies)</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">كيف نستخدم معلوماتك</h2>
							<ul className="list-disc pr-6 space-y-2">
								<li>تنظيم وتأكيد حجوزات السفر</li>
								<li>التواصل معك بخصوص خدماتنا</li>
								<li>تحسين جودة خدماتنا</li>
								<li>تقديم عروض خاصة وخصومات</li>
								<li>الامتثال للمتطلبات القانونية</li>
								<li>ضمان أمن وسلامة عملائنا</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">مشاركة المعلومات</h2>
							<p className="leading-relaxed mb-4">
								نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك
								فقط مع:
							</p>
							<ul className="list-disc pr-6 space-y-2">
								<li>شركات الطيران والفنادق وشركاء الخدمات السياحية</li>
								<li>السلطات الحكومية عند الضرورة القانونية</li>
								<li>مزودي الخدمات الذين يساعدون في تشغيل أعمالنا</li>
								<li>جهات الدفع المعتمدة</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">أمان البيانات</h2>
							<p className="leading-relaxed">
								نتخذ إجراءات أمنية فنية وتنظيمية مناسبة لحماية بياناتك من الوصول غير
								المصرح به أو التعديل أو الإفشاء أو التدمير. نستخدم تشفير SSL لنقل
								البيانات ونخزن المعلومات على خوادم آمنة.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">حقوقك</h2>
							<p className="leading-relaxed mb-4">لديك الحق في:</p>
							<ul className="list-disc pr-6 space-y-2">
								<li>الوصول إلى بياناتك الشخصية</li>
								<li>تصحيح المعلومات غير الدقيقة</li>
								<li>حذف بياناتك (في ظل ظروف معينة)</li>
								<li>الاعتراض على معالجة بياناتك</li>
								<li>نقل بياناتك إلى مزود خدمة آخر</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">
								ملفات تعريف الارتباط (Cookies)
							</h2>
							<p className="leading-relaxed">
								نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل استخدام
								الموقع. يمكنك تعطيل ملفات تعريف الارتباط من خلال إعدادات المتصفح،
								ولكن قد يؤثر ذلك على بعض وظائف الموقع.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">
								التغييرات على سياسة الخصوصية
							</h2>
							<p className="leading-relaxed">
								قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات مهمة على
								موقعنا الإلكتروني وسنقوم بإشعارك عبر البريد الإلكتروني عند إجراء
								تغييرات جوهرية.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold mb-4">اتصل بنا</h2>
							<p className="leading-relaxed">
								إذا كان لديك أي أسئلة أو استفسارات بخصوص سياسة الخصوصية، يرجى
								التواصل معنا:
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
