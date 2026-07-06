import {
	BatteryCharging,
	CalendarClock,
	Headphones,
	ShieldCheck,
	Truck,
	Zap,
} from "lucide-react";

export const getCards = (t: (key: string) => string) => [
	{
		title: t("items.uaeReady.title"),
		description: t("items.uaeReady.description"),
		icon: ShieldCheck,
		image: "/advantage/total-reliability.webp",
	},
	{
		title: t("items.range.title"),
		description: t("items.range.description"),
		icon: BatteryCharging,
		image: "/advantage/smart-engineering.webp",
	},
	{
		title: t("items.reliableOutput.title"),
		description: t("items.reliableOutput.description"),
		icon: Zap,
		image: "/advantage/expert-consulting.webp",
	},
	{
		title: t("items.flexible.title"),
		description: t("items.flexible.description"),
		icon: CalendarClock,
		image: "/advantage/flexible-packages.webp",
	},
	{
		title: t("items.fast.title"),
		description: t("items.fast.description"),
		icon: Truck,
		image: "/advantage/rapid-delivery.webp",
	},
	{
		title: t("items.support.title"),
		description: t("items.support.description"),
		icon: Headphones,
		image: "/advantage/total-reliability.webp",
	},
];
