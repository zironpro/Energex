import type { ReactNode } from "react";

import {
	Building2,
	HelpCircle,
	MapPin,
	Settings2,
	ShieldCheck,
	Wrench,
	Zap,
} from "lucide-react";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";

// --- Shared Reusable Primitives ---

interface SeoSectionProps {
	title: string;
	lead: string;
	children: ReactNode;
}

function SeoSection({ title, lead, children }: SeoSectionProps) {
	return (
		<section className="relative border-slate-200/80 border-t bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 py-16 sm:py-20 lg:py-24">
			<div className="container mx-auto max-w-6xl px-6 md:px-12">
				{/* Section Header */}
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<h2 className="font-black text-2xl text-slate-900 leading-tight tracking-tight sm:text-3xl md:text-4xl">
						{title}
					</h2>
					<p className="mt-4 text-base text-slate-600 leading-relaxed md:text-lg">
						{lead}
					</p>
				</div>

				{/* Cards Grid */}
				<div className="grid gap-6 md:grid-cols-2 lg:gap-8">{children}</div>
			</div>
		</section>
	);
}

interface SeoCardProps {
	icon: ReactNode;
	title: string;
	children: ReactNode;
}

function SeoCard({ icon, title, children }: SeoCardProps) {
	return (
		<div className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:border-blue-200 hover:shadow-md sm:p-8">
			<div className="mb-5 flex items-center gap-3 border-slate-100 border-b pb-4">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
					{icon}
				</div>
				<h3 className="font-bold text-lg text-slate-900 sm:text-xl">{title}</h3>
			</div>
			<div className="flex flex-1 flex-col space-y-4 text-slate-600 text-sm leading-relaxed sm:text-base">
				{children}
			</div>
		</div>
	);
}

interface SeoItemBoxProps {
	title: string;
	description: ReactNode;
}

function SeoItemBox({ title, description }: SeoItemBoxProps) {
	return (
		<div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:bg-slate-50">
			<div className="font-bold text-slate-900 text-sm sm:text-base">
				{title}
			</div>
			<div className="mt-1 text-slate-600 text-xs leading-relaxed sm:text-sm">
				{description}
			</div>
		</div>
	);
}

interface SeoFaqItemProps {
	question: string;
	answer: string;
}

function SeoFaqItem({ question, answer }: SeoFaqItemProps) {
	return (
		<div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
			<div className="flex items-start gap-2.5 font-bold text-slate-900 text-sm sm:text-base">
				<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-[11px] text-white">
					Q
				</span>
				<span>{question}</span>
			</div>
			<p className="mt-2 text-slate-600 text-xs leading-relaxed sm:text-sm ltr:pl-7 rtl:pr-7">
				{answer}
			</p>
		</div>
	);
}

// --- 1. Contact Page SEO Content ---

