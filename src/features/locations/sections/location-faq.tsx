"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

import type { LocationPageData } from "../types";

interface LocationFaqProps {
	emirate: string;
	faqs: LocationPageData["faqs"];
}

export function LocationFaq({ emirate, faqs }: LocationFaqProps) {
	const t = useTranslations("locations.common.faq");
	const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

	return (
		<section className="bg-slate-50/60 py-20">
			<div className="container mx-auto max-w-4xl px-6 md:px-12">
				<div className="mb-14 text-center">
					<h2 className="font-black text-3xl text-blue-600 leading-tight tracking-tighter sm:text-4xl md:text-5xl">
						{t("title")}
					</h2>
					<p className="mt-3 text-base text-slate-600 md:text-lg">
						{t("subtitle", { emirate })}
					</p>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, index) => {
						const isOpen = openFaqIndex === index;
						return (
							<div
								className="overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-xs transition-all hover:border-blue-300"
								key={faq.question}
							>
								<button
									className="flex w-full items-center justify-between p-6 text-left font-bold text-base text-slate-900 transition hover:text-blue-600 md:text-lg"
									onClick={() => setOpenFaqIndex(isOpen ? null : index)}
									type="button"
								>
									<span>{faq.question}</span>
									<ChevronDown
										className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
											isOpen ? "rotate-180 text-blue-600" : ""
										}`}
									/>
								</button>
								{isOpen && (
									<div className="border-slate-100 border-t px-6 pt-2 pb-6 text-slate-600 text-sm leading-relaxed md:text-base">
										{faq.answer}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
