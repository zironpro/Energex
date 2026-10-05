import { useLocale } from "next-intl";

export function ContactSeoContent() {
	const locale = useLocale();
	const isAr = locale === "ar";
	
	if (isAr) {
		return (
			<section className="container mx-auto px-6 py-12 text-slate-700 max-w-4xl">
				<h2 className="text-2xl font-bold mb-4 text-slate-900">تواصل مع إينرجيكس لتأجير المولدات في الإمارات</h2>
				<p className="mb-4 leading-relaxed">
					تعتبر إينرجيكس واحدة من الشركات الرائدة في مجال تأجير المولدات الكهربائية في دبي وأبوظبي والشارقة وكافة أنحاء الإمارات. سواء كنت تبحث عن مولدات ديزل صامتة لمشروع بناء ضخم، أو طاقة احتياطية لفعالية كبرى، نحن هنا لتلبية كافة احتياجاتك.
				</p>
				<h3 className="text-xl font-semibold mb-3 text-slate-900">المناطق التي نخدمها</h3>
				<p className="mb-4 leading-relaxed">
					نقدم خدمات تأجير المولدات بجميع الأحجام (من 20 كيلو فولت أمبير وحتى 1500 كيلو فولت أمبير) في كافة مناطق دبي بما في ذلك جبل علي، الخليج التجاري، القوز، مجمع دبي للاستثمار، بالإضافة إلى أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين.
				</p>
				<h3 className="text-xl font-semibold mb-3 text-slate-900">إرشادات الأسعار والخدمات</h3>
				<p className="mb-4 leading-relaxed">
					تختلف أسعار الإيجار بناءً على السعة المطلوبة، ومدة الإيجار (يومي، أسبوعي، شهري)، والموقع. تواصل معنا اليوم للحصول على استشارة مجانية وتقييم للأحمال المطلوبة لضمان حصولك على الحل الأكثر كفاءة واقتصادية.
				</p>
			</section>
		);
	}

	return (
		<section className="container mx-auto px-6 py-12 text-slate-700 max-w-4xl">
			<h2 className="text-2xl font-bold mb-4 text-slate-900">Contact Energex for Generator Rental in the UAE</h2>
			<p className="mb-4 leading-relaxed">
				Energex Equipment Rental is a leading provider of power solutions across Dubai, Abu Dhabi, Sharjah, and the wider UAE. Whether you are managing a large-scale construction site, organizing a major event, or require reliable backup power for an industrial facility, our team is ready to deliver tailored generator rental solutions.
			</p>
			<h3 className="text-xl font-semibold mb-3 text-slate-900">Areas We Serve</h3>
			<p className="mb-4 leading-relaxed">
				We supply and maintain soundproof diesel generators across all seven Emirates. In Dubai, our primary service areas include Jebel Ali, Business Bay, Al Quoz, Dubai Investment Park, and Dubai South. We also offer rapid deployment and 24/7 technical support in Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.
			</p>
			<h3 className="text-xl font-semibold mb-3 text-slate-900">Available kVA Sizes and Pricing</h3>
			<p className="mb-4 leading-relaxed">
				Our fleet includes a comprehensive range of generator sizes to meet diverse power demands, from 20kVA for small temporary setups up to 1500kVA for massive industrial loads. Rental prices depend on the required capacity, the rental duration (daily, weekly, or monthly contracts), and specific site requirements such as cabling and fuel management. Contact us today for a free load assessment and a competitive, transparent quote.
			</p>
		</section>
	);
}

