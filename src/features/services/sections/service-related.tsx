"use client";

import Image from "next/image";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

interface RelatedCapacity {
	kva: number;
	kw: number;
	productKey: "p50" | "p250" | "p500" | "p1000";
	slug: string;
	image: string;
}

const RELATED_UNITS: RelatedCapacity[] = [
	{
		kva: 50,
		kw: 40,
		productKey: "p50",
		slug: "50-kva-silent-diesel-generator",
		image: "/products/50kva.webp",
	},
	{
		kva: 250,
		kw: 200,
		productKey: "p250",
		slug: "250-kva-industrial-power-generator",
		image: "/products/250kva.webp",
	},
	{
		kva: 500,
		kw: 400,
		productKey: "p500",
		slug: "500-kva-heavy-duty-generator-set",
		image: "/products/500kva.webp",
	},
	{
		kva: 1000,
		kw: 800,
		productKey: "p1000",
		slug: "1000-kva-prime-power-generator",
		image: "/products/1000kva.webp",
	},
];

export function ServiceRelated() {
	const t = useTranslations("services.common");
	const tProd = useTranslations("products.ProductGrid");

	return (
		<section className="border-slate-200/80 border-t bg-slate-100/70 py-16 lg:py-20">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="mb-12">
					<h2 className="mb-2 font-black text-2xl text-slate-900 tracking-tight sm:text-3xl">
						{t("relatedTitle")}
					</h2>
					<p className="text-slate-600 text-sm md:text-base">
						{t("relatedSubtitle")}
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{RELATED_UNITS.map((unit) => {
						const unitTitle = tProd(`items.${unit.productKey}.title`);
						const unitDesc = tProd(`items.${unit.productKey}.description`);

						return (
							<Link
								className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
								href={`/products/${unit.slug}`}
								key={unit.slug}
							>
								<div>
									<div className="mb-4 flex items-center justify-between">
										<span className="rounded-md bg-blue-50 px-2.5 py-1 font-bold text-blue-600 text-xs">
											{unit.kva} {t("capacityUnit")}
										</span>
										<span className="font-semibold text-slate-400 text-xs">
											{unit.kw} {t("activePowerUnit")}
										</span>
									</div>

									<div className="relative mb-5 h-32 w-full">
										<Image
											alt={unitTitle}
											className="object-contain transition-transform duration-500 group-hover:scale-105"
											fill
											sizes="(max-width: 640px) 100vw, 25vw"
											src={unit.image}
										/>
									</div>

									<h3 className="mb-2 font-bold text-lg text-slate-900 leading-snug transition-colors group-hover:text-blue-600">
										{unitTitle}
									</h3>
									<p className="line-clamp-2 text-slate-600 text-sm">
										{unitDesc}
									</p>
								</div>

								<div className="mt-5 flex items-center gap-2 font-semibold text-blue-600 text-sm">
									<span>{tProd("viewDetails")}</span>
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
