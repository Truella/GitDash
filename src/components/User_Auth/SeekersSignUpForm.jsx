import { useState } from "react";
import { registerUser } from "../../services/auth";

export default function SeekerSignUpForm({ onNext, onBack }) {
	const [formData, setFormData] = useState({
		email: "",
		phone_number: "",
		password: "",
		confirmPassword: "",
		first_name: "",
		last_name: "",
		location: "",
		institute: "",
		purpose: "",
	});
	const [withEmail, setWithEmail] = useState(true);
	const [success, setSuccess] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Basic password validation
		if (formData.password !== formData.confirmPassword) {
			setErrorMsg("Passwords do not match!");
			return;
		}

		const payload = {
			email: withEmail ? formData.email : "",
			phone_number: !withEmail ? formData.phone_number : "",
			password: formData.password,
			first_name: formData.first_name,
			last_name: formData.last_name,
			location: formData.location,
			username: formData.email || formData.phone_number, // required by backend
			user_type: "jobseeker", // custom role flag
		};

		try {
			const res = await registerUser(payload);
			setSuccess("Registration successful!");
			setErrorMsg("");
			console.log("Backend response:", res);
			onNext?.(); // optional: go to next page
		} catch (error) {
			console.error(
				"Registration failed:",
				error.response?.data || error.message
			);
			setErrorMsg("Registration failed. Please check your input.");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-[85vw] max-w-md mx-auto mt-10 p-6 shadow-md rounded-2xl bg-blue-500/30 backdrop-blur-md"
		>
			<h2 className="text-xl font-bold mb-4 text-[#152085]">
				Sign up as Job Seeker
			</h2>

			{/* Alert messages */}
			{success && <p className="text-green-600 mb-2">{success}</p>}
			{errorMsg && <p className="text-red-600 mb-2">{errorMsg}</p>}

			{withEmail ? (
				<input
					type="email"
					name="email"
					placeholder="Email"
					onChange={handleChange}
					required
					className="w-full p-3 border border-gray-400 rounded-lg outline-none mb-3"
				/>
			) : (
				<input
					type="tel"
					name="phone_number"
					placeholder="Phone number"
					onChange={handleChange}
					required
					className="w-full p-3 border border-gray-400 rounded-lg outline-none mb-3"
				/>
			)}

			<p
				onClick={() => setWithEmail((prev) => !prev)}
				className="cursor-pointer text-sm text-[#152085] mb-3 underline"
			>
				Sign up with {!withEmail ? "email" : "phone number"} instead
			</p>

			<input
				type="text"
				name="first_name"
				placeholder="First Name"
				onChange={handleChange}
				required
				className="w-full p-3 border border-gray-400 rounded-lg outline-none mb-3"
			/>

			<input
				type="text"
				name="last_name"
				placeholder="Last Name"
				onChange={handleChange}
				required
				className="w-full p-3 border border-gray-400 rounded-lg outline-none mb-3"
			/>

			<input
				type="text"
				name="location"
				placeholder="Location"
				onChange={handleChange}
				required
				className="w-full p-3 border border-gray-400 rounded-lg outline-none mb-3"
			/>

			<input
				type="password"
				name="password"
				placeholder="Password"
				onChange={handleChange}
				required
				className="w-full p-3 border border-gray-400 rounded-lg outline-none mb-3"
			/>

			<input
				type="password"
				name="confirmPassword"
				placeholder="Confirm Password"
				onChange={handleChange}
				required
				className="w-full p-3 border border-gray-400 rounded-lg outline-none mb-3"
			/>

			<div className="flex justify-between mt-6">
				<button
					type="button"
					onClick={onBack}
					className="px-4 py-2 border rounded-lg hover:bg-[#152085] hover:text-white"
				>
					Back
				</button>
				<button
					type="submit"
					className="px-4 py-2 bg-[#152085] text-white rounded-lg hover:bg-blue-800"
				>
					Next
				</button>
			</div>
		</form>
	);
}
