"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Globe } from "lucide-react";

const NavLink = ({ href, children }: { href: string; children: string }) => {
	return (
		<Link
			className="group relative flex overflow-hidden font-bold text-gray-800 text-lg"
			href={href}
		>
			<div className="flex">
				{children.split("").map((char, index) => (
					<span
						className="transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
						// biome-ignore lint/suspicious/noArrayIndexKey: Static text for hover effect doesn't reorder
						key={`orig-${index}`}
						style={{ transitionDelay: `${index * 30}ms` }}
					>
						{char === " " ? "\u00A0" : char}
					</span>
				))}
			</div>
			<div className="absolute inset-0 flex text-blue-600">
				{children.split("").map((char, index) => (
					<span
						className="translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
						// biome-ignore lint/suspicious/noArrayIndexKey: Static text for hover effect doesn't reorder
						key={`clone-${index}`}
						style={{ transitionDelay: `${index * 30}ms` }}
					>
						{char === " " ? "\u00A0" : char}
					</span>
				))}
			</div>
		</Link>
	);
};

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Change background when scrolled down more than 20 pixels
			if (window.scrollY > 20) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-in-out ${
				isScrolled
					? "bg-white/80 py-5 shadow-sm backdrop-blur-md"
					: "bg-transparent py-8"
			}`}
		>
			<div className="container mx-auto flex items-center justify-between px-6">
				{/* Left Side: Logo */}
				<div className="flex-shrink-0">
					<Link
						className="flex items-center gap-3 font-bold text-3xl text-gray-900 tracking-tighter"
						href="/"
					>
						<svg className="h-auto w-16 fill-current" viewBox="0 0 210 126">
							<g>
								<polygon points="135.83 54.08 139.67 57.16 203.21 4.92 203.21 0 152.97 0 135.83 13.92 135.83 54.08" />
								<polygon points="73.35 71.08 69.52 68.01 6.04 120.21 6.04 125.12 56.23 125.12 73.35 111.21 73.35 71.08" />
								<polygon points="0 0 152.68 125.12 209.36 125.12 56.4 0 0 0" />
							</g>
						</svg>
						ENERGEX
					</Link>
				</div>

				{/* Center: Navigation Links */}
				<div className="hidden items-center space-x-8 md:flex">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/solutions">Solutions</NavLink>
					<NavLink href="/company">Company</NavLink>
					<NavLink href="/contact">Contact</NavLink>
				</div>

				{/* Right Side: Multilingual Button */}
				<div className="flex-shrink-0">
					<button className="flex cursor-pointer items-center space-x-2 rounded-lg px-5 py-2.5 font-bold text-gray-800 text-lg transition-all transition-colors hover:bg-gray-100/80 hover:text-blue-600">
						<Globe className="h-5 w-5" />
						<span>EN</span>
					</button>
				</div>
			</div>
		</nav>
	);
}
