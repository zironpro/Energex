"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
	motion,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";

const frameCount = 285;

// The images are named ezgif-frame-001.png to ezgif-frame-285.png
const currentFrame = (index: number) =>
	`/sequence/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.png`;

export function StoryScroll() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [images, setImages] = useState<HTMLImageElement[]>([]);
	const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

	// Track native scroll progress of the container
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	// Apply spring physics for buttery smooth scrubbing
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	// Map progress to frame index
	const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

	useEffect(() => {
		const loadedImages: HTMLImageElement[] = [];
		for (let i = 0; i < frameCount; i++) {
			loadedImages.push(new Image());
		}

		// Set immediately so we can render frames as they load
		setImages(loadedImages);

		let isCancelled = false;

		const loadFrame = (index: number) => {
			return new Promise<void>((resolve) => {
				const img = loadedImages[index];
				img.onload = () => {
					if (index === 0) {
						setFirstFrameLoaded(true);
					}
					resolve();
				};
				img.onerror = () => {
					resolve(); // Resolve on error so we don't block the queue
				};
				// Trigger network request
				img.src = currentFrame(index);
			});
		};

		const loadImagesInBatches = async () => {
			// 1. Load the very first frame immediately
			await loadFrame(0);
			if (isCancelled) return;

			// 2. Load the rest in small batches to avoid network congestion
			const batchSize = 10;
			for (let i = 1; i < frameCount; i += batchSize) {
				const batch = [];
				for (let j = i; j < i + batchSize && j < frameCount; j++) {
					batch.push(loadFrame(j));
				}
				await Promise.all(batch);
				if (isCancelled) return;
			}
		};

		loadImagesInBatches();

		return () => {
			isCancelled = true;
		};
	}, []);

	const drawImage = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas || images.length === 0) return;

		const context = canvas.getContext("2d");
		if (!context) return;

		const index = Math.min(
			frameCount - 1,
			Math.max(0, Math.round(frameIndex.get()))
		);
		const img = images[index];

		if (img && img.complete) {
			const canvasRatio = canvas.width / canvas.height;
			const imgRatio = img.width / img.height;

			let drawWidth: number;
			let drawHeight: number;
			let offsetX: number;
			let offsetY: number;

			// Simulate object-fit: cover
			if (canvasRatio > imgRatio) {
				drawWidth = canvas.width;
				drawHeight = canvas.width / imgRatio;
				offsetX = 0;
				offsetY = (canvas.height - drawHeight) / 2;
			} else {
				drawWidth = canvas.height * imgRatio;
				drawHeight = canvas.height;
				offsetX = (canvas.width - drawWidth) / 2;
				offsetY = 0;
			}

			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
		}
	}, [images, frameIndex]);

	// Render canvas whenever the smoothed frame changes
	useMotionValueEvent(frameIndex, "change", drawImage);

	// Initial render & resize handler
	useEffect(() => {
		const handleResize = () => {
			const canvas = canvasRef.current;
			if (canvas) {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				drawImage();
			}
		};
		window.addEventListener("resize", handleResize);
		// Draw initial frame if ready
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, [drawImage]);

	// Ensure we draw the very first frame immediately as soon as it's fully loaded over the network
	useEffect(() => {
		if (firstFrameLoaded) {
			drawImage();
		}
	}, [firstFrameLoaded, drawImage]);

	// Text 1 Opacity & Translate
	const opacity1 = useTransform(
		smoothProgress,
		[0, 0.25, 0.33, 1],
		[1, 1, 0, 0]
	);
	const y1 = useTransform(smoothProgress, [0, 0.25, 0.33, 1], [0, 0, -20, -20]);
	const pointerEvents1 = useTransform(smoothProgress, (v) =>
		v < 0.29 ? "auto" : "none"
	);

	// Text 2 Opacity & Translate
	const opacity2 = useTransform(
		smoothProgress,
		[0, 0.33, 0.4, 0.58, 0.66, 1],
		[0, 0, 1, 1, 0, 0]
	);
	const y2 = useTransform(
		smoothProgress,
		[0, 0.33, 0.4, 0.58, 0.66, 1],
		[20, 20, 0, 0, -20, -20]
	);
	const pointerEvents2 = useTransform(smoothProgress, (v) =>
		v > 0.33 && v < 0.62 ? "auto" : "none"
	);

	// Text 3 Opacity & Translate
	const opacity3 = useTransform(
		smoothProgress,
		[0, 0.66, 0.75, 1],
		[0, 0, 1, 1]
	);
	const y3 = useTransform(smoothProgress, [0, 0.66, 0.75, 1], [20, 20, 0, 0]);
	const pointerEvents3 = useTransform(smoothProgress, (v) =>
		v > 0.66 ? "auto" : "none"
	);

	return (
		<div className="relative h-[400vh] w-full bg-black" ref={containerRef}>
			<div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
				<canvas
					className="absolute inset-0 z-0 block h-full w-full"
					ref={canvasRef}
				/>

				{/* Text Overlays */}
				<div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-20">
					<div className="relative h-[300px] max-w-xl">
						{/* Text 1 */}
						<motion.div
							className="absolute inset-0 flex flex-col justify-center space-y-6"
							style={{
								opacity: opacity1,
								y: y1,
								pointerEvents: pointerEvents1 as unknown as "auto",
							}}
						>
							<h2 className="font-bold text-5xl text-white tracking-tighter drop-shadow-lg md:text-7xl">
								Experience the Future
							</h2>
							<p className="font-medium text-lg text-white/90 leading-relaxed drop-shadow-md md:text-xl">
								Discover unparalleled performance and breathtaking design,
								perfectly synced with every scroll. Power reinvented.
							</p>
						</motion.div>

						{/* Text 2 */}
						<motion.div
							className="absolute inset-0 flex flex-col justify-center space-y-6"
							style={{
								opacity: opacity2,
								y: y2,
								pointerEvents: pointerEvents2 as unknown as "auto",
							}}
						>
							<h2 className="font-bold text-5xl text-white tracking-tighter drop-shadow-lg md:text-7xl">
								Crafted for Perfection
							</h2>
							<p className="font-medium text-lg text-white/90 leading-relaxed drop-shadow-md md:text-xl">
								Every detail meticulously engineered to deliver the ultimate
								seamless experience. Built to inspire your next move.
							</p>
						</motion.div>

						{/* Text 3 */}
						<motion.div
							className="absolute inset-0 flex flex-col justify-center space-y-6"
							style={{
								opacity: opacity3,
								y: y3,
								pointerEvents: pointerEvents3 as unknown as "auto",
							}}
						>
							<h2 className="font-bold text-5xl text-white tracking-tighter drop-shadow-lg md:text-7xl">
								Limitless Potential
							</h2>
							<p className="font-medium text-lg text-white/90 leading-relaxed drop-shadow-md md:text-xl">
								Pushing the boundaries of what is possible. Enter a new era of
								interactive digital experiences today.
							</p>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
