"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";

export function StoryScroll() {
	const containerRef = useRef<HTMLDivElement>(null);

	// Track scroll progress for parallax effect
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	// Subtle parallax on the background video
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
	const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

	return (
		<section
			className="relative h-screen w-full overflow-hidden bg-black"
			ref={containerRef}
		>
			<motion.div
				className="absolute inset-0 h-full w-full"
				style={{ y, opacity }}
			>
				<video
					autoPlay
					className="h-full w-full object-cover"
					loop
					muted
					playsInline
				>
					<source src="/video/hero.mp4" type="video/mp4" />
				</video>
				{/* Premium gradient overlays for text readability and depth */}
				{/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
				<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" /> */}
			</motion.div>

			<div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-32 md:px-20">
				<div className="max-w-4xl">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<h1 className="font-bold text-5xl text-white tracking-tighter md:text-7xl lg:text-8xl">
							Reliable Power, Anytime
						</h1>
					</motion.div>

					<motion.p
						className="mt-6 max-w-xl font-medium text-lg text-white/80 leading-relaxed md:text-xl"
						initial={{ opacity: 0, y: 30 }}
						transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						Discover unparalleled performance and breathtaking design, perfectly
						synced with every scroll. Power reinvented.
					</motion.p>

					<motion.div
						className="mt-10 flex flex-wrap items-center gap-6"
						initial={{ opacity: 0, y: 30 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<Button
							className="group h-14 rounded-full px-8 font-semibold text-base transition-all duration-300 hover:translate-x-1 hover:-translate-y-1"
							size="lg"
						>
							<span>Discover More</span>
							<svg
								className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									d="M14 5l7 7m0 0l-7 7m7-7H3"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
								/>
							</svg>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
