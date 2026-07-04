import React from "react";

import { BarChart, Headset, Truck } from "lucide-react";

export const services = [
	{
		title: "Strategic Assessment",
		description:
			"Expert load calculation to optimise efficiency and performance.",
		icon: React.createElement(BarChart, { className: "h-6 w-6 text-blue-600" }),
	},
	{
		title: "Logistics & Installation",
		description:
			"Precision delivery and professionals on-site setup for operational readiness.",
		icon: React.createElement(Truck, { className: "h-6 w-6 text-blue-600" }),
	},
	{
		title: "24/7 Support",
		description: "Rapid-response technicians ready to troubleshoot any issue.",
		icon: React.createElement(Headset, { className: "h-6 w-6 text-blue-600" }),
	},
];
