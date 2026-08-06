import { HomePage } from "@/features/home/page";
import { buildHomeStructuredDataGraph } from "@/lib/schema/home-json-ld";

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const homeJsonLd = buildHomeStructuredDataGraph(locale);

	return (
		<>
			<script id="home-schema" type="application/ld+json">
				{JSON.stringify(homeJsonLd)}
			</script>
			<HomePage />
		</>
	);
}
