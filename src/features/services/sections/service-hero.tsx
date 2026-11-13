"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import type { ServicePageData } from "../types";

interface ServiceHeroProps {
	data: ServicePageData;
}

export function ServiceHero({ data }: ServiceHeroProps) {
	const t = useTranslations("services.common");
	const locale = useLocale();
	const isAr = locale === "ar";

	const whatsappMsg = isAr
		? `مرحباً إنرجكس، أود طلب عرض سعر بخصوص ${data.title}.`
		: `Hello Energex, I would like to request a quote for the ${data.title}.`;

	const whatsappHref = `https://wa.me/971502335477?text=${encodeURIComponent(
		whatsappMsg
	)}`;

	return (
		<section className="relative flex flex-col justify-center overflow-hidden bg-slate-50/60 px-6 pt-36 pb-12 lg:px-16 lg:pt-40 lg:pb-16">
			{/* Background SVG Watermark Accent */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
				<svg
					className="h-[40rem] w-auto fill-slate-900 md:h-[60rem]"
					viewBox="0 0 210 126"
				>
					<g>
						<polygon points="135.83 54.08 139.67 57.16 203.21 4.92 203.21 0 152.97 0 135.83 13.92 135.83 54.08" />
						<polygon points="73.35 71.08 69.52 68.01 6.04 120.21 6.04 125.12 56.23 125.12 73.35 111.21 73.35 71.08" />
						<polygon points="0 0 152.68 125.12 209.36 125.12 56.4 0 0 0" />
					</g>
				</svg>
			</div>

			<div className="container relative z-10 mx-auto max-w-7xl text-center">
				<div className="flex flex-col items-center space-y-6">
					{/* H1 */}
					<motion.h1
						animate={{ opacity: 1, y: 0 }}
						className="max-w-5xl font-black text-4xl text-blue-600 uppercase leading-[1.08] tracking-tighter sm:text-5xl md:text-6xl lg:text-[4.75rem]"
						initial={{ opacity: 0, y: 30 }}
						transition={{
							duration: 0.8,
							delay: 0.1,
							ease: [0.21, 0.47, 0.32, 0.98],
						}}
					>
						{data.h1}
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						animate={{ opacity: 1 }}
						className="max-w-3xl text-lg text-slate-600 leading-relaxed md:text-xl"
						initial={{ opacity: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						{data.subtitle}
					</motion.p>

					{/* Action Buttons */}
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						className="flex flex-wrap items-center justify-center gap-4 pt-4"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<Link
							className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 font-bold text-base text-white shadow-blue-600/30 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:scale-95"
							href="/contact"
						>
							<span>{t("requestQuote")}</span>
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
						</Link>

						<a
							className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 font-bold text-base text-slate-800 shadow-2xs transition-all hover:border-slate-400 hover:text-blue-600 active:scale-95"
							href="tel:+971502335477"
						>
							<Phone className="h-4 w-4 text-blue-600" />
							<span>{t("callNow")}</span>
						</a>

						<a
							className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-6 py-3.5 font-bold text-base text-emerald-700 transition-all hover:bg-emerald-100 active:scale-95"
							href={whatsappHref}
							rel="noopener noreferrer"
							target="_blank"
						>
							<ShieldCheck className="h-4 w-4 text-emerald-600" />
							<span>{t("whatsappQuote")}</span>
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
