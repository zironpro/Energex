"use client";

import { useTranslations } from "next-intl";
import Map, {
	FullscreenControl,
	Marker,
	NavigationControl,
	Popup,
} from "react-map-gl/maplibre";

import { Link } from "@/i18n/navigation";
import "maplibre-gl/dist/maplibre-gl.css";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactPage() {
	const t = useTranslations("contact");
	return (
		<main className="relative min-h-screen bg-slate-50 pt-32 pb-24 text-slate-900">
			<div className="container relative z-10 mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
					{/* Left Column: Heading and Info */}
					<div className="flex flex-col justify-center lg:sticky lg:top-32 lg:h-max lg:self-start lg:pr-8">
						<h1 className="mb-6 font-black text-5xl text-blue-600 uppercase leading-[0.9] tracking-tighter sm:text-6xl md:text-7xl lg:text-[5.5rem]">
							{t("title1")} <br />
							<span className="text-blue-600">{t("title2")}</span> <br />
							{t("title3")}
						</h1>

						<p className="mb-4 max-w-lg text-slate-700 text-xl leading-relaxed">
							{t("desc1")}
							<span className="font-bold text-slate-900">{t("descBold1")}</span>
							{t("desc2")}
							<span className="font-bold text-slate-900">{t("descBold2")}</span>
						</p>

						<p className="mb-12 max-w-md text-slate-500 text-sm leading-relaxed">
							{t("subtext")}
						</p>

						<div className="flex flex-col gap-10 sm:flex-row">
							<div className="flex flex-col gap-4">
								<h3 className="font-medium text-slate-500 text-sm">
									{t("stayConnected")}
								</h3>
								<div className="flex gap-3">
									<a
										className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700"
										href="https://www.instagram.com/energex_equipment/"
										rel="noreferrer"
										target="_blank"
									>
										<svg
											className="h-5 w-5"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
											<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
											<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
										</svg>
									</a>
									<a
										className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700"
										href="https://www.linkedin.com/company/energex-equipment-rental/"
										rel="noreferrer"
										target="_blank"
									>
										<svg
											className="h-5 w-5"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
											<rect height="12" width="4" x="2" y="9" />
											<circle cx="4" cy="4" r="2" />
										</svg>
									</a>
									<a
										className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700"
										href="https://wa.me/971502335477"
										rel="noreferrer"
										target="_blank"
									>
										<svg
											className="h-5 w-5"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
											<path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
										</svg>
									</a>
								</div>
							</div>

							<div className="flex flex-col justify-center gap-4 border-slate-200 sm:border-l sm:pl-8">
								<div className="flex items-center gap-4">
									<span className="w-16 font-bold text-blue-600 text-xs uppercase tracking-wider">
										{t("emailLabel")}
									</span>
									<span className="font-medium text-slate-900">
										<a
											className="transition-colors hover:text-blue-600 hover:underline"
											href="mailto:info@energexequip.ae"
										>
											info@energexequip.ae
										</a>
									</span>
								</div>
								<div className="flex items-center gap-4">
									<span className="w-16 font-bold text-blue-600 text-xs uppercase tracking-wider">
										{t("phoneLabel")}
									</span>
									<span className="flex flex-col gap-1 font-medium text-slate-900">
										<a
											className="transition-colors hover:text-blue-600 hover:underline"
											href="tel:+97145753066"
										>
											T: (+971) 4 575 3066
										</a>
										<a
											className="transition-colors hover:text-blue-600 hover:underline"
											href="tel:+971502335477"
										>
											M: +971 50 233 5477
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Form */}
					<div className="flex flex-col justify-center">
						<div className="relative z-10 rounded-lg border border-slate-200 bg-white p-8 shadow-xl md:p-10">
							<h2 className="mb-2 font-bold text-3xl text-slate-900">
								{t("formTitle")}
							</h2>
							<p className="mb-8 text-slate-500">{t("formSubtitle")}</p>

							<form
								className="space-y-5"
								onSubmit={(e) => {
									e.preventDefault();
									alert(
										"Thank you for your inquiry. Our team will contact you shortly."
									);
								}}
							>
								<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
									<div className="space-y-1.5">
										<Label
											className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
											htmlFor="firstName"
										>
											{t("form.firstNameLabel")}{" "}
											<span className="text-red-500">*</span>
										</Label>
										<Input
											className="h-11 border-transparent bg-[#d0d7e1] focus-visible:ring-blue-600"
											id="firstName"
											placeholder={t("form.firstNamePlaceholder")}
										/>
									</div>
									<div className="space-y-1.5">
										<Label
											className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
											htmlFor="lastName"
										>
											{t("form.lastNameLabel")}{" "}
											<span className="text-red-500">*</span>
										</Label>
										<Input
											className="h-11 border-transparent bg-[#d0d7e1] focus-visible:ring-blue-600"
											id="lastName"
											placeholder={t("form.lastNamePlaceholder")}
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
									<div className="space-y-1.5">
										<Label
											className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
											htmlFor="company"
										>
											{t("form.companyLabel")}
										</Label>
										<Input
											className="h-11 border-transparent bg-[#d0d7e1] focus-visible:ring-blue-600"
											id="company"
											placeholder={t("form.companyPlaceholder")}
										/>
									</div>
									<div className="space-y-1.5">
										<Label
											className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
											htmlFor="email"
										>
											{t("form.emailLabel")}{" "}
											<span className="text-red-500">*</span>
										</Label>
										<Input
											className="h-11 border-transparent bg-[#d0d7e1] focus-visible:ring-blue-600"
											id="email"
											placeholder={t("form.emailPlaceholder")}
											type="email"
										/>
									</div>
								</div>

								<div className="space-y-1.5">
									<Label
										className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
										htmlFor="phone"
									>
										{t("form.phoneLabel")}{" "}
										<span className="text-red-500">*</span>
									</Label>
									<Input
										className="h-11 border-transparent bg-[#d0d7e1] focus-visible:ring-blue-600"
										id="phone"
										placeholder={t("form.phonePlaceholder")}
										type="tel"
									/>
								</div>

								<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
									<div className="space-y-1.5">
										<Label
											className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
											htmlFor="rentalDuration"
										>
											{t("form.durationLabel")}
										</Label>
										<Select>
											<SelectTrigger
												className="h-11 border-transparent bg-[#d0d7e1] focus:ring-blue-600"
												id="rentalDuration"
											>
												<SelectValue
													placeholder={t("form.durationPlaceholder")}
												/>
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="short">
													{t("form.durationShort")}
												</SelectItem>
												<SelectItem value="medium">
													{t("form.durationMedium")}
												</SelectItem>
												<SelectItem value="long">
													{t("form.durationLong")}
												</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div className="space-y-1.5">
										<Label
											className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
											htmlFor="sector"
										>
											{t("form.sectorLabel")}
										</Label>
										<Select>
											<SelectTrigger
												className="h-11 border-transparent bg-[#d0d7e1] focus:ring-blue-600"
												id="sector"
											>
												<SelectValue
													placeholder={t("form.sectorPlaceholder")}
												/>
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="construction">
													{t("form.sectorConstruction")}
												</SelectItem>
												<SelectItem value="events">
													{t("form.sectorEvents")}
												</SelectItem>
												<SelectItem value="industrial">
													{t("form.sectorIndustrial")}
												</SelectItem>
												<SelectItem value="oilgas">
													{t("form.sectorOilGas")}
												</SelectItem>
												<SelectItem value="other">
													{t("form.sectorOther")}
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="space-y-1.5">
									<Label
										className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
										htmlFor="projectType"
									>
										{t("form.typeLabel")}
									</Label>
									<Select>
										<SelectTrigger
											className="h-11 border-transparent bg-[#d0d7e1] focus:ring-blue-600"
											id="projectType"
										>
											<SelectValue placeholder={t("form.typePlaceholder")} />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="prime">
												{t("form.typePrime")}
											</SelectItem>
											<SelectItem value="standby">
												{t("form.typeStandby")}
											</SelectItem>
											<SelectItem value="hybrid">
												{t("form.typeHybrid")}
											</SelectItem>
											<SelectItem value="custom">
												{t("form.typeCustom")}
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-1.5">
									<Label
										className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
										htmlFor="message"
									>
										{t("form.messageLabel")}
									</Label>
									<Textarea
										className="resize-y border-transparent bg-[#d0d7e1] focus-visible:ring-blue-600"
										id="message"
										placeholder={t("form.messagePlaceholder")}
										rows={4}
									/>
								</div>

								<div className="mt-8 flex flex-col items-center justify-between gap-6 border-slate-100 border-t pt-4 sm:flex-row">
									<p className="max-w-[200px] text-slate-500 text-xs">
										{t("form.termsText1")} <br />
										<Link
											className="text-blue-600 hover:underline"
											href="/terms-and-policy"
										>
											{t("form.termsLink")}
										</Link>{" "}
										{t("form.termsText2")}{" "}
										<Link
											className="text-blue-600 hover:underline"
											href="/terms-and-policy"
										>
											{t("form.privacyLink")}
										</Link>
										{t("form.termsText3")}
									</p>
									<Button
										className="group h-12 w-full rounded-lg bg-blue-600 px-8 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700 sm:w-auto"
										type="submit"
									>
										{t("form.submit")}
										<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Button>
								</div>
							</form>
						</div>

						<div className="mt-8 text-center sm:pl-4 sm:text-left">
							<p className="font-medium text-slate-600">
								{t("callText1")}
								<a
									className="font-semibold text-blue-600 hover:underline"
									href="#"
								>
									{t("callLink")}
								</a>
								{t("callText2")}
							</p>
						</div>
					</div>
				</div>

				{/* Full-width Map Section */}
				<div className="mt-16 h-[400px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl lg:h-[500px]">
					<Map
						initialViewState={{
							longitude: 55.39307,
							latitude: 25.28189,
							zoom: 15.5,
						}}
						mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
					>
						<Marker anchor="center" latitude={25.28189} longitude={55.39307}>
							<div className="h-5 w-5 rounded-full border-[3px] border-white bg-yellow-500 shadow-md" />
						</Marker>

						<Popup
							anchor="bottom"
							closeButton={false}
							closeOnClick={false}
							latitude={25.28189}
							longitude={55.39307}
							offset={[0, -10]}
						>
							<div className="max-w-[220px] p-1">
								<h4 className="mb-1 font-bold text-slate-900 text-sm">
									{t("map.hq")}
								</h4>
								<p className="text-slate-600 text-xs leading-relaxed">
									{t("map.desc")}
								</p>
							</div>
						</Popup>

						<NavigationControl position="bottom-right" />
						<FullscreenControl position="bottom-right" />
					</Map>
				</div>
			</div>
		</main>
	);
}
