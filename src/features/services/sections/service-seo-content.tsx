"use client";

import { ArrowRight, Layers } from "lucide-react";
import { useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";

import type { ServicePageData } from "../types";

interface ServiceSeoContentProps {
	seoContent: ServicePageData["seoContent"];
}

export function ServiceSeoContent({ seoContent }: ServiceSeoContentProps) {
	const locale = useLocale();
	const isAr = locale === "ar";

	return (
		<section className="relative border-slate-200/80 border-t bg-gradient-to-b from-slate-50/60 via-white to-slate-50/40 py-16 sm:py-20 lg:py-24">
			<div className="container mx-auto max-w-6xl px-6 md:px-12">
				{/* Section Header */}
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<h2 className="font-black text-2xl text-slate-900 leading-tight tracking-tight sm:text-3xl md:text-4xl">
						{seoContent.heading}
					</h2>
				</div>

				<div className="grid gap-6 md:grid-cols-12 lg:gap-8">
					{/* Main Detailed Content Card */}
					<div className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:border-blue-200 hover:shadow-md sm:p-8 md:col-span-8">
						<div className="mb-5 flex items-center gap-3 border-slate-100 border-b pb-4">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
								<Layers className="h-5 w-5" />
							</div>
							<h3 className="font-bold text-lg text-slate-900 sm:text-xl">
								{isAr
									? "نظرة تشغيلية مفصلة"
									: "Operational & Engineering Deep-Dive"}
							</h3>
						</div>

						<div className="space-y-4 text-base text-slate-600 leading-relaxed">
							{seoContent.paragraphs.map((p) => (
								<p key={p.slice(0, 32)}>{p}</p>
							))}
						</div>
					</div>

					{/* Related Solutions Navigation Card */}
					<div className="flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:border-blue-200 hover:shadow-md sm:p-8 md:col-span-4">
						<h3 className="mb-4 font-bold text-base text-slate-900 sm:text-lg">
							{isAr
								? "استكشف حلول ومواصفات إضافية"
								: "Explore Related Solutions"}
						</h3>
						<div className="flex flex-col gap-3">
							<Link
								className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 font-semibold text-slate-800 text-xs transition-all hover:border-blue-500 hover:bg-blue-50/50 hover:text-blue-600 sm:text-sm"
								href="/products/100-kva-commercial-diesel-generator"
							>
								<span>
									{isAr
										? "مواصفات مولد ديزل 100 ك.ف.أ تجاري"
										: "100 kVA Commercial Generator"}
								</span>
								<ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
							</Link>

							<Link
								className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 font-semibold text-slate-800 text-xs transition-all hover:border-blue-500 hover:bg-blue-50/50 hover:text-blue-600 sm:text-sm"
								href="/generator-rental-dubai"
							>
								<span>
									{isAr
										? "خدمات تأجير المولدات في دبي"
										: "Generator Rental Dubai Services"}
								</span>
								<ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
							</Link>

							<Link
								className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 font-semibold text-slate-800 text-xs transition-all hover:border-blue-500 hover:bg-blue-50/50 hover:text-blue-600 sm:text-sm"
								href="/insights/construction-site-generator-rental-in-dubai"
							>
								<span>
									{isAr
										? "دليل تأجير مولدات مواقع البناء في دبي"
										: "Construction Site Generator Guide"}
								</span>
								<ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
