import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	Briefcase,
	Clock,
	ShieldCheck,
	BarChart,
	UserPlus,
	FileText,
	Handshake,
	DollarSign,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function EmployersPage() {
	const containerRef = useRef(null);
	const stepsRef = useRef([]);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		// Existing entrance animation
		gsap.fromTo(
			el,
			{ x: 100, autoAlpha: 0 },
			{
				x: 0,
				autoAlpha: 1,
				duration: 1,
				ease: "power3.out",
				clearProps: "x,autoAlpha",
			}
		);

		// Scroll-driven animation for "How it Works"
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
					delay: i * 0.15,
					clearProps: "y,autoAlpha",
				}
			);
		});
	}, []);

	const benefits = [
		{ icon: Clock, text: "Hire students instantly" },
		{ icon: ShieldCheck, text: "Verified profiles & secure escrow" },
		{ icon: Briefcase, text: "Post individual or company gigs" },
		{ icon: BarChart, text: "Ratings to find the best talent" },
	];

	const howItWorks = [
		{
			icon: UserPlus,
			title: "Sign Up",
			text: "Create a recruiter account in minutes.",
		},
		{
			icon: FileText,
			title: "Post a Gig",
			text: "Describe your job needs clearly and set payment terms.",
		},
		{
			icon: Handshake,
			title: "Connect",
			text: "Match with motivated students ready to work.",
		},
		{
			icon: DollarSign,
			title: "Pay Securely",
			text: "Release funds only when the work is completed.",
		},
	];

	return (
		<div>
			{/* Recruiter Benefits */}
			<section
				ref={containerRef}
				className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-b-2xl shadow-lg"
			>
				<h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
					For Recruiters & Employers
				</h2>
				<p className="text-lg md:text-xl text-gray-200 text-center max-w-2xl mx-auto mb-10">
					Post jobs, connect instantly with motivated students, and pay securely
					only after work is completed.
				</p>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{benefits.map(({ icon: Icon, text }, idx) => (
						<div
							key={idx}
							className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-md"
						>
							<Icon className="w-8 h-8 text-green-300" />
							<span className="text-lg">{text}</span>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<a
						href="#signup"
						className="bg-green-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-300 transition"
					>
						Start as Recruiter
					</a>
				</div>
			</section>

			{/* How It Works (Recruiter Flow) */}
			<section className="py-20 px-6 bg-gray-50 text-gray-900 rounded-2xl">
				<h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
					How It Works for Recruiters
				</h2>
				<p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
					Hire skilled students quickly and manage payments securely in just a
					few steps.
				</p>

				<div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
					{howItWorks.map(({ icon: Icon, title, text }, idx) => (
						<div
							key={idx}
							ref={(el) => (stepsRef.current[idx] = el)}
							className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6"
						>
							<div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
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
