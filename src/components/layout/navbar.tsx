"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Languages, Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Link, usePathname, useRouter } from "@/i18n/navigation";

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
			className="group relative flex overflow-hidden pb-1 text-base text-white transition-colors"
			href={href}
		>
			<div className="flex">
				<span className="transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
					{children}
				</span>
			</div>
			<div className="absolute inset-0 flex text-blue-200">
				<span className="translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
					{children}
				</span>
			</div>
			{/* Animated Bottom Border */}
			<div
				className={`absolute bottom-0 left-0 h-[1px] bg-white transition duration-300 ease-in-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
			/>
		</Link>
	);
};

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();
	const router = useRouter();
	const currentLocale = useLocale();
	const t = useTranslations("common.Navbar");

	const switchLocale = (locale: string) => {
		router.replace(pathname, { locale });
	};

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

	const [isOpen, setIsOpen] = useState(false);

	const mobileLinks = [
		{ name: t("links.home"), href: "/" },
		{ name: t("links.solutions"), href: "/solutions" },
		{ name: t("links.products"), href: "/products" },
		{ name: t("links.company"), href: "/company" },
		{ name: t("links.contact"), href: "/contact" },
	];

	return (
		<nav
			className={`fixed top-0 right-0 left-0 z-50 transition duration-300 ease-in-out ${
				showBg ? "bg-blue-600 py-5 shadow-sm" : "bg-transparent py-8"
			}`}
		>
			<div className="container mx-auto flex items-center justify-between px-6">
				{/* Left Side: Logo */}
				<div className="flex-shrink-0">
					<Link
						className="flex items-center gap-3 font-bold text-3xl text-white tracking-tighter transition-colors hover:opacity-90"
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
					{mobileLinks.map((link) => (
						<NavLink
							href={link.href}
							isActive={
								link.href === "/"
									? pathname === "/"
									: pathname.startsWith(link.href)
							}
							key={link.name}
						>
							{link.name}
						</NavLink>
					))}
				</div>

				{/* Right Side: Multilingual Button & Mobile Menu */}
				<div className="flex flex-shrink-0 items-center gap-3 md:gap-4">
					<div className="hidden md:block">
						<button
							className="flex cursor-pointer items-center space-x-2 rounded-lg px-3 py-2 text-white transition-colors hover:bg-white/20 md:px-5 md:py-2.5 md:text-lg"
							onClick={() => switchLocale(currentLocale === "en" ? "ar" : "en")}
						>
							<Languages className="h-5 w-5" />
							<span>{currentLocale === "en" ? "العربية" : "English"}</span>
						</button>
					</div>

					{/* Mobile Menu */}
					<div className="md:hidden">
						<Sheet onOpenChange={setIsOpen} open={isOpen}>
							<SheetTrigger className="flex cursor-pointer items-center justify-center rounded-lg bg-white/10 p-2.5 text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95">
								<Menu className="h-6 w-6" />
							</SheetTrigger>
							<SheetContent
								className="mx-auto flex h-[90dvh] flex-col rounded-t-[2rem] border-0 bg-white px-0 pt-3 pb-6 text-slate-900 sm:max-w-md"
								showCloseButton={false}
								side="bottom"
							>
								{/* Drag Handle */}
								<div
									className="flex w-full cursor-grab items-center justify-center pt-1 pb-4 active:cursor-grabbing"
									onClick={() => setIsOpen(false)}
									onPointerDown={(e) => {
										const target = e.currentTarget.parentElement;
										if (!target) return;
										const startY = e.clientY;
										let currentY = 0;

										target.style.transition = "none";

										const onPointerMove = (moveEvent: PointerEvent) => {
											currentY = moveEvent.clientY - startY;
											if (currentY > 0) {
												target.style.transform = `translateY(${currentY}px)`;
											}
										};

										const onPointerUp = () => {
											target.style.transition = "transform 0.2s ease-out";
											if (currentY > 80) {
												setIsOpen(false);
												setTimeout(() => {
													if (target) {
														target.style.transform = "";
														target.style.transition = "";
													}
												}, 300);
											} else {
												target.style.transform = "";
												setTimeout(() => {
													if (target) target.style.transition = "";
												}, 200);
											}
											window.removeEventListener("pointermove", onPointerMove);
											window.removeEventListener("pointerup", onPointerUp);
										};

										window.addEventListener("pointermove", onPointerMove);
										window.addEventListener("pointerup", onPointerUp);
									}}
									style={{ touchAction: "none" }}
								>
									<div className="h-1.5 w-12 rounded-full bg-slate-200" />
								</div>

								{/* Logo Area */}
								<div className="flex justify-center pt-2 pb-4">
									<Link
										className="flex items-center gap-2"
										href="/"
										onClick={() => setIsOpen(false)}
									>
										<svg
											className="h-8 w-auto fill-blue-600"
											viewBox="0 0 210 126"
										>
											<g>
												<polygon points="135.83 54.08 139.67 57.16 203.21 4.92 203.21 0 152.97 0 135.83 13.92 135.83 54.08" />
												<polygon points="73.35 71.08 69.52 68.01 6.04 120.21 6.04 125.12 56.23 125.12 73.35 111.21 73.35 71.08" />
												<polygon points="0 0 152.68 125.12 209.36 125.12 56.4 0 0 0" />
											</g>
										</svg>
										<span className="font-bold text-2xl text-slate-900 tracking-tighter">
											ENERGEX
										</span>
									</Link>
								</div>
								<div className="border-slate-100 border-b" />

								{/* Links */}
								<div className="flex flex-1 flex-col overflow-y-auto px-6 py-6">
									<div className="flex flex-col gap-5">
										{mobileLinks.map((link) => {
											const isActive =
												link.href === "/"
													? pathname === "/"
													: pathname.startsWith(link.href);
											return (
												<Link
													className={`text-[19px] transition-colors ${
														isActive
															? "font-bold text-slate-900"
															: "font-medium text-slate-600 hover:text-slate-900"
													}`}
													href={link.href}
													key={link.name}
													onClick={() => setIsOpen(false)}
												>
													{link.name}
												</Link>
											);
										})}
									</div>
								</div>

								{/* Footer Buttons */}
								<div className="mt-auto flex gap-3 border-slate-100 border-t px-6 pt-4">
									<Link
										className="flex h-12 flex-1 items-center justify-center rounded-lg bg-blue-600 px-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700"
										href="/contact"
										onClick={() => setIsOpen(false)}
									>
										{t("actions.requestQuote")}
										<Image
											alt=""
											className="ml-2 h-4 w-4 invert"
											height={16}
											src="/icons/caret-right.svg"
											width={16}
										/>
									</Link>
									<button
										className="flex h-12 items-center justify-center rounded-lg bg-slate-100 px-5 font-medium text-slate-700 transition-colors hover:bg-slate-200"
										onClick={() => {
											setIsOpen(false);
											switchLocale(currentLocale === "en" ? "ar" : "en");
										}}
									>
										{currentLocale === "en" ? "العربية" : "English"}
									</button>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
}
