"use client";

import { CTA } from "@/features/home/components/cta";
import { InsightsNewsSection } from "@/features/insights/components/insights-news-section";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

import { AboutUs } from "./sections/about-us";
import { Hero } from "./sections/hero";
import { LocalFocus } from "./sections/local-focus";
import { MissionVision } from "./sections/mission-vision";
import { Values } from "./sections/values";

export function CompanyPage() {
	useSmoothScroll();

	return (
		<main className="relative min-h-screen bg-slate-50 text-slate-900">
			<Hero />
			<AboutUs />
			<LocalFocus />
			<MissionVision />
			<Values />
			<InsightsNewsSection theme="light" />
			<CTA />
		</main>
	);
}
