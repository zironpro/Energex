import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { CompanyPage } from "@/features/company/page";

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
	};
}

export default function Page() {
	return <CompanyPage />;
}
