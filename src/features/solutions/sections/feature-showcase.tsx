"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

import { Link } from "@/i18n/navigation";

import { getFeatures } from "../data/feature-showcase";

export function FeatureShowcase() {
	const t = useTranslations("solutions.FeatureShowcase");
	const features = getFeatures(t);

	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

	useEffect(() => {
		if (!api) return;

		setCurrent(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<section className="bg-blue-50 px-6 pt-8 pb-24 lg:px-16">
			<div className="container mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
					{/* Left Side: Navigation & Intro */}
					<div className="flex flex-col lg:col-span-5">
						<div className="mb-12">
							<h2 className="mb-6 font-black text-3xl text-blue-600 uppercase leading-[1.1] sm:text-4xl md:text-5xl">
								{t("title1")} <br />
								<span className="text-blue-600">{t("title2")}</span>
							</h2>
							<p className="mb-8 text-base text-slate-600 leading-relaxed">
								{t("description")}
							</p>
							<Button
								className="group h-12 rounded-lg bg-blue-600 px-8 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700"
								render={<Link href="/contact" />}
							>
								{t("getStarted")}
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>

						{/* Feature List selection */}
						<div className="flex flex-col">
							{features.map((feature, i) => {
								const isActive = i === current;
								return (
									<button
										className={`flex w-full cursor-pointer items-center border-b py-4 text-left transition-colors ${
											isActive
												? "border-slate-900 text-slate-900"
												: "border-slate-200 text-slate-400 hover:text-slate-600"
										}`}
										key={feature.title}
										onClick={() => api?.scrollTo(i)}
										type="button"
									>
										<span
											className={`mr-6 text-sm ${
												isActive ? "font-bold" : "font-normal"
											}`}
										>
											{(i + 1).toString().padStart(2, "0")}
										</span>
										<span
											className={`text-xl ${
												isActive ? "font-bold" : "font-medium"
											}`}
										>
											{feature.title}
										</span>
									</button>
								);
							})}
						</div>
					</div>

					{/* Right Side: Feature Content Carousel */}
					<div className="overflow-hidden py-4 lg:col-span-7">
						<Carousel
							className="w-full"
							plugins={[plugin.current]}
							setApi={setApi}
						>
							<CarouselContent>
								{features.map((feature) => (
									<CarouselItem key={feature.title}>
										<div className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-6 md:p-10">
											<h3 className="mb-4 font-bold text-2xl text-blue-600">
												{feature.title}
											</h3>
											<p className="mb-6 text-base text-slate-600 leading-relaxed">
												{feature.description}
											</p>

											<ul className="mb-8 space-y-3">
												{feature.points.map((point) => (
													<li
														className="flex items-center space-x-3 text-slate-700 text-sm md:text-base"
														key={point}
													>
														<CheckCircle2 className="h-4 w-4 text-blue-600 md:h-5 md:w-5" />
														<span className="font-medium">{point}</span>
													</li>
												))}
											</ul>

											{/* Image */}
											<div className="relative mt-auto aspect-[16/10] w-full overflow-hidden rounded-lg">
												<Image
													alt={feature.title}
													className="object-cover"
													fill
													sizes="(max-width: 1024px) 100vw, 50vw"
													src={feature.image}
												/>
												<div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
											</div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</div>
				</div>
			</div>
		</section>
	);
}
