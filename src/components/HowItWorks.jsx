import { useEffect } from "react";
import { gsap } from "gsap";
import {
	UserPlus,
	Briefcase,
	MessageCircle,
	DollarSign,
} from "lucide-react";

// ✅ How It Works Section
export default function HowItWorks  () {
	const steps = [
		{
			icon: <UserPlus className="w-10 h-10 text-[#152085]" />,
			title: "Sign Up",
			desc: "Create your free account in just a few seconds.",
		},
		{
			icon: <Briefcase className="w-10 h-10 text-[#152085]" />,
			title: "Pick or Post Gigs",
			desc: "Students browse gigs. Recruiters post opportunities.",
		},
		{
			icon: <MessageCircle className="w-10 h-10 text-[#152085]" />,
			title: "Connect",
			desc: "Chat, agree on details, and start working together.",
		},
		{
			icon: <DollarSign className="w-10 h-10 text-[#152085]" />,
			title: "Get Paid",
			desc: "Secure payments once the job is done. No delays.",
		},
	];

	useEffect(() => {
		gsap.fromTo(
			".step-card",
			{ opacity: 0, y: 40 },
			{ opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
		);
	}, []);

	return (
		<section className="py-20 px-6 bg-white">
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
				How It Works
			</h2>
			<div className="grid md:grid-cols-4 gap-8 w-[85vw] mx-auto">
				{steps.map((s, i) => (
					<div
						key={i}
						className="step-card bg-gray-50 rounded-xl shadow-lg p-6 text-center"
					>
						<div className="flex justify-center mb-4">{s.icon}</div>
						<h3 className="text-xl font-semibold mb-2">{s.title}</h3>
						<p className="text-gray-600">{s.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
};


