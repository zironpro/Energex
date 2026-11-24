"use client";

import { useTranslations } from "next-intl";

export function ScrollIndicator() {
	const t = useTranslations("home.MainHero");

	const scrollToAdvantage = () => {
		document
			.getElementById("advantage-section")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<button
			className="scroll-indicator pointer-events-auto absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 cursor-pointer flex-col items-center justify-center text-white/90 transition-opacity duration-300 hover:text-white md:hidden"
			onClick={scrollToAdvantage}
			type="button"
		>
			<span className="mb-1 font-bold text-[10px] uppercase tracking-[0.2em] drop-shadow-md">
				{t("scrollDown")}
			</span>
			<svg
				className="h-5 w-5 drop-shadow-md transition-transform duration-300 motion-safe:animate-[bounce_1.2s_ease-in-out_2]"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
				/>
			</svg>
		</button>
	);
}
