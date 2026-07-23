"use client";

import { useEffect } from "react";

import Lenis from "lenis";

import { InsightsNewsSection } from "@/features/insights/components/insights-news-section";
import { RentalPackages } from "@/features/solutions/sections/rental-packages";

import { CTA } from "./components/cta";
import { Intro } from "./components/intro";
import { Advantage } from "./sections/advantage";
import { FAQ } from "./sections/faq";
import { GeneratorFeatures } from "./sections/generator-features";
import { MainHero } from "./sections/main-hero";
import { Products } from "./sections/products";
import { Progress } from "./sections/progress";

export function HomePage() {
	useEffect(() => {
		// Initialize Lenis for smooth scrolling
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like easing
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: 1,
		});

		let timer: NodeJS.Timeout;
		const introPlayed = sessionStorage.getItem("introPlayed");

		if (!introPlayed) {
			// Force page to top and disable scrolling during intro
			window.scrollTo(0, 0);
			lenis.stop();
			document.body.style.overflow = "";

			// Re-enable scrolling when intro finishes
			timer = setTimeout(() => {
				lenis.start();
				document.body.style.overflow = "";
				sessionStorage.setItem("introPlayed", "true");
			}, 2500);
		}

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			if (timer) clearTimeout(timer);
			lenis.destroy();
			document.body.style.overflow = "";
		};
	}, []);

	return (
		<main className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">
			<Intro />
			<MainHero />
			{/* <StoryScroll /> */}
			<Advantage />
			<GeneratorFeatures />
			<Products />
			<RentalPackages />
			<Progress />
			<InsightsNewsSection />
			<FAQ />
			<CTA />
		</main>
	);
}
