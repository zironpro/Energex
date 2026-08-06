import { siteConfig } from "@/constants/site-config";

export function organizationSchemaId(baseUrl = siteConfig.site) {
	return `${baseUrl}#organization`;
}
