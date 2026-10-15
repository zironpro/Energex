import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleDetailPage } from "@/features/insights/article-detail-page";
import { ARTICLES } from "@/features/insights/data/articles";
import { routing } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/og";

export async function generateStaticParams() {
	const params: Array<{ locale: string; id: string }> = [];

	for (const locale of routing.locales) {
		for (const article of ARTICLES) {
			params.push({ locale, id: article.id });
		}
	}

	return params;
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
	const { locale, id } = await params;
	const article = ARTICLES.find((a) => a.id === id);

	if (!article) {
		return {
			title: "Article Not Found | Energex",
		};
	}

	return buildMetadata(locale, `/insights/${id}`);
}

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const article = ARTICLES.find((a) => a.id === id);

	if (!article) {
		notFound();
	}

	return <ArticleDetailPage id={id} />;
}
