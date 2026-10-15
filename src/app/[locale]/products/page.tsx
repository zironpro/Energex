import type { Metadata } from "next";

import { ProductsPage } from "@/features/products/page";
import { buildMetadata } from "@/lib/seo/og";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildMetadata(locale, "/products");
}

export default function Products() {
	return <ProductsPage />;
}
