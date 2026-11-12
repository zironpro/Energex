import { siteConfig } from "@/constants/site-config";

import { ORGANIZATION_LEGAL_NAME } from "./constants";

interface BuildProductJsonLdInput {
	slug: string;
	locale: string;
	name: string;
	description: string;
	image: string;
	kva: number;
}

export function buildProductJsonLd({
	slug,
	locale,
	name,
	description,
	image,
	kva,
}: BuildProductJsonLdInput) {
	const base = `${siteConfig.site}/${locale}`;
	const pageUrl = `${base}/products/${slug}`;
	const imageUrl = `${siteConfig.site}${image}`;

	return {
		"@context": "https://schema.org",
		"@type": "Product",
		name,
		description,
		image: imageUrl,
		sku: `ENERGEX-${kva}KVA`,
		brand: {
			"@type": "Brand",
			name: ORGANIZATION_LEGAL_NAME,
		},
		category: "Diesel Generator Rental",
		url: pageUrl,
		offers: {
			"@type": "Offer",
			url: pageUrl,
			availability: "https://schema.org/InStock",
			priceCurrency: "AED",
			areaServed: {
				"@type": "Country",
				name: "United Arab Emirates",
			},
			seller: {
				"@type": "Organization",
				name: ORGANIZATION_LEGAL_NAME,
			},
		},
	};
}

