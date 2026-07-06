import { getTranslations } from "next-intl/server";

import { ContactPage } from "@/features/contact/page";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const t = await getTranslations({
		locale,
		namespace: "common.Metadata.Contact",
	});
	return {
		title: t("title"),
		description: t("description"),
	};
}

export default function Page() {
	return <ContactPage />;
}
