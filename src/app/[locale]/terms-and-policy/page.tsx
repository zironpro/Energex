import type { Metadata } from "next";

import { TermsAndPolicyPage } from "@/features/terms-and-policy/page";
import { buildMetadata } from "@/lib/seo/og";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildMetadata(locale, "/terms-and-policy");
}

export default function Page() {
	return <TermsAndPolicyPage />;
}
