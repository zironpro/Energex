"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import type { ServicePageData } from "../types";

interface ServiceSpecsProps {
	technicalSpecs: ServicePageData["technicalSpecs"];
	includedServices: string[];
}

export function ServiceSpecs({
	technicalSpecs,
	includedServices,
}: ServiceSpecsProps) {
	const t = useTranslations("services.common");

	return (
		<section className="bg-slate-50/60 py-20 lg:py-24">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="grid gap-12 lg:grid-cols-12">
					{/* Left: Technical Specs Table */}
					<div className="lg:col-span-7">
						<div className="mb-6">
							<h2 className="mb-2 font-black text-3xl text-blue-600 leading-tight tracking-tighter sm:text-4xl">
								{t("specificationsTitle")}
							</h2>
							<p className="text-slate-600 text-sm md:text-base">
								{t("specificationsSubtitle")}
							</p>
						</div>

						<div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xs">
							<dl className="divide-y divide-slate-100">
								{technicalSpecs.map((spec) => (
									<div
										className="flex flex-col justify-between gap-1 px-6 py-3.5 sm:flex-row sm:items-center sm:gap-4"
										key={spec.label}
									>
										<dt className="font-semibold text-slate-500 text-sm">
											{spec.label}
										</dt>
										<dd className="font-bold text-slate-900 text-sm sm:text-end sm:text-base">
											{spec.value}
										</dd>
									</div>
								))}
							</dl>
						</div>
					</div>

					{/* Right: Turnkey Included Services */}
					<div className="space-y-6 lg:col-span-5">
						<div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
							<h3 className="mb-2 font-black text-2xl text-slate-900 tracking-tight">
								{t("includedTitle")}
							</h3>
							<p className="mb-6 text-slate-600 text-sm">
								{t("includedSubtitle")}
							</p>

							<ul className="space-y-3.5">
								{includedServices.map((service) => (
									<li
										className="flex items-start gap-3 text-slate-700 text-sm md:text-base"
										key={service}
									>
										<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
										<span>{service}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Quick Highlight Box */}
						<div className="rounded-xl border border-blue-200 bg-blue-50/70 p-6">
							<div className="font-bold text-base text-blue-950">
								{t("complianceTitle")}
							</div>
							<p className="mt-1 text-slate-600 text-xs leading-relaxed md:text-sm">
								{t("complianceDesc")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
