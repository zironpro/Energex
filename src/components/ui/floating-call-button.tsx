"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export function FloatingCallButton() {
	return (
		<motion.div
			animate={{ scale: 1, opacity: 1, y: 0 }}
			className="fixed right-6 bottom-6 z-50"
			initial={{ scale: 0, opacity: 0, y: 50 }}
			transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
		>
			<Link
				className="group relative flex items-center gap-3 rounded-full bg-blue-600 p-3 pr-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-900/50"
				href="tel:+971 50 233 5477"
			>
				{/* Expanding outer ring animation */}
				<div className="absolute inset-0 -z-10 animate-ping rounded-full bg-blue-600 opacity-20 duration-1000" />

				<div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:scale-110">
					<PhoneCall className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
				</div>
				<div className="flex flex-col text-left">
					<span className="font-semibold text-blue-100 text-xs uppercase tracking-wider">
						24/7 Support
					</span>
					<span className="font-extrabold tracking-tight">Call Now</span>
				</div>
			</Link>
		</motion.div>
	);
}
