"use client";

import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import type { LocationPageData } from "../types";

interface LocationCoverageProps {
	areasCovered: LocationPageData["areasCovered"];
}

export function LocationCoverage({ areasCovered }: LocationCoverageProps) {
	const t = useTranslations("locations.common.coverage");

	return (
		<section className="border-slate-100 border-t bg-white py-20">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="grid items-center gap-12 lg:grid-cols-12">
					<div className="lg:col-span-5">
						<div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-semibold text-blue-600 text-xs uppercase tracking-widest">
							<MapPin className="h-3.5 w-3.5" />
							<span>{t("badge")}</span>
						</div>
						<h2 className="mb-4 font-black text-3xl text-blue-600 leading-tight tracking-tighter sm:text-4xl md:text-5xl">
							{areasCovered.title}
						</h2>
						<p className="text-base text-slate-600 leading-relaxed md:text-lg">
							{areasCovered.description}
						</p>
					</div>

					<div className="lg:col-span-7">
						<div className="flex flex-wrap gap-2.5 rounded-lg border border-slate-200/80 bg-slate-50 p-6 shadow-xs md:p-8">
							{areasCovered.areasList.map((area) => (
								<span
									className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2.5 font-semibold text-slate-800 text-sm shadow-xs transition hover:border-blue-400 hover:text-blue-600 hover:shadow-sm"
									key={area}
								>
									<MapPin className="h-3.5 w-3.5 text-blue-600" />
									<span>{area}</span>
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
