import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { SolutionsPage } from "@/features/solutions/page";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({
		locale,
		namespace: "common.Metadata.Solutions",
	});
	return {
		title: t("title"),
		description: t("description"),
		keywords: t("keywords"),
	};
}

export default function Solutions() {
	return <SolutionsPage />;
}
