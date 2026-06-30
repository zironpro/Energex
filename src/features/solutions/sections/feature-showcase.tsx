"use client";

import { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
	{
		title: "20kVA – 150kVA",
		description:
			"Power Range: 20, 30, 45, 60, 100, 125, 150 kVA. Noise Level: Super Silent (58–65 dB at 7m).",
		points: [
			"Internal fuel tanks (8 to 24-hour runtime)",
			"Easy-to-tow trailers",
			"Multi-socket distribution panels",
		],
		image: "/solutions/Small%20Portable%20Generators.webp",
	},
	{
		title: "200kVA – 800kVA",
		description:
			"Power Range: 200, 250, 350, 500, 650, 800 kVA. Noise Level: Sound Attenuated (70–75 dB at 7m).",
		points: [
			"External fuel link capability",
			"Electronic governors for stable frequency",
			"Heavy-duty skid bases",
		],
		image: "/solutions/Medium%20Industrial%20Generator.webp",
	},
	{
		title: "1000kVA – 1500kVA",
		description:
			"Power Range: 1000, 1250, 1500 kVA. Design: 20ft or 40ft ISO Containerised Units.",
		points: [
			"High-capacity internal fuel tanks",
			"Internal lighting & fire suppression systems",
			"Synchronised control modules (DeepSea/ComAp)",
		],
		image: "/solutions/Containerised%20Generator.webp",
	},
];

export function FeatureShowcase() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="bg-blue-50 px-6 pt-8 pb-24 lg:px-16">
			<div className="container mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
					{/* Left Side: Navigation & Intro */}
					<div className="flex flex-col lg:col-span-5">
						<div className="mb-12">
							<h2 className="mb-6 font-black text-4xl text-slate-900 uppercase leading-[1.1] md:text-5xl">
								ENERGEX <br />
								<span className="text-blue-500">GENERATORS</span>
							</h2>
							<p className="mb-8 text-base text-slate-600 leading-relaxed">
								Our fleet consists of the latest high-performance diesel
								generators, ranging from 20kVA to 1500kVA. All units are
								sound-attenuated, fuel-efficient and designed for 24/7
								heavy-duty operation in UAE conditions (50°C ambient design).
							</p>
							<Button className="group h-12 rounded-lg bg-slate-900 px-8 font-bold text-white hover:bg-slate-800">
								Get Started
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>

						{/* Feature List selection */}
						<div className="flex flex-col">
							{features.map((feature, i) => {
								const isActive = i === activeIndex;
								return (
									<button
										className={`flex w-full cursor-pointer items-center border-b py-4 text-left transition-colors ${
											isActive
												? "border-slate-900 text-slate-900"
												: "border-slate-200 text-slate-400 hover:text-slate-600"
										}`}
										key={feature.title}
										onClick={() => setActiveIndex(i)}
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

					{/* Right Side: Feature Content */}
					<div className="lg:col-span-7">
						<motion.div
							animate={{ opacity: 1, y: 0 }}
							className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-6 md:p-10"
							initial={{ opacity: 0, y: 20 }}
							key={activeIndex}
							transition={{ duration: 0.4 }}
						>
							<h3 className="mb-4 font-bold text-3xl text-blue-500">
								{features[activeIndex].title}
							</h3>
							<p className="mb-6 text-base text-slate-600 leading-relaxed">
								{features[activeIndex].description}
							</p>

							<ul className="mb-8 space-y-3">
								{features[activeIndex].points.map((point) => (
									<li
										className="flex items-center space-x-3 text-slate-700 text-sm md:text-base"
										key={point}
									>
										<CheckCircle2 className="h-4 w-4 text-blue-500 md:h-5 md:w-5" />
										<span className="font-medium">{point}</span>
									</li>
								))}
							</ul>

							{/* Image */}
							<div className="relative mt-auto aspect-[16/10] w-full overflow-hidden rounded-lg">
								<Image
									alt={features[activeIndex].title}
									className="object-cover"
									fill
									sizes="(max-width: 1024px) 100vw, 50vw"
									src={features[activeIndex].image}
								/>
								<div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
