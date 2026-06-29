"use client";

import { useEffect } from "react";

import Lenis from "lenis";

import { CTA } from "./components/cta";
import { Intro } from "./components/intro";
import { Advantage } from "./sections/advantage";
import { FAQ } from "./sections/faq";
import { Hero } from "./sections/hero";
import { Progress } from "./sections/progress";
import { StoryScroll } from "./sections/story-scroll";

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
			touchMultiplier: 2,
		});

		// Force page to top and disable scrolling during intro
		window.scrollTo(0, 0);
		lenis.stop();
		document.body.style.overflow = "hidden";

		// Re-enable scrolling when intro finishes
		const timer = setTimeout(() => {
			lenis.start();
			document.body.style.overflow = "";
		}, 2500);

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			clearTimeout(timer);
			lenis.destroy();
		};
	}, []);

	return (
		<main className="relative min-h-screen bg-[#050505] text-white">
			<Intro />
			<StoryScroll />
			<Hero />
			<Advantage />
			<Progress />
			<FAQ />
			<CTA />
		</main>
	);
}
