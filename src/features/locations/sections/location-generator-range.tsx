"use client";

import { Zap } from "lucide-react";
import { useTranslations } from "next-intl";

import type { LocationPageData } from "../types";

interface LocationGeneratorRangeProps {
	emirate: string;
	generatorRange: LocationPageData["generatorRange"];
}

export function LocationGeneratorRange({
	emirate,
	generatorRange,
}: LocationGeneratorRangeProps) {
	const t = useTranslations("locations.common.generatorRange");

	return (
		<section className="relative bg-white py-20">
			<div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
				<div className="grid items-center gap-12 lg:grid-cols-12">
					{/* Left Column Text */}
					<div className="lg:col-span-5">
						<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-semibold text-blue-600 text-xs uppercase tracking-widest">
							{t("badge")}
						</div>
						<h2 className="mb-6 font-black text-3xl text-blue-600 leading-tight tracking-tighter sm:text-4xl md:text-5xl">
							{generatorRange.title}
						</h2>
						<p className="text-base text-slate-600 leading-relaxed md:text-lg">
							{generatorRange.description}
						</p>
					</div>

					{/* Right Column Capacities Grid */}
					<div className="lg:col-span-7">
						<div className="rounded-lg border border-slate-200/80 bg-slate-50 p-6 shadow-sm md:p-8">
							<h3 className="mb-6 flex items-center gap-2 font-bold text-slate-900 text-xl">
								<Zap className="h-5 w-5 text-blue-600" />
								<span>{t("availableCapacities", { emirate })}</span>
							</h3>
							<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
								{generatorRange.capacities.map((cap) => (
									<div
										className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-blue-500 hover:shadow-md"
										key={cap}
									>
										<span className="font-black text-blue-600 text-lg sm:text-xl">
											{cap}
										</span>
										<span className="mt-1 font-medium text-[11px] text-slate-500 uppercase">
											{t("type")}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
