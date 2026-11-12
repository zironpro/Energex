import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getTranslations, setRequestLocale } from "next-intl/server";

import { getProductBySlug, PRODUCTS } from "@/features/products/data/products";
import { ProductDetailPage } from "@/features/products/product-detail-page";
import { routing } from "@/i18n/routing";
import { buildFaqPageJsonLd } from "@/lib/schema/faq-json-ld";
import { buildProductJsonLd } from "@/lib/schema/product-json-ld";
import { buildMetadata } from "@/lib/seo/og";

export async function generateStaticParams() {
	const params: Array<{ locale: string; slug: string }> = [];

	for (const locale of routing.locales) {
		for (const product of PRODUCTS) {
			params.push({ locale, slug: product.slug });
		}
	}

	return params;
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
	const { locale, slug } = await params;
	const product = getProductBySlug(slug);

	if (!product) {
		return {
			title: "Product Not Found | Energex",
		};
	}

	return buildMetadata(locale, `/products/${slug}`);
}

export default async function Page({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>;
}) {
	const { locale, slug } = await params;

	if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
		notFound();
	}

	setRequestLocale(locale);

	const product = getProductBySlug(slug);

	if (!product) {
		notFound();
	}

	const t = await getTranslations({ locale, namespace: "products" });
	const name = t(`ProductGrid.items.${product.key}.title`);
	const description = t(`ProductGrid.items.${product.key}.description`);
	const faqs = t.raw(`ProductDetail.items.${product.key}.faqs`) as Array<{
		question: string;
		answer: string;
	}>;

	const productJsonLd = buildProductJsonLd({
		slug: product.slug,
		locale,
		name,
		description,
		image: product.image,
		kva: product.kva,
	});
	const faqJsonLd = buildFaqPageJsonLd(faqs);

	return (
		<>
			<script id={`product-schema-${slug}`} type="application/ld+json">
				{JSON.stringify(productJsonLd)}
			</script>
			<script id={`product-faq-schema-${slug}`} type="application/ld+json">
				{JSON.stringify(faqJsonLd)}
			</script>
			<ProductDetailPage slug={slug} />
		</>
	);
}

