"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";

import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { SOLUTIONS_CATALOG } from "../data/solutions-catalog";

const AUTOPLAY_MS = 6000;

export function SolutionsCatalog() {
	const t = useTranslations("solutions.Catalog");
	const trackRef = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState(0);
	const [paused, setPaused] = useState(false);

	const total = SOLUTIONS_CATALOG.length;
	const hasMany = total > 1;

	// Keep the active index in sync with manual swipe / scroll
	useEffect(() => {
		const track = trackRef.current;
		if (!track) {
			return;
		}

		const onScroll = () => {
			const index = Math.round(Math.abs(track.scrollLeft) / track.clientWidth);
			setActive(Math.min(Math.max(index, 0), total - 1));
		};

		track.addEventListener("scroll", onScroll, { passive: true });
		return () => track.removeEventListener("scroll", onScroll);
	}, [total]);

	// Scrolls only the carousel track (never the page), LTR and RTL safe
	const goTo = useCallback(
		(index: number) => {
			const track = trackRef.current;
			if (!track) {
				return;
			}

			const next = Math.min(Math.max(index, 0), total - 1);
			const isRtl = getComputedStyle(track).direction === "rtl";
			const reduceMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)"
			).matches;

			track.scrollTo({
				behavior: reduceMotion ? "auto" : "smooth",
				left: next * track.clientWidth * (isRtl ? -1 : 1),
			});
		},
		[total]
	);

	// Autoplay: loops, pauses while touching / focused, skips hidden tabs
	useEffect(() => {
		if (!hasMany || paused) {
			return;
		}

		const id = window.setInterval(() => {
			if (document.hidden) {
				return;
			}
			goTo((active + 1) % total);
		}, AUTOPLAY_MS);

		return () => window.clearInterval(id);
	}, [active, goTo, hasMany, paused, total]);

	return (
		<section
			aria-roledescription="carousel"
			className="bg-white py-16 sm:py-24"
		>
			<div
				className="container mx-auto max-w-7xl px-4 sm:px-6"
				onBlur={() => setPaused(false)}
				onFocus={() => setPaused(true)}
				onTouchEnd={() => setPaused(false)}
				onTouchStart={() => setPaused(true)}
			>
				{/* Slides */}
				<div
					className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
					ref={trackRef}
				>
					{SOLUTIONS_CATALOG.map((item, index) => (
						<div
							aria-label={`${index + 1} / ${total}`}
							aria-roledescription="slide"
							className="w-full shrink-0 snap-start"
							key={item.slug}
						>
							<div className="grid items-center gap-8 md:grid-cols-12 md:gap-8">
								{/* Image */}
								<div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 md:col-span-7">
									<Image
										alt={t(`items.${item.key}.title`)}
										className="object-cover"
										fill
										priority={index === 0}
										sizes="(max-width: 768px) 100vw, 58vw"
										src={item.image}
									/>
								</div>

								{/* Text */}
								<div className="md:col-span-5">
									<h2 className="font-black text-3xl text-blue-600 leading-tight tracking-tight sm:text-4xl">
										{t(`items.${item.key}.title`)}
									</h2>
									<p className="mt-4 text-lg text-slate-600 leading-relaxed">
										{t(`items.${item.key}.description`)}
									</p>

									<ul className="mt-6 space-y-3">
										{[0, 1, 2, 3].map((i) => (
											<li
												className="flex items-start gap-3 text-slate-800"
												key={i}
											>
												<Check className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
												<span>{t(`items.${item.key}.points.${i}`)}</span>
											</li>
										))}
									</ul>

									<Link
										className="group mt-8 inline-flex items-center gap-2 border-blue-600 border-b-2 pb-1 font-semibold text-blue-600 transition-colors hover:border-blue-800 hover:text-blue-800"
										href={`/solutions/${item.slug}`}
									>
										<span>{t("explore")}</span>
										<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Controls: only shown once there is more than one solution */}
				{hasMany && (
					<div className="mt-10 flex items-center justify-between border-slate-200 border-t pt-6">
						<div className="flex items-center gap-2">
							{SOLUTIONS_CATALOG.map((item, index) => (
								<button
									aria-current={index === active}
									aria-label={t(`items.${item.key}.title`)}
									className={`h-2 rounded-full transition-all duration-300 ${
										index === active
											? "w-8 bg-blue-600"
											: "w-2 bg-slate-300 hover:bg-slate-400"
									}`}
									key={item.slug}
									onClick={() => goTo(index)}
									type="button"
								/>
							))}
						</div>

						<div className="flex items-center gap-2">
							<button
								aria-label={t("previous")}
								className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:opacity-40"
								disabled={active === 0}
								onClick={() => goTo(active - 1)}
								type="button"
							>
								<ChevronLeft className="h-5 w-5 rtl:rotate-180" />
							</button>
							<button
								aria-label={t("next")}
								className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-40"
								disabled={active === total - 1}
								onClick={() => goTo(active + 1)}
								type="button"
							>
								<ChevronRight className="h-5 w-5 rtl:rotate-180" />
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
