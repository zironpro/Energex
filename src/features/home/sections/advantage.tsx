"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

type AdvantageItem = {
	title: string;
	description: string;
	image?: string;
};

const advantages: AdvantageItem[] = [
	{
		title: "Rapid Delivery",
		description:
			"On-site and operational on demand, with custom equipment tailored specifically for your environment.",
		image: "/advantage/rapid-delivery.webp",
	},
	{
		title: "Total Reliability",
		description:
			"Every unit is backed by rigorous preventive maintenance to secure peak uptime and regulatory compliance.",
		image: "/advantage/total-reliability.webp",
	},
	{
		title: "Smart Engineering",
		description:
			"Beyond a rental service, we size, sync and support your specific power requirements.",
		image: "/advantage/smart-engineering.webp",
	},
	{
		title: "Expert Consulting",
		description:
			"Attentive 24/7 technical assistance to maintain uninterrupted operations.",
		image: "/advantage/expert-consulting.webp",
	},
	{
		title: "Flexible Packages",
		description:
			"Tailored rental terms and project-based options for your business.",
		image: "/advantage/flexible-packages.webp",
	},
];

export function Advantage() {
	return (
		<section className="w-full overflow-hidden bg-slate-50 py-16 text-slate-900">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				{/* Section Header */}
				<div className="mb-20 grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-12">
					<div>
						<h2 className="font-bold text-4xl text-slate-900 tracking-tighter md:text-6xl">
							The Energex Advantage
						</h2>
					</div>
					<div>
						<p className="max-w-lg font-medium text-lg text-slate-500 md:text-xl">
							Empowering your operations with state-of-the-art power solutions,
							unmatched reliability, and expert support tailored to your unique
							requirements.
						</p>
					</div>
				</div>

				{/* Carousel */}
				<div className="relative px-4 md:px-12">
					<Carousel
						className="w-full"
						opts={{
							align: "start",
							loop: true,
						}}
						plugins={[
							Autoplay({
								delay: 2500,
								stopOnInteraction: true,
							}),
						]}
					>
						<CarouselContent className="-ml-4 py-4 md:-ml-6">
							{advantages.map((adv) => {
								return (
									<CarouselItem
										className="pl-4 md:basis-1/2 md:pl-6 lg:basis-1/3"
										key={adv.title}
									>
										<div className="group relative h-full cursor-pointer overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
											<div className="relative z-10 flex h-full flex-col">
												{adv.image ? (
													<div className="relative h-48 w-full shrink-0 bg-slate-100">
														<Image
															alt={adv.title}
															className="object-cover"
															fill
															src={adv.image}
														/>
													</div>
												) : (
													<div className="h-48 w-full shrink-0 bg-slate-100" />
												)}
												<div className="flex-grow p-8">
													<h3 className="mb-4 font-bold text-2xl text-slate-900 tracking-tight">
														{adv.title}
													</h3>
													<p className="text-slate-600 leading-relaxed">
														{adv.description}
													</p>
												</div>
											</div>
										</div>
									</CarouselItem>
								);
							})}
						</CarouselContent>
						<CarouselPrevious className="hidden border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 md:flex" />
						<CarouselNext className="hidden border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 md:flex" />
					</Carousel>
				</div>
			</div>
		</section>
	);
}
