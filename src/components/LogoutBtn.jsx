import { LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogoutButton({isExpanded}) {
	const { logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout(); // clears localStorage + resets user
		navigate("/login"); // redirect to login page
	};

	return (
		<button
			className="text-red-500 flex items-center gap-3 px-3 py-2 rounded-md hover:bg-red-50 transition-all duration-300"
			title={!isExpanded ? "Logout" : ""}
			onClick={handleLogout}
		>
			<LogOut size={24} />
			<span
				className={`transition-all duration-300 overflow-hidden ${
					!isExpanded ? "opacity-0 w-0" : "opacity-100 w-auto"
				}`}
			>
				Logout
			</span>
		</button>
	);
}
