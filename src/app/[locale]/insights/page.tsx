import type { Metadata } from "next";

import { InsightsPage } from "@/features/insights/page";
import { buildMetadata } from "@/lib/seo/og";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildMetadata(locale, "/insights");
}

export default function Page() {
	return <InsightsPage />;
}
