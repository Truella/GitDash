import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-[#152085] text-white py-12 mt-16">
			<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* Brand */}
				<div>
					<h2 className="text-2xl font-extrabold mb-4">
						Gig<span className="text-yellow-300">Fast</span>
					</h2>
					<p className="text-sm text-gray-200">
						Connecting students and employers with instant gigs and secure
						payments. Work smart. Get paid fast.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="font-bold text-lg mb-4 text-yellow-300">
						Quick Links
					</h3>
					<ul className="space-y-2">
						<li>
							<Link to="/students" className="hover:text-yellow-300 transition">
								For Students
							</Link>
						</li>
						<li>
							<Link
								to="/employers"
								className="hover:text-yellow-300 transition"
							>
								For Employers
							</Link>
						</li>
						<li>
							<Link to="/" className="hover:text-yellow-300 transition">
								How It Works
							</Link>
						</li>
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h3 className="font-bold text-lg mb-4 text-yellow-300">Contact</h3>
					<ul className="space-y-3">
						<li className="flex items-center gap-2">
							<Mail className="w-5 h-5 text-yellow-300" />
							<span>support@gigfast.com</span>
						</li>
						<li className="flex items-center gap-2">
							<Phone className="w-5 h-5 text-yellow-300" />
							<span>+234 700 123 4567</span>
						</li>
					</ul>
				</div>

				{/* Socials */}
				<div>
					<h3 className="font-bold text-lg mb-4 text-yellow-300">Follow Us</h3>
					<div className="flex gap-4">
						<a href="#" aria-label="Facebook">
							<Facebook className="w-6 h-6 hover:text-yellow-300 transition" />
						</a>
						<a href="#" aria-label="Twitter">
							<Twitter className="w-6 h-6 hover:text-yellow-300 transition" />
						</a>
						<a href="#" aria-label="Instagram">
							<Instagram className="w-6 h-6 hover:text-yellow-300 transition" />
						</a>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-300">
				© {new Date().getFullYear()} GigFast. All rights reserved.
			</div>
		</footer>
	);
}
