import Image from "next/image";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	ScrollReveal,
	ScrollRevealGroup,
	ScrollRevealItem,
} from "@/components/ui/scroll-reveal";

import { faqs } from "../data/faq";

export function FAQ() {
	return (
		<section className="bg-slate-50 py-16 text-slate-900">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
					{/* Left Column */}
					<div className="relative flex h-fit flex-col lg:sticky lg:top-24 lg:col-span-5">
						<ScrollReveal direction="left">
							<h2 className="mb-12 font-bold text-5xl text-blue-600 tracking-tighter md:text-6xl">
								Frequently asked
								<br />
								questions
							</h2>
						</ScrollReveal>

						<ScrollReveal delay={0.2} direction="left">
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
						</ScrollReveal>
					</div>

					{/* Right Column */}
					<div className="flex flex-col lg:col-span-7">
						<Accordion
							className="flex w-full flex-col gap-4"
							defaultValue={["item-0"]}
						>
							<ScrollRevealGroup className="flex flex-col gap-4" stagger={0.1}>
								{faqs.map((faq) => (
									<ScrollRevealItem key={faq.id}>
										<AccordionItem
											className="rounded-lg border-none bg-white px-6 shadow-sm transition-colors duration-300 hover:bg-slate-100/50"
											value={faq.id}
										>
											<AccordionTrigger className="font-bold text-lg text-slate-900 hover:no-underline [&[data-state=open]>svg]:rotate-180">
												{faq.question}
											</AccordionTrigger>
											<AccordionContent className="text-base text-slate-600 leading-relaxed">
												{faq.answer}
											</AccordionContent>
										</AccordionItem>
									</ScrollRevealItem>
								))}
							</ScrollRevealGroup>
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
}
