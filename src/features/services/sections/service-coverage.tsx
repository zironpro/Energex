"use client";

import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

interface ServiceCoverageProps {
	deploymentAreas: string[];
}

export function ServiceCoverage({ deploymentAreas }: ServiceCoverageProps) {
	const t = useTranslations("services.common");

	return (
		<section className="border-slate-100 border-t bg-white py-20 lg:py-24">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="mx-auto mb-14 max-w-4xl text-center">
					<h2 className="font-black text-3xl text-slate-900 leading-tight tracking-tighter sm:text-4xl md:text-5xl">
						{t("coverageTitle")}
					</h2>
					<p className="mt-4 text-base text-slate-600 md:text-lg">
						{t("coverageSubtitle")}
					</p>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{deploymentAreas.map((area) => (
						<div
							className="flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all hover:border-blue-300 hover:bg-blue-50/30"
							key={area}
						>
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
								<MapPin className="h-5 w-5" />
							</div>
							<span className="font-semibold text-slate-800 text-sm md:text-base">
								{area}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
