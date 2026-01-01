import { useState } from "react";
import { registerUser } from "../../services/auth";

export default function SignupForm({ role, onBack }) {
	const [success, setSuccess] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
		skills: [],
		location: "",
		phone_number: "",
		url: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			console.log("Passwords do not match!");
			return;
		}
		const payload =
			role === "recruiter"
				? {
						email: formData.email,
						phone_number: formData.phone_number,
						password: formData.password,
						business_name: formData.fullName,
						user_type: role,
						website: formData.url,
						location: formData.location,
				  }
				: {
						email: formData.email,
						phone_number: formData.phone_number,
						password: formData.password,
						first_name: formData.fullName.split(" ")[0],
						last_name: formData.fullName.split(" ")[1] || "",
						username: formData.email || formData.phone_number,
						user_type: role,
						location: formData.location,
				  };
		console.log(payload);
		try {
					const res = await registerUser(payload);
					setSuccess("Registration successful!");
					setErrorMsg("");
					console.log("Backend response:", res); 
				} catch (error) {
					console.error(
						"Registration failed:",
						error.response?.data || error.message
					);
					setErrorMsg("Registration failed. Please check your input.");
				}
		// Axios call to Django endpoint based on role
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-lg mx-auto bg-white  rounded-2xl p-6 shadow-lg"
		>
			<button
				type="button"
				onClick={onBack}
				className="text-sm text-blue-600 mb-3"
			>
				&larr; Back
			</button>

			<h2 className="text-2xl font-semibold mb-6 text-center">
				Sign up as a {role === "jobseeker" ? "Job Seeker" : "Recruiter"}
			</h2>

			{/* Common Fields */}
			<div className="grid gap-4">
				<input
					name="fullName"
					placeholder="Full Name"
					onChange={handleChange}
					className="p-3 rounded-lg border"
				/>
				<input
					name="email"
					type="email"
					placeholder="Email"
					onChange={handleChange}
					className="p-3 rounded-lg border"
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					onChange={handleChange}
					className="p-3 rounded-lg border"
				/>
				<input
					name="confirmPassword"
					type="password"
					placeholder="Confirm Password"
					onChange={handleChange}
					className="p-3 rounded-lg border"
				/>

				{/* Conditional Fields */}
				{role === "jobseeker" ? (
					<input
						name="skills"
						placeholder="Skills (comma separated)"
						onChange={handleChange}
						className="p-3 rounded-lg border"
					/>
				) : (
					<input
						name="url"
						placeholder="Website or LinkedIn Url"
						onChange={handleChange}
						className="p-3 rounded-lg border"
					/>
				)}

				<input
					name="location"
					placeholder="Location (optional)"
					onChange={handleChange}
					className="p-3 rounded-lg border"
				/>
				<input
					name="phone_number"
					placeholder="Phone (optional)"
					onChange={handleChange}
					className="p-3 rounded-lg border"
				/>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all"
				>
					Sign Up
				</button>
			</div>
		</form>
	);
}
