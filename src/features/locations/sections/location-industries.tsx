"use client";

import { Building2, Calendar, Factory, Fuel, HardHat, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

import type { LocationPageData } from "../types";

interface LocationIndustriesProps {
	emirate: string;
	industries: LocationPageData["industries"];
}

const getIndustryIcon = (iconName: string) => {
	switch (iconName) {
		case "construction":
			return <HardHat className="h-6 w-6 text-blue-600" />;
		case "event":
			return <Calendar className="h-6 w-6 text-blue-600" />;
		case "commercial":
			return <Building2 className="h-6 w-6 text-blue-600" />;
		case "oilGas":
			return <Fuel className="h-6 w-6 text-blue-600" />;
		case "factory":
			return <Factory className="h-6 w-6 text-blue-600" />;
		default:
			return <Zap className="h-6 w-6 text-blue-600" />;
	}
};

export function LocationIndustries({
	emirate,
	industries,
}: LocationIndustriesProps) {
	const t = useTranslations("locations.common.industries");

	return (
		<section className="bg-slate-50/60 py-20">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="mx-auto mb-16 max-w-4xl text-center">
					<h2 className="font-black text-3xl text-blue-600 leading-tight tracking-tighter sm:text-4xl md:text-5xl">
						{industries.title}
					</h2>
					<p className="mt-4 text-base text-slate-600 md:text-lg">
						{t("subtitle", { emirate })}
					</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{industries.items.map((ind) => (
						<div
							className="group flex flex-col justify-between rounded-lg border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
							key={ind.title}
						>
							<div>
								<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 transition-transform group-hover:scale-110">
									{getIndustryIcon(ind.iconName)}
								</div>
								<h3 className="mb-2 font-bold text-lg text-slate-900">
									{ind.title}
								</h3>
								<p className="text-slate-600 text-sm leading-relaxed">
									{ind.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
