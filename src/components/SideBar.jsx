import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	Home,
	Briefcase,
	FileText,
	Heart,
	Calendar,
	MessageSquare,
	User,
	Settings,
	LogOut,
	Menu,
} from "lucide-react";
import LogoutButton from "./LogoutBtn";

export default function Sidebar({ userType }) {
	const location = useLocation();

	// State to handle collapse and hover
	const [collapsed, setCollapsed] = useState(false);
	const [hovered, setHovered] = useState(false);

	const toggleSidebar = () => setCollapsed((prev) => !prev);

	// Derived state: sidebar expands if not collapsed or being hovered
	const isExpanded = !collapsed || hovered;

	// Sidebar link sets
	const jobseekerLinks = [
		{ name: "Home", path: "/dashboard/home", icon: <Home size={24} /> },
		{
			name: "Find Jobs",
			path: "/dashboard/find-jobs",
			icon: <Briefcase size={24} />,
		},
		{
			name: "Applications",
			path: "/dashboard/applications",
			icon: <FileText size={24} />,
		},
		{
			name: "Saved Jobs",
			path: "/dashboard/saved-jobs",
			icon: <Heart size={24} />,
		},
		{
			name: "Schedule",
			path: "/dashboard/schedule",
			icon: <Calendar size={24} />,
		},
		{
			name: "Chat",
			path: "/dashboard/chat",
			icon: <MessageSquare size={24} />,
		},
	];

	const recruiterLinks = [
		{ name: "Home", path: "/dashboard/home", icon: <Home size={24} /> },
		{
			name: "Post a Job",
			path: "/dashboard/post-job",
			icon: <Briefcase size={24} />,
		},
		{
			name: "My Job Posts",
			path: "/dashboard/my-jobs",
			icon: <FileText size={24} />,
		},
		{
			name: "Applicants",
			path: "/dashboard/applicants",
			icon: <User size={24} />,
		},
		{
			name: "Schedule",
			path: "/dashboard/schedule",
			icon: <Calendar size={24} />,
		},
		{
			name: "Chat",
			path: "/dashboard/chat",
			icon: <MessageSquare size={24} />,
		},
	];

	const commonLinks = [
		{ name: "Profile", path: "/dashboard/profile", icon: <User size={24} /> },
		{
			name: "Settings",
			path: "/dashboard/settings",
			icon: <Settings size={24} />,
		},
	];

	const navLinks =
		userType === "jobseeker"
			? [...jobseekerLinks, ...commonLinks]
			: [...recruiterLinks, ...commonLinks];

	return (
		<aside
			className={`bg-white shadow-md h-screen py-4 flex flex-col transition-all duration-300 
			${isExpanded ? "w-64" : "w-20"}`}
		>
			{/* ===== TOP SECTION ===== */}
			<div>
				{/* Header */}
				<div
					className={`flex items-center mb-8  px-4 ${
						isExpanded ? "justify-between" : "justify-center"
					}`}
				>
					<h2
						className={`text-2xl font-bold text-blue-700 transition-all duration-300 overflow-hidden ${
							!isExpanded ? "opacity-0 w-0" : "opacity-100 w-auto"
						}`}
					>
						GigDash.
					</h2>

					<button
						onClick={toggleSidebar}
						className="text-gray-600 hover:text-blue-600"
					>
						<Menu size={24} />
					</button>
				</div>

				{/* Navigation Links */}
			</div>
			<div
				className="flex flex-col justify-between h-full px-4"
				onMouseEnter={() => collapsed && setHovered(true)}
				onMouseLeave={() => collapsed && setHovered(false)}
			>
				<nav className="space-y-3">
					{navLinks.map((link) => {
						const isActive = location.pathname === link.path;
						return (
							<Link
								key={link.name}
								to={link.path}
								className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-300 ${
									isActive
										? "bg-blue-100 text-blue-700 font-semibold"
										: "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
								}`}
								title={!isExpanded ? link.name : ""}
							>
								<span>{link.icon}</span>
								<span
									className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${
										!isExpanded ? "opacity-0 w-0" : "opacity-100 w-auto"
									}`}
								>
									{link.name}
								</span>
							</Link>
						);
					})}
				</nav>
				<LogoutButton isExpanded={isExpanded} />
			</div>
			{/* ===== LOGOUT ===== */}
		</aside>
	);
}
