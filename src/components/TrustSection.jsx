// ✅ Trust & Security Section
import { Shield, CheckCircle, Handshake } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function TrustSecurity() {
	const features = [
		{
			icon: <Shield className="w-8 h-8 text-[#152085]" />,
			title: "Secure Payments",
			desc: "Get paid on time with reliable payment methods.",
		},
		{
			icon: <CheckCircle className="w-8 h-8 text-[#152085]" />,
			title: "Verified Users",
			desc: "Both students and recruiters go through quick checks.",
		},
		{
			icon: <Handshake className="w-8 h-8 text-[#152085]" />,
			title: "Fair & Transparent",
			desc: "No hidden fees, just clear connections.",
		},
	];
	useEffect(() => {
		gsap.fromTo(
			".trust-item",
			{ opacity: 0, y: 30 },
			{ opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
		);
	}, []);

	return (
		<section className="py-20 px-6 bg-gray-50">
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
				Safe, Simple, and Reliable
			</h2>
			<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
				{features.map((f, i) => (
					<div
						key={i}
						className="trust-item bg-white rounded-xl shadow-lg p-6 text-center"
					>
						<div className="flex justify-center mb-4">{f.icon}</div>
						<h3 className="text-xl font-semibold mb-2">{f.title}</h3>
						<p className="text-gray-600">{f.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
