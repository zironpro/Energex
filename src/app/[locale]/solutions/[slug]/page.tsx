import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { setRequestLocale } from "next-intl/server";

import {
	getServiceDataBySlug,
	SERVICE_PAGES,
} from "@/features/services/data/service-pages";
import { ServicePage } from "@/features/services/service-page";
import { routing } from "@/i18n/routing";
import { buildFaqPageJsonLd } from "@/lib/schema/faq-json-ld";
import { buildServiceJsonLd } from "@/lib/schema/service-json-ld";
import { buildMetadata } from "@/lib/seo/og";

export async function generateStaticParams() {
	const params: Array<{ locale: string; slug: string }> = [];

	for (const locale of routing.locales) {
		for (const page of SERVICE_PAGES) {
			params.push({
				locale,
				slug: page.slug,
			});
		}
	}

	return params;
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
	const { locale, slug } = await params;
	const solutionData = await getServiceDataBySlug(slug, locale);

	if (!solutionData) {
		return {
			title: "Solution Not Found | Energex",
		};
	}

	try {
		return buildMetadata(locale, `/solutions/${slug}`);
	} catch {
		return {
			title: solutionData.title,
			description: solutionData.metaDescription,
			alternates: {
				canonical: `https://www.energexequip.ae/${locale}/solutions/${slug}`,
				languages: {
					en: `https://www.energexequip.ae/en/solutions/${slug}`,
					ar: `https://www.energexequip.ae/ar/solutions/${slug}`,
					"x-default": `https://www.energexequip.ae/en/solutions/${slug}`,
				},
			},
		};
	}
}

export default async function Page({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>;
}) {
	const { locale, slug } = await params;

	if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
		notFound();
	}

	setRequestLocale(locale);

	const solutionData = await getServiceDataBySlug(slug, locale);

	if (!solutionData) {
		notFound();
	}

	const serviceJsonLd = buildServiceJsonLd({
		slug: `solutions/${slug}`,
		name: solutionData.title,
		description: solutionData.metaDescription,
		locale,
	});
	const faqJsonLd = buildFaqPageJsonLd(solutionData.faqs);

	return (
		<>
			<script id={`solution-schema-${slug}`} type="application/ld+json">
				{JSON.stringify(serviceJsonLd)}
			</script>
			<script id={`solution-faq-schema-${slug}`} type="application/ld+json">
				{JSON.stringify(faqJsonLd)}
			</script>
			<ServicePage data={solutionData} />
		</>
	);
}

