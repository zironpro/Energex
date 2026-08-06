export const siteConfig = {
	name: "Energex Equipment",
	site: (
		process.env.NEXT_PUBLIC_SITE_URL ||
		process.env.SITE_URL ||
		"https://www.energexequip.ae"
	).replace(/\/$/, ""),
	description:
		"Leading provider of power generator rental and equipment solutions across Dubai and the UAE.",
} as const;

export type SiteConfig = typeof siteConfig;
