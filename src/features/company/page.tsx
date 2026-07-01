"use client";

import { useEffect } from "react";

import Lenis from "lenis";

import { CTA } from "@/features/home/components/cta";

import { AboutUs } from "./sections/about-us";
import { Hero } from "./sections/hero";
import { LocalFocus } from "./sections/local-focus";
import { MissionVision } from "./sections/mission-vision";
import { Values } from "./sections/values";

export function CompanyPage() {
	useEffect(() => {
		// Initialize Lenis for smooth scrolling
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
		<main className="relative min-h-screen bg-slate-50 text-slate-900">
			<Hero />
			<AboutUs />
			<LocalFocus />
			<MissionVision />
			<Values />
			<CTA />
		</main>
	);
}
