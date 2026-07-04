"use client";

import { motion } from "framer-motion";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { services } from "../data/services-grid";

export function ServicesGrid() {
	return (
		<section className="relative bg-slate-50 px-6 pt-0 pb-8 lg:px-16">
			<div className="container mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service, i) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							key={service.title}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							viewport={{ once: true, margin: "-100px" }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<Card className="group h-full border-slate-200 bg-white transition-all hover:border-blue-600 hover:shadow-lg">
								<CardHeader>
									<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 transition-colors group-hover:bg-blue-600/20">
										{service.icon}
									</div>
									<CardTitle className="text-slate-900 text-xl">
										{service.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-base text-slate-600 leading-relaxed">
										{service.description}
									</CardDescription>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
