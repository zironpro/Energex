"use client";

import Image from "next/image";

import {
	BatteryCharging,
	CalendarClock,
	Headphones,
	ShieldCheck,
	Truck,
	Zap,
} from "lucide-react";

import {
	ScrollReveal,
	ScrollRevealGroup,
	ScrollRevealItem,
} from "@/components/ui/scroll-reveal";

const cards = [
	{
		title: "UAE-Ready Performance",
		description: "Built for tough site conditions.",
		icon: ShieldCheck,
		image: "/advantage/total-reliability.webp",
	},
	{
		title: "20kVA–1500kVA Range",
		description: "Power options for every scale.",
		icon: BatteryCharging,
		image: "/advantage/smart-engineering.webp",
	},
	{
		title: "Reliable Power Output",
		description: "Stable supply for daily operations.",
		icon: Zap,
		image: "/advantage/expert-consulting.webp",
	},
	{
		title: "Flexible Rental Plans",
		description: "Short-term and long-term options.",
		icon: CalendarClock,
		image: "/advantage/flexible-packages.webp",
	},
	{
		title: "Fast Deployment",
		description: "Quick delivery when you need it.",
		icon: Truck,
		image: "/advantage/rapid-delivery.webp",
	},
	{
		title: "24/7 Support",
		description: "Assistance whenever required.",
		icon: Headphones,
		image: "/advantage/total-reliability.webp",
	},
];

export function GeneratorFeatures() {
	return (
		<section className="relative w-full overflow-hidden bg-slate-50 pt-0 pb-16 text-slate-900">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<ScrollReveal>
					<div className="mb-16 flex flex-col items-center text-center">
						<h2 className="font-bold text-4xl text-blue-600 tracking-tighter md:text-5xl">
							Generators Built for Demanding Conditions
						</h2>
						<p className="mt-4 max-w-2xl text-base text-slate-500 md:text-lg">
							Discover the features that make our fleet the most reliable choice
							for your power needs.
						</p>
					</div>
				</ScrollReveal>

				<ScrollRevealGroup
					className="mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
					stagger={0.1}
				>
					{cards.map((card) => (
						<ScrollRevealItem className="h-[280px] w-full" key={card.title}>
							<div className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-lg shadow-xl">
								<Image
									alt={card.title}
									className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-105"
									fill
									src={card.image}
								/>
								<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
								<div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 text-white">
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/90 text-white backdrop-blur-sm">
										<card.icon className="h-6 w-6" />
									</div>
									<h3 className="font-bold text-2xl">{card.title}</h3>
									<p className="mt-2 font-medium text-slate-300 text-sm leading-relaxed">
										{card.description}
									</p>
								</div>
							</div>
						</ScrollRevealItem>
					))}
				</ScrollRevealGroup>
			</div>
		</section>
	);
}