export function ProductsSeoContent() {
	const locale = useLocale();
	const isAr = locale === "ar";
	
	if (isAr) {
		return (
			<section className="container mx-auto px-6 py-12 text-slate-700 max-w-4xl">
				<h2 className="text-2xl font-bold mb-4 text-slate-900">أسطول مولدات الديزل للإيجار في دبي والإمارات</h2>
				<p className="mb-4 leading-relaxed">
					نقدم في إينرجيكس مجموعة واسعة من مولدات الديزل الصامتة والموثوقة المصممة لتلبية متطلبات الطاقة لمختلف القطاعات. يتم صيانة أسطولنا بانتظام لضمان أعلى مستويات الأداء والكفاءة في استهلاك الوقود.
				</p>
				<h3 className="text-xl font-semibold mb-3 text-slate-900">أحجام المولدات المتوفرة (kVA)</h3>
				<ul className="list-disc list-inside mb-4 space-y-2">
					<li><strong>المولدات الصغيرة (20 - 100 كيلو فولت أمبير):</strong> مثالية للمكاتب المؤقتة، الفعاليات الصغيرة، والمعدات الخفيفة.</li>
					<li><strong>المولدات المتوسطة (150 - 500 كيلو فولت أمبير):</strong> تستخدم على نطاق واسع في مواقع البناء، والمستودعات، والمباني التجارية.</li>
					<li><strong>المولدات الضخمة (750 - 1500 كيلو فولت أمبير):</strong> مصممة للمصانع الكبرى، وقطاع النفط والغاز، والمشاريع الإنشائية العملاقة.</li>
				</ul>
				<h3 className="text-xl font-semibold mb-3 text-slate-900">لماذا تختار مولدات إينرجيكس؟</h3>
				<p className="mb-4 leading-relaxed">
					جميع مولداتنا مزودة بأنظمة كتم الصوت (Soundproof) لتتناسب مع العمل في المناطق السكنية والتجارية. كما نوفر ملحقات متكاملة تشمل الكابلات، وخزانات الوقود الإضافية، ولوحات التوزيع الكهربائي لتوفير حل متكامل للطاقة أينما كنت.
				</p>
			</section>
		);
	}

	return (
		<section className="container mx-auto px-6 py-12 text-slate-700 max-w-4xl border-t border-slate-200 mt-12">
			<h2 className="text-2xl font-bold mb-4 text-slate-900">Diesel Generator Fleet for Rent in Dubai & UAE</h2>
			<p className="mb-4 leading-relaxed">
				Energex Equipment Rental maintains a modern, meticulously serviced fleet of soundproof diesel generators designed to meet the rigorous demands of the UAE climate. From temporary construction setups to mission-critical backup power, our equipment ensures uninterrupted operations.
			</p>
			<h3 className="text-xl font-semibold mb-3 text-slate-900">Available kVA Sizes and Applications</h3>
			<ul className="list-disc list-inside mb-4 space-y-2">
				<li><strong>Small Capacity (20kVA - 100kVA):</strong> Perfect for temporary site offices, small events, lighting towers, and backup power for small commercial setups.</li>
				<li><strong>Medium Capacity (150kVA - 500kVA):</strong> Highly versatile units ideal for mid-sized construction sites, warehouses, residential complexes, and retail centers.</li>
				<li><strong>Large Capacity (750kVA - 1500kVA):</strong> Heavy-duty generators built for heavy manufacturing, oil and gas operations, large-scale district cooling, and massive infrastructure projects.</li>
			</ul>
			<h3 className="text-xl font-semibold mb-3 text-slate-900">Synchronized Power & Accessories</h3>
			<p className="mb-4 leading-relaxed">
				Beyond standalone units, we provide multi-megawatt synchronized generator packages for massive power demands. We also supply all necessary accessories, including ATS panels, electrical distribution boards, heavy-duty cables, and external fuel tanks for extended run times without interruption.
			</p>
		</section>
	);
}

