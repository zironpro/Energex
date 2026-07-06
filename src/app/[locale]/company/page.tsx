import { getTranslations } from "next-intl/server";

import { CompanyPage } from "@/features/company/page";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const t = await getTranslations({
		locale,
		namespace: "common.Metadata.Company",
	});
	return {
		title: t("title"),
		description: t("description"),
	};
}

export default function Page() {
	return <CompanyPage />;
}
