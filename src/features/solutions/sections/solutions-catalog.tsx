"use client";

import Image from "next/image";

import { ArrowRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import { SOLUTIONS_CATALOG } from "../data/solutions-catalog";

export function SolutionsCatalog() {
	const t = useTranslations("solutions.Catalog");

	return (
		<section className="bg-white py-16 sm:py-24">
			<div className="container mx-auto max-w-7xl divide-y divide-slate-200 px-4 sm:px-6">
				{SOLUTIONS_CATALOG.map((item, index) => (
					<div
						className="grid items-center gap-8 py-12 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-8 md:py-20 md:last:pb-0 md:first:pt-0"
						key={item.slug}
					>
						{/* Image: no frame, just a soft rounded shape */}
						<div
							className={`relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 md:col-span-7 ${
								index % 2 === 1 ? "md:order-2" : ""
							}`}
						>
							<Image
								alt={t(`items.${item.key}.title`)}
								className="object-cover"
								fill
								priority={index === 0}
								sizes="(max-width: 768px) 100vw, 58vw"
								src={item.image}
							/>
						</div>

						{/* Text sits directly on the page */}
						<div className="md:col-span-5">
							<h2 className="font-black text-3xl text-blue-600 leading-tight tracking-tight sm:text-4xl">
								{t(`items.${item.key}.title`)}
							</h2>
							<p className="mt-4 text-lg text-slate-600 leading-relaxed">
								{t(`items.${item.key}.description`)}
							</p>

							<ul className="mt-6 space-y-3">
								{[0, 1, 2, 3].map((i) => (
									<li className="flex items-start gap-3 text-slate-800" key={i}>
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
				))}
			</div>
		</section>
	);
}
