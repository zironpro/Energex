"use client";

import { usePathname } from "next/navigation";

export function AlternateLinks() {
	const pathname = usePathname() || "";
	const baseUrl =
		process.env.NEXT_PUBLIC_SITE_URL ||
		process.env.SITE_URL ||
		"https://www.energexequip.ae";
	
	// Normalize baseUrl to not have trailing slash
	const base = baseUrl.replace(/\/$/, "");
	
	// Remove leading /en or /ar from pathname
	let cleanPath = pathname;
	if (cleanPath.startsWith("/en")) {
		cleanPath = cleanPath.slice(3);
	} else if (cleanPath.startsWith("/ar")) {
		cleanPath = cleanPath.slice(3);
	}
	
	// Ensure pathname has a leading slash
	const path = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
	
	// If path is exactly "/", we don't need to append an extra slash
	const normalizedPath = path === "/" ? "" : path;

	return (
		<>
			<link href={`${base}/en${normalizedPath}`} hrefLang="en" rel="alternate" />
			<link href={`${base}/ar${normalizedPath}`} hrefLang="ar" rel="alternate" />
			<link href={`${base}/en${normalizedPath}`} hrefLang="x-default" rel="alternate" />
		</>
	);
}
