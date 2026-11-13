export interface HeroStat {
	value: string;
	label: string;
	desc: string;
}

export interface WhyChooseItem {
	title: string;
	description: string;
}

export interface CraneCompatibilityItem {
	title: string;
	description: string;
	icon:
		| "construction"
		| "commercial"
		| "factory"
		| "oilGas"
		| "event"
		| "backup";
}

export interface TechnicalSpecItem {
	label: string;
	value: string;
}

export interface ServiceFaqItem {
	question: string;
	answer: string;
}

export interface ServicePageData {
	slug: string;
	image?: string;
	badge: string;
	title: string;
	subtitle: string;
	metaDescription: string;
	h1: string;
	introHeading?: string;
	heroStats: HeroStat[];
	intro: string[];
	whyChoose: WhyChooseItem[];
	craneCompatibility: CraneCompatibilityItem[];
	technicalSpecs: TechnicalSpecItem[];
	includedServices: string[];
	deploymentAreas: string[];
	callout: {
		title: string;
		subtitle: string;
		buttonText: string;
	};
	faqs: ServiceFaqItem[];
	seoContent: {
		heading: string;
		paragraphs: string[];
	};
}
