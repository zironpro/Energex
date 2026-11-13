import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { setRequestLocale } from "next-intl/server";

import {
	getLocationDataBySlug,
	LOCATION_PAGES,
} from "@/features/locations/data/location-pages";
import { LocationPage } from "@/features/locations/location-page";
import {
	getServiceDataBySlug,
	SERVICE_PAGES,
} from "@/features/services/data/service-pages";
import { ServicePage } from "@/features/services/service-page";
import { routing } from "@/i18n/routing";
import { buildFaqPageJsonLd } from "@/lib/schema/faq-json-ld";
import { buildLocationServiceJsonLd } from "@/lib/schema/location-json-ld";
import { buildServiceJsonLd } from "@/lib/schema/service-json-ld";
import { buildMetadata } from "@/lib/seo/og";

export async function generateStaticParams() {
	const params: Array<{ locale: string; slug: string }> = [];

	for (const locale of routing.locales) {
		for (const page of LOCATION_PAGES) {
			params.push({
				locale,
				slug: page.slug,
			});
		}
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
	const [locationData, serviceData] = await Promise.all([
		getLocationDataBySlug(slug, locale),
		getServiceDataBySlug(slug, locale),
	]);

	if (!locationData && !serviceData) {
		return {
			title: "Page Not Found | Energex",
		};
	}

	return buildMetadata(locale, `/${slug}`);
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

	const [locationData, serviceData] = await Promise.all([
		getLocationDataBySlug(slug, locale),
		getServiceDataBySlug(slug, locale),
	]);

	if (locationData) {
		const locationServiceJsonLd = buildLocationServiceJsonLd(
			slug,
			locationData.emirate,
			locale
		);
		const faqJsonLd = buildFaqPageJsonLd(locationData.faqs);

		return (
			<>
				<script id={`location-schema-${slug}`} type="application/ld+json">
					{JSON.stringify(locationServiceJsonLd)}
				</script>
				<script id={`faq-schema-${slug}`} type="application/ld+json">
					{JSON.stringify(faqJsonLd)}
				</script>
				<LocationPage data={locationData} />
			</>
		);
	}

	if (serviceData) {
		const serviceJsonLd = buildServiceJsonLd({
			slug,
			name: serviceData.title,
			description: serviceData.metaDescription,
			locale,
		});
		const faqJsonLd = buildFaqPageJsonLd(serviceData.faqs);

		return (
			<>
				<script id={`service-schema-${slug}`} type="application/ld+json">
					{JSON.stringify(serviceJsonLd)}
				</script>
				<script id={`service-faq-schema-${slug}`} type="application/ld+json">
					{JSON.stringify(faqJsonLd)}
				</script>
				<ServicePage data={serviceData} />
			</>
		);
	}

	notFound();
}
