"use client";

import { useEffect } from "react";

import Lenis from "lenis";

import { LocationCallout } from "./sections/location-callout";
import { LocationCoverage } from "./sections/location-coverage";
import { LocationCta } from "./sections/location-cta";
import { LocationEmiratesStrip } from "./sections/location-emirates-strip";
import { LocationFaq } from "./sections/location-faq";
import { LocationGeneratorRange } from "./sections/location-generator-range";
import { LocationHero } from "./sections/location-hero";
import { LocationIndustries } from "./sections/location-industries";
import { LocationIntro } from "./sections/location-intro";
import { LocationWhyChoose } from "./sections/location-why-choose";
import type { LocationPageData } from "./types";

interface LocationPageProps {
	data: LocationPageData;
}

export function LocationPage({ data }: LocationPageProps) {
	useEffect(() => {
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

	// FAQ JSON-LD Schema
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: data.faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};

	// Local Business Schema
	const localBusinessSchema = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: `Energex Equipment Rental - ${data.emirate}`,
		description: data.metaDescription,
		url: `https://www.energexequip.ae${data.url}`,
		telephone: "+97145753066",
		priceRange: "$$",
		address: {
			"@type": "PostalAddress",
			addressLocality: data.emirate,
			addressCountry: "AE",
		},
		areaServed: data.areasCovered.areasList,
	};

	return (
		<main className="relative min-h-screen bg-slate-50 text-slate-900">
			{/* Inject Structured Data */}
			<script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
			<script type="application/ld+json">
				{JSON.stringify(localBusinessSchema)}
			</script>

			{/* HERO SECTION - Styled like Products / Company Hero */}
			<LocationHero data={data} />

			{/* MAIN INTRO CONTENT SECTION - Positioned right under Hero */}
			<LocationIntro data={data} />

			{/* EMIRATES SWITCHER NAVIGATION STRIP */}
			<LocationEmiratesStrip currentSlug={data.slug} />

			{/* WHY CHOOSE ENERGEX IN EMIRATE */}
			<LocationWhyChoose emirate={data.emirate} whyChoose={data.whyChoose} />

			{/* OUR GENERATOR RANGE IN EMIRATE */}
			<LocationGeneratorRange
				emirate={data.emirate}
				generatorRange={data.generatorRange}
			/>

			{/* INDUSTRIES WE SERVE IN EMIRATE */}
			<LocationIndustries emirate={data.emirate} industries={data.industries} />

			{/* AREAS WE COVER IN EMIRATE */}
			<LocationCoverage areasCovered={data.areasCovered} />

			{/* FAST CALLOUT BANNER */}
			<LocationCallout emirate={data.emirate} />

			{/* FREQUENTLY ASKED QUESTIONS */}
			<LocationFaq emirate={data.emirate} faqs={data.faqs} />

			{/* BOTTOM CTA SECTION - Styled like site-wide CTA */}
			<LocationCta emirate={data.emirate} />
		</main>
	);
}
