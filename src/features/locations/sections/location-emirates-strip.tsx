import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";

import { LOCATION_PAGES_META } from "../data/location-pages";

interface LocationEmiratesStripProps {
	currentSlug: string;
}

export function LocationEmiratesStrip({
	currentSlug,
}: LocationEmiratesStripProps) {
	const locale = useLocale();
	const isAr = locale === "ar";

	return (
		<section className="sticky top-20 z-40 border-slate-200 border-b bg-white/95 shadow-sm backdrop-blur-md">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="no-scrollbar flex items-center gap-2 overflow-x-auto py-3">
					<span className="me-2 shrink-0 font-semibold text-slate-400 text-xs uppercase tracking-wider">
						{isAr ? "اختر المنطقة:" : "Select Emirate:"}
					</span>
					{LOCATION_PAGES_META.map((loc) => {
						const isActive = loc.slug === currentSlug;
						const emirateName = isAr ? loc.emirateAr : loc.emirateEn;
						return (
							<Link
								className={`shrink-0 rounded-lg px-3.5 py-1.5 font-medium text-xs transition-all ${
									isActive
										? "bg-blue-600 text-white shadow-sm"
										: "bg-slate-100 text-slate-700 hover:bg-slate-200"
								}`}
								href={`/${loc.slug}`}
								key={loc.slug}
							>
								{emirateName}
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
