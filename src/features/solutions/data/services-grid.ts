import React from "react";

import { BarChart, Headset, Truck } from "lucide-react";

export const getServices = (t: (key: string) => string) => [
	{
		title: t("items.assessment.title"),
		description: t("items.assessment.description"),
		icon: React.createElement(BarChart, { className: "h-6 w-6 text-blue-600" }),
	},
	{
		title: t("items.logistics.title"),
		description: t("items.logistics.description"),
		icon: React.createElement(Truck, { className: "h-6 w-6 text-blue-600" }),
	},
	{
		title: t("items.support.title"),
		description: t("items.support.description"),
		icon: React.createElement(Headset, { className: "h-6 w-6 text-blue-600" }),
	},
];
