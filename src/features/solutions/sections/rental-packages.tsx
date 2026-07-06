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
							className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
							initial={{ opacity: 0, y: 20 }}
							key={pkg.title}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							viewport={{ once: true, margin: "-100px" }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10">
								{pkg.icon}
							</div>
							<h3 className="mb-3 font-bold text-slate-900 text-xl">
								{pkg.title}
							</h3>
							<p className="mb-8 flex-grow text-slate-600 leading-relaxed">
								{pkg.description}
							</p>

							<Button
								className="group mt-4 w-full justify-between rounded-lg bg-slate-100 px-6 py-6 font-bold text-slate-900 transition-colors hover:bg-blue-600 hover:text-white"
								render={<Link href="/contact" />}
							>
								{t("requestQuote")}
								<Image
									alt=""
									className="ml-2 h-4 w-4 invert group-hover:invert-0"
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
