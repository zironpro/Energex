import { useEffect } from "react";

import Lenis from "lenis";

interface UseSmoothScrollOptions {
	enableIntroLock?: boolean;
	introDurationMs?: number;
}

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
	const { enableIntroLock = false, introDurationMs = 2500 } = options;

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: 1,
		});

		let timer: NodeJS.Timeout | undefined;
		let rafId: number;

		if (enableIntroLock) {
			const introPlayed = sessionStorage.getItem("introPlayed");
			if (!introPlayed) {
				window.scrollTo(0, 0);
				lenis.stop();
				document.body.style.overflow = "";

				timer = setTimeout(() => {
					lenis.start();
					document.body.style.overflow = "";
					sessionStorage.setItem("introPlayed", "true");
				}, introDurationMs);
			}
		}

		function raf(time: number) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}

		rafId = requestAnimationFrame(raf);

		return () => {
			if (timer) clearTimeout(timer);
			cancelAnimationFrame(rafId);
			lenis.destroy();
			document.body.style.overflow = "";
		};
	}, [enableIntroLock, introDurationMs]);
}
