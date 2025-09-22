import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="flex md:justify-between justify-center  flex-col md:flex-row items-center md:px-12 md:h-[10vh] shadow-md px-4">
			{/* Logo */}
			<div className="flex items-center w-full justify-between md:w-auto h-[10vh]">
				<h1 className="font-bold text-3xl">
					<Link to="/">
						<span>Gig</span>
						<span className="text-[#152085] border-[#152085]">Fast</span>
					</Link>
				</h1>

				{/* Mobile Toggle */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden text-2xl text-[#152085] focus:outline-none"
				>
					{isOpen ? <X size={32}/> : <Menu size={32}/>}
				</button>
			</div>

			{/* Nav (Desktop) */}
			<nav className="hidden md:flex items-center justify-center">
				<ul className="flex gap-8">
					<li className="font-bold text-[#152085]">
						<Link to="/students">Students</Link>
					</li>
					<li className="font-bold text-[#152085]">
						<Link to="/employers">Employers</Link>
					</li>
				</ul>
			</nav>

			{/* CTA (Desktop) */}
			<div className="hidden md:block bg-[#152085] text-white px-4 py-2 rounded-full">
				<Link to="/students">Get Started</Link>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
					isOpen ? "max-h-screen" : "max-h-0"
				}`}
			>
				<nav className="flex flex-col items-center gap-6 py-6">
					<Link
						to="/students"
						onClick={() => setIsOpen(false)}
						className="font-bold text-[#152085]"
					>
						Students
					</Link>
					<Link
						to="/employers"
						onClick={() => setIsOpen(false)}
						className="font-bold text-[#152085]"
					>
						Employers
					</Link>
					<Link
						to="/students"
						onClick={() => setIsOpen(false)}
						className="bg-[#152085] text-white px-4 py-2 rounded-full"
					>
						Get Started
					</Link>
				</nav>
			</div>
		</header>
	);
}
