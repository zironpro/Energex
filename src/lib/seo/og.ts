import type { Metadata } from "next";

import { type Locale, OG_PAGES } from "./og-pages";

export const SITE_URL = (
	process.env.NEXT_PUBLIC_SITE_URL ||
	process.env.SITE_URL ||
	"https://www.energexequip.ae"
).replace(/\/$/, "");
const SITE_NAME = {
	en: "Energex Equipment Rental",
	ar: "إنرجكس لتأجير المعدات",
};
const OG_LOCALE = { en: "en_US", ar: "ar_AE" };

/**
 * Full metadata (title, description, canonical, hreflang, Open Graph, Twitter)
 * for one page.  `path` is the route WITHOUT the locale, e.g. '/', '/contact',
 * '/insights/500kva-generator-rental-dubai'.
 */
export function buildMetadata(locale: Locale | string, path: string): Metadata {
	const loc: Locale = locale === "ar" ? "ar" : "en";
	const key = path === "" ? "/" : path;
	const entry = OG_PAGES[key];
	if (!entry)
		throw new Error(
			`[og] No OG entry for "${key}" – add it to lib/seo/og-pages.ts`
		);

	const { title, description } = entry[loc];
	const suffix = key === "/" ? "" : key;
	const url = `${SITE_URL}/${loc}${suffix}`;
	const image = {
		url: `${SITE_URL}/og/${loc}/${entry.image}.jpg`,
		width: 1200,
		height: 630,
		alt: title,
		type: "image/jpeg",
	};

	return {
		title: { absolute: title },
		description,
		alternates: {
			canonical: url,
			languages: {
				en: `${SITE_URL}/en${suffix}`,
				ar: `${SITE_URL}/ar${suffix}`,
				"x-default": `${SITE_URL}/en${suffix}`,
			},
		},
		openGraph: {
			type: entry.type,
			url,
			siteName: SITE_NAME[loc],
			title,
			description,
			locale: OG_LOCALE[loc],
			alternateLocale: [OG_LOCALE[loc === "en" ? "ar" : "en"]],
			images: [image],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image.url],
		},
	};
}
