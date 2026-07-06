import React from "react";

import { Calendar, Clock, Handshake } from "lucide-react";

export const getPackages = (t: (key: string) => string) => [
	{
		title: t("items.short.title"),
		description: t("items.short.description"),
		image: "/images/about.webp",
		icon: React.createElement(Clock, { className: "h-6 w-6 text-blue-600" }),
	},
	{
		title: t("items.long.title"),
		description: t("items.long.description"),
		image: "/images/mission.webp",
		icon: React.createElement(Calendar, { className: "h-6 w-6 text-blue-600" }),
	},
	{
		title: t("items.custom.title"),
		description: t("items.custom.description"),
		image: "/images/vision.webp",
		icon: React.createElement(Handshake, {
			className: "h-6 w-6 text-blue-600",
		}),
	},
];
