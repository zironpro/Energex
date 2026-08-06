import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import { notFound } from "next/navigation";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import {
	getMessages,
	getTranslations,
	setRequestLocale,
} from "next-intl/server";

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

const BASE_URL =
	process.env.NEXT_PUBLIC_SITE_URL ||
	process.env.SITE_URL ||
	"https://www.energexequip.ae";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "common.Metadata" });
	const baseUrl = BASE_URL.trim().replace(/\/+$/, "");

	return {
		metadataBase: new URL(baseUrl),
		title: t("title"),
		description: t("description"),
		alternates: {
			canonical: `${baseUrl}/${locale}`,
			languages: {
				en: `${baseUrl}/en`,
				ar: `${baseUrl}/ar`,
				"x-default": `${baseUrl}/en`,
			},
		},
		verification: {
			google: "4bKAMrB0AGsSxQuoqq4uz49qrPNs4lgYfGkY4-IIYhc",
		},
	};
}

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
				<noscript>
					<iframe
						height="0"
						src="https://www.googletagmanager.com/ns.html?id=GTM-5RXTQ2PT"
						style={{ display: "none", visibility: "hidden" }}
						width="0"
					/>
				</noscript>
				<NextIntlClientProvider messages={messages}>
					<div className="flex min-h-screen flex-col">
						<Navbar />
						{children}
						<Footer />
						<FloatingCallButton />
					</div>
				</NextIntlClientProvider>
			</body>
			<GoogleAnalytics gaId="G-4SQ36YPC9H" />
			<GoogleTagManager gtmId="GTM-5RXTQ2PT" />
		</html>
	);
}
