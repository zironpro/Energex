import { ARTICLES } from "@/features/insights/data/articles";
import { routing } from "@/i18n/routing";

const BASE_URL =
	process.env.NEXT_PUBLIC_SITE_URL ||
	process.env.SITE_URL ||
	"https://www.energexequip.ae";

const LAST_MODIFIED = "2026-07-21T06:02:39.000Z";

interface RouteConfig {
	path: string;
	priority: number;
	changeFrequency: string;
}

const staticRoutes: RouteConfig[] = [
	{ path: "", priority: 1, changeFrequency: "daily" },
	{ path: "solutions", priority: 0.8, changeFrequency: "daily" },
	{ path: "products", priority: 0.8, changeFrequency: "daily" },
	{ path: "company", priority: 0.8, changeFrequency: "daily" },
	{ path: "insights", priority: 0.8, changeFrequency: "daily" },
	{ path: "contact", priority: 0.8, changeFrequency: "daily" },
	{ path: "terms-and-policy", priority: 0.8, changeFrequency: "daily" },
];

export async function GET() {
	const allRoutes: RouteConfig[] = [
		...staticRoutes,
		...ARTICLES.map((article) => ({
			path: `insights/${article.id}`,
			priority: 0.7,
			changeFrequency: "weekly",
		})),
	];

	let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
	xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

	for (const locale of routing.locales) {
		for (const route of allRoutes) {
			const routeSegment = route.path ? `/${route.path}` : "";
			const url = `${BASE_URL}/${locale}${routeSegment}`;

			xml += "  <url>\n";
			xml += `    <loc>${url}</loc>\n`;
			xml += `    <lastmod>${LAST_MODIFIED}</lastmod>\n`;
			xml += `    <changefreq>${route.changeFrequency}</changefreq>\n`;
			xml += `    <priority>${route.priority}</priority>\n`;
			xml += "  </url>\n";
		}
	}

	xml += "</urlset>\n";

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
		},
	});
}
