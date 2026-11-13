export interface FeatureItem {
	title: string;
	description: string;
	points: string[];
	image: string;
	serviceHref?: string;
	serviceLinkText?: string;
}

export const getFeatures = (t: (key: string) => string): FeatureItem[] => [
	{
		title: t("features.small.title"),
		description: t("features.small.description"),
		points: [
			t("features.small.points.0"),
			t("features.small.points.1"),
			t("features.small.points.2"),
		],
		image: "/solutions/small-portable.webp",
		serviceHref: "/solutions/100-kva-generator-for-tower-crane",
		serviceLinkText: t("features.small.serviceLink"),
	},
	{
		title: t("features.medium.title"),
		description: t("features.medium.description"),
		points: [
			t("features.medium.points.0"),
			t("features.medium.points.1"),
			t("features.medium.points.2"),
		],
		image: "/solutions/medium-generator.webp",
	},
	{
		title: t("features.large.title"),
		description: t("features.large.description"),
		points: [
			t("features.large.points.0"),
			t("features.large.points.1"),
			t("features.large.points.2"),
		],
		image: "/solutions/containerised-generator.webp",
	},
];
