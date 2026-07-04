"use client";

import { useEffect } from "react";

import Lenis from "lenis";

import { CTA } from "@/features/home/components/cta";

import { Hero } from "./sections/hero";
import { ProductGrid } from "./sections/product-grid";

export function ProductsPage() {
	useEffect(() => {
		// Initialize Lenis for smooth scrolling
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: 1,
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
			<ProductGrid />
			<CTA />
		</main>
	);
}
