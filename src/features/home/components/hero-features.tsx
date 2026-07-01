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
		<section className="relative z-20 border-gray-100 border-b bg-white py-12 shadow-sm">
			<div className="container mx-auto px-6 lg:px-12">
				<ScrollRevealGroup
					className="grid grid-cols-1 items-center justify-between gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-4"
					stagger={0.3}
				>
					{features.map((feature) => {
						const Icon = feature.icon;
						return (
							<ScrollRevealItem
								className="flex items-center gap-4 lg:justify-center"
								duration={0.8}
								key={feature.title}
							>
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
									<Icon className="h-5 w-5" strokeWidth={3} />
								</div>
								<div className="flex flex-col">
									<h3 className="font-bold text-[15px] text-gray-900">
										{feature.title}
									</h3>
									<p className="font-medium text-[13px] text-gray-500">
										{feature.description}
									</p>
								</div>
							</ScrollRevealItem>
						);
					})}
				</ScrollRevealGroup>
			</div>
		</section>
	);
}
