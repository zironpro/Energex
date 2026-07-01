"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutUs() {
	return (
		<section className="relative overflow-hidden bg-white py-12 lg:py-16">
			<div className="container mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
					<div className="space-y-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<h2 className="mt-4 font-black text-4xl text-slate-900 leading-tight lg:text-5xl">
								Reliability Built on Local Expertise
							</h2>
						</motion.div>

						<motion.div
							className="space-y-6 text-lg text-slate-600 leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<p>
								As a newly established leader in the UAE, Energex Equipment
								Rental partners with operators to deliver high-standard
								generator rental systems for your specific site and project.
							</p>
							<p>
								Our approach combines deep local expertise with a customer-first
								approach. By integrating compliant, well-maintained equipment,
								offering flexible packages and providing proactive technical
								care, we secure uninterrupted operations for every client, from
								delivery to installation.
							</p>
						</motion.div>

						<motion.div
							className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3"
							initial={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<div>
								<h4 className="font-bold text-2xl text-slate-900 md:text-3xl">
									20kVA - 1500kVA
								</h4>
								<p className="mt-2 font-medium text-slate-500">Power Range.</p>
							</div>
							<div>
								<h4 className="font-bold text-2xl text-slate-900 md:text-3xl">
									24/7
								</h4>
								<p className="mt-2 font-medium text-slate-500">
									Technical Support.
								</p>
							</div>
							<div>
								<h4 className="font-bold text-2xl text-slate-900 md:text-3xl">
									50°C
								</h4>
								<p className="mt-2 font-medium text-slate-500">
									Ambient design.
								</p>
							</div>
						</motion.div>
					</div>

					<motion.div
						className="relative aspect-square overflow-hidden rounded-lg lg:aspect-auto lg:h-[600px]"
						initial={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, scale: 1 }}
					>
						<div className="absolute inset-0 bg-slate-900">
							<Image
								alt="Energex About Us"
								className="h-full w-full object-cover"
								height={800}
								src="/images/about.webp"
								width={800}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
							<div className="absolute bottom-0 left-0 p-8">
								<div className="font-bold text-4xl text-white">UAE Based</div>
								<div className="mt-2 text-slate-300">
									Reliable Power Systems
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
