import { useState } from "react";
import { Link } from "react-router-dom";
export default function LoginForm({ onLogin, onBack }) {
	const [withEmail, setWithEmail] = useState(true);
	const [formData, setFormData] = useState({
		email: "",
		tel: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onLogin(formData); // pass login details back
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
			{withEmail ? (
				<input
					type="email"
					name="email"
					placeholder="Email"
					onChange={handleChange}
					required
					className="w-full p-3 border border-gray-400 rounded-lg outline-none focus:border-2 focus:border-[#152085] transition-all duration-300"
				/>
			) : (
				<input
					type="tel"
					name="tel"
					placeholder="Phone number"
					onChange={handleChange}
					required
					className="w-full p-3 border border-gray-400 rounded-lg outline-none focus:border-2 focus:border-[#152085] transition-all duration-300"
				/>
			)}

			<p
				onClick={() => setWithEmail((prev) => !prev)}
				className="cursor-pointer text-sm text-[#152085] mb-3 underline"
			>
				Login with {!withEmail ? "email" : "phone number"} instead
			</p>

			<input
				type="password"
				name="password"
				placeholder="Password"
				onChange={handleChange}
				required
				className="w-full mb-3 p-3 border border-gray-400 rounded-lg outline-none focus:border-2 focus:border-[#152085] transition-all duration-300"
			/>

			<div className="flex justify-end mb-4">
				<a href="/forgot-password" className="text-sm text-blue-600 underline">
					Forgot Password?
				</a>
			</div>

			<button
				type="submit"
				className="w-full px-4 py-2 hover:bg-blue-800 cursor-pointer text-white rounded-lg bg-[#152085] transition-all duration-300"
			>
				Login
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
