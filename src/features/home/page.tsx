"use client";

import { InsightsNewsSection } from "@/features/insights/components/insights-news-section";
import { RentalPackages } from "@/features/solutions/sections/rental-packages";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

import { CTA } from "./components/cta";
import { Advantage } from "./sections/advantage";
import { FAQ } from "./sections/faq";
import { GeneratorFeatures } from "./sections/generator-features";
import { HomeLocations } from "./sections/home-locations";
import { MainHero } from "./sections/main-hero";
import { Products } from "./sections/products";
import { Progress } from "./sections/progress";

export function HomePage() {
	useSmoothScroll();

	return (
		<main className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">
			<MainHero />
			<Advantage />
			<GeneratorFeatures />
			<Products />
			<RentalPackages />
			<HomeLocations />
			<Progress />
			<InsightsNewsSection />
			<FAQ />
			<CTA />
		</main>
	);
}
