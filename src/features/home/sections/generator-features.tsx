"use client";

import { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import {
	BatteryCharging,
	CalendarClock,
	Headphones,
	ShieldCheck,
	Truck,
	Zap,
} from "lucide-react";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
	const [unstackedCount, setUnstackedCount] = useState(0);

	const handleNext = () => {
		if (unstackedCount < cards.length) {
			setUnstackedCount((prev) => prev + 1);
		}
	};

	const reset = () => {
		setUnstackedCount(0);
	};

	return (
		<section className="relative w-full overflow-hidden bg-slate-50 pt-0 pb-16 text-slate-900">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<ScrollReveal>
					<div className="mb-16 flex flex-col items-center text-center">
						<h2 className="font-bold text-4xl text-slate-900 tracking-tighter md:text-5xl">
							Generators Built for Demanding Conditions
						</h2>
						<p className="mt-4 max-w-2xl text-lg text-slate-500">
							Click the top card to unpack the features that make our fleet the
							most reliable choice.
						</p>

						<div className="mt-4 h-6">
							{unstackedCount > 0 && (
								<button
									className="font-semibold text-blue-600 text-sm transition-colors hover:text-blue-700"
									onClick={reset}
								>
									Reset Stack
								</button>
							)}
						</div>
					</div>
				</ScrollReveal>

				{/* Grid Container for Final Alignment */}
				<ScrollReveal delay={0.2}>
					<div className="relative mx-auto grid min-h-[340px] w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{cards.map((card, i) => {
							if (i >= unstackedCount) return null;
							return (
								<div className="h-[280px] w-full" key={card.title}>
									<motion.div
										className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-lg shadow-xl"
										layoutId={`feature-card-${card.title}`}
										transition={{ type: "spring", stiffness: 300, damping: 25 }}
									>
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
									</motion.div>
								</div>
							);
						})}

						{/* Stack Container overlay */}
						{unstackedCount < cards.length && (
							<div className="pointer-events-none absolute inset-0 flex items-start justify-center">
								<div className="pointer-events-auto relative h-[280px] w-full max-w-[340px]">
									{cards.map((card, i) => {
										if (i < unstackedCount) return null;
										const stackIndex = i - unstackedCount;
										const isTop = stackIndex === 0;

										// Stacking math
										const rotate =
											stackIndex % 2 === 0
												? stackIndex * 1.5
												: stackIndex * -1.5;
										const y = stackIndex * 8;
										const scale = 1 - stackIndex * 0.05;

										return (
											<motion.div
												animate={{
													rotate,
													y,
													scale,
												}}
												className={`absolute inset-0 ${isTop ? "cursor-pointer" : ""}`}
												initial={false}
												key={`stack-${card.title}`}
												layoutId={`feature-card-${card.title}`}
												onClick={() => {
													if (isTop) handleNext();
												}}
												style={{
													zIndex: cards.length - stackIndex,
												}}
												transition={{
													type: "spring",
													stiffness: 300,
													damping: 25,
												}}
												whileHover={
													isTop ? { y: -10, scale: 1.02, rotate: 0 } : {}
												}
											>
												<div className="group relative h-full w-full overflow-hidden rounded-lg shadow-2xl">
													<Image
														alt={card.title}
														className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-105"
														fill
														src={card.image}
													/>
													<div
														className={`pointer-events-none absolute inset-0 transition-all duration-500 ${isTop ? "bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" : "bg-slate-900/70"}`}
													/>
													<div
														className={`pointer-events-none absolute inset-x-0 bottom-0 p-6 text-white transition-all duration-500 ${isTop ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
													>
														<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/90 text-white backdrop-blur-sm">
															<card.icon className="h-6 w-6" />
														</div>
														<h3 className="font-bold text-2xl">{card.title}</h3>
														<p className="mt-2 font-medium text-slate-300 text-sm leading-relaxed">
															{card.description}
														</p>
														{isTop && (
															<div className="mt-4 animate-pulse font-bold text-blue-400 text-xs uppercase tracking-widest">
																Click to expand
															</div>
														)}
													</div>
												</div>
											</motion.div>
										);
									})}
								</div>
							</div>
						)}
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}
