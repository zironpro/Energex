import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site-config";
import { ARTICLES } from "@/features/insights/data/articles";
import { LOCATION_PAGES } from "@/features/locations/data/location-pages";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = siteConfig.site.replace(/\/$/, "");
	const entries: MetadataRoute.Sitemap = [];
	const lastModified = new Date();

	const getAlternates = (path: string) => ({
		languages: {
			en: `${base}/en${path}`,
			ar: `${base}/ar${path}`,
			"x-default": `${base}/en${path}`,
		},
	});

	const addEntry = (path: string, priority: number) => {
		for (const locale of routing.locales) {
			entries.push({
				url: `${base}/${locale}${path}`,
				priority,
				lastModified,
				alternates: getAlternates(path),
			});
		}
	};

	addEntry("", 1.0);
	addEntry("/solutions", 0.8);
	addEntry("/products", 0.8);
	addEntry("/company", 0.8);
	addEntry("/insights", 0.8);
	addEntry("/contact", 0.8);
	addEntry("/terms-and-policy", 0.8);

	for (const page of LOCATION_PAGES) {
		addEntry(`/${page.slug}`, 0.9);
	}

	for (const article of ARTICLES) {
		addEntry(`/insights/${article.id}`, 0.7);
	}

	return entries;
}
