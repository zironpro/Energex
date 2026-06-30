"use client";

export function TermsAndPolicyPage() {
	return (
		<main className="relative min-h-screen bg-white pt-32 pb-24 text-slate-900">
			<div className="container mx-auto max-w-4xl px-6">
				<h1 className="mb-12 font-bold text-4xl tracking-tighter md:text-6xl">
					Legal & Policies
				</h1>

				<div className="space-y-16">
					<section className="scroll-mt-32">
						<h2 className="mb-6 font-semibold text-2xl text-blue-600 md:text-3xl">
							Terms of Service
						</h2>
						<div className="prose max-w-none space-y-4 text-slate-600 leading-relaxed">
							<p className="text-slate-500 text-sm">
								Last updated: {new Date().toLocaleDateString()}
							</p>
							<p>
								Welcome to Energex. By accessing or using our services, you
								agree to be bound by these Terms of Service. Please read them
								carefully before utilizing our power solutions.
							</p>

							<h3 className="mt-8 mb-4 font-medium text-slate-900 text-xl">
								1. Use of Services
							</h3>
							<p>
								You agree to use our services only for lawful purposes and in
								accordance with these Terms. You are responsible for ensuring
								that your use of our services does not violate any applicable
								local, national, or international laws or regulations.
							</p>

							<h3 className="mt-8 mb-4 font-medium text-slate-900 text-xl">
								2. Equipment and Safety
							</h3>
							<p>
								When renting or utilizing our power generators and systems, you
								must adhere to all safety guidelines provided by Energex. Any
								modifications or tampering with the equipment is strictly
								prohibited and may result in immediate termination of service
								and liability for damages.
							</p>

							<h3 className="mt-8 mb-4 font-medium text-slate-900 text-xl">
								3. Intellectual Property
							</h3>
							<p>
								All content, features, functionality, and designs of our
								services are owned by Energex and are protected by international
								copyright, trademark, and other intellectual property laws.
							</p>

							<h3 className="mt-8 mb-4 font-medium text-slate-900 text-xl">
								4. Limitation of Liability
							</h3>
							<p>
								Energex shall not be liable for any indirect, incidental,
								special, consequential, or punitive damages resulting from your
								use of or inability to use our services, including any power
								interruptions or operational delays.
							</p>
						</div>
					</section>

					<div className="h-px w-full bg-slate-200" />

					<section className="scroll-mt-32">
						<h2 className="mb-6 font-semibold text-2xl text-blue-600 md:text-3xl">
							Privacy Policy
						</h2>
						<div className="prose max-w-none space-y-4 text-slate-600 leading-relaxed">
							<p className="text-slate-500 text-sm">
								Last updated: {new Date().toLocaleDateString()}
							</p>
							<p>
								At Energex, we take your privacy seriously. This Privacy Policy
								explains how we collect, use, and protect your personal
								information when you interact with our website and services.
							</p>

							<h3 className="mt-8 mb-4 font-medium text-slate-900 text-xl">
								1. Information We Collect
							</h3>
							<p>
								We may collect personal information such as your name, email
								address, phone number, and company details when you request a
								quote, contact us for support, or use our digital platforms.
							</p>

							<h3 className="mt-8 mb-4 font-medium text-slate-900 text-xl">
								2. How We Use Your Information
							</h3>
							<p>
								We use the collected information to provide and improve our
								services, process transactions, communicate with you regarding
								your power solutions, and comply with legal obligations. We do
								not sell your personal information to third parties.
							</p>

							<h3 className="mt-8 mb-4 font-medium text-slate-900 text-xl">
								3. Data Security
							</h3>
							<p>
								We implement robust technical and organizational measures to
								protect your personal information against unauthorized access,
								alteration, disclosure, or destruction. However, no internet
								transmission is entirely secure, and we cannot guarantee
								absolute security.
							</p>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
