import { Activity, BarChart3, Clock, MapPin } from "lucide-react";

export const getFeatures = (t: (key: string) => string) => [
	{
		title: t("items.reliable.title"),
		description: t("items.reliable.description"),
		icon: Activity,
	},
	{
		title: t("items.scalable.title"),
		description: t("items.scalable.description"),
		icon: BarChart3,
	},
	{
		title: t("items.available.title"),
		description: t("items.available.description"),
		icon: Clock,
	},
	{
		title: t("items.across.title"),
		description: t("items.across.description"),
		icon: MapPin,
	},
];
