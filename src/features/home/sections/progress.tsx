"use client";

import Image from "next/image";

const industries = [
	{
		title: "Construction",
		description:
			"Continuous power for site offices and heavy machinery operations.",
		image: "/progress/construction.webp",
	},
	{
		title: "Oil & Gas",
		description:
			"Powering drilling sites and downstream operations with reliable energy.",
		image: "/progress/oil-&-gas.webp",
	},
	{
		title: "Events",
		description:
			"Never miss a moment with backup power for festivals, concerts, and conferences.",
		image: "/progress/events.webp",
	},
	{
		title: "Logistics & Mining",
		description:
			"Always-on supply for distribution hubs and remote sites, reliably everywhere.",
		image: "/progress/logistics.webp",
	},
];

const bentoLayouts = [
	"md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[600px]",
	"md:col-span-1 md:row-span-2 min-h-[400px] md:min-h-[600px]",
	"md:col-span-1 md:row-span-1 min-h-[250px] md:min-h-[288px]",
	"md:col-span-1 md:row-span-1 min-h-[250px] md:min-h-[288px]",
];

export function Progress() {
	return (
		<section className="relative w-full bg-slate-50 py-16 md:py-24">
			<div className="mx-auto w-full max-w-7xl px-6 md:px-12">
				{/* Section Header */}
				<div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
					<div>
						<h2 className="mb-4 font-bold text-4xl text-slate-900 tracking-tighter md:text-5xl lg:text-6xl">
							Powering the UAE
						</h2>
						<p className="max-w-2xl font-medium text-lg text-slate-500 md:text-xl">
							From small projects to large-scale infrastructure, we provide
							reliable energy where and when it matters most.
						</p>
					</div>
				</div>

				{/* Magazine Bento Grid */}
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
					{industries.map((industry, idx) => {
						const isFeatured = idx === 0;

						return (
							<div
								className={`group relative overflow-hidden rounded-lg shadow-sm transition-all duration-700 hover:shadow-xl ${bentoLayouts[idx]}`}
								key={industry.title}
							>
								{/* Full background image card */}
								<Image
									alt={industry.title}
									className="object-cover transition-transform duration-700 group-hover:scale-105"
									fill
									src={industry.image}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

								<div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
									<div className="translate-y-0 transition-transform duration-500 lg:translate-y-4 lg:group-hover:translate-y-0">
										<h3
											className={`mb-3 font-bold text-white tracking-tight ${isFeatured ? "text-3xl md:text-5xl lg:text-6xl" : "text-2xl md:text-3xl"}`}
										>
											{industry.title}
										</h3>
										<p
											className={`font-medium text-slate-200 leading-relaxed transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100 ${isFeatured ? "max-w-md text-base md:text-lg" : "text-sm"}`}
										>
											{industry.description}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
