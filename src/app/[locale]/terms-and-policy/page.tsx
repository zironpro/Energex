import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { TermsAndPolicyPage } from "@/features/terms-and-policy/page";

import { getAlternates } from "@/lib/metadata";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({
		locale,
		namespace: "common.Metadata.Terms",
	});
	return {
		title: t("title"),
		description: t("description"),
		keywords: t("keywords"),
		alternates: getAlternates("/terms-and-policy", locale),
	};
}

export default function Page() {
	return <TermsAndPolicyPage />;
}
