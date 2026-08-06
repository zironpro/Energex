"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { HOME_LOCATIONS_LIST } from "@/features/home/data/home-locations";
import { Link } from "@/i18n/navigation";

export function HomeLocations() {
	const t = useTranslations("home.HomeLocations");

	return (
		<section className="relative overflow-hidden bg-[#f6f6f2] py-20 text-[#1a1a1a] lg:py-28">
			{/* Watermark Logo Graphic in Background Right Side */}
			<div className="pointer-events-none absolute top-1/2 -right-20 z-0 h-[600px] w-[600px] -translate-y-1/2 opacity-[0.04]">
				<svg
					className="h-full w-full fill-[#1a1a1a]"
					viewBox="0 0 210 126"
					xmlns="http://www.w3.org/2000/svg"
				>
					<polygon points="135.83 54.08 139.67 57.16 203.21 4.92 203.21 0 152.97 0 135.83 13.92 135.83 54.08" />
					<polygon points="73.35 71.08 69.52 68.01 6.04 120.21 6.04 125.12 56.23 125.12 73.35 111.21 73.35 71.08" />
					<polygon points="0 0 152.68 125.12 209.36 125.12 56.4 0 0 0" />
				</svg>
			</div>

			<div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-12">
				{/* Main Headline & Subtitle Description */}
				<div className="mb-14 grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
					<motion.h2
						className="font-black text-3xl text-blue-600 leading-tight sm:text-4xl md:text-5xl lg:col-span-7 lg:text-6xl"
						initial={{ opacity: 0, y: 15 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						{t("title")}
					</motion.h2>

					<motion.p
						className="text-base text-slate-600 leading-relaxed md:text-lg lg:col-span-5"
						initial={{ opacity: 0, y: 15 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						{t("description")}
					</motion.p>
				</div>

				{/* Cards Grid: 4 cards in a row on large screens */}
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{HOME_LOCATIONS_LIST.map((loc, index) => {
						const cardTitle = t(`locations.${loc.id}.h1`);
						const cardDesc = t(`locations.${loc.id}.desc`);
						const tag1 = t(`locations.${loc.id}.tag1`);
						const tag2 = t(`locations.${loc.id}.tag2`);

						return (
							<motion.div
								initial={{ opacity: 0, y: 25 }}
								key={loc.id}
								transition={{ duration: 0.5, delay: index * 0.08 }}
								viewport={{ once: true }}
								whileInView={{ opacity: 1, y: 0 }}
							>
								<Link
									className="group relative block h-[420px] w-full overflow-hidden rounded-lg shadow-sm transition-all duration-500 hover:shadow-2xl sm:h-[460px]"
									href={`/${loc.slug}`}
								>
									{/* Background Image with smooth hover scale */}
									<Image
										alt={cardTitle}
										className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
										fill
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
										src={loc.image}
									/>

									{/* Gradient Overlay for Readable Text */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

									{/* Card Top / Hover Icon Badge */}
									<div className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black">
										<ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
									</div>

									{/* Card Bottom Content */}
									<div className="absolute right-0 bottom-0 left-0 z-10 p-6 sm:p-8">
										{/* Pill Tags */}
										<div className="mb-3 flex flex-wrap items-center gap-2">
											<span className="rounded-full border border-white/25 bg-white/15 px-3.5 py-1 font-medium text-white text-xs tracking-wider backdrop-blur-md">
												{tag1}
											</span>
											{/* <span className="rounded-full border border-white/25 bg-white/15 px-3.5 py-1 font-medium text-white text-xs tracking-wider backdrop-blur-md">
												{tag2}
											</span> */}
										</div>

										{/* Card Title */}
										<h3 className="font-semibold text-white text-xl leading-snug tracking-tight group-hover:text-blue-200 sm:text-2xl">
											{cardTitle}
										</h3>

										{/* Card Short Desc */}
										<p className="mt-2 line-clamp-2 text-slate-300 text-xs leading-relaxed sm:text-sm">
											{cardDesc}
										</p>
									</div>
								</Link>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
