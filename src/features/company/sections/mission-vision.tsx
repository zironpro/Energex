"use client";

import { useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

const SECTIONS = [
	{
		label: "MISSION",
		title: "DRIVEN BY POWER. BUILT ON TRUST.",
		desc: "Power your projects with Energex's reliable diesel generators from 20kVA to 1500kVA, delivering efficient and uninterrupted power across Dubai and the UAE.",
		image: "/images/mission.webp",
	},
	{
		label: "VISION",
		title: "DEPENDABLE POWER FOR EVERY INDUSTRY.",
		desc: "Whether you need temporary site power or critical emergency backup, Energex delivers reliable generator solutions backed by quality equipment, experienced professionals, and responsive support. We help businesses stay powered with confidence across the UAE.",
		image: "/images/vision.webp",
	},
];

export function MissionVision() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="relative bg-blue-50/50 py-12 lg:py-16">
			<div className="container mx-auto max-w-7xl px-6">
				<div className="relative flex flex-col items-start gap-16 lg:flex-row lg:gap-12">
					{/* Left Side: Scrolling Content */}
					<div className="flex w-full flex-col lg:w-7/12">
						<div>
							{SECTIONS.map((section, index) => (
								<motion.div
									className={`mb-48 transition-opacity duration-500 last:mb-0 ${activeIndex === index ? "opacity-100" : "opacity-30"}`}
									key={section.label}
									onViewportEnter={() => setActiveIndex(index)}
									viewport={{ margin: "-40% 0px -40% 0px" }}
								>
									<div className="grid grid-cols-1 gap-8 lg:grid-cols-7">
										{/* Label */}
										<div className="lg:col-span-2 lg:pt-2">
											<span className="font-semibold text-blue-600 text-sm uppercase tracking-wider">
												{section.label}
											</span>
										</div>

										{/* Text Content */}
										<div className="lg:col-span-5">
											<h2 className="mb-6 font-black text-4xl text-[#0f3b5e] uppercase leading-[1.1] md:text-5xl">
												{section.title}
											</h2>
											<p className="text-base text-slate-600 leading-relaxed md:text-lg">
												{section.desc}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Right Side: Sticky Image Area */}
					<div className="sticky top-32 hidden h-max w-full lg:block lg:w-5/12 lg:pl-8">
						<div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-xl">
							<AnimatePresence mode="wait">
								<motion.div
									animate={{ opacity: 1, scale: 1 }}
									className="absolute inset-0"
									exit={{ opacity: 0, scale: 0.95 }}
									initial={{ opacity: 0, scale: 1.05 }}
									key={activeIndex}
									transition={{ duration: 0.5, ease: "easeInOut" }}
								>
									<Image
										alt={SECTIONS[activeIndex].title}
										className="object-cover"
										fill
										src={SECTIONS[activeIndex].image}
									/>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
