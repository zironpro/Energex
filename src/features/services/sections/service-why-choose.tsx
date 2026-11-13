"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import type { ServicePageData } from "../types";

interface ServiceWhyChooseProps {
	whyChoose: ServicePageData["whyChoose"];
}

export function ServiceWhyChoose({ whyChoose }: ServiceWhyChooseProps) {
	const t = useTranslations("services.common");

	return (
		<section className="bg-slate-50/60 py-20 lg:py-24">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="mx-auto mb-16 max-w-4xl text-center">
					<h2 className="font-black text-3xl text-blue-600 leading-tight tracking-tighter sm:text-4xl md:text-5xl">
						{t("whyChooseTitle")}
					</h2>
					<p className="mt-4 text-base text-slate-600 md:text-lg">
						{t("whyChooseSubtitle")}
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{whyChoose.map((point) => (
						<div
							className="group relative flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
							key={point.title}
						>
							<div>
								<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-transform group-hover:scale-110">
									<CheckCircle2 className="h-6 w-6" />
								</div>
								<h3 className="mb-2 font-bold text-lg text-slate-900 leading-snug transition-colors group-hover:text-blue-600">
									{point.title}
								</h3>
								<p className="font-normal text-slate-600 text-sm leading-relaxed md:text-base">
									{point.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
