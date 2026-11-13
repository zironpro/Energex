import { siteConfig } from "@/constants/site-config";

import { ORGANIZATION_LEGAL_NAME } from "./constants";

export function buildServiceJsonLd({
	slug,
	name,
	description,
	locale,
	serviceType = "Generator Rental for Tower Crane",
}: {
	slug: string;
	name: string;
	description: string;
	locale: string;
	serviceType?: string;
}) {
	const base = `${siteConfig.site}/${locale}`;
	const pageUrl = `${base}/${slug}`;

	return {
		"@context": "https://schema.org",
		"@type": "Service",
		name,
		description,
		provider: {
			"@type": "LocalBusiness",
			name: ORGANIZATION_LEGAL_NAME,
			url: base,
			telephone: "+971502335477",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Dubai",
				addressRegion: "Dubai",
				addressCountry: "AE",
			},
		},
		areaServed: {
			"@type": "Country",
			name: "United Arab Emirates",
		},
		serviceType,
		url: pageUrl,
	};
}

