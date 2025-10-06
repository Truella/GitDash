import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";

// ✅ FAQ Section
export default function FAQ() {
	const faqs = [
		{
			q: "How do I get paid?",
			a: "Payments are made securely through the platform once the recruiter confirms completion.",
		},
		{
			q: "Do I need prior experience?",
			a: "Not always. Many gigs are beginner-friendly and meant for students to gain experience.",
		},
		{
			q: "What if a recruiter doesn’t respond?",
			a: "You can report inactive recruiters. We also recommend applying to multiple gigs.",
		},
	]; 
	useEffect(() => {
		gsap.fromTo(
			".faq-item",
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
		);
	}, []);

	return (
		<section className="py-20 px-6 bg-white">
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
				Frequently Asked Questions
			</h2>
			<div className="max-w-3xl mx-auto space-y-6">
				{faqs.map((faq, i) => (
					<div key={i} className="faq-item bg-gray-50 p-6 rounded-xl shadow-md">
						<div className="flex items-center justify-between mb-2">
							<h3 className="text-lg font-semibold">{faq.q}</h3>
							<ChevronDown className="w-5 h-5 text-gray-500" />
						</div>
						<p className="text-gray-600">{faq.a}</p>
					</div>
				))}
			</div>
		</section>
	);
}
