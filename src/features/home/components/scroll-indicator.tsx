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
			className="scroll-indicator absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 animate-bounce cursor-pointer flex-col items-center justify-center text-white transition-opacity hover:opacity-80 md:hidden"
			onClick={scrollToAdvantage}
			type="button"
		>
			<span className="mb-2 font-bold text-[10px] uppercase tracking-[0.2em] drop-shadow-md">
				{t("scrollDown")}
			</span>
			<svg
				className="h-6 w-6 drop-shadow-md"
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
