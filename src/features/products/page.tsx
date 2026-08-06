"use client";

import { CTA } from "@/features/home/components/cta";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

import { Hero } from "./sections/hero";
import { ProductGrid } from "./sections/product-grid";

export function ProductsPage() {
	useSmoothScroll();

	return (
		<main className="relative min-h-screen bg-slate-50 text-slate-900">
			<Hero />
			<ProductGrid />
			<CTA />
		</main>
	);
}
