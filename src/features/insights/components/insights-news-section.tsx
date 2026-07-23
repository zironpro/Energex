"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { ARTICLES } from "../data/articles";

interface InsightsNewsSectionProps {
	theme?: "dark" | "light";
	limit?: number;
	showViewAll?: boolean;
}

export function InsightsNewsSection({
	theme = "light",
	limit = 3,
	showViewAll = true,
}: InsightsNewsSectionProps) {
	const t = useTranslations("insights");

	const isDark = theme === "dark";
	const displayedArticles = ARTICLES.slice(0, limit);

	return (
		<section
			className={`relative overflow-hidden py-20 lg:py-28 ${
				isDark ? "bg-[#050505] text-white" : "bg-slate-50 text-slate-900"
			}`}
		>
			<div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
				{/* Section Header */}
				<div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
					<div className="max-w-2xl text-center md:text-left">
						<h2
							className={`font-black text-3xl uppercase tracking-tighter sm:text-4xl md:text-5xl ${
								isDark ? "text-blue-500" : "text-blue-600"
							}`}
						>
							{t("title")}
						</h2>
						<p
							className={`mt-4 text-base leading-relaxed md:text-lg ${
								isDark ? "text-slate-400" : "text-slate-600"
							}`}
						>
							{t("description")}
						</p>
					</div>

					{showViewAll && (
						<div className="flex-shrink-0">
							<Link
								className={`group inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-sm transition-all duration-300 ${
									isDark
										? "border border-slate-800 bg-slate-900/80 text-white hover:border-blue-500 hover:bg-blue-600"
										: "bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg"
								}`}
								href="/insights"
							>
								<span>{t("viewAll")}</span>
								<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
							</Link>
						</div>
					)}
				</div>

				{/* Articles Grid */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{displayedArticles.map((article) => {
						const title = t(`articles.${article.key}.title`);
						const excerpt = t(`articles.${article.key}.excerpt`);
						const category = t(`articles.${article.key}.category`);
						const readTime = t(`articles.${article.key}.readTime`);

						return (
							<motion.article
								className={`group flex flex-col overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1.5 ${
									isDark
										? "border border-slate-800/80 bg-slate-900/40 backdrop-blur-md hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
										: "border border-slate-200/80 bg-white shadow-sm hover:border-blue-300 hover:shadow-xl"
								}`}
								initial={{ opacity: 0, y: 20 }}
								key={article.id}
								transition={{ duration: 0.5 }}
								viewport={{ once: true }}
								whileInView={{ opacity: 1, y: 0 }}
							>
								{/* Article Image Container */}
								<div className="relative aspect-video w-full overflow-hidden bg-slate-800 sm:aspect-auto sm:h-56">
									<Image
										alt={title}
										className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
										fill
										src={article.image}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

									{/* Category Tag */}
									<div className="absolute top-4 left-4">
										<span className="rounded-lg bg-blue-600/90 px-3 py-1 font-semibold text-white text-xs shadow-sm backdrop-blur-md">
											{category}
										</span>
									</div>
								</div>

								{/* Article Body */}
								<div className="flex flex-1 flex-col justify-between p-6">
									<div>
										{/* Meta Info */}
										<div
											className={`mb-3 flex items-center gap-4 font-medium text-xs ${
												isDark ? "text-slate-400" : "text-slate-500"
											}`}
										>
											<span className="flex items-center gap-1.5">
												<Calendar className="h-3.5 w-3.5 text-blue-400" />
												{article.date}
											</span>
											<span className="flex items-center gap-1.5">
												<Clock className="h-3.5 w-3.5 text-blue-400" />
												{readTime}
											</span>
										</div>

										{/* Title */}
										<h3
											className={`mb-3 font-bold text-xl leading-snug transition-colors group-hover:text-blue-500 ${
												isDark ? "text-white" : "text-slate-900"
											}`}
										>
											{title}
										</h3>

										{/* Excerpt */}
										<p
											className={`line-clamp-3 text-sm leading-relaxed ${
												isDark ? "text-slate-400" : "text-slate-600"
											}`}
										>
											{excerpt}
										</p>
									</div>

									{/* Action Link to Detail Page */}
									<div className="mt-6 border-slate-800/40 border-t pt-4">
										<Link
											className={`group/btn flex items-center gap-2 font-semibold text-sm transition-colors ${
												isDark
													? "text-blue-400 hover:text-blue-300"
													: "text-blue-600 hover:text-blue-700"
											}`}
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
	);
}
