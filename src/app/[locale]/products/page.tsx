import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { ProductsPage } from "@/features/products/page";

import { getAlternates } from "@/lib/metadata";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({
		locale,
		namespace: "common.Metadata.Products",
	});
	return {
		title: t("title"),
		description: t("description"),
		keywords: t("keywords"),
		alternates: getAlternates("/products", locale),
	};
}

export default function Products() {
	return <ProductsPage />;
}
