import Image from "next/image";
import Link from "next/link";

export function Hero() {
	return (
		<section className="relative flex w-full flex-col items-center overflow-hidden bg-white pt-32 pb-12">
			<div className="container z-10 flex flex-col items-center space-y-8 px-4 text-center md:px-6">
				<h1 className="mx-auto max-w-4xl font-bold text-5xl text-slate-900 leading-tight tracking-tighter md:text-7xl">
					Premium & beautiful <br className="hidden md:block" />
					hero design
				</h1>

				<p className="max-w-[600px] font-medium text-lg text-slate-600 md:text-xl">
					Where magic meets logic, beautifully crafted
					<br className="hidden sm:block" />
					design resources that inspire.
				</p>

				<div className="pt-4">
					<Link
						className="inline-flex h-12 items-center justify-center rounded-lg bg-black px-8 font-semibold text-sm text-white shadow-lg transition-transform hover:scale-105"
						href="/signup"
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

			{/* Hero Image */}
			<div className="relative z-10 mx-auto mt-16 w-full max-w-6xl px-4 md:px-6">
				<div className="relative w-full overflow-hidden rounded-lg shadow-2xl">
					<Image
						alt="Energex Power Solutions"
						className="h-auto w-full object-cover"
						height={1080}
						priority
						src="/images/hero-image.png"
						width={1920}
					/>
				</div>
			</div>

			{/* Background radial gradient to give it a soft premium feel */}
			<div className="pointer-events-none absolute top-0 left-1/2 -z-0 h-[600px] w-full max-w-3xl -translate-x-1/2 bg-gradient-to-b from-slate-100 to-transparent opacity-50 blur-3xl" />
		</section>
	);
}
