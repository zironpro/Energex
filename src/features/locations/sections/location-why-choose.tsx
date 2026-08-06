import { CheckCircle2 } from "lucide-react";

import type { LocationPageData } from "../types";

interface LocationWhyChooseProps {
	emirate: string;
	whyChoose: LocationPageData["whyChoose"];
}

export function LocationWhyChoose({
	emirate,
	whyChoose,
}: LocationWhyChooseProps) {
	return (
		<section className="bg-slate-50/60 py-20">
			<div className="container mx-auto max-w-7xl px-6 md:px-12">
				<div className="mx-auto mb-16 max-w-4xl text-center">
					<h2 className="font-black text-3xl text-blue-600 leading-tight tracking-tighter sm:text-4xl md:text-5xl">
						{whyChoose.title}
					</h2>
					<p className="mt-4 text-base text-slate-600 md:text-lg">
						Energex combines rapid local dispatch with complete technical setup
						and 24/7 backup maintenance across {emirate}.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{whyChoose.points.map((point) => (
						<div
							className="group relative flex flex-col justify-between rounded-lg border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-xl"
							key={point}
						>
							<div>
								<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-transform group-hover:scale-110">
									<CheckCircle2 className="h-6 w-6" />
								</div>
								<p className="font-medium text-base text-slate-800 leading-relaxed">
									{point}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
