import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
	const url = request.nextUrl.clone();
	const host = request.headers.get("host") || "";
	const protocol = request.headers.get("x-forwarded-proto") || url.protocol.replace(':', '');
	
	// Consider it production if it's explicitly set or we're on the real domain
	const isProd = process.env.NODE_ENV === 'production' || host.includes('energexequip.ae');
	const targetHost = "www.energexequip.ae";
	
	const needsHostRedirect = isProd && (host !== targetHost || protocol !== "https");
	
	const response = intlMiddleware(request);

	// Intercept next-intl redirects to enforce 308 and one-hop domain correction
	if (response.status >= 300 && response.status < 400) {
		let location = response.headers.get("location");
		if (location) {
			if (needsHostRedirect) {
				try {
					const locUrl = new URL(location, `https://${targetHost}`);
					locUrl.protocol = "https:";
					locUrl.host = targetHost;
					locUrl.port = "";
					location = locUrl.toString();
				} catch (e) {}
			}
			return NextResponse.redirect(location, 308);
		}
	}

	// If no locale redirect happened, but the host/protocol is still wrong, fix it
	if (needsHostRedirect) {
		url.protocol = "https:";
		url.host = targetHost;
		url.port = "";
		return NextResponse.redirect(url.toString(), 308);
	}

	return response;
}
export const config = {
	// Match all pathnames except for api, _next, _vercel, sitemap.xml, robots.txt, and static files with extensions
	matcher: ["/((?!api|_next|_vercel|sitemap\\.xml|robots\\.txt|.*\\..*).*)"],
};
