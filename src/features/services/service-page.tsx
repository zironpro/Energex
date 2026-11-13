"use client";

import { CTA } from "@/features/home/components/cta";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

import { ServiceCompatibility } from "./sections/service-compatibility";
import { ServiceCoverage } from "./sections/service-coverage";
import { ServiceFaq } from "./sections/service-faq";
import { ServiceHero } from "./sections/service-hero";
import { ServiceIntro } from "./sections/service-intro";
import { ServiceRelated } from "./sections/service-related";
import { ServiceSpecs } from "./sections/service-specs";
import { ServiceWhyChoose } from "./sections/service-why-choose";
import type { ServicePageData } from "./types";

interface ServicePageProps {
	data: ServicePageData;
}

export function ServicePage({ data }: ServicePageProps) {
	useSmoothScroll();

	return (
		<main className="relative min-h-screen bg-slate-50 text-slate-900">
			{/* HERO SECTION */}
			<ServiceHero data={data} />

			{/* INTRO SECTION WITH STATS AND CRANE POWER OVERVIEW */}
			<ServiceIntro data={data} />

			{/* WHY CHOOSE ENERGEX FOR TOWER CRANES */}
			<ServiceWhyChoose whyChoose={data.whyChoose} />

			{/* CRANE COMPATIBILITY AND LIFTING APPLICATIONS */}
			<ServiceCompatibility compatibility={data.craneCompatibility} />

			{/* TECHNICAL SPECIFICATIONS & TURNKEY INCLUDED SERVICES */}
			<ServiceSpecs
				includedServices={data.includedServices}
				technicalSpecs={data.technicalSpecs}
			/>

			{/* RAPID DEPLOYMENT AREAS */}
			<ServiceCoverage deploymentAreas={data.deploymentAreas} />

			{/* FREQUENTLY ASKED QUESTIONS */}
			<ServiceFaq faqs={data.faqs} />

			{/* RELATED GENERATOR SIZES */}
			<ServiceRelated />

			{/* BOTTOM HIGH-CONVERSION CTA */}
			<CTA />
		</main>
	);
}
