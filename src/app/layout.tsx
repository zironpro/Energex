import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FloatingCallButton } from "@/components/ui/floating-call-button";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Energex",
	description:
		"Energex is a leading provider of mobile generator rentals, offering reliable power solutions for events, construction sites, and industrial operations.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			lang="en"
		>
			<body className="flex flex-col">
				<Navbar />
				{children}
				<Footer />
				<FloatingCallButton />
			</body>
		</html>
	);
}