export function SolutionsSeoContent() {
	const locale = useLocale();
	const isAr = locale === "ar";

	if (isAr) {
		return (
			<section className="container mx-auto px-6 py-12 text-slate-700 max-w-4xl">
				<h2 className="text-2xl font-bold mb-4 text-slate-900">حلول الطاقة المخصصة لكل القطاعات</h2>
				<p className="mb-4 leading-relaxed">
					نحن لا نؤجر المولدات فحسب، بل نقدم حلول طاقة متكاملة تناسب طبيعة كل مشروع. تدرك إينرجيكس أن احتياجات الطاقة في موقع بناء تختلف تماماً عن متطلبات الطاقة لفعالية حية أو مستشفى.
				</p>
				<h3 className="text-xl font-semibold mb-3 text-slate-900">القطاعات التي نخدمها</h3>
				<ul className="list-disc list-inside mb-4 space-y-2">
					<li><strong>قطاع المقاولات والبناء:</strong> توفير طاقة مستمرة للرافعات، والمعدات الثقيلة، ومخيمات العمال طوال فترة المشروع.</li>
					<li><strong>الفعاليات والترفيه:</strong> مولدات فائقة الهدوء تضمن تشغيل أنظمة الصوت والإضاءة بدون أي انقطاع أو إزعاج.</li>
					<li><strong>القطاع الصناعي والنفط:</strong> طاقة احتياطية موثوقة للمصانع، لضمان استمرارية الإنتاج وتجنب الخسائر المالية.</li>
				</ul>
				<h3 className="text-xl font-semibold mb-3 text-slate-900">الأسئلة الشائعة (FAQ)</h3>
				<div className="space-y-4 mb-4">
					<div>
						<h4 className="font-bold text-slate-900">هل تقدمون خدمة الدعم الفني على مدار الساعة؟</h4>
						<p>نعم، فريق الدعم الفني لدينا متاح 24/7 للتدخل السريع والصيانة الدورية لضمان عدم توقف عملياتك.</p>
					</div>
					<div>
						<h4 className="font-bold text-slate-900">كيف أختار حجم المولد المناسب لمشروعي؟</h4>
						<p>يقوم مهندسونا بإجراء تقييم مجاني للأحمال الكهربائية الخاصة بك لاقتراح السعة الدقيقة وتجنب إهدار الوقود أو نقص الطاقة.</p>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="container mx-auto px-6 py-12 text-slate-700 max-w-4xl border-t border-slate-200 mt-12">
			<h2 className="text-2xl font-bold mb-4 text-slate-900">Tailored Power Solutions Across Industries</h2>
			<p className="mb-4 leading-relaxed">
				Energex goes beyond standard equipment rental by engineering complete, turnkey power solutions. We understand that the power requirements for a remote oil rig are vastly different from those of a high-profile corporate event in Downtown Dubai.
			</p>
			<h3 className="text-xl font-semibold mb-3 text-slate-900">Industry-Specific Generator Applications</h3>
			<ul className="list-disc list-inside mb-4 space-y-2">
				<li><strong>Construction & Infrastructure:</strong> Rugged, reliable power for tower cranes, heavy machinery, dewatering pumps, and labor camps. Our equipment thrives in dusty, high-temperature environments.</li>
				<li><strong>Events & Entertainment:</strong> Super-silent generators that deliver uninterrupted, clean power for lighting rigs, sound systems, broadcasting equipment, and VIP catering without disruptive noise.</li>
				<li><strong>Industrial & Manufacturing:</strong> Mission-critical standby and prime power to prevent costly downtime in factories, logistics hubs, and cold storage facilities.</li>
			</ul>
			<h3 className="text-xl font-semibold mb-3 text-slate-900">Frequently Asked Questions</h3>
			<div className="space-y-4 mb-4">
				<div>
					<h4 className="font-bold text-slate-900">Do you provide 24/7 technical support and maintenance?</h4>
					<p>Yes. Our dedicated technical teams are available around the clock to provide rapid response assistance, refueling services, and scheduled preventative maintenance to ensure zero downtime.</p>
				</div>
				<div>
					<h4 className="font-bold text-slate-900">How do I calculate the right kVA size for my project?</h4>
					<p>Selecting the correct generator size involves calculating running loads, starting currents, and future demand. Our engineers provide complimentary site visits and load assessments to recommend the optimal generator size, preventing both fuel wastage (from oversized units) and power failures (from undersized units).</p>
				</div>
			</div>
		</section>
	);
}

export function LocationSeoContent({ emirate }: { emirate: string }) {
	const locale = useLocale();
	const isAr = locale === "ar";

	if (isAr) {
		return (
			<section className="container mx-auto px-6 py-12 text-slate-700 max-w-4xl border-t border-slate-200 mt-12 bg-white rounded-lg shadow-sm">
				<h2 className="text-2xl font-bold mb-4 text-slate-900">تأجير المولدات في {emirate}: الحل الأمثل لاحتياجاتك من الطاقة</h2>
				<p className="mb-4 leading-relaxed">
					تعتبر {emirate} واحدة من أسرع المناطق نمواً، وتتطلب مشاريعها المستمرة مصدراً موثوقاً للطاقة. سواء كنت تعمل في قطاع البناء أو تدير فعالية كبرى، فإن اختيار المولد المناسب يضمن سير العمل بدون انقطاع. نحن في إينرجيكس نقدم تشكيلة واسعة من المولدات بدءاً من 20 كيلو فولت أمبير وحتى 1500 كيلو فولت أمبير لدعم كافة متطلبات المشاريع في {emirate}.
				</p>
				<h3 className="text-xl font-semibold mb-3 text-slate-900">كيفية اختيار المولد المناسب في {emirate}</h3>
				<ul className="list-disc list-inside mb-4 space-y-2">
					<li><strong>التقييم الدقيق للأحمال:</strong> يجب حساب إجمالي الأحمال التشغيلية وتيارات البدء للمعدات لضمان عدم تحميل المولد فوق طاقته.</li>
					<li><strong>مولدات صامتة للمناطق الحضرية:</strong> في المناطق السكنية أو التجارية المزدحمة في {emirate}، يعتبر المولد الصامت (Soundproof) خياراً ضرورياً للامتثال لقوانين الضوضاء.</li>
					<li><strong>الدعم الفني والصيانة:</strong> اختر مزود خدمة يضمن لك دعماً فنياً على مدار الساعة لتقليل فترات التوقف لأدنى حد.</li>
				</ul>
				<h3 className="text-xl font-semibold mb-3 text-slate-900">خدماتنا الشاملة في {emirate}</h3>
				<p className="mb-4 leading-relaxed">
					لا يقتصر دورنا على تأجير المولدات فحسب، بل نوفر الكابلات اللازمة، ولوحات التوزيع (ATS)، وخزانات الوقود الخارجية. فريقنا مستعد دائماً لتقديم خدمات التركيب السريع والصيانة الدورية في جميع أنحاء {emirate}. اتصل بنا اليوم للحصول على تسعيرة تنافسية وحلول طاقة موثوقة.
				</p>
			</section>
		);
	}

	return (
		<section className="container mx-auto px-6 py-12 text-slate-700 max-w-4xl border-t border-slate-200 mt-12 bg-white rounded-lg shadow-sm">
			<h2 className="text-2xl font-bold mb-4 text-slate-900">Generator Rental in {emirate}: Complete Power Solutions</h2>
			<p className="mb-4 leading-relaxed">
				As {emirate} continues to expand rapidly with new infrastructure and commercial developments, reliable temporary power is more critical than ever. Whether you are managing a large-scale construction site, a logistics hub, or a high-profile event, Energex provides tailored generator rental services in {emirate}. Our extensive fleet ranges from 20kVA to 1500kVA, ensuring we can meet any power demand efficiently.
			</p>
			<h3 className="text-xl font-semibold mb-3 text-slate-900">Choosing the Right Generator for Your {emirate} Project</h3>
			<ul className="list-disc list-inside mb-4 space-y-2">
				<li><strong>Accurate Load Sizing:</strong> Proper sizing is essential to avoid fuel wastage from oversized generators or power failures from undersized units. Our experts provide free site assessments to calculate your exact running loads and starting currents.</li>
				<li><strong>Silent Generators for Urban Areas:</strong> For projects in residential or dense commercial zones in {emirate}, our sound-attenuated (soundproof) generators are highly recommended to comply with local noise regulations without sacrificing performance.</li>
				<li><strong>Reliable Maintenance & Support:</strong> We guarantee 24/7 technical support and regular preventive maintenance for all our rental units in {emirate}, ensuring zero unexpected downtime.</li>
			</ul>
			<h3 className="text-xl font-semibold mb-3 text-slate-900">Turnkey Rental Services in {emirate}</h3>
			<p className="mb-4 leading-relaxed">
				Beyond simply delivering a generator, Energex offers complete, turnkey power solutions in {emirate}. We supply all necessary electrical accessories including heavy-duty cables, Automatic Transfer Switches (ATS), distribution boards, and external bulk fuel tanks for extended, uninterrupted operation. Contact us today for competitive pricing and dependable power solutions tailored to your specific requirements.
			</p>
		</section>
	);
}
