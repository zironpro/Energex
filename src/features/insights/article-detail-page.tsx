"use client";

import Image from "next/image";
import { notFound } from "next/navigation";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

import { CTA } from "@/features/home/components/cta";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Link } from "@/i18n/navigation";

import { ARTICLES } from "./data/articles";

interface ArticleDetailPageProps {
	id: string;
}

export function ArticleDetailPage({ id }: ArticleDetailPageProps) {
	const t = useTranslations("insights");
	useSmoothScroll();

	const article = ARTICLES.find((a) => a.id === id);

	if (!article) {
		notFound();
	}

	const title = t(`articles.${article.key}.title`);
	const category = t(`articles.${article.key}.category`);
	const readTime = t(`articles.${article.key}.readTime`);
	const content = t(`articles.${article.key}.content`);

	// Other related articles
	const relatedArticles = ARTICLES.filter((a) => a.id !== article.id);

	const renderFormattedContent = (rawText: string) => {
		// Normalize literal '\n' sequences to real newlines
		const normalizedText = rawText.replace(/\\n/g, "\n");
		const blocks = normalizedText.split(/\n\n+/);

		return blocks.map((block) => {
			const trimmed = block.trim();
			if (!trimmed) return null;

			const blockKey = `block-${trimmed.slice(0, 24)}`;
			const lines = trimmed.split("\n");

			// 1. Heading detection (single short line without ending period, or ends with ? or ؟)
			if (lines.length === 1 && trimmed.length < 130) {
				const isQuestion = trimmed.endsWith("?") || trimmed.endsWith("؟");
				const isHeadingCandidate =
					!trimmed.endsWith(".") &&
					!trimmed.endsWith("۔") &&
					!trimmed.startsWith("•") &&
					!/^\d+\./.test(trimmed);

				if (isQuestion || isHeadingCandidate) {
					return (
						<h2
							className="mt-10 mb-4 font-bold text-2xl text-slate-900 tracking-tight md:text-3xl"
							key={blockKey}
						>
							{trimmed}
						</h2>
					);
				}
			}

			// 2. Multi-line block starting with a Subheading (short first line without period/bullet)
			const firstLine = lines[0].trim();
			const isFirstLineHeading =
				lines.length > 1 &&
				firstLine.length < 90 &&
				!firstLine.endsWith(".") &&
				!firstLine.endsWith("۔") &&
				!firstLine.startsWith("•") &&
				!/^\d+\./.test(firstLine);

			if (isFirstLineHeading) {
				const headingText = firstLine;
				const restLines = lines.slice(1);
				const isRestList = restLines.every(
					(line) => line.trim().startsWith("•") || /^\d+\./.test(line.trim())
				);

				return (
					<div className="my-6" key={blockKey}>
						<h3 className="mt-6 mb-3 font-bold text-slate-900 text-xl md:text-2xl">
							{headingText}
						</h3>
						{isRestList ? (
							<ul className="my-4 flex flex-col space-y-3 pl-2">
								{restLines.map((line) => {
									const lineText = line.trim().replace(/^[•\d\.]+\s*/, "");
									return (
										<li
											className="flex items-start gap-3 text-base text-slate-700 md:text-lg"
											key={`line-${lineText.slice(0, 20)}`}
										>
											<span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
											<span>{lineText}</span>
										</li>
									);
								})}
							</ul>
						) : (
							<p className="mb-5 text-base text-slate-700 leading-relaxed md:text-lg">
								{restLines.join("\n").trim()}
							</p>
						)}
					</div>
				);
			}

			// 3. Bullet list detection
			if (
				lines.every(
					(line) => line.trim().startsWith("•") || /^\d+\./.test(line.trim())
				)
			) {
				return (
					<ul className="my-4 flex flex-col space-y-3 pl-2" key={blockKey}>
						{lines.map((line) => {
							const lineText = line.trim().replace(/^[•\d\.]+\s*/, "");
							return (
								<li
									className="flex items-start gap-3 text-base text-slate-700 md:text-lg"
									key={`line-${lineText.slice(0, 20)}`}
								>
									<span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
									<span>{lineText}</span>
								</li>
							);
						})}
					</ul>
				);
			}

			// 4. Regular paragraph
			return (
				<p
					className="mb-5 text-base text-slate-700 leading-relaxed md:text-lg"
					key={blockKey}
				>
					{trimmed}
				</p>
			);
		});
	};

	return (
		<main className="relative min-h-screen bg-slate-50 text-slate-900">
			{/* Header / Hero Section */}
			<section className="relative overflow-hidden bg-slate-50 px-6 pt-36 pb-12 lg:px-16">
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

				<div className="container relative z-10 mx-auto max-w-4xl text-center">
					{/* Meta Tag & Date */}
					<div className="mb-4 flex flex-wrap items-center justify-center gap-3">
						<span className="rounded-lg bg-blue-600 px-3 py-1 font-semibold text-white text-xs">
							{category}
						</span>
						<span className="flex items-center gap-1.5 font-medium text-slate-500 text-xs">
							<Calendar className="h-3.5 w-3.5 text-blue-600" />
							{article.date}
						</span>
						<span className="flex items-center gap-1.5 font-medium text-slate-500 text-xs">
							<Clock className="h-3.5 w-3.5 text-blue-600" />
							{readTime}
						</span>
					</div>

					{/* Title */}
					<h1 className="mb-8 text-center font-black text-3xl text-blue-600 uppercase leading-snug tracking-tighter sm:text-4xl md:text-5xl">
						{title}
					</h1>

					{/* Featured Image */}
					<div className="relative -mx-6 aspect-video w-[calc(100%+3rem)] overflow-hidden bg-slate-900 shadow-md sm:mx-0 sm:w-full sm:rounded-xl md:aspect-auto md:h-[450px]">
						<Image
							alt={title}
							className="object-cover"
							fill
							priority
							src={article.image}
						/>
					</div>
				</div>
			</section>

			{/* Article Content Body */}
			<section className="py-12 pb-20">
				<div className="container mx-auto max-w-4xl px-6">
					<div className="rounded-lg border border-slate-200/80 bg-white p-8 shadow-sm md:p-12">
						<div className="max-w-none">{renderFormattedContent(content)}</div>
					</div>
				</div>
			</section>

			{/* Related / More Articles */}
			{relatedArticles.length > 0 && (
				<section className="border-slate-200/80 border-t bg-slate-100/60 py-16">
					<div className="container mx-auto max-w-7xl px-6 md:px-12">
						<h3 className="mb-8 font-black text-2xl text-slate-900 uppercase tracking-tighter md:text-3xl">
							Related Insights & News
						</h3>
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
							{relatedArticles.slice(0, 2).map((relArticle) => {
								const relTitle = t(`articles.${relArticle.key}.title`);
								const relExcerpt = t(`articles.${relArticle.key}.excerpt`);
								const relCategory = t(`articles.${relArticle.key}.category`);

								return (
									<Link
										className="group flex flex-col overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl"
										href={`/insights/${relArticle.id}`}
										key={relArticle.id}
									>
										<div className="relative h-48 w-full overflow-hidden bg-slate-200">
											<Image
												alt={relTitle}
												className="object-cover transition-transform duration-700 group-hover:scale-105"
												fill
												src={relArticle.image}
											/>
											<div className="absolute top-4 left-4">
												<span className="rounded-lg bg-blue-600 px-3 py-1 font-semibold text-white text-xs">
													{relCategory}
												</span>
											</div>
										</div>
										<div className="flex flex-1 flex-col justify-between p-6">
											<div>
												<h4 className="mb-2 font-bold text-lg text-slate-900 leading-snug transition-colors group-hover:text-blue-600">
													{relTitle}
												</h4>
												<p className="line-clamp-2 text-slate-600 text-sm">
													{relExcerpt}
												</p>
											</div>
											<div className="mt-4 flex items-center gap-2 font-semibold text-blue-600 text-sm">
												<span>Read Article</span>
												<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
											</div>
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				</section>
			)}

			<CTA />
		</main>
	);
}
