"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

import type { ServiceFaqItem } from "../types";

interface ServiceFaqProps {
	faqs: ServiceFaqItem[];
}

const parseTextWithLinks = (text: string) => {
	const tokenRegex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
	const parts = [];
	let lastIndex = 0;
	let match;

	while ((match = tokenRegex.exec(text)) !== null) {
		if (match.index > lastIndex) {
			parts.push(text.substring(lastIndex, match.index));
		}

		if (match[1] !== undefined && match[2] !== undefined) {
			parts.push(
				<a
					className="font-semibold text-blue-600 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-800 hover:decoration-blue-600"
					href={match[2]}
					key={`link-${match.index}`}
					rel="noopener noreferrer"
					target="_blank"
				>
					{match[1]}
				</a>
			);
		} else if (match[3] !== undefined) {
			parts.push(
				<strong
					className="font-bold text-slate-900"
					key={`bold-${match.index}`}
				>
					{match[3]}
				</strong>
			);
		}

		lastIndex = tokenRegex.lastIndex;
	}

	if (lastIndex < text.length) {
		parts.push(text.substring(lastIndex));
	}

	return parts.length > 0 ? parts : text;
};

export function ServiceFaq({ faqs }: ServiceFaqProps) {
	const t = useTranslations("services.common");
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section className="bg-slate-50/60 py-20 lg:py-24">
			<div className="container mx-auto max-w-4xl px-6 md:px-12">
				<div className="mb-14 text-center">
					<h2 className="font-black text-3xl text-blue-600 leading-tight tracking-tighter sm:text-4xl md:text-5xl">
						{t("faqTitle")}
					</h2>
					<p className="mt-3 text-base text-slate-600 md:text-lg">
						{t("faqSubtitle")}
					</p>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, index) => {
						const isOpen = openIndex === index;
						return (
							<div
								className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-2xs transition-all hover:border-blue-300"
								key={faq.question}
							>
								<button
									className="flex w-full items-center justify-between gap-4 p-6 text-start font-bold text-base text-slate-900 transition hover:text-blue-600 md:text-lg"
									onClick={() => setOpenIndex(isOpen ? null : index)}
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
									<div className="border-slate-100 border-t bg-slate-50/40 px-6 pt-3 pb-6 text-slate-700 text-sm leading-relaxed md:text-base">
										{parseTextWithLinks(faq.answer)}
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
