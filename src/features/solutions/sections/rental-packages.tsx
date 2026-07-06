"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

import { Link } from "@/i18n/navigation";

import { getPackages } from "../data/rental-packages";

export function RentalPackages() {
	const t = useTranslations("solutions.RentalPackages");
	const packages = getPackages(t);
	return (
		<section className="bg-white px-6 py-24 lg:px-16">
			<div className="container mx-auto max-w-7xl">
				<div className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-16">
					<motion.h2
						className="font-black text-3xl text-blue-600 uppercase tracking-tighter sm:text-4xl md:text-5xl"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						{t("title")}
					</motion.h2>
					<motion.p
						className="text-base text-slate-600 leading-relaxed md:text-lg"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						{t("description")}
					</motion.p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{packages.map((pkg, i) => (
						<motion.div
							className="group relative flex flex-col overflow-hidden rounded-2xl bg-blue-600 shadow-lg"
							initial={{ opacity: 0, y: 20 }}
							key={pkg.title}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							viewport={{ once: true, margin: "-100px" }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<div className="relative h-56 w-full overflow-hidden">
								{pkg.image && (
									<Image
										alt={pkg.title}
										className="object-cover transition-transform duration-500 group-hover:scale-105"
										fill
										src={pkg.image}
									/>
								)}
								<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/50 to-blue-600" />
							</div>

							<div className="flex flex-grow flex-col px-8 pt-2 pb-8">
								<div className="mb-4 flex items-center justify-between">
									<h3 className="font-bold text-2xl text-white">{pkg.title}</h3>
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm">
										<div className="[&>svg]:text-white">{pkg.icon}</div>
									</div>
								</div>

								<p className="mb-8 flex-grow text-blue-100/80 leading-relaxed">
									{pkg.description}
								</p>

								<Button
									className="group mt-auto w-full justify-center rounded-lg bg-white px-6 py-6 font-bold text-blue-900 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-slate-50"
									render={<Link href="/contact" />}
								>
									{t("requestQuote")}
								</Button>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
