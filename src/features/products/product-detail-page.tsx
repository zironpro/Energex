"use client";

import { useState } from "react";

import Image from "next/image";
import { notFound } from "next/navigation";

import { motion } from "framer-motion";
import {
	ArrowLeft,
	ArrowRight,
	CheckCircle2,
	ChevronDown,
	Cpu,
	Fuel,
	Gauge,
	Phone,
	ShieldCheck,
	Volume2,
	Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { CTA } from "@/features/home/components/cta";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Link } from "@/i18n/navigation";

import { getProductBySlug, getRelatedProducts } from "./data/products";

interface ProductDetailPageProps {
	slug: string;
}

interface HighlightItem {
	title: string;
	description: string;
}

interface FaqItem {
	question: string;
	answer: string;
}

const SPEC_KEYS = [
	"primePower",
	"standbyPower",
	"voltage",
	"frequency",
	"phase",
	"powerFactor",
	"fuelType",
	"enclosure",
	"noiseLevel",
	"cooling",
] as const;

const HIGHLIGHT_ICONS = [Volume2, Fuel, Gauge, ShieldCheck];

export function ProductDetailPage({ slug }: ProductDetailPageProps) {
	const t = useTranslations("products");
	const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
	useSmoothScroll();

	const product = getProductBySlug(slug);

	if (!product) {
		notFound();
	}

	const key = product.key;
	const title = t(`ProductGrid.items.${key}.title`);
	const description = t(`ProductGrid.items.${key}.description`);
	const badge = t(`ProductDetail.items.${key}.badge`);
	const subtitle = t(`ProductDetail.items.${key}.subtitle`);
	const overview = t(`ProductDetail.items.${key}.overview`);

	const gridSpecs = t.raw(`ProductGrid.items.${key}.specs`) as string[];
	const technicalSpecs = t.raw(
		`ProductDetail.items.${key}.technicalSpecs`
	) as Record<(typeof SPEC_KEYS)[number], string>;
	const applications = t.raw(
		`ProductDetail.items.${key}.applications`
	) as string[];
	const highlights = t.raw(
		`ProductDetail.items.${key}.highlights`
	) as HighlightItem[];
	const faqs = t.raw(`ProductDetail.items.${key}.faqs`) as FaqItem[];
	const includedServices = t.raw("ProductDetail.includedServices") as string[];

	const relatedProducts = getRelatedProducts(product.slug);

	const whatsappHref = `https://wa.me/971502335477?text=${encodeURIComponent(
		`Hello Energex, I would like a rental quote for the ${title}.`
	)}`;

	return (
		<main className="relative min-h-screen bg-slate-50 text-slate-900">
			{/* Hero & Product Overview Section */}
			<section className="relative overflow-hidden bg-slate-50 px-6 pt-32 pb-16 lg:px-16 lg:pt-36 lg:pb-20">
				{/* Background Watermark Icon */}
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

				<div className="container relative z-10 mx-auto max-w-7xl">
					{/* Back Navigation */}
					<div className="mb-8">
						<Link
							className="group inline-flex items-center gap-2 font-semibold text-slate-600 text-sm transition-colors hover:text-blue-600"
							href="/products"
						>
							<ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180" />
							<span>{t("ProductDetail.backToProducts")}</span>
						</Link>
					</div>

					<div className="grid items-center gap-12 lg:grid-cols-12">
						{/* Left Column: Product Details & CTAs */}
						<motion.div
							animate={{ opacity: 1, y: 0 }}
							className="lg:col-span-7"
							initial={{ opacity: 0, y: 24 }}
							transition={{ duration: 0.6 }}
						>
							<div className="mb-5 flex flex-wrap items-center gap-3">
								<span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 font-bold text-white text-xs uppercase tracking-wider">
									<Zap className="h-3.5 w-3.5" />
									{badge}
								</span>
								<span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 font-semibold text-emerald-700 text-xs">
									<span className="h-2 w-2 rounded-full bg-emerald-500" />
									{t("ProductDetail.availabilityBadge")}
								</span>
							</div>

							<h1 className="mb-4 font-black text-3xl text-blue-600 uppercase leading-[1.08] tracking-tighter sm:text-5xl lg:text-6xl">
								{title}
							</h1>

							<p className="mb-5 font-semibold text-lg text-slate-800 md:text-xl">
								{subtitle}
							</p>

							<p className="mb-6 text-base text-slate-600 leading-relaxed md:text-lg">
								{overview}
							</p>

							{/* Spec Chips */}
							<div className="mb-8 flex flex-wrap gap-2.5">
								{gridSpecs.map((spec) => (
									<span
										className="rounded-md border border-slate-200 bg-white px-3.5 py-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider shadow-2xs"
										key={spec}
									>
										{spec}
									</span>
								))}
							</div>

							{/* Action Buttons */}
							<div className="flex flex-wrap items-center gap-4">
								<Link
									className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 font-bold text-base text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
									href="/contact"
								>
									<span>{t("ProductDetail.requestQuote")}</span>
									<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
								</Link>

								<a
									className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 font-bold text-base text-slate-900 shadow-2xs transition-all hover:border-blue-300 hover:text-blue-600"
									href="tel:+971502335477"
								>
									<Phone className="h-4 w-4 text-blue-600" />
									<span>{t("ProductDetail.callNow")}</span>
								</a>

								<a
									className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-6 py-3.5 font-bold text-base text-emerald-700 transition-all hover:bg-emerald-100"
									href={whatsappHref}
									rel="noopener noreferrer"
									target="_blank"
								>
									<span>{t("ProductDetail.whatsappQuote")}</span>
								</a>
							</div>
						</motion.div>

						{/* Right Column: Visual Showcase Card */}
						<motion.div
							animate={{ opacity: 1, scale: 1 }}
							className="lg:col-span-5"
							initial={{ opacity: 0, scale: 0.96 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							<div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
								<div className="mb-6 flex items-center justify-between border-slate-100 border-b pb-4">
									<div>
										<span className="block font-bold text-slate-400 text-xs uppercase tracking-widest">
											{badge}
										</span>
										<span className="font-black text-3xl text-slate-900 tracking-tight">
											{product.kva} {t("ProductDetail.capacityUnit")}
										</span>
									</div>
									<div className="rounded-lg bg-blue-50 px-3.5 py-2 text-right">
										<span className="block font-bold text-blue-600 text-lg leading-none">
											{product.kw} {t("ProductDetail.activePowerUnit")}
										</span>
										<span className="font-medium text-[11px] text-slate-500">
											0.8 PF • 50 Hz
										</span>
									</div>
								</div>

								<div className="relative mx-auto flex h-[280px] w-full items-center justify-center sm:h-[340px]">
									<Image
										alt={title}
										className="object-contain drop-shadow-2xl"
										fill
										priority
										sizes="(max-width: 1024px) 100vw, 40vw"
										src={product.image}
									/>
								</div>

								<p className="mt-4 text-center font-medium text-slate-500 text-sm">
									{description}
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Key Performance Highlights */}
			<section className="border-slate-200/80 border-t bg-white py-16 lg:py-20">
				<div className="container mx-auto max-w-7xl px-6 lg:px-16">
					<h2 className="mb-10 font-black text-2xl text-slate-900 uppercase tracking-tighter sm:text-3xl">
						{t("ProductDetail.highlightsTitle")}
					</h2>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{highlights.map((item, index) => {
							const Icon = HIGHLIGHT_ICONS[index % HIGHLIGHT_ICONS.length];
							return (
								<div
									className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-6 transition-all hover:border-blue-300 hover:bg-white hover:shadow-md"
									key={item.title}
								>
									<div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white">
										<Icon className="h-5 w-5" />
									</div>
									<h3 className="mb-2 font-bold text-lg text-slate-900">
										{item.title}
									</h3>
									<p className="text-slate-600 text-sm leading-relaxed">
										{item.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Technical Specifications & Applications */}
			<section className="py-16 lg:py-20">
				<div className="container mx-auto max-w-7xl px-6 lg:px-16">
					<div className="grid gap-10 lg:grid-cols-12">
						{/* Specifications Table */}
						<div className="lg:col-span-7">
							<div className="mb-6">
								<h2 className="mb-2 flex items-center gap-2.5 font-black text-2xl text-blue-600 uppercase tracking-tighter sm:text-3xl">
									<Cpu className="h-6 w-6 shrink-0" />
									<span>{t("ProductDetail.specificationsTitle")}</span>
								</h2>
								<p className="text-slate-600 text-sm md:text-base">
									{t("ProductDetail.specificationsSubtitle")}
								</p>
							</div>

							<div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xs">
								<dl className="divide-y divide-slate-100">
									{SPEC_KEYS.map((specKey) => (
										<div
											className="flex flex-col justify-between gap-1 px-6 py-4 sm:flex-row sm:items-center sm:gap-4"
											key={specKey}
										>
											<dt className="font-semibold text-slate-500 text-sm">
												{t(`ProductDetail.specLabels.${specKey}`)}
											</dt>
											<dd className="font-bold text-slate-900 text-sm sm:text-end sm:text-base">
												{technicalSpecs[specKey]}
											</dd>
										</div>
									))}
								</dl>
							</div>
						</div>

						{/* Ideal Applications & Included Services */}
						<div className="space-y-8 lg:col-span-5">
							<div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs md:p-8">
								<h2 className="mb-5 font-black text-slate-900 text-xl uppercase tracking-tight">
									{t("ProductDetail.applicationsTitle")}
								</h2>
								<ul className="space-y-3.5">
									{applications.map((app) => (
										<li
											className="flex items-start gap-3 text-slate-700 text-sm md:text-base"
											key={app}
										>
											<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
											<span>{app}</span>
										</li>
									))}
								</ul>

								{product.key === "p100" && (
									<div className="mt-6 rounded-lg border border-blue-200 bg-blue-50/80 p-4 transition hover:border-blue-300">
										<span className="block font-bold text-[11px] text-blue-700 uppercase tracking-wider">
											{t("ProductDetail.towerCraneBanner.badge")}
										</span>
										<p className="mt-1 font-bold text-slate-900 text-sm">
											{t("ProductDetail.towerCraneBanner.title")}
										</p>
										<p className="mt-1 text-slate-600 text-xs leading-relaxed">
											{t("ProductDetail.towerCraneBanner.description")}
										</p>
										<Link
											className="mt-3 inline-flex items-center gap-1.5 font-bold text-blue-600 text-xs hover:text-blue-700"
											href="/solutions/100-kva-generator-for-tower-crane"
										>
											<span>{t("ProductDetail.towerCraneBanner.action")}</span>
											<ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
										</Link>
									</div>
								)}
							</div>

							<div className="rounded-xl border border-blue-100 bg-blue-50/70 p-6 md:p-8">
								<h2 className="mb-5 font-black text-blue-950 text-xl uppercase tracking-tight">
									{t("ProductDetail.includedServicesTitle")}
								</h2>
								<ul className="space-y-3">
									{includedServices.map((service) => (
										<li
											className="flex items-start gap-3 text-slate-700 text-sm"
											key={service}
										>
											<span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
											<span>{service}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Accordion */}
			<section className="border-slate-200/80 border-t bg-white py-16 lg:py-20">
				<div className="container mx-auto max-w-4xl px-6 md:px-12">
					<div className="mb-10 text-center">
						<h2 className="font-black text-2xl text-blue-600 uppercase tracking-tighter sm:text-3xl md:text-4xl">
							{t("ProductDetail.faqTitle")}
						</h2>
						<p className="mt-2 text-slate-600 text-sm md:text-base">
							{t("ProductDetail.faqSubtitle")}
						</p>
					</div>

					<div className="space-y-4">
						{faqs.map((faq, index) => {
							const isOpen = openFaqIndex === index;
							return (
								<div
									className="overflow-hidden rounded-lg border border-slate-200/80 bg-slate-50/50 shadow-2xs transition-all hover:border-blue-300"
									key={faq.question}
								>
									<button
										className="flex w-full items-center justify-between gap-4 p-6 text-start font-bold text-base text-slate-900 transition hover:text-blue-600 md:text-lg"
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
										<div className="border-slate-200/70 border-t bg-white px-6 pt-3 pb-6 text-slate-600 text-sm leading-relaxed md:text-base">
											{faq.answer}
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Other Generator Capacities */}
			<section className="border-slate-200/80 border-t bg-slate-100/70 py-16">
				<div className="container mx-auto max-w-7xl px-6 lg:px-16">
					<div className="mb-10">
						<h2 className="mb-2 font-black text-2xl text-slate-900 tracking-tight sm:text-3xl">
							{t("ProductDetail.relatedTitle")}
						</h2>
						<p className="text-slate-600 text-sm md:text-base">
							{t("ProductDetail.relatedSubtitle")}
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{relatedProducts.map((rel) => {
							const relTitle = t(`ProductGrid.items.${rel.key}.title`);
							const relDesc = t(`ProductGrid.items.${rel.key}.description`);
							return (
								<Link
									className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
									href={`/products/${rel.slug}`}
									key={rel.slug}
								>
									<div>
										<div className="mb-4 flex items-center justify-between">
											<span className="rounded-md bg-blue-50 px-2.5 py-1 font-bold text-blue-600 text-xs">
												{rel.kva} {t("ProductDetail.capacityUnit")}
											</span>
											<span className="font-semibold text-slate-400 text-xs">
												{rel.kw} {t("ProductDetail.activePowerUnit")}
											</span>
										</div>

										<div className="relative mb-5 h-32 w-full">
											<Image
												alt={relTitle}
												className="object-contain transition-transform duration-500 group-hover:scale-105"
												fill
												sizes="(max-width: 640px) 100vw, 25vw"
												src={rel.image}
											/>
										</div>

										<h3 className="mb-2 font-bold text-lg text-slate-900 leading-snug transition-colors group-hover:text-blue-600">
											{relTitle}
										</h3>
										<p className="line-clamp-2 text-slate-600 text-sm">
											{relDesc}
										</p>
									</div>

									<div className="mt-5 flex items-center gap-2 font-semibold text-blue-600 text-sm">
										<span>{t("ProductDetail.viewProduct")}</span>
										<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</section>

			<CTA />
		</main>
	);
}
