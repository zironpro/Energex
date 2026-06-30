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

export function Progress() {
	return (
		<section className="relative w-full overflow-hidden bg-white py-16 text-slate-900">
			<div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
				{/* Section Header */}
				<div className="mb-20 grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-12">
					<div>
						<h2 className="font-bold text-4xl text-slate-900 tracking-tighter md:text-6xl">
							Powering the UAE
						</h2>
					</div>
					<div>
						<p className="max-w-lg font-medium text-lg text-slate-500 md:text-xl">
							From small projects to large-scale infrastructure.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{industries.map((industry) => (
						<div
							className="group flex h-full cursor-pointer flex-col rounded-lg bg-slate-100 p-4 transition-colors duration-300 hover:bg-slate-200"
							key={industry.title}
						>
							<div className="flex flex-grow flex-col overflow-hidden rounded-md bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md">
								{/* Photo Placeholder */}
								<div className="relative h-48 w-full shrink-0 overflow-hidden bg-slate-100">
									{industry.image ? (
										<Image
											alt={industry.title}
											className="object-cover transition-transform duration-700 group-hover:scale-105"
											fill
											src={industry.image}
										/>
									) : (
										<div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105" />
									)}

									{/* Hover Overlay */}
									<div className="absolute inset-0 bg-blue-900/0 transition-colors duration-500 group-hover:bg-blue-900/10" />

									{/* Bottom gradient just for depth */}
									<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
								</div>

								{/* Text Content */}
								<div className="flex flex-grow flex-col p-6">
									<div className="flex items-center justify-between">
										<h3 className="font-bold text-lg text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
											{industry.title}
										</h3>
										<Image
											alt="Arrow"
											className="h-4 w-4 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
											height={16}
											src="/icons/caret-right.svg"
											style={{
												filter:
													"invert(30%) sepia(90%) saturate(2000%) hue-rotate(200deg)",
											}}
											width={16}
										/>
									</div>
								</div>
							</div>

							{industry.description && (
								<div className="px-2 pt-4 pb-2">
									<p className="text-slate-600 leading-relaxed">
										{industry.description}
									</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
