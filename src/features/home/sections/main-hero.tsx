"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import gsap from "gsap";
import Flip from "gsap/Flip";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

// Register GSAP Plugins (outside component for SSR safety, but we'll also register in useEffect)
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, Flip);
	ScrollTrigger.config({ ignoreMobileResize: true });
}

import { HeroFeatures } from "../components/hero-features";
import { ScrollIndicator } from "../components/scroll-indicator";

export function MainHero() {
	const heroRef = useRef<HTMLElement>(null);
	const smallImgRef = useRef<HTMLDivElement>(null);
	const targetImgRef = useRef<HTMLDivElement>(null);
	const [poster, setPoster] = useState("/video/mobile-poster.webp");
	const t = useTranslations("home.MainHero");

	useEffect(() => {
		if (typeof window !== "undefined" && window.innerWidth >= 768) {
			setPoster("/video/hero-poster.webp");
		}

		let ctx: gsap.Context;
		let resizeTimer: NodeJS.Timeout;
		let initTimer: NodeJS.Timeout;
		let isInitialized = false;

		const init = () => {
			if (isInitialized) return;
			isInitialized = true;
			removeListeners();

			// Ensure plugins are registered on client
			gsap.registerPlugin(ScrollTrigger, Flip);

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
						end: "+=130%", // Smooth scrolling duration for hero animation
						pin: true,
						scrub: true,
					},
				});

				if (flip) {
					tl.add(flip, 0);
					tl.to(
						targetImgRef.current,
						{
							borderRadius: window.innerWidth < 768 ? "40px" : "9999px",
							ease: "power2.inOut",
							duration: 0.7,
						},
						0
					);
				}

				tl.to(
					".scroll-indicator",
					{
						opacity: 0,
						ease: "power1.inOut",
						duration: 0.2,
					},
					0
				)
					.to(
						".top-text-left, .top-text-right",
						{
							x: 0,
							opacity: 1,
							ease: "power2.out",
							duration: 0.4,
						},
						0.3
					)
					.to(
						".bottom-reveal",
						{
							y: 0,
							opacity: 1,
							ease: "power2.out",
							duration: 0.4,
						},
						0.5 // sync after image has shrunk mostly
					);
			}, heroRef);
		};

		const removeListeners = () => {
			window.removeEventListener("scroll", init);
			window.removeEventListener("touchstart", init);
			window.removeEventListener("pointerdown", init);
			window.removeEventListener("wheel", init);
		};

		if (window.scrollY > 0) {
			init();
		} else {
			window.addEventListener("scroll", init, { passive: true, once: true });
			window.addEventListener("touchstart", init, { passive: true, once: true });
			window.addEventListener("pointerdown", init, { passive: true, once: true });
			window.addEventListener("wheel", init, { passive: true, once: true });

			if ("requestIdleCallback" in window) {
				(window as any).requestIdleCallback(init, { timeout: 2500 });
			} else {
				initTimer = setTimeout(init, 1800);
			}
		}

		let windowWidth = window.innerWidth;
		const handleResize = () => {
			if (window.innerWidth === windowWidth) return;
			windowWidth = window.innerWidth;
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				if (isInitialized) {
					isInitialized = false;
					init();
				}
			}, 200);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			removeListeners();
			clearTimeout(resizeTimer);
			clearTimeout(initTimer);
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
				.top-text-left { transform: translateX(-100vw); opacity: 0; will-change: transform, opacity; }
				.top-text-right { transform: translateX(100vw); opacity: 0; will-change: transform, opacity; }
				.bottom-reveal { transform: translateY(100px); opacity: 0; will-change: transform, opacity; }
			`}</style>

			{/* Full Screen Image Container (target for Flip on both Desktop & Mobile) */}
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
						poster={poster}
						preload="metadata"
					>
						<source
							media="(max-width: 767px)"
							src="/video/vid-mobile.webm"
							type="video/webm"
						/>
						<source
							media="(min-width: 768px)"
							src="/video/hero-vid.webm"
							type="video/webm"
						/>
					</video>
				</div>
			</div>

			{/* Content */}
			<div className="relative z-30 flex h-full w-full flex-col items-center justify-center px-2 pt-16 pb-24 md:pb-0">
				<h1 className="sr-only">{t("h1")}</h1>
				<div className="flex w-full max-w-7xl flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12">
					<div className="top-text-left font-bold text-2xl text-blue-600 tracking-tighter sm:text-4xl md:text-6xl lg:text-[80px]">
						{t("title1")}
					</div>

					{/* Medium Image Placeholder for Flip */}
					<div className="h-[140px] w-[90px] shrink-0 sm:h-[150px] sm:w-[250px] md:h-[220px] md:w-[350px] lg:h-[300px] lg:w-[500px]">
						<div
							className="invisible h-full w-full rounded-[40px] md:rounded-full"
							ref={smallImgRef}
						/>
					</div>

					<div className="top-text-right font-bold text-2xl text-blue-600 tracking-tighter sm:text-4xl md:text-6xl lg:text-[80px]">
						{t("title2")}
					</div>
				</div>

				<div className="bottom-reveal mt-8 text-center md:mt-4">
					<h2 className="font-bold text-3xl text-blue-600 tracking-tighter sm:text-4xl md:text-6xl lg:text-[80px]">
						{t("subtitle")}
					</h2>
					<div className="flex flex-wrap justify-center gap-4 pt-6 md:pt-8">
						<Link
							className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 font-semibold text-sm text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700"
							href="/contact"
						>
							{t("requestQuote")}
							{/* <Image
								alt="Arrow Icon"
								className="ml-2 h-4 w-4 invert"
								height={16}
								src="/icons/caret-right.svg"
								width={16}
							/> */}
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
