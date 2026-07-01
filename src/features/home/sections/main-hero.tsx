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

import { HeroFeatures } from "../components/hero-features";

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
			className="relative h-screen w-full overflow-hidden bg-white"
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
					<video
						autoPlay
						className="absolute inset-0 h-full w-full object-cover"
						loop
						muted
						playsInline
					>
						<source src="/video/hero-vid.webm" type="video/webm" />
					</video>
				</div>
			</div>

			{/* Content */}
			<div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-2 pt-16 pb-16 md:pb-0">
				<div className="flex w-full max-w-7xl flex-row items-center justify-center gap-2 sm:gap-6 md:gap-8 lg:gap-12">
					<h1 className="top-text-left font-bold text-[28px] text-blue-600 tracking-tighter sm:text-4xl md:text-6xl lg:text-[80px]">
						Reliable
					</h1>

					{/* Medium Image Placeholder for Flip */}
					<div className="h-[60px] w-[110px] shrink-0 sm:h-[150px] sm:w-[250px] md:h-[220px] md:w-[350px] lg:h-[300px] lg:w-[500px]">
						<div
							className="invisible h-full w-full rounded-full"
							ref={smallImgRef}
						/>
					</div>

					<h1 className="top-text-right font-bold text-[28px] text-blue-600 tracking-tighter sm:text-4xl md:text-6xl lg:text-[80px]">
						Scalable
					</h1>
				</div>

				<div className="bottom-reveal mt-2 text-center md:mt-4">
					<h1 className="font-bold text-3xl text-blue-600 tracking-tighter sm:text-4xl md:text-6xl lg:text-[80px]">
						Power Solutions
					</h1>
					<div className="flex flex-wrap justify-center gap-4 pt-4 md:pt-8">
						<Link
							className="inline-flex h-12 items-center justify-center rounded-lg bg-black px-8 font-semibold text-sm text-white transition-transform hover:scale-105"
							href="/contact"
						>
							Request a Quote
							<Image
								alt=""
								className="ml-2 h-4 w-4 invert"
								height={16}
								src="/icons/caret-right.svg"
								width={16}
							/>
						</Link>
					</div>
				</div>
			</div>

			{/* Background Logo Watermark */}
			<div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-10">
				<svg
					className="h-[80vh] w-auto scale-[2] fill-slate-900 md:scale-100"
					viewBox="0 0 210 126"
				>
					<g>
						<polygon points="135.83 54.08 139.67 57.16 203.21 4.92 203.21 0 152.97 0 135.83 13.92 135.83 54.08" />
						<polygon points="73.35 71.08 69.52 68.01 6.04 120.21 6.04 125.12 56.23 125.12 73.35 111.21 73.35 71.08" />
						<polygon points="0 0 152.68 125.12 209.36 125.12 56.4 0 0 0" />
					</g>
				</svg>
			</div>

			{/* Integrated Hero Features at bottom */}
			<div className="absolute bottom-0 bottom-reveal left-0 z-30 w-full">
				<HeroFeatures />
			</div>
		</section>
	);
}
