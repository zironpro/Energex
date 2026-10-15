import type { Metadata } from "next";

import { HomePage } from "@/features/home/page";
import { buildHomeStructuredDataGraph } from "@/lib/schema/home-json-ld";
import { buildMetadata } from "@/lib/seo/og";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildMetadata(locale, "/");
}

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const homeJsonLd = buildHomeStructuredDataGraph(locale);

	return (
		<>
			<script id="home-schema" type="application/ld+json">
				{JSON.stringify(homeJsonLd)}
			</script>
			<HomePage />
		</>
	);
}
