import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function NotFound() {
	const locale = useLocale();
	const isAr = locale === "ar";

	return (
		<div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-white px-4 py-20 text-center">
			{/* Background Logo */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
				<svg
					className="h-[120%] w-[120%] fill-slate-900 md:h-[150%] md:w-[150%]"
					preserveAspectRatio="xMidYMid slice"
					viewBox="0 0 210 126"
				>
					<g>
						<polygon points="135.83 54.08 139.67 57.16 203.21 4.92 203.21 0 152.97 0 135.83 13.92 135.83 54.08" />
						<polygon points="73.35 71.08 69.52 68.01 6.04 120.21 6.04 125.12 56.23 125.12 73.35 111.21 73.35 71.08" />
						<polygon points="0 0 152.68 125.12 209.36 125.12 56.4 0 0 0" />
					</g>
				</svg>
			</div>

			<div className="relative z-10 flex max-w-2xl flex-col items-center">
				<h1 className="mb-4 font-bold text-7xl text-blue-700 md:text-9xl">404</h1>
				<h2 className="mb-6 font-bold text-2xl text-slate-900 md:text-3xl">
					{isAr ? "الصفحة غير موجودة" : "Page Not Found"}
				</h2>
				<p className="mb-10 text-lg text-slate-600">
					{isAr 
						? "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
						: "Sorry, the page you are looking for doesn't exist or has been moved."}
				</p>
				<Link
					href="/"
					className="inline-flex items-center justify-center rounded-sm bg-blue-700 px-8 py-4 font-bold text-white transition-colors hover:bg-blue-800"
				>
					{isAr ? "العودة إلى الصفحة الرئيسية" : "Back to Home"}
				</Link>
			</div>
		</div>
	);
}
