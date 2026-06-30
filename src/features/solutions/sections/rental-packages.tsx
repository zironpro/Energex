"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Handshake } from "lucide-react";

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
				<div className="mx-auto mb-16 max-w-2xl text-center">
					<h2 className="mb-4 font-black text-4xl text-slate-900 uppercase tracking-tighter md:text-5xl">
						Rental Packages
					</h2>
					<p className="text-base text-slate-600 leading-relaxed md:text-lg">
						Our rental packages are designed to fit the needs of our customers —
						from short-term projects to long-term contracts.
					</p>
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
								className="group mt-auto w-full rounded-lg bg-blue-600 font-semibold text-white hover:bg-blue-700"
								variant="default"
							>
								Request a Quote
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
