"use client";

import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import type { ServicePageData } from "../types";

interface ServiceCalloutProps {
	callout: ServicePageData["callout"];
	title: string;
}

export function ServiceCallout({ callout, title }: ServiceCalloutProps) {
	const t = useTranslations("services.common");
	const locale = useLocale();
	const isAr = locale === "ar";

	const whatsappMsg = isAr
		? `مرحباً إنرجكس، أحتاج طاقة عاجلة للرافعة البرجية بخصوص ${title}.`
		: `Hello Energex, I need urgent tower crane generator power for ${title}.`;

	const whatsappHref = `https://wa.me/971502335477?text=${encodeURIComponent(
		whatsappMsg
	)}`;

	return (
		<section className="bg-blue-600 px-6 py-14 text-white lg:py-16">
			<div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row md:px-12">
				<div className="max-w-2xl text-center md:text-left rtl:md:text-right">
					<h2 className="mb-2 font-black text-2xl tracking-tight sm:text-3xl md:text-4xl">
						{callout.title}
					</h2>
					<p className="text-base text-blue-100 md:text-lg">
						{callout.subtitle}
					</p>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-3">
					<Link
						className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-base text-blue-600 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 active:scale-95"
						href="/contact"
					>
						<span>{callout.buttonText}</span>
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
					</Link>

					<a
						className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-blue-700/80 px-5 py-3.5 font-bold text-base text-white transition-all hover:bg-blue-700 active:scale-95"
						href="tel:+971502335477"
					>
						<Phone className="h-4 w-4" />
						<span>{t("callNow")}</span>
					</a>

					<a
						className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-600 px-5 py-3.5 font-bold text-base text-white transition-all hover:bg-emerald-500 active:scale-95"
						href={whatsappHref}
						rel="noopener noreferrer"
						target="_blank"
					>
						<ShieldCheck className="h-4 w-4" />
						<span>{t("whatsappQuote")}</span>
					</a>
				</div>
			</div>
		</section>
	);
}
