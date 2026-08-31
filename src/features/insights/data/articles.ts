import enInsights from "../../../../messages/en/insights.json";

export interface Article {
	id: string;
	key: string;
	image: string;
	categoryKey: string;
	date: string;
}

export const ARTICLES: Article[] = Object.entries(enInsights.articles).map(
	([key, data]) => ({
		id: (data as any).id,
		key,
		image: (data as any).image,
		categoryKey: (data as any).categoryKey,
		date: (data as any).date,
	})
);