export function ContactSeoContent() {
	const locale = useLocale();
	const isAr = locale === "ar";

	if (isAr) {
		const emirates = [
			"دبي",
			"أبوظبي",
			"الشارقة",
			"عجمان",
			"رأس الخيمة",
			"الفجيرة",
			"أم القيوين",
			"جبل علي",
			"الخليج التجاري",
			"القوز",
			"مجمع دبي للاستثمار",
			"دبي الجنوب",
		];

		return (
			<SeoSection
				lead="تعتبر إنرجكس واحدة من الشركات الرائدة في مجال تأجير المولدات الكهربائية في دبي وأبوظبي والشارقة وكافة أنحاء الإمارات لتلبية متطلبات المشاريع الإنشائية والتجارية والفعاليات الكبرى."
				title="تواصل مع إنرجكس لتأجير المولدات في الإمارات"
			>
				<SeoCard
					icon={<MapPin className="h-5 w-5" />}
					title="المناطق التي نخدمها في كافة الإمارات"
				>
					<p>
						نقدم خدمات توريد وصيانة مولدات الديزل الصامتة من 20 إلى 1500 كيلو
						فولت أمبير مع استجابة فورية ودعم فني مخصص على مدار الساعة.
					</p>
					<div className="pt-2">
						<div className="mb-2.5 font-semibold text-slate-900 text-xs">
							مراكز التغطية والمدن الرئيسية:
						</div>
						<div className="flex flex-wrap gap-1.5">
							{emirates.map((item) => (
								<span
									className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium text-slate-700 text-xs"
									key={item}
								>
									{item}
								</span>
							))}
						</div>
					</div>
				</SeoCard>

				<SeoCard
					icon={<Zap className="h-5 w-5" />}
					title="أحجام المولدات وإرشادات الأسعار"
				>
					<p>
						نمتلك أسطولاً متنوعاً يغطي كافة الاحتياجات التشغيلية مع تسعير شفاف
						ومرن وفقاً لطبيعة كل مشروع:
					</p>
					<div className="space-y-2.5 pt-1">
						<SeoItemBox
							description="مولدات ديزل صامتة مجهزة بأحدث تقنيات توفير الوقود وأنظمة التحكم الذكي."
							title="نطاق الأسطول (20 إلى 1500 ك.ف.أ)"
						/>
						<SeoItemBox
							description="عقود إيجار يومية، أسبوعية، شهرية، وسنوية مرنة مع خطط تسعير تنافسية."
							title="فترات إيجار مرنة"
						/>
						<SeoItemBox
							description="فحص مجاني للأحمال، تمديد الكابلات، لوحات التحويل التلقائي ATS، وإدارة الوقود."
							title="حلول تسليم مفتاح شاملة"
						/>
					</div>
				</SeoCard>
			</SeoSection>
		);
	}

	const emirates = [
		"Dubai",
		"Abu Dhabi",
		"Sharjah",
		"Ajman",
		"Ras Al Khaimah",
		"Fujairah",
		"Umm Al Quwain",
		"Jebel Ali",
		"Business Bay",
		"Al Quoz",
		"DIP",
		"Dubai South",
	];

	return (
		<SeoSection
			lead="Energex Equipment Rental is a leading provider of power solutions across Dubai, Abu Dhabi, Sharjah, and the wider UAE. Whether managing a large-scale construction site or organizing a major event, our team delivers reliable, tailored power."
			title="Contact Energex for Generator Rental in the UAE"
		>
			<SeoCard
				icon={<MapPin className="h-5 w-5" />}
				title="Areas We Serve Across the UAE"
			>
				<p>
					We supply and maintain soundproof diesel generators across all seven
					Emirates. In Dubai, our primary service hubs ensure rapid dispatch and
					24/7 technical support.
				</p>
				<div className="pt-2">
					<div className="mb-2.5 font-semibold text-slate-900 text-xs">
						Primary Regional Hubs:
					</div>
					<div className="flex flex-wrap gap-1.5">
						{emirates.map((item) => (
							<span
								className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium text-slate-700 text-xs"
								key={item}
							>
								{item}
							</span>
						))}
					</div>
				</div>
			</SeoCard>

			<SeoCard
				icon={<Zap className="h-5 w-5" />}
				title="Available kVA Sizes and Pricing"
			>
				<p>
					Our fleet includes a comprehensive capacity range to satisfy both
					light commercial setups and continuous high-load industrial demands:
				</p>
				<div className="space-y-2.5 pt-1">
					<SeoItemBox
						description="High-performance soundproof diesel gensets from 20 kVA up to 1500 kVA."
						title="Fleet Capacity Range"
					/>
					<SeoItemBox
						description="Daily, weekly, monthly, and long-term project rental options at competitive rates."
						title="Flexible Contract Terms"
					/>
					<SeoItemBox
						description="Complimentary site load assessment, heavy-duty cabling, ATS switches, and fuel logistics."
						title="Turnkey Support"
					/>
				</div>
			</SeoCard>
		</SeoSection>
	);
}

// --- 2. Products Page SEO Content ---

