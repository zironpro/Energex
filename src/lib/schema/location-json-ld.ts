import { siteConfig } from "@/constants/site-config";

import { ORGANIZATION_LEGAL_NAME } from "./constants";

export function buildLocationServiceJsonLd(
	slug: string,
	emirate: string,
	locale: string
) {
	const base = `${siteConfig.site}/${locale}`;
	const pageUrl = `${base}/${slug}`;

	return {
		"@context": "https://schema.org",
		"@type": "Service",
		name: `Generator Rental ${emirate}`,
		provider: {
			"@type": "LocalBusiness",
			name: ORGANIZATION_LEGAL_NAME,
			url: base,
			telephone: "+971502335477",
			address: {
				"@type": "PostalAddress",
				addressLocality: emirate,
				addressRegion: emirate,
				addressCountry: "AE",
			},
		},
		areaServed: {
			"@type": "AdministrativeArea",
			name: emirate,
		},
		serviceType: "Generator Rental",
		url: pageUrl,
	};
}
