"use client";

import { useEffect } from "react";

import Lenis from "lenis";

import { CTA } from "@/features/home/components/cta";

import { FeatureShowcase } from "./sections/feature-showcase";
import { Hero } from "./sections/hero";
import { ServicesGrid } from "./sections/services-grid";

export function SolutionsPage() {
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

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return (
		<main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
			<Hero />
			<ServicesGrid />
			<FeatureShowcase />
			<CTA />
		</main>
	);
}
