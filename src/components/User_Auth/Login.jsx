import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm({ onLoginSuccess, onBack }) {
	const { login } = useAuth();
	const navigate = useNavigate();
	const [withEmail, setWithEmail] = useState(true);
	const [formData, setFormData] = useState({
		email: "",
		tel: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		try {
			// Prepare the login credentials depending on the method used
			const credentials = {
				email: withEmail ? formData.email : "",
				password: formData.password,
			};

			// Call backend
			const res = await loginUser(credentials);
			const { refresh, access, user } = res;

			// Save tokens
			await login(user, refresh, access);

			//redirect based on user_type
			navigate("/dashboard/home", { state: { userType: user.user_type } });

			console.log("✅ Login success:", res);
		} catch (err) {
			console.error("❌ Login failed:", err.response?.data || err.message);
			setError(err.response?.data?.detail || "Invalid credentials");
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg 
                 bg-blue-500/30 backdrop-blur-md border border-white/20"
		>
			<h2 className="text-xl font-bold mb-4 text-center text-[#152085]">
				Login
			</h2>

			{/* Error Message */}
			{error && <p className="text-red-600 mb-3 text-center">{error}</p>}

			{/* Email / Phone Input */}
			{withEmail ? (
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
					required
					className="w-full p-3 border border-gray-400 rounded-lg outline-none 
                    focus:border-2 focus:border-[#152085] transition-all duration-300"
				/>
			) : (
				<input
					type="tel"
					name="tel"
					placeholder="Phone number"
					value={formData.tel}
					onChange={handleChange}
					required
					className="w-full p-3 border border-gray-400 rounded-lg outline-none 
                    focus:border-2 focus:border-[#152085] transition-all duration-300"
				/>
			)}

			<p
				onClick={() => setWithEmail((prev) => !prev)}
				className="cursor-pointer text-sm text-[#152085] mb-3 underline"
			>
				Login with {!withEmail ? "email" : "phone number"} instead
			</p>

			{/* Password Input */}
			<input
				type="password"
				name="password"
				placeholder="Password"
				value={formData.password}
				onChange={handleChange}
				required
				className="w-full mb-3 p-3 border border-gray-400 rounded-lg outline-none 
                focus:border-2 focus:border-[#152085] transition-all duration-300"
			/>

			<div className="flex justify-end mb-4">
				<a href="/forgot-password" className="text-sm text-blue-600 underline">
					Forgot Password?
				</a>
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={loading}
				className={`w-full px-4 py-2 text-white rounded-lg transition-all duration-300 
				${
					loading
						? "bg-blue-800/50 cursor-not-allowed"
						: "bg-[#152085] hover:bg-blue-800"
				}`}
			>
				{loading ? "Logging in..." : "Login"}
			</button>

			<p className="text-sm text-center mt-4">
				Don’t have an account?{" "}
				<Link to="/signup" className="text-blue-600 underline">
					Sign Up
				</Link>
			</p>

			{onBack && (
				<button
					type="button"
					onClick={onBack}
					className="w-full mt-4 px-4 py-2 border rounded-lg"
				>
					Back
				</button>
			)}
		</form>
	);
}