export function ProductsSeoContent() {
	const locale = useLocale();
	const isAr = locale === "ar";

	if (isAr) {
		return (
			<SeoSection
				lead="نقدم في إنرجكس أسطولاً حديثاً ومجهزاً بالكامل من مولدات الديزل الصامتة والموثوقة والمصممة لتحمل أصعب الظروف المناخية في الإمارات حتى 50 درجة مئوية."
				title="أسطول مولدات الديزل للإيجار في دبي والإمارات"
			>
				<SeoCard
					icon={<Zap className="h-5 w-5" />}
					title="أحجام المولدات المتوفرة وتطبيقاتها"
				>
					<div className="space-y-2.5">
						<SeoItemBox
							description="مثالية للمكاتب المؤقتة، الفعاليات الصغيرة، أبراج الإنارة، والطاقة الاحتياطية للمحلات التجارية."
							title="السعات الصغيرة (20 - 100 ك.ف.أ)"
						/>
						<SeoItemBox
							description="تستخدم على نطاق واسع في مواقع البناء المتوسطة، المستودعات، والمجمعات السكنية والتجارية."
							title="السعات المتوسطة (150 - 500 ك.ف.أ)"
						/>
						<SeoItemBox
							description="مصممة للمصانع الكبرى، حقول النفط والغاز، محطات التبريد المركزي، والمشاريع الإنشائية الضخمة."
							title="السعات الكبيرة (750 - 1500 ك.ف.أ)"
						/>
					</div>
				</SeoCard>

				<SeoCard
					icon={<Settings2 className="h-5 w-5" />}
					title="المزامنة الكهربائية والملحقات المتكاملة"
				>
					<p>
						إلى جانب الوحدات المستقلة، نوفر حلول مزامنة متعددة الميجاوات لتوفير
						طاقة عالية وموثوقية مضاعفة (N+1) لمنع أي انقطاع كهربائي.
					</p>
					<div className="space-y-2.5 pt-1">
						<SeoItemBox
							description="تحويل آلي وفوري للكهرباء عند انقطاع التيار الرئيسي لضمان استمرارية الأعمال."
							title="لوحات التحويل التلقائي (ATS)"
						/>
						<SeoItemBox
							description="كابلات مطاطية مدرعة مصممة لتحمل حرارة الصحراء ولوحات توزيع متعددة المخارج."
							title="كابلات ولوحات توزيع احترافية"
						/>
						<SeoItemBox
							description="خزانات وقود خارجية معتمدة (1,000 إلى 10,000 لتر) للتشغيل المستمر دون توقف."
							title="خزانات وقود إضافية"
						/>
					</div>
				</SeoCard>
			</SeoSection>
		);
	}

	return (
		<SeoSection
			lead="Energex Equipment Rental maintains a modern, meticulously serviced fleet of soundproof diesel generators engineered to thrive in the demanding UAE desert environment up to 50°C."
			title="Diesel Generator Fleet for Rent in Dubai & UAE"
		>
			<SeoCard
				icon={<Zap className="h-5 w-5" />}
				title="Available kVA Sizes and Applications"
			>
				<div className="space-y-2.5">
					<SeoItemBox
						description="Perfect for temporary site offices, small events, mobile lighting towers, and small commercial backup."
						title="Small Capacity (20kVA – 100kVA)"
					/>
					<SeoItemBox
						description="Highly versatile workhorse units for mid-sized construction sites, warehouses, and commercial centers."
						title="Medium Capacity (150kVA – 500kVA)"
					/>
					<SeoItemBox
						description="Heavy-duty prime power for manufacturing facilities, oil & gas operations, district cooling, and civil infrastructure."
						title="Large Capacity (750kVA – 1500kVA)"
					/>
				</div>
			</SeoCard>

			<SeoCard
				icon={<Settings2 className="h-5 w-5" />}
				title="Synchronized Power & Accessories"
			>
				<p>
					Beyond standalone units, we engineer multi-megawatt synchronized power
					plants for massive demands with built-in N+1 operational redundancy.
				</p>
				<div className="space-y-2.5 pt-1">
					<SeoItemBox
						description="Automatic Transfer Switches providing seamless fallback to prevent costly downtime."
						title="ATS Automatic Transfer Switches"
					/>
					<SeoItemBox
						description="Certified desert-grade electrical cables, distribution panels, and breaker protections."
						title="Heavy-Duty Distribution"
					/>
					<SeoItemBox
						description="Double-walled auxiliary bulk fuel tanks (1,000L to 10,000L) for extended autonomous runtime."
						title="Auxiliary Fuel Storage"
					/>
				</div>
			</SeoCard>
		</SeoSection>
	);
}

// --- 3. Solutions Page SEO Content ---

