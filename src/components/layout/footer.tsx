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
		<footer className="bg-slate-950 py-16 text-slate-300 md:py-24">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
					{/* Brand Column */}
					<div className="flex flex-col lg:col-span-4">
						<Link className="mb-6 flex items-center gap-3 text-white" href="/">
							<svg className="h-auto w-12 fill-current" viewBox="0 0 210 126">
								<g>
									<polygon points="135.83 54.08 139.67 57.16 203.21 4.92 203.21 0 152.97 0 135.83 13.92 135.83 54.08" />
									<polygon points="73.35 71.08 69.52 68.01 6.04 120.21 6.04 125.12 56.23 125.12 73.35 111.21 73.35 71.08" />
									<polygon points="0 0 152.68 125.12 209.36 125.12 56.4 0 0 0" />
								</g>
							</svg>
							<span className="font-bold text-2xl tracking-tight">ENERGEX</span>
						</Link>
						<p className="mb-8 max-w-sm text-slate-400 leading-relaxed">
							Empowering the UAE with reliable, scalable, and efficient power
							solutions for every industry and event.
						</p>
						<div className="flex items-center gap-4">
							<a
								className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-900 transition-colors hover:bg-slate-800 hover:text-white"
								href="#"
							>
								<Facebook className="h-5 w-5" />
							</a>
							<a
								className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-900 transition-colors hover:bg-slate-800 hover:text-white"
								href="#"
							>
								<Twitter className="h-5 w-5" />
							</a>
							<a
								className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-900 transition-colors hover:bg-slate-800 hover:text-white"
								href="#"
							>
								<Instagram className="h-5 w-5" />
							</a>
							<a
								className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-900 transition-colors hover:bg-slate-800 hover:text-white"
								href="#"
							>
								<Linkedin className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Links Column 1 */}
					<div className="lg:col-span-2">
						<h3 className="mb-6 font-semibold text-lg text-white">Company</h3>
						<ul className="flex flex-col gap-4 text-slate-400">
							<li>
								<Link
									className="inline-block transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:text-white"
									href="#"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									className="inline-block transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:text-white"
									href="#"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									className="inline-block transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:text-white"
									href="#"
								>
									News & Press
								</Link>
							</li>
							<li>
								<Link
									className="inline-block transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:text-white"
									href="#"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Links Column 2 */}
					<div className="lg:col-span-3">
						<h3 className="mb-6 font-semibold text-lg text-white">Solutions</h3>
						<ul className="flex flex-col gap-4 text-slate-400">
							<li>
								<Link
									className="inline-block transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:text-white"
									href="#"
								>
									Diesel Generators
								</Link>
							</li>
							<li>
								<Link
									className="inline-block transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:text-white"
									href="#"
								>
									Hybrid Power Systems
								</Link>
							</li>
							<li>
								<Link
									className="inline-block transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:text-white"
									href="#"
								>
									Event Power
								</Link>
							</li>
							<li>
								<Link
									className="inline-block transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:text-white"
									href="#"
								>
									Fuel Management
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info Column */}
					<div className="lg:col-span-3">
						<h3 className="mb-6 font-semibold text-lg text-white">
							Contact Us
						</h3>
						<ul className="flex flex-col gap-4 text-slate-400">
							<li>
								<span className="block text-slate-500">Email</span>
								<a
									className="transition-colors hover:text-white"
									href="mailto:info@energex.ae"
								>
									info@energex.ae
								</a>
							</li>
							<li>
								<span className="block text-slate-500">Phone</span>
								<a
									className="transition-colors hover:text-white"
									href="tel:+971501234567"
								>
									+971 50 123 4567
								</a>
							</li>
							<li>
								<span className="block text-slate-500">Address</span>
								<span>
									Dubai Industrial City,
									<br />
									Dubai, United Arab Emirates
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-16 flex flex-col items-center justify-between border-slate-800 border-t pt-8 md:flex-row">
					<p className="text-slate-500 text-sm">
						&copy; {new Date().getFullYear()} Energex. All rights reserved.
					</p>
					<div className="mt-4 flex gap-6 text-sm md:mt-0">
						<Link
							className="inline-block text-slate-500 transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:text-white"
							href="/terms-and-policy"
						>
							Privacy Policy
						</Link>
						<Link
							className="inline-block text-slate-500 transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:text-white"
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
