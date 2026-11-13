"use client";

import Image from "next/image";

import { ArrowRight, ShieldAlert } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import type { ServicePageData } from "../types";

interface ServiceIntroProps {
	data: ServicePageData;
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

export function ServiceIntro({ data }: ServiceIntroProps) {
	const t = useTranslations("services.common");

	return (
		<section className="bg-white py-16 lg:py-24">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6">
				{/* Full-width responsive image: natural ratio, never cropped */}
				<Image
					alt={data.title}
					className="h-auto w-full rounded-lg"
					height={900}
					priority
					sizes="(max-width: 1280px) 100vw, 1280px"
					src="/services/100-kva-generator-for-tower-crane.webp"
					width={1600}
				/>

				{/* Plain caption under the image */}
				<div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-slate-900">
						<span className="font-bold text-lg">{t("primeCapacity")}</span>
						<span className="ms-3 text-slate-500 text-sm">
							{t("phaseVoltage")}
						</span>
					</p>
					<p className="flex items-center gap-2.5 text-slate-600 text-sm">
						<ShieldAlert className="h-4 w-4 shrink-0 text-amber-500" />
						<span>{t("testedCaption")}</span>
					</p>
				</div>

				{/* Copy: heading on top, text flows in two columns so nothing is left empty */}
				<div className="mt-12 lg:mt-16">
					<h2 className="max-w-3xl font-black text-3xl text-slate-900 leading-tight tracking-tight sm:text-4xl md:text-5xl">
						{t("introHeading")}
					</h2>

					<div className="mt-6 text-base text-slate-700 leading-relaxed md:text-lg lg:columns-2 lg:gap-12">
						{data.intro.map((p) => (
							<p className="mb-4 break-inside-avoid" key={p.slice(0, 32)}>
								{parseTextWithLinks(p)}
							</p>
						))}
					</div>

					<Link
						className="group mt-4 inline-flex items-center gap-2 border-blue-600 border-b-2 pb-1 font-semibold text-blue-600 transition-colors hover:border-blue-800 hover:text-blue-800"
						href="/contact"
					>
						<span>{t("requestQuote")}</span>
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
					</Link>
				</div>

				{/* Stats: open row separated by thin lines, no boxes */}
				<dl className="mt-16 grid grid-cols-2 gap-y-8 border-slate-200 border-t pt-10 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-slate-200 rtl:sm:divide-x-reverse">
					{data.heroStats.map((stat) => (
						<div
							className="sm:px-6 sm:last:pe-0 sm:first:ps-0"
							key={stat.label}
						>
							<dt className="sr-only">{stat.label}</dt>
							<dd className="font-black text-3xl text-blue-600 tracking-tight">
								{stat.value}
							</dd>
							<p className="mt-1 font-bold text-slate-900 text-sm">
								{stat.label}
							</p>
							<p className="mt-0.5 text-slate-500 text-xs">{stat.desc}</p>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
