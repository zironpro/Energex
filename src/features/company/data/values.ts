import { Lightbulb, ShieldCheck, Users, Zap } from "lucide-react";

export const getValues = (t: (key: string) => string) => [
	{
		title: t("items.reliability.title"),
		description: t("items.reliability.description"),
		icon: ShieldCheck,
	},
	{
		title: t("items.efficiency.title"),
		description: t("items.efficiency.description"),
		icon: Zap,
	},
	{
		title: t("items.partnership.title"),
		description: t("items.partnership.description"),
		icon: Users,
	},
	{
		title: t("items.innovation.title"),
		description: t("items.innovation.description"),
		icon: Lightbulb,
	},
];
