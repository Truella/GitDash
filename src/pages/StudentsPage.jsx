import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
	BookOpen,
	Wallet,
	Shield,
	Smartphone,
	UserPlus,
	Briefcase,
	Handshake,
	CheckCircle,
} from "lucide-react";

export default function StudentsPage() {
	const containerRef = useRef(null);
	const stepsRef = useRef([]);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		// Existing entrance animation (leave untouched)
		gsap.fromTo(
			el,
			{ x: -100, autoAlpha: 0 },
			{
				x: 0,
				autoAlpha: 1,
				duration: 1,
				ease: "power3.out",
				clearProps: "x,autoAlpha",
			}
		);

		// Scroll-driven animation for "How it Works" steps
		stepsRef.current.forEach((step, i) => {
			gsap.fromTo(
				step,
				{ y: 60, autoAlpha: 0 },
				{
					y: 0,
					autoAlpha: 1,
					duration: 0.8,
					ease: "power3.out",
					scrollTrigger: {
						trigger: step,
						start: "top 85%",
					},
					delay: i * 0.15, // stagger per step
					clearProps: "y,autoAlpha",
				}
			);
		});
	}, []);

	const benefits = [
		{ icon: Wallet, text: "Instant same-day pay" },
		{ icon: Shield, text: "Verified recruiters (no scams)" },
		{ icon: Smartphone, text: "Easy mobile access" },
		{ icon: BookOpen, text: "Equal job opportunities for all" },
	];

	const howItWorks = [
		{
			icon: UserPlus,
			title: "Sign Up",
			text: "Create a free student account in minutes.",
		},
		{
			icon: Briefcase,
			title: "Browse Gigs",
			text: "Find flexible short-term jobs that fit your schedule.",
		},
		{
			icon: Handshake,
			title: "Do the Work",
			text: "Complete the gig with confidence and support.",
		},
		{
			icon: CheckCircle,
			title: "Get Paid",
			text: "Receive secure, same-day payment. No delays.",
		},
	];

	return (
		<div>
			{/* Student Benefits */}
			<section
				ref={containerRef}
				className="py-16 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white rounded-2xl shadow-lg"
			>
				<h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
					For Students & Fresh Graduates
				</h2>
				<p className="text-lg md:text-xl text-gray-200 text-center max-w-2xl mx-auto mb-10">
					Find short-term gigs, get the job done, and receive payment instantly.
					No more waiting till month-end.
				</p>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{benefits.map(({ icon: Icon, text }, idx) => (
						<div
							key={idx}
							className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-md"
						>
							<Icon className="w-8 h-8 text-yellow-300" />
							<span className="text-lg">{text}</span>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<a
						href="#signup"
						className="bg-yellow-400 text-[#152085] font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
					>
						Start as Student
					</a>
				</div>
			</section>

			{/* How It Works (Student Flow) */}
			<section className="py-20 px-6 bg-gray-50 text-gray-900 rounded-2xl">
				<h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
					How It Works for Students
				</h2>
				<p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
					Get started in just a few simple steps and start earning right away.
				</p>

				<div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
					{howItWorks.map(({ icon: Icon, title, text }, idx) => (
						<div
							key={idx}
							ref={(el) => (stepsRef.current[idx] = el)}
							className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6"
						>
							<div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
								<Icon className="w-7 h-7" />
							</div>
							<h3 className="font-semibold text-xl mb-2">{title}</h3>
							<p className="text-gray-600">{text}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
