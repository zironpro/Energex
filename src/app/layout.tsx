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
	title: "Energex | Best Power Generator Supplier in Dubai | UAE",
	description:
		"Energex is the best power generator supplier in Dubai, providing diesel and gas generators, backup power solutions, installation, maintenance, and expert support across the UAE.",
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
			<body className="flex flex-col font-sans">
				<div className="flex min-h-screen flex-col overflow-x-hidden">
					<Navbar />
					{children}
					<Footer />
					<FloatingCallButton />
				</div>
			</body>
		</html>
	);
}
