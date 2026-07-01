"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Globe, Menu } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavLink = ({
	href,
	children,
	isActive,
}: {
	href: string;
	children: string;
	isActive?: boolean;
}) => {
	return (
		<Link
			className="group relative flex overflow-hidden pb-1 font-bold text-lg text-white transition-colors"
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
			<div className="absolute inset-0 flex text-blue-200">
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
				className={`absolute bottom-0 left-0 h-[3px] bg-white transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
			/>
		</Link>
	);
};

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	const isNotHome = pathname !== "/";
	const showBg = isScrolled || isNotHome;

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
				showBg ? "bg-blue-600 py-5 shadow-sm" : "bg-transparent py-8"
			}`}
		>
			<div className="container mx-auto flex items-center justify-between px-6">
				{/* Left Side: Logo */}
				<div className="flex-shrink-0">
					<Link
						className="flex items-center gap-3 font-bold text-3xl text-white tracking-tighter transition-colors"
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
					<NavLink href="/" isActive={pathname === "/"}>
						Home
					</NavLink>
					<NavLink
						href="/solutions"
						isActive={pathname.startsWith("/solutions")}
					>
						Solutions
					</NavLink>
					<NavLink href="/company" isActive={pathname.startsWith("/company")}>
						Company
					</NavLink>
					<NavLink href="/contact" isActive={pathname.startsWith("/contact")}>
						Contact
					</NavLink>
				</div>

				{/* Right Side: Multilingual Button & Mobile Menu */}
				<div className="flex flex-shrink-0 items-center gap-2 md:gap-4">
					<div className="hidden md:block">
						<DropdownMenu>
							<DropdownMenuTrigger className="flex cursor-pointer items-center space-x-2 rounded-lg px-3 py-2 text-white transition-colors hover:bg-white/20 md:px-5 md:py-2.5 md:text-lg">
								<Globe className="h-5 w-5" />
								<span>EN</span>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem className="cursor-pointer">
									English (EN)
								</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer">
									Arabic (AR)
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					{/* Mobile Menu */}
					<div className="md:hidden">
						<Sheet>
							<SheetTrigger className="flex cursor-pointer items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/20">
								<Menu className="h-6 w-6" />
							</SheetTrigger>
							<SheetContent
								className="w-[300px] border-l-0 bg-white sm:w-[400px]"
								side="right"
							>
								<div className="mt-12 flex flex-col gap-6 px-2">
									<Link
										className="font-bold text-2xl text-blue-900 transition-colors hover:text-blue-700"
										href="/"
									>
										Home
									</Link>
									<Link
										className="font-bold text-2xl text-blue-900 transition-colors hover:text-blue-700"
										href="/solutions"
									>
										Solutions
									</Link>
									<Link
										className="font-bold text-2xl text-blue-900 transition-colors hover:text-blue-700"
										href="/company"
									>
										Company
									</Link>
									<Link
										className="font-bold text-2xl text-blue-900 transition-colors hover:text-blue-700"
										href="/contact"
									>
										Contact
									</Link>

									{/* Mobile Language Selector */}
									<div className="mt-8 border-t pt-8">
										<h3 className="mb-4 font-semibold text-slate-500 text-sm uppercase tracking-wider">
											Select Language
										</h3>
										<div className="flex flex-col gap-4">
											<button className="flex items-center gap-3 font-bold text-blue-900 text-lg">
												<Globe className="h-5 w-5" /> English (EN)
											</button>
											<button className="flex items-center gap-3 font-bold text-lg text-slate-500 transition-colors hover:text-blue-600">
												<Globe className="h-5 w-5" /> Arabic (AR)
											</button>
										</div>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
}
