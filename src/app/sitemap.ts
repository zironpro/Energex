import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site-config";
import { ARTICLES } from "@/features/insights/data/articles";
import { LOCATION_PAGES } from "@/features/locations/data/location-pages";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = siteConfig.site.replace(/\/$/, "");
	const entries: MetadataRoute.Sitemap = [];

	for (const locale of routing.locales) {
		entries.push({ url: `${base}/${locale}`, priority: 1.0 });
		entries.push({ url: `${base}/${locale}/solutions`, priority: 0.8 });
		entries.push({ url: `${base}/${locale}/products`, priority: 0.8 });
		entries.push({ url: `${base}/${locale}/company`, priority: 0.8 });
		entries.push({ url: `${base}/${locale}/insights`, priority: 0.8 });
		entries.push({ url: `${base}/${locale}/contact`, priority: 0.8 });
		entries.push({ url: `${base}/${locale}/terms-and-policy`, priority: 0.8 });

		for (const page of LOCATION_PAGES) {
			entries.push({
				url: `${base}/${locale}/${page.slug}`,
				priority: 0.9,
			});
		}

		for (const article of ARTICLES) {
			entries.push({
				url: `${base}/${locale}/insights/${article.id}`,
				priority: 0.7,
			});
		}
	}

	return entries;
}
