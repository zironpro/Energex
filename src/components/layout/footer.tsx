import Link from "next/link";

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		fill="none"
		height="24"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
	</svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		fill="none"
		height="24"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
	</svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		fill="none"
		height="24"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
		<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
		<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
	</svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		fill="none"
		height="24"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
		<rect height="12" width="4" x="2" y="9" />
		<circle cx="4" cy="4" r="2" />
	</svg>
);

export function Footer() {
	return (
		<footer className="relative overflow-hidden bg-blue-600 pt-20 pb-4 text-slate-300">
			{/* Sweeping abstract waves background similar to the reference design */}
			<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
				<svg
					className="absolute top-0 left-0 h-full w-full"
					preserveAspectRatio="xMidYMid slice"
					viewBox="0 0 1440 600"
					xmlns="http://www.w3.org/2000/svg"
				>
					{/* Large elegant swooshes imitating the reference image background */}
					<path
						d="M-200,600 C400,600 600,0 1200,-100 L1440,-100 L1440,600 Z"
						fill="#ffffff"
						fillOpacity="0.03"
					/>
					<path
						d="M200,700 C700,300 1000,-50 1800,-50 L1800,700 Z"
						fill="#ffffff"
						fillOpacity="0.02"
					/>
					<path
						d="M-100,-100 C400,150 700,400 1300,700 L-100,700 Z"
						fill="#000000"
						fillOpacity="0.05"
					/>
					<path
						d="M400,-100 C800,200 1100,500 1600,700 L400,700 Z"
						fill="#ffffff"
						fillOpacity="0.02"
					/>
				</svg>
			</div>

			<div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
					{/* Column 1: Logo & Slogan */}
					<div className="flex flex-col">
						<Link className="mb-6 flex items-center gap-3 text-white" href="/">
							<svg className="h-8 w-auto fill-white" viewBox="0 0 210 126">
								<g>
									<polygon points="135.83 54.08 139.67 57.16 203.21 4.92 203.21 0 152.97 0 135.83 13.92 135.83 54.08" />
									<polygon points="73.35 71.08 69.52 68.01 6.04 120.21 6.04 125.12 56.23 125.12 73.35 111.21 73.35 71.08" />
									<polygon points="0 0 152.68 125.12 209.36 125.12 56.4 0 0 0" />
								</g>
							</svg>
							<span className="font-bold text-xl tracking-tight">ENERGEX</span>
						</Link>
						<p className="mb-8 text-slate-300 text-sm leading-relaxed">
							Empowering the UAE with reliable, scalable, and efficient power
							solutions for every industry and event.
						</p>
						<div className="flex gap-4">
							<a
								className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-blue-500"
								href="#"
							>
								<Facebook className="h-5 w-5" />
							</a>
							<a
								className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-blue-500"
								href="#"
							>
								<Twitter className="h-5 w-5" />
							</a>
							<a
								className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-blue-500"
								href="#"
							>
								<Instagram className="h-5 w-5" />
							</a>
							<a
								className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-blue-500"
								href="#"
							>
								<Linkedin className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Column 2: Company */}
					<div className="flex flex-col">
						<h4 className="mb-6 font-bold text-lg text-white">Company</h4>
						<ul className="flex flex-col gap-4 text-slate-300 text-sm">
							<li>
								<Link
									className="relative inline-block transition-all duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition-all before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/about"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									className="relative inline-block transition-all duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition-all before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/careers"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									className="relative inline-block transition-all duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition-all before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/news"
								>
									News & Press
								</Link>
							</li>
							<li>
								<Link
									className="relative inline-block transition-all duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition-all before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/contact"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 3: Solutions */}
					<div className="flex flex-col">
						<h4 className="mb-6 font-bold text-lg text-white">Solutions</h4>
						<ul className="flex flex-col gap-4 text-slate-300 text-sm">
							<li>
								<Link
									className="relative inline-block transition-all duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition-all before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/solutions"
								>
									Diesel Generators
								</Link>
							</li>
							<li>
								<Link
									className="relative inline-block transition-all duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition-all before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/solutions"
								>
									Hybrid Power Systems
								</Link>
							</li>
							<li>
								<Link
									className="relative inline-block transition-all duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition-all before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/solutions"
								>
									Event Power
								</Link>
							</li>
							<li>
								<Link
									className="relative inline-block transition-all duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition-all before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/solutions"
								>
									Fuel Management
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 4: Contact Us */}
					<div className="flex flex-col">
						<h4 className="mb-6 font-bold text-lg text-white">Contact Us</h4>
						<div className="flex flex-col gap-5 text-slate-300 text-sm">
							<div>
								<span className="mb-1 block text-slate-400">Email</span>
								<a
									className="relative inline-block transition-all duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition-all before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="mailto:info@energexequip.ae"
								>
									info@energexequip.ae
								</a>
							</div>
							<div>
								<span className="mb-1 block text-slate-400">Phone</span>
								<a
									className="relative mb-1 block transition-all duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition-all before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="tel:+97145753066"
								>
									T: (+971) 4 575 3066
								</a>
								<a
									className="relative block transition-all duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition-all before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="tel:+971502335477"
								>
									M: +971 50 233 5477
								</a>
							</div>
							<div>
								<span className="mb-1 block text-slate-400">Address</span>
								<p>Energex Equipment Rental,</p>
								<p>Al Quasis Industrial Second,</p>
								<p>Plot No. 238-0</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Full-width Bottom Bar */}
			<div className="mt-20 border-blue-400/30 border-t">
				<div className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-6 text-slate-300 text-xs md:flex-row md:px-12">
					<p>&copy; {new Date().getFullYear()} Energex</p>
					<div className="mt-4 flex gap-6 md:mt-0">
						<Link
							className="transition hover:text-white"
							href="/terms-and-policy"
						>
							Privacy Policy
						</Link>
						<Link
							className="transition hover:text-white"
							href="/terms-and-policy"
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
