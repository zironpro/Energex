export interface IndustryItem {
	title: string;
	description: string;
	iconName:
		| "construction"
		| "event"
		| "commercial"
		| "oilGas"
		| "factory"
		| "backup";
}

export interface FAQItem {
	question: string;
	answer: string;
}

export interface LocationPageData {
	slug: string;
	emirate: string;
	url: string;
	title: string;
	metaDescription: string;
	h1: string;
	intro: string;
	whyChoose: {
		title: string;
		points: string[];
	};
	generatorRange: {
		title: string;
		description: string;
		capacities: string[];
	};
	industries: {
		title: string;
		items: IndustryItem[];
	};
	areasCovered: {
		title: string;
		description: string;
		areasList: string[];
	};
	callout: string;
	faqs: FAQItem[];
}
