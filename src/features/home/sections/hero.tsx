import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section
			className="relative flex min-h-[70vh] w-full flex-col items-center justify-center bg-center bg-cover bg-slate-950 bg-fixed py-24 md:min-h-[800px]"
			style={{ backgroundImage: "url('/images/hero-image.webp')" }}
		>
			{/* Subtle Dark Overlay */}
			<div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/40 via-slate-900/20 to-slate-950/50" />

			{/* Content */}
			<div className="container relative z-20 flex flex-col items-center space-y-8 px-4 text-center md:px-6">
				<h2 className="mx-auto max-w-5xl font-bold text-5xl text-white leading-tight tracking-tighter md:text-7xl lg:text-[80px]">
					Reliable & scalable <br className="hidden md:block" />
					power solutions
				</h2>

				<p className="max-w-[600px] font-medium text-lg text-slate-300 md:text-2xl">
					Empowering the UAE with continuous, efficient power
					<br className="hidden sm:block" />
					for every industry and event.
				</p>

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
			</div>
		</section>
	);
}
