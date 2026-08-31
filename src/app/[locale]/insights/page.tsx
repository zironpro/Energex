import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { InsightsPage } from "@/features/insights/page";

import { getAlternates } from "@/lib/metadata";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({
		locale,
		namespace: "insights",
	});
	return {
		title: `${t("title")} | Energex Generator Rental Dubai`,
		description: t("description"),
		keywords:
			"generator rental insights Dubai, diesel generator blog UAE, power solutions news",
		alternates: getAlternates("/insights", locale),
	};
}

export default function Page() {
	return <InsightsPage />;
}
