"use client";

import { Activity, BarChart3, Clock, MapPin } from "lucide-react";

import {
	ScrollRevealGroup,
	ScrollRevealItem,
} from "@/components/ui/scroll-reveal";

const features = [
	{
		title: "Reliable",
		description: "99.9% uptime promise",
		icon: Activity,
	},
	{
		title: "Scalable",
		description: "From small to large scale",
		icon: BarChart3,
	},
	{
		title: "Available 24/7",
		description: "Always ready to support",
		icon: Clock,
	},
	{
		title: "Across UAE",
		description: "Nationwide coverage",
		icon: MapPin,
	},
];

export function HeroFeatures() {
	return (
		<div className="relative z-20 pt-2 pb-4 md:py-6">
			<div className="container mx-auto px-2 md:px-6 lg:px-12">
				<ScrollRevealGroup
					className="grid grid-cols-2 items-start justify-between gap-2 sm:gap-4 md:grid-cols-2 md:items-center md:gap-8 lg:grid-cols-4 lg:gap-4"
					stagger={0.3}
				>
					{features.map((feature) => {
						const Icon = feature.icon;
						return (
							<ScrollRevealItem
								className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-4 md:text-left lg:justify-center"
								duration={0.8}
								key={feature.title}
							>
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 md:h-12 md:w-12">
									<Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={3} />
								</div>
								<div className="flex flex-col">
									<h3 className="font-bold text-[13px] text-gray-900 md:text-[15px]">
										{feature.title}
									</h3>
									<p className="font-medium text-[11px] text-gray-500 md:text-[13px]">
										{feature.description}
									</p>
								</div>
							</ScrollRevealItem>
						);
					})}
				</ScrollRevealGroup>
			</div>
		</div>
	);
}
