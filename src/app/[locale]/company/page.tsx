import type { Metadata } from "next";

import { CompanyPage } from "@/features/company/page";
import { buildMetadata } from "@/lib/seo/og";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildMetadata(locale, "/company");
}

export default function Page() {
	return <CompanyPage />;
}
