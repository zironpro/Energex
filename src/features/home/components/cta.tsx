import Image from "next/image";

import { Button } from "@/components/ui/button";

export function CTA() {
	return (
		<section className="relative overflow-hidden bg-slate-950 py-16 text-white">
			{/* Background Logo Overflowing */}
			<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]">
				<svg
					className="h-auto w-[80vw] min-w-[500px] fill-current"
					viewBox="0 0 210 126"
				>
					<g>
						<polygon points="135.83 54.08 139.67 57.16 203.21 4.92 203.21 0 152.97 0 135.83 13.92 135.83 54.08" />
						<polygon points="73.35 71.08 69.52 68.01 6.04 120.21 6.04 125.12 56.23 125.12 73.35 111.21 73.35 71.08" />
						<polygon points="0 0 152.68 125.12 209.36 125.12 56.4 0 0 0" />
					</g>
				</svg>
			</div>

			<div className="container relative z-10 mx-auto flex flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:px-12 md:text-left">
				<div className="max-w-2xl">
					<h2 className="mb-4 font-bold text-3xl tracking-tighter md:text-4xl">
						Ready to Power Your Next Project?
					</h2>
					<p className="font-medium text-base text-slate-400 md:text-lg">
						Get in touch with our team today to discover how Energex can provide
						reliable, efficient, and scalable power solutions tailored to your
						unique requirements.
					</p>
				</div>
				<div className="flex-shrink-0">
					<Button
						className="group flex h-auto cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-bold text-base text-white hover:bg-blue-700"
						size="lg"
					>
						Contact Us Today
						<Image
							alt="Arrow"
							className="brightness-0 invert transition-transform duration-300 group-hover:translate-x-1"
							height={20}
							src="/icons/caret-right.svg"
							width={20}
						/>
					</Button>
				</div>
			</div>
		</section>
	);
}
