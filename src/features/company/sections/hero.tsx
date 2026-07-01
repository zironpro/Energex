"use client";

import { motion } from "framer-motion";

export function Hero() {
	return (
		<section className="relative flex flex-col justify-center overflow-hidden px-6 pt-40 pb-8 lg:px-16">
			{/* Background Icon */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
				<svg
					className="h-[40rem] w-auto fill-slate-900 md:h-[60rem]"
					viewBox="0 0 210 126"
				>
					<g>
						<polygon points="135.83 54.08 139.67 57.16 203.21 4.92 203.21 0 152.97 0 135.83 13.92 135.83 54.08" />
						<polygon points="73.35 71.08 69.52 68.01 6.04 120.21 6.04 125.12 56.23 125.12 73.35 111.21 73.35 71.08" />
						<polygon points="0 0 152.68 125.12 209.36 125.12 56.4 0 0 0" />
					</g>
				</svg>
			</div>

			<div className="container relative z-10 mx-auto max-w-7xl text-center">
				<div className="flex flex-col items-center space-y-6">
					<motion.h1
						animate={{ opacity: 1, y: 0 }}
						className="max-w-4xl font-black text-4xl text-blue-600 uppercase leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl lg:text-[5rem]"
						initial={{ opacity: 0, y: 40 }}
						transition={{
							duration: 1,
							delay: 0.2,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
					>
						RELIABLE POWER. <br className="hidden md:block" />
						<span className="text-blue-600">
							PROVEN PERFORMANCE.
						</span>
					</motion.h1>

					<motion.p
						animate={{ opacity: 1 }}
						className="max-w-3xl text-lg text-slate-600 leading-relaxed md:text-xl"
						initial={{ opacity: 0 }}
						transition={{ duration: 1, delay: 0.6 }}
					>
						We are redefining the standards of power generation and supply.
						Pioneering reliable, scalable, and innovative energy solutions for a rapidly evolving world.
					</motion.p>
				</div>
			</div>
		</section>
	);
}
