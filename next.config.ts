import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	experimental: {
		cpus: 1,
	},
};

export default withNextIntl(nextConfig);
