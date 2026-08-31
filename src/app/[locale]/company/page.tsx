import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { CompanyPage } from "@/features/company/page";

import { getAlternates } from "@/lib/metadata";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({
		locale,
		namespace: "common.Metadata.Company",
	});
	return {
		title: t("title"),
		description: t("description"),
		keywords: t("keywords"),
		alternates: getAlternates("/company", locale),
	};
}

export default function Page() {
	return <CompanyPage />;
}
