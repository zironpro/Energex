export const getIndustries = (t: (key: string) => string) => [
	{
		title: t("items.construction.title"),
		description: t("items.construction.description"),
		image: "/progress/construction.webp",
	},
	{
		title: t("items.oilgas.title"),
		description: t("items.oilgas.description"),
		image: "/progress/oil-&-gas.webp",
	},
	{
		title: t("items.events.title"),
		description: t("items.events.description"),
		image: "/progress/events.webp",
	},
	{
		title: t("items.logistics.title"),
		description: t("items.logistics.description"),
		image: "/progress/logistics.webp",
	},
];

export const bentoLayouts = [
	"md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[600px]",
	"md:col-span-1 md:row-span-2 min-h-[400px] md:min-h-[600px]",
	"md:col-span-1 md:row-span-1 min-h-[250px] md:min-h-[288px]",
	"md:col-span-1 md:row-span-1 min-h-[250px] md:min-h-[288px]",
];
