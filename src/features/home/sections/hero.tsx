import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Hero() {
	return (
		<section
			className="relative flex min-h-[70vh] w-full flex-col items-center justify-center bg-center bg-cover bg-slate-950 bg-fixed py-24 md:min-h-[800px]"
			style={{ backgroundImage: "url('/images/img-hero.webp')" }}
		>
			{/* Subtle Dark Overlay */}
			<div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/40 via-slate-900/20 to-slate-950/50" />

			{/* Content */}
			<div className="container relative z-20 flex flex-col items-center space-y-8 px-4 text-center md:px-6">
				<ScrollReveal>
					<h2 className="mx-auto max-w-5xl font-bold text-4xl text-white leading-tight tracking-tighter sm:text-5xl md:text-7xl lg:text-[80px]">
						POWERING WHAT MATTERS
						<span className="mt-4 block font-semibold text-blue-400 text-xl tracking-normal md:text-2xl">
							POWER GENERATOR SOLUTIONS IN DUBAI, UAE
						</span>
					</h2>
				</ScrollReveal>

				<ScrollReveal delay={0.2}>
					<p className="max-w-[600px] font-medium text-base text-slate-300 md:text-lg">
						Energex delivers dependable diesel and gas generator solutions in
						Dubai, UAE. From supply and installation to maintenance and
						technical support, we provide reliable power when it matters most.
					</p>
				</ScrollReveal>

				<ScrollReveal delay={0.4}>
					<div className="pt-8">
						<Button
							className="group h-14 rounded-lg bg-white px-8 font-bold text-base text-slate-900 shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all hover:scale-105 hover:bg-slate-50 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
							nativeButton={false}
							render={<Link href="/contact" />}
						>
							Contact Us
							<Image
								alt=""
								className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
								height={16}
								src="/icons/caret-right.svg"
								width={16}
							/>
						</Button>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}
