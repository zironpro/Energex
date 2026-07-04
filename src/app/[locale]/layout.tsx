import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import { notFound } from "next/navigation";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FloatingCallButton } from "@/components/ui/floating-call-button";

import { routing } from "@/i18n/routing";

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

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
		notFound();
	}

	setRequestLocale(locale);
	const messages = await getMessages();

	return (
		<html
			className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			dir={locale === "ar" ? "rtl" : "ltr"}
			lang={locale}
		>
			<body className="flex flex-col font-sans">
				<NextIntlClientProvider messages={messages}>
					<div className="flex min-h-screen flex-col overflow-x-hidden">
						<Navbar />
						{children}
						<Footer />
						<FloatingCallButton />
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
