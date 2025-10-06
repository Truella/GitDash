import { Mail, ArrowRight } from "lucide-react";

export default function CTASection() {
	return (
		<section className="relative px-6 py-16 bg-[#152085] text-white text-center mt-20 rounded-2xl md:max-w-5xl mx-auto shadow-xl w-[90%]">
			{/* Top accent bar */}
			<div className="absolute -top-4 left-0 w-full flex justify-center">
				<div className="w-20 h-2 bg-yellow-300 rounded-full"></div>
			</div>

			{/* Headline */}
			<h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-yellow-300">
				Ready to Start Earning?
			</h2>

			{/* Supporting text */}
			<p className="text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
				Join thousands of students already making money on{" "}
				<span className="font-bold text-white">GigFast</span>. Your first gig is
				just a click away.
			</p>
 
			{/* Input + Button */}
			<div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
				{/* Input field */}
				<div className="flex items-center bg-white rounded-full w-full sm:w-auto shadow-md px-4">
					<Mail className="w-5 h-5 text-gray-500" />
					<input
						type="email"
						placeholder="Enter your email..."
						className="p-3 w-full sm:w-64 rounded-full focus:outline-none text-black"
					/>
				</div>

				{/* CTA Button */}
				<button className="flex items-center gap-2 bg-yellow-300 text-[#152085] font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition">
					Get Started
					<ArrowRight className="w-5 h-5" />
				</button>
			</div>
		</section>
	);
}
