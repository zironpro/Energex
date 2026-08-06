"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

import { CTA } from "@/features/home/components/cta";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Link } from "@/i18n/navigation";

import { ARTICLES } from "./data/articles";

export function InsightsPage() {
	const t = useTranslations("insights");
	useSmoothScroll();

	return (
		<main className="relative min-h-screen bg-slate-50 text-slate-900">
			{/* Page Hero */}
			<section className="relative overflow-hidden bg-slate-50 px-6 pt-40 pb-12 lg:px-16">
				{/* Background Watermark Icon */}
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

				<div className="container relative z-10 mx-auto max-w-7xl text-center md:px-12">
					<h1 className="mb-6 font-black text-4xl text-blue-600 uppercase leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl lg:text-[5rem]">
						{t("title")}
					</h1>
					<p className="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed md:text-xl">
						{t("description")}
					</p>
				</div>
			</section>

			{/* Main Articles Grid */}
			<section className="py-12 pb-24">
				<div className="container mx-auto max-w-7xl px-6 md:px-12">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{ARTICLES.map((article) => {
							const title = t(`articles.${article.key}.title`);
							const excerpt = t(`articles.${article.key}.excerpt`);
							const category = t(`articles.${article.key}.category`);
							const readTime = t(`articles.${article.key}.readTime`);

							return (
								<motion.article
									animate={{ opacity: 1, scale: 1 }}
									className="group flex flex-col overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl"
									exit={{ opacity: 0, scale: 0.95 }}
									initial={{ opacity: 0, scale: 0.95 }}
									key={article.id}
									layout
									transition={{ duration: 0.3 }}
								>
									{/* Article Image Container */}
									<div className="relative aspect-video w-full overflow-hidden bg-slate-100 sm:aspect-auto sm:h-60">
										<Image
											alt={title}
											className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
											fill
											src={article.image}
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

										<div className="absolute top-4 left-4">
											<span className="rounded-lg bg-blue-600/90 px-3 py-1 font-semibold text-white text-xs shadow-sm backdrop-blur-md">
												{category}
											</span>
										</div>
									</div>

									{/* Article Body */}
									<div className="flex flex-1 flex-col justify-between p-6">
										<div>
											<div className="mb-3 flex items-center gap-4 font-medium text-slate-500 text-xs">
												<span className="flex items-center gap-1.5">
													<Calendar className="h-3.5 w-3.5 text-blue-600" />
													{article.date}
												</span>
												<span className="flex items-center gap-1.5">
													<Clock className="h-3.5 w-3.5 text-blue-600" />
													{readTime}
												</span>
											</div>

											<h3 className="mb-3 font-bold text-slate-900 text-xl leading-snug transition-colors group-hover:text-blue-600">
												{title}
											</h3>

											<p className="line-clamp-3 text-slate-600 text-sm leading-relaxed">
												{excerpt}
											</p>
										</div>

										<div className="mt-6 border-slate-100 border-t pt-4">
											<Link
												className="group/btn flex items-center gap-2 font-semibold text-blue-600 text-sm transition-colors hover:text-blue-700"
												href={`/insights/${article.id}`}
											>
												<span>{t("readArticle")}</span>
												<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
											</Link>
										</div>
									</div>
								</motion.article>
							);
						})}
					</div>
				</div>
			</section>

			<CTA />
		</main>
	);
}
