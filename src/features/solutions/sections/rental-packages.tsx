"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { Calendar, Clock, Handshake } from "lucide-react";

import { Button } from "@/components/ui/button";

const packages = [
	{
		title: "Short-Term Projects",
		description: "Agile solutions for events or emergencies.",
		icon: <Clock className="h-6 w-6 text-blue-500" />,
	},
	{
		title: "Long-Term Contracts",
		description: "Cost-effective, scalable power for multi-year projects.",
		icon: <Calendar className="h-6 w-6 text-blue-500" />,
	},
	{
		title: "Custom Partnerships",
		description: "Bespoke sub-rental agreements for equipment providers.",
		icon: <Handshake className="h-6 w-6 text-blue-500" />,
	},
];

export function RentalPackages() {
	return (
		<section className="bg-white px-6 py-24 lg:px-16">
			<div className="container mx-auto max-w-7xl">
				<div className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-16">
					<motion.h2
						className="font-black text-4xl text-slate-900 uppercase tracking-tighter md:text-5xl"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						Rental Packages
					</motion.h2>
					<motion.p
						className="text-base text-slate-600 leading-relaxed md:text-lg"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						Our rental packages are designed to fit the needs of our customers —
						from short-term projects to long-term contracts.
					</motion.p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{packages.map((pkg, i) => (
						<motion.div
							className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
							initial={{ opacity: 0, y: 20 }}
							key={pkg.title}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							viewport={{ once: true, margin: "-100px" }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
								{pkg.icon}
							</div>
							<h3 className="mb-3 font-bold text-slate-900 text-xl">
								{pkg.title}
							</h3>
							<p className="mb-8 flex-grow text-slate-600 leading-relaxed">
								{pkg.description}
							</p>

							<Button
								className="mt-auto inline-flex h-12 w-full items-center justify-center rounded-lg bg-black px-8 font-semibold text-sm text-white transition-transform hover:scale-105 hover:bg-black/90"
								nativeButton={false}
								render={<Link href="/contact" />}
							>
								Request a Quote
								<Image
									alt=""
									className="ml-2 h-4 w-4 invert"
									height={16}
									src="/icons/caret-right.svg"
									width={16}
								/>
							</Button>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
