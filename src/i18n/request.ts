import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	// This typically corresponds to the `[locale]` segment
	let locale = await requestLocale;

	// Ensure that a valid locale is used
	if (
		!locale ||
		!routing.locales.includes(locale as (typeof routing.locales)[number])
	) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: {
			common: (await import(`../../messages/${locale}/common.json`)).default,
			home: (await import(`../../messages/${locale}/home.json`)).default,
			solutions: (await import(`../../messages/${locale}/solutions.json`))
				.default,
			products: (await import(`../../messages/${locale}/products.json`))
				.default,
			company: (await import(`../../messages/${locale}/company.json`)).default,
			contact: (await import(`../../messages/${locale}/contact.json`)).default,
			insights: (await import(`../../messages/${locale}/insights.json`))
				.default,
		},
	};
});
