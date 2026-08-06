"use client";

import { CTA } from "@/features/home/components/cta";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

import { FeatureShowcase } from "./sections/feature-showcase";
import { Hero } from "./sections/hero";
import { RentalPackages } from "./sections/rental-packages";
import { ServicesGrid } from "./sections/services-grid";

export function SolutionsPage() {
	useSmoothScroll();

	return (
		<main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
			<Hero />
			<ServicesGrid />
			<FeatureShowcase />
			<RentalPackages />
			<CTA />
		</main>
	);
}
