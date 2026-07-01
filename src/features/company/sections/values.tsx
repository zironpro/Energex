"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Users, Zap } from "lucide-react";

const VALUES = [
	{
		title: "Reliability",
		description:
			"We understand that power is the lifeblood of your operations. We deliver systems you can count on, every single time.",
		icon: ShieldCheck,
	},
	{
		title: "Efficiency",
		description:
			"From rapid deployment to fuel optimization, we design our solutions to maximize output while minimizing waste.",
		icon: Zap,
	},
	{
		title: "Partnership",
		description:
			"We don't just supply equipment; we work closely with you to understand your needs and engineer the perfect solution.",
		icon: Users,
	},
	{
		title: "Innovation",
		description:
			"The energy landscape is changing. We continuously adopt new technologies and practices to offer smarter, cleaner power.",
		icon: Lightbulb,
	},
];

export function Values() {
	return (
		<section className="relative overflow-hidden bg-slate-50 py-12 lg:py-16">
			<div className="container mx-auto max-w-7xl px-6">
				<div className="mb-16 text-center">
					<motion.h2
						className="font-bold text-blue-600 text-sm uppercase tracking-widest"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						Core Values
					</motion.h2>
					<motion.h3
						className="mt-4 font-black text-3xl text-slate-900 sm:text-4xl md:text-5xl"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						What Drives Us Forward
					</motion.h3>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{VALUES.map((value, index) => {
						const Icon = value.icon;
						return (
							<motion.div
								className="group rounded-lg bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
								initial={{ opacity: 0, y: 20 }}
								key={value.title}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileInView={{ opacity: 1, y: 0 }}
							>
								<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-slate-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
									<Icon className="h-7 w-7" />
								</div>
								<h4 className="mb-4 font-bold text-slate-900 text-xl">
									{value.title}
								</h4>
								<p className="text-slate-600 leading-relaxed">
									{value.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
