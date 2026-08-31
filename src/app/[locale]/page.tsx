import { HomePage } from "@/features/home/page";
import { buildHomeStructuredDataGraph } from "@/lib/schema/home-json-ld";

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAlternates } from "@/lib/metadata";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "common.Metadata" });

	return {
		title: t("title"),
		description: t("description"),
		alternates: getAlternates("/", locale),
	};
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
