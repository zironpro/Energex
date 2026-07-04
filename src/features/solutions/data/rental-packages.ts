import React from "react";

import { Calendar, Clock, Handshake } from "lucide-react";

export const packages = [
	{
		title: "Short-Term Projects",
		description: "Agile solutions for events or emergencies.",
		icon: React.createElement(Clock, { className: "h-6 w-6 text-blue-600" }),
	},
	{
		title: "Long-Term Contracts",
		description: "Cost-effective, scalable power for multi-year projects.",
		icon: React.createElement(Calendar, { className: "h-6 w-6 text-blue-600" }),
	},
	{
		title: "Custom Partnerships",
		description: "Bespoke sub-rental agreements for equipment providers.",
		icon: React.createElement(Handshake, {
			className: "h-6 w-6 text-blue-600",
		}),
	},
];
