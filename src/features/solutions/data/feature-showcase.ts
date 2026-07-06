export const getFeatures = (t: (key: string) => string) => [
	{
		title: t("features.small.title"),
		description: t("features.small.description"),
		points: [
			t("features.small.points.0"),
			t("features.small.points.1"),
			t("features.small.points.2"),
		],
		image: "/solutions/small-portable.webp",
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
