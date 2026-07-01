"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import {
	ScrollReveal,
	ScrollRevealGroup,
	ScrollRevealItem,
} from "@/components/ui/scroll-reveal";

const products = [
	{
		id: "50kva",
		capacity: "50 kVA",
		image: "/products/50kva.png",
	},
	{
		id: "100kva",
		capacity: "100 kVA",
		image: "/products/100kva.png",
	},
	{
		id: "250kva",
		capacity: "250 kVA",
		image: "/products/250kva.png",
	},
	{
		id: "500kva",
		capacity: "500 kVA",
		image: "/products/500kva.png",
	},
	{
		id: "1000kva",
		capacity: "1000 kVA",
		image: "/products/1000kva.png",
	},
];

export function Products() {
	return (
		<section className="relative bg-white pt-8 pb-12 lg:pt-12 lg:pb-16">
			<div className="container mx-auto px-6">
				<div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-16">
					<ScrollReveal>
						<h2 className="font-extrabold text-4xl text-blue-600 tracking-tight lg:text-5xl">
							Power for Every Need.
						</h2>
					</ScrollReveal>
					<ScrollReveal>
						<Link
							className="group flex items-center font-bold text-blue-600 transition-colors hover:text-blue-700"
							href="/products"
						>
							View All Generators{" "}
							<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
						</Link>
					</ScrollReveal>
				</div>

				<ScrollRevealGroup className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:flex lg:items-end lg:justify-between lg:gap-4">
					{products.map((product, index) => {
						// Visually scale the height of the generators like in the design
						const baseHeight = 120;
						const height = baseHeight + index * 30;

						return (
							<ScrollRevealItem
								className="group flex cursor-pointer flex-col items-center lg:w-1/5"
								key={product.id}
							>
								<div
									className="mb-6 flex w-full items-end justify-center transition-transform duration-500 group-hover:-translate-y-2"
									style={{ height: `${height}px` }}
								>
									<Image
										alt={product.capacity}
										className="max-h-full w-auto object-contain drop-shadow-xl"
										height={300}
										src={product.image}
										width={400}
									/>
								</div>
								<h3 className="mb-2 font-bold text-gray-900 text-lg lg:text-xl">
									{product.capacity}
								</h3>
								<div className="flex items-center font-semibold text-gray-500 text-sm transition-colors group-hover:text-blue-600">
									View Details{" "}
									<ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</div>
							</ScrollRevealItem>
						);
					})}
				</ScrollRevealGroup>
			</div>
		</section>
	);
}
