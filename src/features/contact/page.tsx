"use client";

import Link from "next/link";

import Map, {
	FullscreenControl,
	Marker,
	NavigationControl,
	Popup,
} from "react-map-gl/maplibre";
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
	return (
		<main className="relative min-h-screen bg-slate-50 pt-32 pb-24 text-slate-900">
			<div className="container relative z-10 mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
					{/* Left Column: Heading and Info */}
					<div className="flex flex-col justify-center lg:sticky lg:top-32 lg:h-max lg:self-start lg:pr-8">
						<h1 className="mb-6 font-black text-6xl text-slate-900 uppercase leading-[0.9] tracking-tighter md:text-7xl lg:text-[5.5rem]">
							POWER <br />
							<span className="text-blue-600">YOUR</span> <br />
							SUCCESS
						</h1>

						<p className="mb-4 max-w-lg text-slate-700 text-xl leading-relaxed">
							Whether you're planning a{" "}
							<span className="font-bold text-slate-900">
								new construction project, managing a large-scale event,
							</span>{" "}
							or bringing your ideas to life across industrial operations -{" "}
							<span className="font-bold text-slate-900">we're ready.</span>
						</p>

						<p className="mb-12 max-w-md text-slate-500 text-sm leading-relaxed">
							Tell us about your power requirements. We'll respond within 2
							business hours with a clear next step. No sales pressure, no
							jargon.
						</p>

						<div className="flex flex-col gap-10 sm:flex-row">
							<div className="flex flex-col gap-4">
								<h3 className="font-medium text-slate-500 text-sm">
									Stay Connected
								</h3>
								<div className="flex gap-3">
									<a
										className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm transition-all hover:-translate-y-1 hover:bg-blue-600"
										href="#"
									>
										<svg
											className="h-5 w-5"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
										</svg>
									</a>
									<a
										className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm transition-all hover:-translate-y-1 hover:bg-blue-600"
										href="#"
									>
										<svg
											className="h-5 w-5"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
										</svg>
									</a>
									<a
										className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm transition-all hover:-translate-y-1 hover:bg-blue-600"
										href="#"
									>
										<svg
											className="h-5 w-5"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
										</svg>
									</a>
									<a
										className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm transition-all hover:-translate-y-1 hover:bg-blue-600"
										href="#"
									>
										<svg
											className="h-5 w-5"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
										</svg>
									</a>
								</div>
							</div>

							<div className="flex flex-col justify-center gap-4 border-slate-200 sm:border-l sm:pl-8">
								<div className="flex items-center gap-4">
									<span className="w-16 font-bold text-blue-600 text-xs uppercase tracking-wider">
										Email.
									</span>
									<span className="font-medium text-slate-900">
										info@energex.ae
									</span>
								</div>
								<div className="flex items-center gap-4">
									<span className="w-16 font-bold text-blue-600 text-xs uppercase tracking-wider">
										Phone.
									</span>
									<span className="font-medium text-slate-900">
										+971 50 123 4567
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Form */}
					<div className="flex flex-col justify-center">
						<div className="relative z-10 rounded-lg border border-slate-200 bg-white p-8 shadow-xl md:p-10">
							<h2 className="mb-2 font-bold text-3xl text-slate-900">
								Start your project today
							</h2>
							<p className="mb-8 text-slate-500">
								Tell us about your goals and we'll take it from there.
							</p>

							<form className="space-y-5">
								<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
									<div className="space-y-1.5">
										<Label
											className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
											htmlFor="firstName"
										>
											Name <span className="text-red-500">*</span>
										</Label>
										<Input
											className="h-11 border-slate-200 bg-slate-50 focus-visible:ring-blue-500"
											id="firstName"
											placeholder="Your first name"
										/>
									</div>
									<div className="space-y-1.5">
										<Label
											className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
											htmlFor="lastName"
										>
											Last name <span className="text-red-500">*</span>
										</Label>
										<Input
											className="h-11 border-slate-200 bg-slate-50 focus-visible:ring-blue-500"
											id="lastName"
											placeholder="Your last name"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
									<div className="space-y-1.5">
										<Label
											className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
											htmlFor="company"
										>
											Company
										</Label>
										<Input
											className="h-11 border-slate-200 bg-slate-50 focus-visible:ring-blue-500"
											id="company"
											placeholder="Company name"
										/>
									</div>
									<div className="space-y-1.5">
										<Label
											className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
											htmlFor="email"
										>
											Email Address <span className="text-red-500">*</span>
										</Label>
										<Input
											className="h-11 border-slate-200 bg-slate-50 focus-visible:ring-blue-500"
											id="email"
											placeholder="your@company.com"
											type="email"
										/>
									</div>
								</div>

								<div className="space-y-1.5">
									<Label
										className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
										htmlFor="phone"
									>
										Phone number <span className="text-red-500">*</span>
									</Label>
									<Input
										className="h-11 border-slate-200 bg-slate-50 focus-visible:ring-blue-500"
										id="phone"
										placeholder="+971 50 123 4567"
										type="tel"
									/>
								</div>

								<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
									<div className="space-y-1.5">
										<Label
											className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
											htmlFor="rentalDuration"
										>
											Rental duration
										</Label>
										<Select>
											<SelectTrigger
												className="h-11 border-slate-200 bg-slate-50 focus:ring-blue-500"
												id="rentalDuration"
											>
												<SelectValue placeholder="Select rental duration" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="short">
													Short term (1-30 days)
												</SelectItem>
												<SelectItem value="medium">
													Medium term (1-6 months)
												</SelectItem>
												<SelectItem value="long">
													Long term (6+ months)
												</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div className="space-y-1.5">
										<Label
											className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
											htmlFor="sector"
										>
											Sector
										</Label>
										<Select>
											<SelectTrigger
												className="h-11 border-slate-200 bg-slate-50 focus:ring-blue-500"
												id="sector"
											>
												<SelectValue placeholder="Select your sector" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="construction">
													Construction
												</SelectItem>
												<SelectItem value="events">
													Events & Entertainment
												</SelectItem>
												<SelectItem value="industrial">
													Industrial & Manufacturing
												</SelectItem>
												<SelectItem value="oilgas">Oil & Gas</SelectItem>
												<SelectItem value="other">Other</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="space-y-1.5">
									<Label
										className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
										htmlFor="projectType"
									>
										Project type
									</Label>
									<Select>
										<SelectTrigger
											className="h-11 border-slate-200 bg-slate-50 focus:ring-blue-500"
											id="projectType"
										>
											<SelectValue placeholder="Select your project type" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="prime">Prime Power</SelectItem>
											<SelectItem value="standby">
												Standby / Emergency Power
											</SelectItem>
											<SelectItem value="hybrid">Hybrid System</SelectItem>
											<SelectItem value="custom">Custom Engineering</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-1.5">
									<Label
										className="font-semibold text-slate-700 text-xs uppercase tracking-wider"
										htmlFor="message"
									>
										Message
									</Label>
									<Textarea
										className="resize-y border-slate-200 bg-slate-50 focus-visible:ring-blue-500"
										id="message"
										placeholder="Tell us about your project or inquiry..."
										rows={4}
									/>
								</div>

								<div className="mt-8 flex flex-col items-center justify-between gap-6 border-slate-100 border-t pt-4 sm:flex-row">
									<p className="max-w-[200px] text-slate-500 text-xs">
										By submitting you agree to our <br />
										<Link
											className="text-blue-600 hover:underline"
											href="/terms-and-policy"
										>
											Terms of Service
										</Link>{" "}
										and{" "}
										<Link
											className="text-blue-600 hover:underline"
											href="/terms-and-policy"
										>
											Privacy Policy
										</Link>
										.
									</p>
									<Button
										className="group h-12 w-full rounded-lg bg-blue-600 px-8 font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto"
										type="button"
									>
										Send Message
										<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Button>
								</div>
							</form>
						</div>

						<div className="mt-8 text-center sm:pl-4 sm:text-left">
							<p className="font-medium text-slate-600">
								Prefer to hop on a call?{" "}
								<a
									className="font-semibold text-blue-600 hover:underline"
									href="#"
								>
									Book a call
								</a>{" "}
								instead.
							</p>
						</div>
					</div>
				</div>

				{/* Full-width Map Section */}
				<div className="mt-16 h-[400px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl lg:h-[500px]">
					<Map
						initialViewState={{
							longitude: 55.071,
							latitude: 24.876,
							zoom: 15.5,
						}}
						mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
					>
						<Marker anchor="center" latitude={24.876} longitude={55.071}>
							<div className="h-5 w-5 rounded-full border-[3px] border-white bg-yellow-500 shadow-md" />
						</Marker>

						<Popup
							anchor="bottom"
							closeButton={false}
							closeOnClick={false}
							latitude={24.876}
							longitude={55.071}
							offset={16}
						>
							<div className="max-w-[220px] p-1">
								<h4 className="mb-1 font-bold text-slate-900 text-sm">
									Energex HQ
								</h4>
								<p className="text-slate-600 text-xs leading-relaxed">
									Visit our office in Dubai Industrial City. We provide reliable
									power solutions for modern industries.
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
