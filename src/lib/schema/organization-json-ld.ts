import { siteConfig } from "@/constants/site-config";
import {
	ORGANIZATION_ALTERNATE_NAME,
	ORGANIZATION_DESCRIPTION,
	ORGANIZATION_LEGAL_NAME,
	ORGANIZATION_LOGO_URL,
	ORGANIZATION_SAME_AS,
} from "./constants";
import { organizationSchemaId } from "./ids";

export function buildOrganizationJsonLd(locale: string) {
	const lang = locale === "ar" ? "ar" : "en";
	const homeUrl = `${siteConfig.site}/${locale}`;

	const primaryContact = {
		"@type": "ContactPoint",
		contactType: "customer service",
		telephone: "+971502335477",
		email: "info@energexequip.ae",
		areaServed: "AE",
		availableLanguage: ["en", "ar"],
	};

	const address = {
		"@type": "PostalAddress",
		streetAddress: "Al Qusais Industrial Area 2, Plot No 238-0",
		addressLocality: "Dubai",
		addressRegion: "Dubai",
		postalCode: "",
		addressCountry: "AE",
	};

	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": organizationSchemaId(),
		name: ORGANIZATION_LEGAL_NAME,
		alternateName: ORGANIZATION_ALTERNATE_NAME,
		url: homeUrl,
		logo: {
			"@type": "ImageObject",
			url: ORGANIZATION_LOGO_URL,
		},
		description: ORGANIZATION_DESCRIPTION[lang],
		sameAs: [...ORGANIZATION_SAME_AS],
		contactPoint: [primaryContact],
		address,
	};
}
