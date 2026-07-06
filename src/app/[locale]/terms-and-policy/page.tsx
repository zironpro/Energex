import { getTranslations } from "next-intl/server";

import { TermsAndPolicyPage } from "@/features/terms-and-policy/page";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const t = await getTranslations({
		locale,
		namespace: "common.Metadata.Terms",
	});
	return {
		title: t("title"),
		description: t("description"),
	};
}

export default function Page() {
	return <TermsAndPolicyPage />;
}
