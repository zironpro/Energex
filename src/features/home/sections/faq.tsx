import Image from "next/image";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
	{
		id: "item-0",
		question: "What types of power solutions do you provide?",
		answer:
			"We provide a comprehensive range of power solutions including diesel generators, hybrid power systems, and customized distribution networks for construction, events, and industrial sites.",
	},
	{
		id: "item-1",
		question: "Do you offer 24/7 technical support?",
		answer:
			"Yes, our expert engineering team is available 24/7 to ensure uninterrupted power supply and provide immediate assistance for any technical issues on site.",
	},
	{
		id: "item-2",
		question: "How quickly can you deploy equipment to our site?",
		answer:
			"With our extensive fleet and strategic locations across the UAE, we can mobilize and deploy equipment rapidly, often within 24 hours for emergency requirements.",
	},
	{
		id: "item-3",
		question: "Can you support large-scale events?",
		answer:
			"Absolutely. We have extensive experience powering major festivals, concerts, and corporate events with reliable, synchronized backup power systems to ensure zero downtime.",
	},
	{
		id: "item-4",
		question: "Do you offer environmentally friendly power options?",
		answer:
			"Yes, we are committed to sustainability and offer hybrid power solutions, solar generators, and battery energy storage systems (BESS) to reduce carbon footprint and fuel consumption.",
	},
	{
		id: "item-5",
		question: "Are your generators soundproof?",
		answer:
			"Yes, all our generators come with custom-built acoustic enclosures to ensure minimal noise disruption, making them perfect for residential areas, events, and film sets.",
	},
	{
		id: "item-6",
		question: "Do you provide fuel management services?",
		answer:
			"We offer comprehensive fuel management and delivery services. Our team monitors your fuel levels and schedules deliveries to ensure your power supply remains uninterrupted.",
	},
];

export function FAQ() {
	return (
		<section className="bg-slate-50 py-12 text-slate-900">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
					{/* Left Column */}
					<div className="sticky top-24 flex h-fit flex-col lg:col-span-5">
						<h2 className="mb-12 font-bold text-5xl text-slate-900 tracking-tighter md:text-6xl">
							Frequently asked
							<br />
							questions
						</h2>

						<div className="mt-auto rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
							<h3 className="mb-3 font-bold text-2xl text-slate-900">
								Still have a questions?
							</h3>
							<p className="mb-8 text-slate-600 leading-relaxed">
								Can't find the answer to your question? Send us an email and
								we'll get back to you as soon as possible!
							</p>
							<Button className="flex items-center gap-2 rounded-lg bg-black px-6 py-6 font-bold text-base text-white hover:bg-slate-800">
								Send email
								<Image
									alt="Arrow"
									className="invert"
									height={16}
									src="/icons/caret-right.svg"
									width={16}
								/>
							</Button>
						</div>
					</div>

					{/* Right Column */}
					<div className="flex flex-col lg:col-span-7">
						<Accordion
							className="flex w-full flex-col gap-4"
							defaultValue={["item-0"]}
						>
							{faqs.map((faq) => (
								<AccordionItem
									className="rounded-lg border-none bg-white px-6 shadow-sm transition-colors duration-300 hover:bg-slate-100/50"
									key={faq.id}
									value={faq.id}
								>
									<AccordionTrigger className="font-bold text-lg text-slate-900 hover:no-underline [&[data-state=open]>svg]:rotate-180">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-base text-slate-600 leading-relaxed">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
}
