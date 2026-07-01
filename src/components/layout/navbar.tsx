"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Globe } from "lucide-react";

const NavLink = ({
	href,
	children,
	isDarkText,
	isActive,
}: {
	href: string;
	children: string;
	isDarkText: boolean;
	isActive?: boolean;
}) => {
	return (
		<Link
			className={`group relative flex overflow-hidden pb-1 font-bold text-lg transition-colors ${isDarkText ? "text-gray-800" : "text-white"}`}
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
			{/* Animated Bottom Border */}
			<div
				className={`absolute bottom-0 left-0 h-[3px] bg-blue-600 transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
			/>
		</Link>
	);
};

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	// Force dark text if scrolled OR if we are on a light-themed page like terms-and-policy, contact, solutions, or company
	const isDarkText =
		isScrolled ||
		pathname === "/terms-and-policy" ||
		pathname === "/contact" ||
		pathname === "/solutions" ||
		pathname === "/company";

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
						className={`flex items-center gap-3 font-bold text-3xl tracking-tighter transition-colors ${isDarkText ? "text-gray-900" : "text-white"}`}
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
					<NavLink href="/" isActive={pathname === "/"} isDarkText={isDarkText}>
						Home
					</NavLink>
					<NavLink
						href="/solutions"
						isActive={pathname.startsWith("/solutions")}
						isDarkText={isDarkText}
					>
						Solutions
					</NavLink>
					<NavLink
						href="/company"
						isActive={pathname.startsWith("/company")}
						isDarkText={isDarkText}
					>
						Company
					</NavLink>
					<NavLink
						href="/contact"
						isActive={pathname.startsWith("/contact")}
						isDarkText={isDarkText}
					>
						Contact
					</NavLink>
				</div>

				{/* Right Side: Multilingual Button */}
				<div className="flex-shrink-0">
					<button
						className={`flex cursor-pointer items-center space-x-2 rounded-lg px-5 py-2.5 text-lg transition-all transition-colors ${isDarkText ? "text-gray-800 hover:bg-gray-100/80 hover:text-blue-600" : "text-white hover:bg-white/20"}`}
					>
						<Globe className="h-5 w-5" />
						<span>EN</span>
					</button>
				</div>
			</div>
		</nav>
	);
}
