"use client";

import dynamic from "next/dynamic";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

import { MainHero } from "./sections/main-hero";

const Advantage = dynamic(() =>
	import("./sections/advantage").then((m) => m.Advantage)
);
const GeneratorFeatures = dynamic(() =>
	import("./sections/generator-features").then((m) => m.GeneratorFeatures)
);
const Products = dynamic(() =>
	import("./sections/products").then((m) => m.Products)
);
const RentalPackages = dynamic(() =>
	import("@/features/solutions/sections/rental-packages").then(
		(m) => m.RentalPackages
	)
);
const HomeLocations = dynamic(() =>
	import("./sections/home-locations").then((m) => m.HomeLocations)
);
const Progress = dynamic(() =>
	import("./sections/progress").then((m) => m.Progress)
);
const InsightsNewsSection = dynamic(() =>
	import("@/features/insights/components/insights-news-section").then(
		(m) => m.InsightsNewsSection
	)
);
const FAQ = dynamic(() => import("./sections/faq").then((m) => m.FAQ));
const CTA = dynamic(() => import("./components/cta").then((m) => m.CTA));

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
