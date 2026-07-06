export const getSections = (t: (key: string) => string) => [
	{
		label: t("items.mission.label"),
		title: t("items.mission.title"),
		desc: t("items.mission.desc"),
		image: "/images/mission.webp",
	},
	{
		label: t("items.vision.label"),
		title: t("items.vision.title"),
		desc: t("items.vision.desc"),
		image: "/images/vision.webp",
	},
];
