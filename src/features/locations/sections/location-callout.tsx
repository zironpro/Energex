import { Link } from "@/i18n/navigation";

interface LocationCalloutProps {
	emirate: string;
}

export function LocationCallout({ emirate }: LocationCalloutProps) {
	return (
		<section className="bg-blue-600 py-12 text-white">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="flex flex-col items-center justify-between gap-6 rounded-lg border border-white/20 bg-blue-700/50 p-8 backdrop-blur-md md:flex-row">
					<div>
						<h3 className="mb-2 font-bold text-white text-xl md:text-2xl">
							Need a generator in {emirate} fast?
						</h3>
						<p className="text-blue-100 text-sm md:text-base">
							Contact Energex today for a free quote and same-day support.
						</p>
					</div>
					<div className="flex shrink-0 flex-wrap gap-4">
						<Link
							className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow-md transition hover:bg-slate-100"
							href="/contact"
						>
							Request a Quote
						</Link>
						<a
							className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/20"
							href="tel:+971502335477"
						>
							+971 50 233 5477
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
