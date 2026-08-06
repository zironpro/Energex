"use client";

import Image from "next/image";

import { ArrowRight, Clock, Headphones, Phone, Truck, Zap } from "lucide-react";

import { Link } from "@/i18n/navigation";

import type { LocationPageData } from "../types";

interface LocationIntroProps {
	data: LocationPageData;
}

const getEmirateImage = (slug: string) => {
	const map: Record<string, string> = {
		"generator-rental-dubai": "/locations/dubai.webp",
		"generator-rental-abu-dhabi": "/locations/abu-dhabi.webp",
		"generator-rental-sharjah": "/locations/sharjah.webp",
		"generator-rental-ajman": "/locations/ajman.webp",
		"generator-rental-umm-al-quwain": "/locations/umm-al-quwain.webp",
		"generator-rental-ras-al-khaimah": "/locations/ras-al-khaimah.webp",
		"generator-rental-fujairah": "/locations/fujairah.webp",
		"generator-rental-al-ain": "/locations/al-ain.webp",
	};
	return map[slug] || "/locations/dubai.webp";
};

export function LocationIntro({ data }: LocationIntroProps) {
	const imageSrc = getEmirateImage(data.slug);

	return (
		<section className="relative border-slate-100 border-b bg-white py-16 lg:py-24">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="grid items-stretch gap-12 lg:grid-cols-12">
					{/* Left Column: Heading, Text & Actions */}
					<div className="flex flex-col justify-between space-y-8 lg:col-span-7">
						<div className="space-y-6">
							<h2 className="font-black text-3xl text-blue-600 leading-[1.15] tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
								Generator Rental Fleet in {data.emirate}
							</h2>

							{/* Intro paragraph content */}
							<p className="font-normal text-slate-700 text-base leading-relaxed md:text-lg">
								{data.intro}
							</p>

							{/* Call to Action buttons */}
							<div className="flex flex-wrap items-center gap-4 pt-2">
								<Link
									className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-blue-600/30 shadow-lg transition-all hover:bg-blue-500 hover:shadow-xl active:scale-95"
									href="/contact"
								>
									<span>Get a Free Quote</span>
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Link>
								<a
									className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-6 py-3.5 font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-100 active:scale-95"
									href="tel:+971502335477"
								>
									<Phone className="h-4 w-4 text-blue-600" />
									<span>Call (+971) 50 233 5477</span>
								</a>
							</div>
						</div>

						{/* Feature Badges Grid */}
						<div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
							<div className="flex items-center gap-3 rounded-lg border border-slate-200/80 bg-slate-50/80 p-3.5 transition-all hover:border-blue-300 hover:bg-blue-50/30">
								<Zap className="h-5 w-5 shrink-0 text-blue-600" />
								<div>
									<div className="font-bold text-slate-900 text-xs sm:text-sm">
										15 - 1500 kVA
									</div>
									<div className="text-slate-500 text-[11px]">Prime & Standby</div>
								</div>
							</div>

							<div className="flex items-center gap-3 rounded-lg border border-slate-200/80 bg-slate-50/80 p-3.5 transition-all hover:border-blue-300 hover:bg-blue-50/30">
								<Truck className="h-5 w-5 shrink-0 text-blue-600" />
								<div>
									<div className="font-bold text-slate-900 text-xs sm:text-sm">
										24/7 Delivery
									</div>
									<div className="text-slate-500 text-[11px]">
										Across {data.emirate}
									</div>
								</div>
							</div>

							<div className="flex items-center gap-3 rounded-lg border border-slate-200/80 bg-slate-50/80 p-3.5 transition-all hover:border-blue-300 hover:bg-blue-50/30">
								<Headphones className="h-5 w-5 shrink-0 text-blue-600" />
								<div>
									<div className="font-bold text-slate-900 text-xs sm:text-sm">
										Silent & Soundproof
									</div>
									<div className="text-slate-500 text-[11px]">Low Noise Units</div>
								</div>
							</div>

							<div className="flex items-center gap-3 rounded-lg border border-slate-200/80 bg-slate-50/80 p-3.5 transition-all hover:border-blue-300 hover:bg-blue-50/30">
								<Clock className="h-5 w-5 shrink-0 text-blue-600" />
								<div>
									<div className="font-bold text-slate-900 text-xs sm:text-sm">
										Flexible Rental
									</div>
									<div className="text-slate-500 text-[11px]">Daily to Annual</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Emirate WebP Image */}
					<div className="lg:col-span-5">
						<div className="relative h-[360px] min-h-[360px] w-full overflow-hidden rounded-lg border border-slate-200 shadow-md sm:h-[420px] lg:h-full">
							<Image
								alt={`Generator Rental ${data.emirate} - Energex`}
								className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
								fill
								priority
								sizes="(max-width: 1024px) 100vw, 45vw"
								src={imageSrc}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
							<div className="absolute bottom-4 left-4 right-4 text-white">
								<span className="inline-block rounded-md bg-blue-600/90 px-3 py-1 font-semibold text-xs uppercase tracking-wider backdrop-blur-md">
									{data.emirate} Operations Hub
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
