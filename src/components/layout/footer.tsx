import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";


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

const Whatsapp = (props: React.SVGProps<SVGSVGElement>) => (
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
		<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
		<path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
	</svg>
);

export function Footer() {
	const t = useTranslations("common.Footer");

	return (
		<footer className="relative bg-blue-600 pt-12 pb-4 text-slate-300 md:pt-20">
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
				<div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-8">
					{/* Column 1: Logo & Slogan */}
					<div className="col-span-2 flex flex-col md:col-span-1">
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
							{t("slogan")}
						</p>
						<div className="flex flex-wrap gap-4">

							<a
								className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-blue-500"
								href="https://www.instagram.com/energex_equipment/"
								rel="noreferrer"
								target="_blank"
							>
								<Instagram className="h-5 w-5" />
							</a>
							<a
								className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-blue-500"
								href="https://www.linkedin.com/company/energex-equipment-rental/"
								rel="noreferrer"
								target="_blank"
							>
								<Linkedin className="h-5 w-5" />
							</a>
							<a
								className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-blue-500"
								href="https://wa.me/971502335477"
								rel="noreferrer"
								target="_blank"
							>
								<Whatsapp className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Column 2: General */}
					<div className="col-span-1 flex flex-col">
						<h4 className="mb-6 font-bold text-lg text-white">
							{t("columns.general.title")}
						</h4>
						<ul className="flex flex-col gap-4 text-slate-300 text-sm">
							<li>
								<Link
									className="relative inline-block transition duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/"
								>
									{t("columns.general.home")}
								</Link>
							</li>
							<li>
								<Link
									className="relative inline-block transition duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/products"
								>
									{t("columns.general.products")}
								</Link>
							</li>
							<li>
								<Link
									className="relative inline-block transition duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/solutions"
								>
									{t("columns.general.solutions")}
								</Link>
							</li>
							<li>
								<Link
									className="relative inline-block transition duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/company"
								>
									{t("columns.general.about")}
								</Link>
							</li>
							<li>
								<Link
									className="relative inline-block transition duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/contact"
								>
									{t("columns.general.contact")}
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 3: Solutions */}
					<div className="col-span-1 flex flex-col">
						<h4 className="mb-6 font-bold text-lg text-white">
							{t("columns.solutions.title")}
						</h4>
						<ul className="flex flex-col gap-4 text-slate-300 text-sm">
							<li>
								<Link
									className="relative inline-block transition duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/solutions"
								>
									{t("columns.solutions.diesel")}
								</Link>
							</li>
							<li>
								<Link
									className="relative inline-block transition duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/solutions"
								>
									{t("columns.solutions.hybrid")}
								</Link>
							</li>
							<li>
								<Link
									className="relative inline-block transition duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/solutions"
								>
									{t("columns.solutions.event")}
								</Link>
							</li>
							<li>
								<Link
									className="relative inline-block transition duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
									href="/solutions"
								>
									{t("columns.solutions.fuel")}
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 4: Contact Us */}
					<div className="col-span-2 flex flex-col md:col-span-1">
						<h4 className="mb-6 font-bold text-lg text-white">
							{t("columns.contact.title")}
						</h4>
						<div className="grid grid-cols-2 gap-5 text-slate-300 text-sm md:flex md:flex-col">
							<div className="col-span-1 flex flex-col gap-3 md:gap-5">
								<div>
									<span className="mb-1 block text-slate-400">
										{t("columns.contact.email")}
									</span>
									<a
										className="relative inline-block break-all transition duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
										href="mailto:info@energexequip.ae"
									>
										info@energexequip.ae
									</a>
								</div>
								<div>
									<span className="mb-1 block text-slate-400">
										{t("columns.contact.phone")}
									</span>
									<a
										className="relative mb-1 block transition duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
										href="tel:+97145753066"
									>
										T: (+971) 4 575 3066
									</a>
									<a
										className="relative block transition duration-300 before:absolute before:top-1/2 before:-left-3 before:h-[2px] before:w-0 before:-translate-y-1/2 before:bg-white before:transition before:duration-300 hover:translate-x-3 hover:text-white hover:before:w-2"
										href="tel:+971502335477"
									>
										M: +971 50 233 5477
									</a>
								</div>
							</div>
							<div className="col-span-1 flex flex-col items-start text-left">
								<span className="mb-1 block text-slate-400">
									{t("columns.contact.address")}
								</span>
								<p>{t("columns.contact.addressLines.line1")}</p>
								<p>{t("columns.contact.addressLines.line2")}</p>
								<p>{t("columns.contact.addressLines.line3")}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Full-width Bottom Bar */}
			<div className="mt-20 border-blue-400/30 border-t">
				<div className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-6 text-slate-300 text-xs md:flex-row md:px-12">
					<p className="order-1 flex-1 text-center md:text-left">
						&copy; {new Date().getFullYear()} Energex. All Rights Reserved.
					</p>

					<div className="order-3 mt-4 flex flex-1 justify-center md:order-2 md:mt-0">
						<span className="px-4 py-1 font-light text-[10px] text-white/30">
							Designed & Developed by Ziron Pro
						</span>
					</div>

					<div className="order-2 mt-4 flex flex-1 justify-center gap-6 md:order-3 md:mt-0 md:justify-end">
						<Link
							className="transition hover:text-white"
							href="/terms-and-policy"
						>
							{t("bottom.privacy")}
						</Link>
						<Link
							className="transition hover:text-white"
							href="/terms-and-policy"
						>
							{t("bottom.terms")}
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
