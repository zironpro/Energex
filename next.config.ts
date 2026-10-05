import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	experimental: {
		cpus: 1,
		optimizePackageImports: ["lucide-react", "framer-motion", "@base-ui/react"],
	},
	images: {
		unoptimized: true,
		formats: ["image/avif", "image/webp"],
		qualities: [60, 75, 100],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
	},
	async headers() {
		return [
			{
				source: "/video/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},
};

export default withNextIntl(nextConfig);
