"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export function Intro() {
	const [showIntro, setShowIntro] = useState(true);
	const [shouldRender, setShouldRender] = useState(true);

	useEffect(() => {
		const introPlayed = sessionStorage.getItem("introPlayed");
		if (introPlayed || window.innerWidth < 768) {
			setShouldRender(false);
			return;
		}

		// Intro animation timeout increased to allow full animation sequence
		const timer = setTimeout(() => {
			setShowIntro(false);
			setTimeout(() => setShouldRender(false), 500); // Wait for transition
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	if (!shouldRender) return null;

	return (
		<div
			className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
				showIntro ? "translate-y-0" : "pointer-events-none -translate-y-full"
			}`}
		>
			<div className="flex items-center gap-6">
				{/* SVG Logo - scales and pops in first */}
				<motion.div
					animate={{ scale: 1, opacity: 1 }}
					className="relative z-10 bg-white"
					initial={{ scale: 0, opacity: 0 }}
					transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
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
					<motion.div
						animate={{ x: 0 }}
						className="font-bold text-6xl text-slate-900 tracking-tighter md:text-8xl"
						initial={{ x: "-100%" }}
						transition={{ duration: 0.5, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
					>
						ENERGEX
					</motion.div>
				</div>
			</div>
		</div>
	);
}
