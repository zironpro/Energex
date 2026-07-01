"use client";

import { ReactNode } from "react";

import { motion, Variants } from "framer-motion";

type ScrollRevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right" | "none";
	duration?: number;
};

export function ScrollReveal({
	children,
	className,
	delay = 0,
	direction = "up",
	duration = 0.5,
}: ScrollRevealProps) {
	const fadeVariants: Variants = {
		hidden: {
			opacity: 0,
			y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
			x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
			scale: direction === "none" ? 0.95 : 1,
		},
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			scale: 1,
			transition: {
				duration,
				delay,
				ease: [0.21, 0.47, 0.32, 0.98], // elegant ease-out
			},
		},
	};

	return (
		<motion.div
			className={className}
			initial="hidden"
			variants={fadeVariants}
			viewport={{ once: true, amount: 0.1 }}
			whileInView="visible"
		>
			{children}
		</motion.div>
	);
}

export function ScrollRevealGroup({
	children,
	className,
	stagger = 0.15,
}: {
	children: ReactNode;
	className?: string;
	stagger?: number;
}) {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: stagger,
			},
		},
	};

	return (
		<motion.div
			className={className}
			initial="hidden"
			variants={containerVariants}
			viewport={{ once: true, amount: 0.1 }}
			whileInView="visible"
		>
			{children}
		</motion.div>
	);
}

export function ScrollRevealItem({
	children,
	className,
	direction = "up",
	duration = 0.5,
}: ScrollRevealProps) {
	const itemVariants: Variants = {
		hidden: {
			opacity: 0,
			y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
			x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
			scale: direction === "none" ? 0.95 : 1,
		},
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			scale: 1,
			transition: {
				duration,
				ease: [0.21, 0.47, 0.32, 0.98],
			},
		},
	};

	return (
		<motion.div className={className} variants={itemVariants}>
			{children}
		</motion.div>
	);
}
