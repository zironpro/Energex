import type { Metadata } from "next";

import { SolutionsPage } from "@/features/solutions/page";
import { buildMetadata } from "@/lib/seo/og";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildMetadata(locale, "/solutions");
}

export default function Solutions() {
	return <SolutionsPage />;
}
