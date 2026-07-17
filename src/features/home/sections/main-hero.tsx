"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

import gsap from "gsap";
import Flip from "gsap/Flip";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

// Register GSAP Plugins (outside component for SSR safety, but we'll also register in useEffect)
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, Flip);
}

import { HeroFeatures } from "../components/hero-features";
import { ScrollIndicator } from "../components/scroll-indicator";

export function MainHero() {
	const heroRef = useRef<HTMLElement>(null);
	const smallImgRef = useRef<HTMLDivElement>(null);
	const targetImgRef = useRef<HTMLDivElement>(null);
	const t = useTranslations("home.MainHero");

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
					duration: 0.7,
					ease: "power2.inOut",
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
							ease: "power2.inOut",
							duration: 0.7
						},
						0
					);
				}

				tl.to(
					".scroll-indicator",
					{
						opacity: 0,
						ease: "power1.inOut",
						duration: 0.2
					},
					0
				)
					.to(
						".top-text-left, .top-text-right",
						{
							x: 0,
							opacity: 1,
							ease: "power2.out",
							duration: 0.4
						},
						0.3
					)
					.to(
						".bottom-reveal",
						{
							y: 0,
							opacity: 1,
							ease: "power2.out",
							duration: 0.4
						},
						0.5 // sync after image has shrunk mostly
					);
			}, heroRef);
		};

		// Wait for fonts and layout to settle before initial GSAP calculation
		if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
			document.fonts.ready.then(() => {
				// small delay to ensure rendering is complete
				setTimeout(init, 50);
			});
		} else {
			setTimeout(init, 100);
		}

		let windowWidth = window.innerWidth;
		const handleResize = () => {
			if (window.innerWidth === windowWidth) return;
			windowWidth = window.innerWidth;
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
			className="relative h-[100svh] w-full overflow-hidden bg-white"
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
						className="absolute inset-0 hidden h-full w-full object-cover md:block"
						loop
						muted
						playsInline
					>
						<source src="/video/hero-vid.webm" type="video/webm" />
					</video>
					<video
						autoPlay
						className="absolute inset-0 block h-full w-full object-cover md:hidden"
						loop
						muted
						playsInline
					>
						<source src="/video/vid-mobile.webm" type="video/webm" />
					</video>
				</div>
			</div>

			{/* Content */}
			<div className="relative z-30 flex h-full w-full flex-col items-center justify-center px-2 pt-16 pb-24 md:pb-0">
				<div className="flex w-full max-w-7xl flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12">
					<h1 className="top-text-left font-bold text-2xl text-blue-600 tracking-tighter sm:text-4xl md:text-6xl lg:text-[80px]">
						{t("title1")}
					</h1>

					{/* Medium Image Placeholder for Flip */}
					<div className="h-[140px] w-[90px] shrink-0 sm:h-[150px] sm:w-[250px] md:h-[220px] md:w-[350px] lg:h-[300px] lg:w-[500px]">
						<div
							className="invisible h-full w-full rounded-[40px] md:rounded-full"
							ref={smallImgRef}
						/>
					</div>

					<h1 className="top-text-right font-bold text-2xl text-blue-600 tracking-tighter sm:text-4xl md:text-6xl lg:text-[80px]">
						{t("title2")}
					</h1>
				</div>

				<div className="bottom-reveal mt-8 text-center md:mt-4">
					<h1 className="font-bold text-3xl text-blue-600 tracking-tighter sm:text-4xl md:text-6xl lg:text-[80px]">
						{t("subtitle")}
					</h1>
					<div className="flex flex-wrap justify-center gap-4 pt-6 md:pt-8">
						<Link
							className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 font-semibold text-sm text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700"
							href="/contact"
						>
							{t("requestQuote")}
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

			{/* Mobile Scroll Indicator (Visible initially, fades out on scroll) */}
			<ScrollIndicator />
		</section>
	);
}