export function SolutionsSeoContent() {
	const locale = useLocale();
	const isAr = locale === "ar";

	if (isAr) {
		return (
			<SeoSection
				lead="نحن لا نؤجر المولدات فحسب، بل نقدم حلول طاقة متكاملة تناسب طبيعة كل مشروع بدقة، مع التزام كامل بأعلى معايير السلامة والكفاءة."
				title="حلول الطاقة المخصصة لكل القطاعات"
			>
				<SeoCard
					icon={<Building2 className="h-5 w-5" />}
					title="القطاعات الحيوية التي نخدمها"
				>
					<div className="space-y-2.5">
						<SeoItemBox
							description={
								<span>
									توفير طاقة مستمرة تشمل{" "}
									<Link
										className="font-semibold text-blue-600 underline hover:text-blue-800"
										href="/solutions/100-kva-generator-for-tower-crane"
									>
										مولدات 100 ك.ف.أ للرافعات البرجية
									</Link>
									، والمعدات الثقيلة، ومخيمات العمال طوال فترة المشروع.
								</span>
							}
							title="قطاع المقاولات والإنشاءات"
						/>
						<SeoItemBox
							description="مولدات فائقة الهدوء تضمن تشغيل أنظمة الصوت والإضاءة والبث المباشر بدون أي انقطاع أو إزعاج صوتي."
							title="الفعاليات والترفيه"
						/>
						<SeoItemBox
							description="طاقة احتياطية موثوقة للمصانع والمستودعات المبردة لضمان استمرارية خطوط الإنتاج وتجنب الخسائر."
							title="القطاع الصناعي والخدمات اللوجستية"
						/>
					</div>
				</SeoCard>

				<SeoCard
					icon={<HelpCircle className="h-5 w-5" />}
					title="الأسئلة الشائعة حول خدمات الطاقة"
				>
					<div className="space-y-3">
						<SeoFaqItem
							answer="نعم، فريق الدعم الفني لدينا متاح 24/7 للتدخل السريع والصيانة الدورية وتزويد الوقود لضمان عدم توقف عملياتك."
							question="هل تقدمون خدمة الدعم الفني على مدار الساعة؟"
						/>
						<SeoFaqItem
							answer="يقوم مهندسونا بإجراء تقييم مجاني للأحمال الكهربائية الخاصة بك لاقتراح السعة الدقيقة وتجنب إهدار الوقود أو عجز الطاقة."
							question="كيف أختار حجم المولد المناسب لمشروعي؟"
						/>
					</div>
				</SeoCard>
			</SeoSection>
		);
	}

	return (
		<SeoSection
			lead="Energex goes beyond standard equipment rental by engineering turnkey power solutions tailored to the exacting operational requirements of each sector across the UAE."
			title="Tailored Power Solutions Across Industries"
		>
			<SeoCard
				icon={<Building2 className="h-5 w-5" />}
				title="Industry-Specific Generator Applications"
			>
				<div className="space-y-2.5">
					<SeoItemBox
						description={
							<span>
								Rugged, reliable prime power including specialized{" "}
								<Link
									className="font-semibold text-blue-600 underline hover:text-blue-800"
									href="/solutions/100-kva-generator-for-tower-crane"
								>
									100 kVA generators for tower cranes
								</Link>
								, dewatering pumps, and contractor site compounds.
							</span>
						}
						title="Construction & Infrastructure"
					/>
					<SeoItemBox
						description="Super-silent generators (<58 dBA) delivering stable, clean electricity for sound, lighting rigs, broadcasting, and VIP hospitality."
						title="Events & Entertainment"
					/>
					<SeoItemBox
						description="Mission-critical standby and prime power systems ensuring zero downtime for factories, cold storage, and logistics hubs."
						title="Industrial & Manufacturing"
					/>
				</div>
			</SeoCard>

			<SeoCard
				icon={<HelpCircle className="h-5 w-5" />}
				title="Frequently Asked Questions"
			>
				<div className="space-y-3">
					<SeoFaqItem
						answer="Yes. Our certified technical teams are available around the clock to provide rapid on-site assistance, 24/7 refueling, and preventative maintenance."
						question="Do you provide 24/7 technical support and maintenance?"
					/>
					<SeoFaqItem
						answer="Our engineering team provides complimentary site load assessments to analyze running wattage, starting inrush currents, and duty cycles to specify the optimal generator size."
						question="How do I calculate the right kVA size for my project?"
					/>
				</div>
			</SeoCard>
		</SeoSection>
	);
}

// --- 4. Location Page SEO Content ---

