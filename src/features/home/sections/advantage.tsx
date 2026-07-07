"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

type AdvantageItem = {
	title: string;
	description: string;
	image?: string;
};

const getAdvantages = (t: (key: string) => string): AdvantageItem[] => [
	{
		title: t("items.rapid.title"),
		description: t("items.rapid.description"),
		image: "/advantage/rapid-delivery.webp",
	},
	{
		title: t("items.reliable.title"),
		description: t("items.reliable.description"),
		image: "/advantage/total-reliability.webp",
	},
	{
		title: t("items.smart.title"),
		description: t("items.smart.description"),
		image: "/advantage/smart-engineering.webp",
	},
	{
		title: t("items.expert.title"),
		description: t("items.expert.description"),
		image: "/advantage/expert-consulting.webp",
	},
	{
		title: t("items.flexible.title"),
		description: t("items.flexible.description"),
		image: "/advantage/flexible-packages.webp",
	},
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

export function Advantage() {
	const t = useTranslations("home.Advantage");
	const advantages = getAdvantages(t);

	const [activeIndex, setActiveIndex] = useState(2);
	const lastScrollTime = useRef(0);

	const handleNext = () => {
		setActiveIndex((prev) => Math.min(prev + 1, advantages.length - 1));
	};

	const handlePrev = () => {
		setActiveIndex((prev) => Math.max(prev - 1, 0));
	};

	const handleWheel = (e: React.WheelEvent) => {
		const now = Date.now();
		if (now - lastScrollTime.current > 400) {
			if (e.deltaX > 0) {
				handleNext();
			} else if (e.deltaX < 0) {
				handlePrev();
			}
			lastScrollTime.current = now;
		}
	};

	return (
		<section
			className="w-full scroll-mt-20 overflow-hidden bg-slate-50 pt-8 pb-32 text-slate-900 md:scroll-mt-24"
			id="advantage-section"
		>
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				{/* Section Header */}
				<div className="mb-20 grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-12">
					<ScrollReveal direction="left">
						<h2 className="font-bold text-4xl text-blue-600 tracking-tighter md:text-6xl">
							{t("title")}
						</h2>
					</ScrollReveal>
					<ScrollReveal delay={0.2} direction="right">
						<div className="max-w-lg font-medium text-lg text-slate-500 md:text-xl">
							<p className="mb-6">
								<strong className="mb-2 block font-bold text-slate-900">
									{t("subtitleHeader")}
								</strong>
								{t("subtitleText")}
							</p>
							<ul className="space-y-4">
								<li className="flex items-center gap-3">
									<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
										<ChevronRight className="h-4 w-4" strokeWidth={3} />
									</div>
									<span className="text-slate-700">{t("bullet1")}</span>
								</li>
								<li className="flex items-center gap-3">
									<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
										<ChevronRight className="h-4 w-4" strokeWidth={3} />
									</div>
									<span className="text-slate-700">{t("bullet2")}</span>
								</li>
							</ul>
						</div>
					</ScrollReveal>
				</div>

				{/* 3D Coverflow Carousel */}
				<ScrollReveal delay={0.4}>
					<div
						className="relative mt-12 flex h-[500px] w-full items-center justify-center [perspective:1000px]"
						onWheel={handleWheel}
					>
						{/* Cards Container with Drag Support */}
						<motion.div
							className="relative flex h-full w-full max-w-[280px] items-center justify-center [transform-style:preserve-3d] sm:max-w-[320px]"
							drag="x"
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={0.05}
							onDragEnd={(_e, { offset, velocity }) => {
								const swipe = swipePower(offset.x, velocity.x);

								if (swipe < -swipeConfidenceThreshold) {
									handleNext();
								} else if (swipe > swipeConfidenceThreshold) {
									handlePrev();
								}
							}}
						>
							{advantages.map((adv, index) => {
								const offset = index - activeIndex;
								const isActive = offset === 0;

								// 3D Math for Coverflow Effect
								const rotateY = offset * -25; // Tilt inwards
								const translateZ = Math.abs(offset) * -100; // Push back
								const translateX = offset * 110; // Spread horizontally
								const zIndex = 50 - Math.abs(offset); // Active card on top

								return (
									<div
										className="absolute top-0 left-0 h-full w-full cursor-pointer transition duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
										key={adv.title}
										onClick={() => setActiveIndex(index)}
										style={{
											transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
											zIndex,
										}}
									>
										<div className="group relative h-full w-full overflow-hidden rounded-lg shadow-2xl">
											{adv.image ? (
												<Image
													alt={adv.title}
													className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-105"
													fill
													src={adv.image}
												/>
											) : (
												<div className="h-full w-full bg-slate-200" />
											)}

											{/* Gradient Overlay */}
											<div
												className={`pointer-events-none absolute inset-0 transition duration-500 ${
													isActive
														? "bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"
														: "bg-slate-900/70"
												}`}
											/>

											{/* Text Content */}
											<div
												className={`pointer-events-none absolute inset-x-0 bottom-0 p-8 text-white transition duration-500 ${
													isActive
														? "translate-y-0 opacity-100"
														: "translate-y-8 opacity-0"
												}`}
											>
												<h3 className="mb-3 font-bold text-3xl">{adv.title}</h3>
												<p className="font-medium text-base text-slate-300 leading-relaxed">
													{adv.description}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</motion.div>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}
