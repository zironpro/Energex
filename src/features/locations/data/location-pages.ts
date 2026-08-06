import type { LocationPageData } from "../types";

export interface LocationMeta {
	slug: string;
	emirateEn: string;
	emirateAr: string;
}

export const LOCATION_PAGES_META: LocationMeta[] = [
	{
		slug: "generator-rental-dubai",
		emirateEn: "Dubai",
		emirateAr: "دبي",
	},
	{
		slug: "generator-rental-abu-dhabi",
		emirateEn: "Abu Dhabi",
		emirateAr: "أبو ظبي",
	},
	{
		slug: "generator-rental-sharjah",
		emirateEn: "Sharjah",
		emirateAr: "الشارقة",
	},
	{
		slug: "generator-rental-ajman",
		emirateEn: "Ajman",
		emirateAr: "عجمان",
	},
	{
		slug: "generator-rental-umm-al-quwain",
		emirateEn: "Umm Al Quwain",
		emirateAr: "أم القيوين",
	},
	{
		slug: "generator-rental-ras-al-khaimah",
		emirateEn: "Ras Al Khaimah",
		emirateAr: "رأس الخيمة",
	},
	{
		slug: "generator-rental-fujairah",
		emirateEn: "Fujairah",
		emirateAr: "الفجيرة",
	},
	{
		slug: "generator-rental-al-ain",
		emirateEn: "Al Ain",
		emirateAr: "العين",
	},
];

export const LOCATION_PAGES = LOCATION_PAGES_META.map((loc) => ({
	slug: loc.slug,
	emirate: loc.emirateEn,
	url: `/en/${loc.slug}`,
}));

export async function getLocationDataBySlug(
	slug: string,
	locale = "en"
): Promise<LocationPageData | undefined> {
	try {
		const validLocale = locale === "ar" ? "ar" : "en";
		const messages = (
			await import(`../../../../messages/${validLocale}/locations.json`)
		).default;
		return (messages as unknown as Record<string, LocationPageData>)[slug];
	} catch {
		const fallbackMessages = (
			await import("../../../../messages/en/locations.json")
		).default;
		return (fallbackMessages as unknown as Record<string, LocationPageData>)[
			slug
		];
	}
}
