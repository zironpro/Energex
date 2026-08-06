import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { setRequestLocale } from "next-intl/server";

import { siteConfig } from "@/constants/site-config";
import {
	getLocationDataBySlug,
	LOCATION_PAGES,
} from "@/features/locations/data/location-pages";
import { LocationPage } from "@/features/locations/location-page";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
	const params: Array<{ locale: string; slug: string }> = [];

	for (const locale of routing.locales) {
		for (const page of LOCATION_PAGES) {
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
	const data = await getLocationDataBySlug(slug, locale);

	if (!data) {
		return {
			title: "Page Not Found | Energex",
		};
	}

	const baseUrl = siteConfig.site.replace(/\/$/, "");
	const canonicalUrl = `${baseUrl}/${locale}/${slug}`;

	return {
		title: data.title,
		description: data.metaDescription,
		alternates: {
			canonical: canonicalUrl,
			languages: {
				en: `${baseUrl}/en/${slug}`,
				ar: `${baseUrl}/ar/${slug}`,
				"x-default": `${baseUrl}/en/${slug}`,
			},
		},
		openGraph: {
			title: data.title,
			description: data.metaDescription,
			url: canonicalUrl,
			siteName: "Energex Equipment Rental",
			locale: locale === "ar" ? "ar_AE" : "en_US",
			type: "website",
		},
	};
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

	const data = await getLocationDataBySlug(slug, locale);

	if (!data) {
		notFound();
	}

	return <LocationPage data={data} />;
}
