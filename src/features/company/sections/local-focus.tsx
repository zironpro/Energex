"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { getEmirates } from "../data/local-focus";

export function LocalFocus() {
	const t = useTranslations("company.LocalFocus");
	const EMIRATES = getEmirates(t);
	return (
		<section className="relative overflow-hidden bg-slate-50 py-12 text-slate-900 lg:py-16">
			<div className="container relative z-10 mx-auto max-w-7xl px-6">
				{/* Top Content */}
				<div className="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-16">
					<motion.h3
						className="font-black text-3xl text-blue-600 leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						{t("title")}
					</motion.h3>

					<motion.p
						className="text-lg text-slate-600 leading-relaxed md:text-xl"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						{t("descPart1")}
						<strong className="text-slate-900">{t("descBold")}</strong>
						{t("descPart2")}
					</motion.p>
				</div>

				{/* Horizontal Timeline Row */}
				<div className="relative mt-8 hidden w-full pt-32 pb-32 md:block">
					<div className="relative mx-auto flex w-full items-center justify-between px-4 lg:px-12">
						{/* The Horizontal Line */}
						<div className="absolute top-1/2 right-8 left-8 h-[2px] -translate-y-1/2 overflow-hidden rounded-full bg-slate-200 lg:right-16 lg:left-16">
							<motion.div
								className="h-full origin-left rounded-full bg-blue-600"
								initial={{ scaleX: 0 }}
								transition={{ duration: 3, ease: "easeInOut" }}
								viewport={{ once: true }}
								whileInView={{ scaleX: 1 }}
							/>
						</div>

						{/* The Nodes */}
						{EMIRATES.map((emirate, index) => {
							const isEven = index % 2 === 0;
							return (
								<motion.div
									className="relative z-10 flex flex-col items-center justify-center"
									initial={{ opacity: 0, scale: 0.8 }}
									key={emirate.name}
									transition={{ duration: 0.5, delay: index * 0.5 }}
									viewport={{ once: true }}
									whileInView={{ opacity: 1, scale: 1 }}
								>
									<Link
										className="group flex flex-col items-center justify-center"
										href={`/${emirate.slug}`}
									>
										{/* The Dot */}
										<div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-slate-50 bg-blue-600 text-white shadow-sm transition-transform duration-300 group-hover:scale-125 group-hover:bg-blue-700">
											<MapPin className="h-4 w-4" />
										</div>

										{/* The Content Card (Alternating Top/Bottom) */}
										<div
											className={`absolute w-max whitespace-nowrap rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-md transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-500 group-hover:shadow-xl ${
												isEven ? "bottom-14 mb-2" : "top-14 mt-2"
											}`}
										>
											{/* Speech Bubble Pointer Triangle */}
											<div
												className={`absolute left-1/2 -ml-2 h-4 w-4 rotate-45 border-slate-200 bg-white group-hover:border-blue-500 ${
													isEven
														? "bottom-[-9px] border-r border-b"
														: "top-[-9px] border-t border-l"
												}`}
											/>

											<h4 className="text-center font-bold text-slate-900 text-sm transition-colors group-hover:text-blue-600 md:text-base">
												{emirate.name}
											</h4>
										</div>
									</Link>
								</motion.div>
							);
						})}
					</div>
				</div>

				{/* Mobile Timeline Row */}
				<div className="relative mt-12 block w-full pb-12 md:hidden">
					<div className="flex flex-wrap justify-center gap-4">
						{EMIRATES.map((emirate, index) => (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								key={emirate.name}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								viewport={{ once: true }}
								whileInView={{ opacity: 1, y: 0 }}
							>
								<Link
									className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition duration-200 hover:border-blue-500 hover:bg-blue-50/50 hover:shadow-md"
									href={`/${emirate.slug}`}
								>
									<MapPin className="h-4 w-4 text-blue-600" />
									<span className="font-bold text-slate-900 text-sm">
										{emirate.name}
									</span>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
