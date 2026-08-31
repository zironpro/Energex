import { siteConfig } from "@/constants/site-config";
import { routing } from "@/i18n/routing";

export function getAlternates(pathname: string, locale: string) {
	const baseUrl = siteConfig.site.replace(/\/$/, "");
	
	const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
	const pathSuffix = normalizedPath === "/" ? "" : normalizedPath;

	const canonical = `${baseUrl}/${locale}${pathSuffix}`;
	
	const languages: Record<string, string> = {};
	for (const loc of routing.locales) {
		languages[loc] = `${baseUrl}/${loc}${pathSuffix}`;
	}
	languages["x-default"] = `${baseUrl}/en${pathSuffix}`;

	return {
		canonical,
		languages,
	};
}
