import type { ServicePageData } from "../types";

export interface ServiceMeta {
	slug: string;
	url: string;
	solutionUrl: string;
}

export const SERVICE_PAGES_META: ServiceMeta[] = [
	{
		slug: "100-kva-generator-for-tower-crane",
		url: "/100-kva-generator-for-tower-crane",
		solutionUrl: "/solutions/100-kva-generator-for-tower-crane",
	},
];

export const SERVICE_PAGES = SERVICE_PAGES_META.map((item) => ({
	slug: item.slug,
	url: item.url,
	solutionUrl: item.solutionUrl,
}));

export async function getServiceDataBySlug(
	slug: string,
	locale = "en"
): Promise<ServicePageData | undefined> {
	try {
		const validLocale = locale === "ar" ? "ar" : "en";
		const messages = (
			await import(`../../../../messages/${validLocale}/services.json`)
		).default;
		return (messages as unknown as Record<string, ServicePageData>)[slug];
	} catch {
		const fallbackMessages = (
			await import("../../../../messages/en/services.json")
		).default;
		return (fallbackMessages as unknown as Record<string, ServicePageData>)[
			slug
		];
	}
}
