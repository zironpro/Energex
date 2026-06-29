"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export function Intro() {
	const [showIntro, setShowIntro] = useState(true);

	useEffect(() => {
		// Intro animation timeout increased to allow full animation sequence
		const timer = setTimeout(() => {
			setShowIntro(false);
		}, 2500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
				showIntro ? "translate-y-0" : "pointer-events-none -translate-y-full"
			}`}
		>
			<div className="flex items-center gap-6">
				{/* SVG Logo - scales and pops in first */}
				<motion.div
					animate={{ scale: 1, opacity: 1 }}
					className="relative z-10 bg-white"
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
				>
					<svg
						className="h-auto w-24 fill-slate-900 md:w-32"
						viewBox="0 0 210 126"
					>
						<g>
							<polygon points="135.83 54.08 139.67 57.16 203.21 4.92 203.21 0 152.97 0 135.83 13.92 135.83 54.08" />
							<polygon points="73.35 71.08 69.52 68.01 6.04 120.21 6.04 125.12 56.23 125.12 73.35 111.21 73.35 71.08" />
							<polygon points="0 0 152.68 125.12 209.36 125.12 56.4 0 0 0" />
						</g>
					</svg>
				</motion.div>

				{/* Text Container - overflow hidden masks the sliding text */}
				<div className="overflow-hidden py-4">
					<motion.h1
						animate={{ x: 0 }}
						className="font-bold text-6xl text-slate-900 tracking-tighter md:text-8xl"
						initial={{ x: "-100%" }}
						transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
					>
						ENERGEX
					</motion.h1>
				</div>
			</div>
		</div>
	);
}
