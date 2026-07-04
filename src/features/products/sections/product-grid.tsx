"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";

import { products } from "../data/product-grid";

export function ProductGrid() {
	return (
		<section className="bg-white px-6 py-24 lg:px-16">
			<div className="container mx-auto max-w-7xl">
				<div className="mb-10 text-center md:mb-16 md:text-left lg:mb-20">
					<motion.h2
						className="mb-6 font-black text-4xl text-blue-600 uppercase tracking-tighter sm:text-5xl md:text-6xl"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						Generator Fleet
					</motion.h2>
					<motion.p
						className="max-w-2xl text-lg text-slate-600 leading-relaxed md:text-xl"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						Discover our versatile range of high-performance generators,
						perfectly suited to handle anything from local events to massive
						industrial power demands.
					</motion.p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{products.map((product, i) => {
						const [power, ...rest] = product.title.split(" ");
						const unit = rest.join(" ");

						return (
							<motion.div
								className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-slate-50 p-6 md:p-8"
								initial={{ opacity: 0, y: 40 }}
								key={product.title}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								viewport={{ once: true, margin: "-50px" }}
								whileInView={{ opacity: 1, y: 0 }}
							>
								{/* Top Tags */}
								<div className="mb-6 flex flex-wrap gap-x-3 gap-y-2 font-bold text-[10px] text-slate-400 uppercase tracking-widest">
									{product.specs.slice(0, 3).map((spec) => (
										<span key={spec}>{spec}</span>
									))}
								</div>

								{/* Left/Top Content */}
								<div className="z-10 flex flex-col">
									<h3 className="mb-3 font-black text-3xl text-blue-600 uppercase leading-[1.1] tracking-tighter">
										PREMIUM <br />
										<span className="text-blue-600">{unit}</span>
									</h3>
									<p className="mb-6 text-slate-600 text-sm leading-relaxed md:text-base">
										{product.description}
									</p>

									<div className="mb-8">
										<Link
											className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-600/10 px-5 py-2.5 font-bold text-blue-700 text-sm transition-colors hover:bg-blue-600/20"
											href="/contact"
										>
											Quote <ArrowRight className="h-4 w-4" />
										</Link>
									</div>
								</div>

								{/* Bottom Area: Large Stat + Image */}
								<div className="relative mt-auto flex h-[200px] w-full items-end">
									{/* Bottom Stat */}
									<div className="z-10 pb-4">
										<div className="flex items-baseline gap-1">
											<span className="font-black text-6xl text-blue-600 tracking-tighter">
												{power}
											</span>
										</div>
										<div className="mt-1 font-medium text-slate-500 text-xs lowercase md:text-sm">
											kVA generator
										</div>
									</div>

									{/* Right Image */}
									<div className="absolute -right-4 -bottom-4 h-[240px] w-[240px] transition-transform duration-500 ease-out group-hover:scale-110">
										<Image
											alt={product.title}
											className="object-contain drop-shadow-xl"
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
											src={product.image}
										/>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
