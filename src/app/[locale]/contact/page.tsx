import type { Metadata } from "next";

import { ContactPage } from "@/features/contact/page";
import { buildMetadata } from "@/lib/seo/og";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildMetadata(locale, "/contact");
}

export default function Page() {
	return <ContactPage />;
}