export function LocationSeoContent({ emirate }: { emirate: string }) {
	const locale = useLocale();
	const isAr = locale === "ar";

	if (isAr) {
		return (
			<SeoSection
				lead={`تعتبر ${emirate} واحدة من أسرع المناطق نمواً في المنطقة، وتتطلب مشاريعها المستمرة مصدراً موثوقاً للطاقة لضمان استمرارية العمل دون انقطاع.`}
				title={`تأجير المولدات في ${emirate}: الحل الأمثل لاحتياجاتك من الطاقة`}
			>
				<SeoCard
					icon={<ShieldCheck className="h-5 w-5" />}
					title={`كيفية اختيار المولد المناسب في ${emirate}`}
				>
					<div className="space-y-2.5">
						<SeoItemBox
							description="حساب إجمالي الأحمال التشغيلية وتيارات بدء تشغيل المعدات بدقة لتجنب هدر الوقود أو تعطل المولد."
							title="التقييم الدقيق للأحمال الكهربائية"
						/>
						<SeoItemBox
							description={`في المناطق السكنية والتجارية في ${emirate}، تعتبر المولدات الصامتة ضرورية للامتثال للمعايير البيئية.`}
							title="مولدات صامتة للمناطق الحضرية"
						/>
						<SeoItemBox
							description={`فريق صيانة وتدخل سريع متاح 24/7 في كافة أنحاء ${emirate} لتقليل فترات التوقف لأدنى حد.`}
							title="دعم فني وصيانة وقائية مستمرة"
						/>
					</div>
				</SeoCard>

				<SeoCard
					icon={<Wrench className="h-5 w-5" />}
					title={`خدماتنا المتكاملة في ${emirate}`}
				>
					<p>
						لا يقتصر دورنا على توريد المولدات، بل نوفر حلول طاقة متكاملة تشمل
						كافة الملحقات الضرورية لضمان أعلى مستويات الأداء:
					</p>
					<div className="space-y-2.5 pt-1">
						<SeoItemBox
							description={`توصيل وتركيب فوري لكافة مواقع العمل والمشاريع في ${emirate}.`}
							title="توصيل سريع وتشغيل فوري"
						/>
						<SeoItemBox
							description="كابلات أرضية متينة، لوحات تحويل أوتوماتيكي ATS، ولوحات توزيع كهربائية معتمدة."
							title="كابلات ولوحات توزيع متكاملة"
						/>
						<SeoItemBox
							description="تزويد وقود دوري وخزانات وقود إضافية لضمان عمل المولدات لأيام متواصلة دون انقطاع."
							title="إدارة وتوريد الديزل"
						/>
					</div>
				</SeoCard>
			</SeoSection>
		);
	}

	return (
		<SeoSection
			lead={`As ${emirate} continues to expand rapidly with high-value infrastructure and commercial developments, dependable temporary power is critical to safeguard project milestones.`}
			title={`Generator Rental in ${emirate}: Complete Power Solutions`}
		>
			<SeoCard
				icon={<ShieldCheck className="h-5 w-5" />}
				title={`Choosing the Right Generator for Your ${emirate} Project`}
			>
				<div className="space-y-2.5">
					<SeoItemBox
						description="Complimentary on-site assessments to calculate exact running loads and starting currents, preventing fuel waste and overloads."
						title="Accurate Load Sizing"
					/>
					<SeoItemBox
						description={`Sound-attenuated canopies engineered to satisfy municipal noise guidelines across residential and commercial sectors in ${emirate}.`}
						title="Silent Gensets for Urban Zones"
					/>
					<SeoItemBox
						description={`Round-the-clock technical dispatch and preventative service routines across ${emirate} to guarantee zero unexpected downtime.`}
						title="24/7 Rapid Response Support"
					/>
				</div>
			</SeoCard>

			<SeoCard
				icon={<Wrench className="h-5 w-5" />}
				title={`Turnkey Rental Services in ${emirate}`}
			>
				<p>
					Beyond delivering generators, Energex provides fully engineered power
					packages with all supporting electrical infrastructure:
				</p>
				<div className="space-y-2.5 pt-1">
					<SeoItemBox
						description={`Fast same-day delivery and professional setup across all job sites in ${emirate}.`}
						title="Rapid Mobilization & Installation"
					/>
					<SeoItemBox
						description="Certified heavy-duty cabling, Automatic Transfer Switches (ATS), and weather-sealed distribution panels."
						title="Turnkey Distribution Hardware"
					/>
					<SeoItemBox
						description="Double-walled bulk fuel tanks and scheduled direct-to-site diesel delivery for extended run times."
						title="Dedicated Fuel Logistics"
					/>
				</div>
			</SeoCard>
		</SeoSection>
	);
}
