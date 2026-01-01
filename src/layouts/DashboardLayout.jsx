import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Bell, MessageCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function DashboardLayout() { // temporary state until auth is ready
	const {user} = useAuth()
	const toggleUserType = () => {
		setUserType((prev) => (prev === "jobseeker" ? "recruiter" : "jobseeker"));
	};

	return (
		<div className="flex h-screen w-full bg-gray-100 min-w-0 ">
			{/* Sidebar */}
			<SideBar userType={user.user_type} />
			{/* Main Section */}
			<div className="flex-1 flex flex-col min-w-0">
				{/* Header */}
				<header className="header bg-white h-16 px-6 flex items-center justify-between shadow-sm">
					<input
						type="text"
						placeholder="Search job"
						className="border rounded-md px-3 py-2 w-1/3"
					/>

					<div className="flex items-center gap-4">
						<span>
							<Bell />
						</span>
						<span>
							<MessageCircle />
						</span>
					</div>
				</header>

				{/* Content Area */}
				<main className="flex-1 p-6 overflow-y-auto">
					<Outlet context={{ userType: user.user_type }} />
				</main>
			</div>
		</div>
	);
}
