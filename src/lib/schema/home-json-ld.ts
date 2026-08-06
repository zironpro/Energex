import { siteConfig } from "@/constants/site-config";

import { ORGANIZATION_LEGAL_NAME } from "./constants";
import { organizationSchemaId } from "./ids";

export function buildHomeStructuredDataGraph(locale: string) {
	const base = `${siteConfig.site}/${locale}`;

	const webSite = {
		"@type": "WebSite",
		"@id": `${base}#website`,
		name: ORGANIZATION_LEGAL_NAME,
		url: base,
		inLanguage: locale,
		publisher: { "@id": organizationSchemaId() },
	};

	const catalog = {
		"@type": "OfferCatalog",
		"@id": `${base}#service-offer-catalog`,
		name:
			locale === "ar"
				? `كتالوج خدمات ${ORGANIZATION_LEGAL_NAME}`
				: `${ORGANIZATION_LEGAL_NAME} — Power Generator Solutions`,
		url: `${base}#service-offer-catalog`,
		provider: { "@id": organizationSchemaId() },
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				item: {
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Diesel Generator Rental Dubai",
						description:
							"Silent and prime diesel generator rental from 15 kVA to 1500 kVA for construction, industrial, and event operations across the UAE.",
						url: `${base}/products`,
					},
				},
			},
			{
				"@type": "ListItem",
				position: 2,
				item: {
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "24/7 Emergency Backup Power",
						description:
							"Rapid dispatch 24/7 generator backup power solutions for emergency and planned outages.",
						url: `${base}/solutions`,
					},
				},
			},
		],
	};

	return {
		"@context": "https://schema.org",
		"@graph": [webSite, catalog],
	};
}
