"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import Flip from "gsap/Flip";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP Plugins (outside component for SSR safety, but we'll also register in useEffect)
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, Flip);
}

export function MainHero() {
	const heroRef = useRef<HTMLElement>(null);
	const smallImgRef = useRef<HTMLDivElement>(null);
	const targetImgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Ensure plugins are registered on client
		gsap.registerPlugin(ScrollTrigger, Flip);

		let ctx: gsap.Context;
		let resizeTimer: NodeJS.Timeout;

		const init = () => {
			if (ctx) ctx.revert();

			ctx = gsap.context(() => {
				if (!smallImgRef.current || !targetImgRef.current || !heroRef.current)
					return;

				// The Flip.fit animation configures the tween to scale and move the target image
				const flip = Flip.fit(targetImgRef.current, smallImgRef.current, {
					scale: false,
					duration: 1,
					ease: "none",
				}) as gsap.core.Tween | null;

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: heroRef.current,
						start: "top top",
						end: "+=150%", // 150% of viewport height for scrolling duration
						pin: true,
						scrub: true,
					},
				});

				if (flip) {
					tl.add(flip, 0);
					tl.to(
						targetImgRef.current,
						{
							borderRadius: "9999px",
							ease: "none",
						},
						0
					);
				}

				tl.to(
					".top-text-left, .top-text-right",
					{
						x: 0,
						opacity: 1,
						ease: "power1.inOut",
					},
					0.4
				).to(
					".bottom-reveal",
					{
						y: 0,
						opacity: 1,
						ease: "power1.inOut",
					},
					"<" // sync with previous
				);
			}, heroRef);
		};

		// Run immediately to establish initial ScrollTrigger state
		init();

		const handleResize = () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				init();
			}, 200);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			clearTimeout(resizeTimer);
			if (ctx) ctx.revert();
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<section
			className="relative h-screen w-full overflow-hidden bg-[#050505]"
			ref={heroRef}
		>
			<style>{`
				.top-text-left { transform: translateX(-100vw); opacity: 0; }
				.top-text-right { transform: translateX(100vw); opacity: 0; }
				.bottom-reveal { transform: translateY(100px); opacity: 0; }
			`}</style>

			{/* Full Screen Image Container (target for Flip) */}
			<div className="pointer-events-none absolute inset-0 z-20">
				<div
					className="relative h-full w-full overflow-hidden"
					ref={targetImgRef}
				>
					<Image
						alt="Energex Power Solutions"
						className="object-cover"
						fill
						priority
						sizes="100vw"
						src="/images/hero.png"
					/>
				</div>
			</div>

			{/* Content */}
			<div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 pt-16">
				<div className="flex w-full max-w-7xl items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
					<h1 className="top-text-left font-bold text-3xl text-white tracking-tighter sm:text-4xl md:text-6xl lg:text-[80px]">
						Reliable
					</h1>

					{/* Medium Image Placeholder for Flip */}
					<div className="h-[120px] w-[200px] sm:h-[150px] sm:w-[250px] md:h-[220px] md:w-[350px] lg:h-[300px] lg:w-[500px]">
						<div
							className="invisible h-full w-full rounded-full"
							ref={smallImgRef}
						/>
					</div>

					<h1 className="top-text-right font-bold text-3xl text-white tracking-tighter sm:text-4xl md:text-6xl lg:text-[80px]">
						Scalable
					</h1>
				</div>

				<div className="bottom-reveal mt-2 text-center md:mt-4">
					<h1 className="font-bold text-3xl text-white tracking-tighter sm:text-4xl md:text-6xl lg:text-[80px]">
						Power Solutions
					</h1>
					<div className="flex flex-wrap justify-center gap-4 pt-8">
						<Link
							className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 font-semibold text-black text-sm transition-transform hover:scale-105"
							href="/contact"
						>
							Request a Quote
							<Image
								alt=""
								className="ml-2 h-4 w-4"
								height={16}
								src="/icons/caret-right.svg"
								width={16}
							/>
						</Link>
					</div>
				</div>
			</div>

			{/* Background radial gradient */}
			<div className="pointer-events-none absolute top-1/4 left-1/4 -z-0 h-[600px] w-full max-w-3xl -translate-x-1/2 bg-gradient-to-b from-blue-900/10 to-transparent opacity-50 blur-3xl" />
		</section>
	);
}
