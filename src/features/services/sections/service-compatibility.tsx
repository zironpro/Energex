"use client";

import {
	Building2,
	Calendar,
	Factory,
	Fuel,
	HardHat,
	Repeat,
} from "lucide-react";
import { useTranslations } from "next-intl";

import type { CraneCompatibilityItem } from "../types";

interface ServiceCompatibilityProps {
	compatibility: CraneCompatibilityItem[];
}

const getCraneIcon = (icon: CraneCompatibilityItem["icon"]) => {
	switch (icon) {
		case "construction":
			return <HardHat className="h-6 w-6 text-blue-600" />;
		case "commercial":
			return <Building2 className="h-6 w-6 text-blue-600" />;
		case "factory":
			return <Factory className="h-6 w-6 text-blue-600" />;
		case "oilGas":
			return <Fuel className="h-6 w-6 text-blue-600" />;
		case "event":
			return <Calendar className="h-6 w-6 text-blue-600" />;
		case "backup":
			return <Repeat className="h-6 w-6 text-blue-600" />;
		default:
			return <HardHat className="h-6 w-6 text-blue-600" />;
	}
};

export function ServiceCompatibility({
	compatibility,
}: ServiceCompatibilityProps) {
	const t = useTranslations("services.common");

	return (
		<section className="border-slate-100 border-t bg-white py-20 lg:py-24">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="mx-auto mb-16 max-w-4xl text-center">
					<h2 className="font-black text-3xl text-slate-900 leading-tight tracking-tighter sm:text-4xl md:text-5xl">
						{t("compatibilityTitle")}
					</h2>
					<p className="mt-4 text-base text-slate-600 md:text-lg">
						{t("compatibilitySubtitle")}
					</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{compatibility.map((item) => (
						<div
							className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl"
							key={item.title}
						>
							<div>
								<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 transition-transform group-hover:scale-110">
									{getCraneIcon(item.icon)}
								</div>
								<h3 className="mb-2 font-bold text-lg text-slate-900 transition-colors group-hover:text-blue-600">
									{item.title}
								</h3>
								<p className="font-normal text-slate-600 text-sm leading-relaxed md:text-base">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

