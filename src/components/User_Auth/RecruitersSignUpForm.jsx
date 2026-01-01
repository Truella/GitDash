import { useState } from "react";
import { registerUser } from "../../services/auth";

export default function RecruiterSignUpForm({ onNext, onBack }) {
	const [formData, setFormData] = useState({
		email: "",
		phone_number: "",
		password: "",
		confirmPassword: "",
		recruiterType: "individual",
		name: "",
		company_name: "",
		website: "",
		location: "",
	});
	const [withEmail, setWithEmail] = useState(true);
	const [errorMsg, setErrorMsg] = useState("");
	const [success, setSuccess] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			setErrorMsg("Passwords do not match!");
			return;
		}

		const payload = {
			email: withEmail ? formData.email : "",
			phone_number: !withEmail ? formData.phone_number : "",
			password: formData.password,
			first_name:
				formData.recruiterType === "individual"
					? formData.name.split(" ")[0]
					: formData.name,
			last_name:
				formData.recruiterType === "individual"
					? formData.name.split(" ")[1] || ""
					: "",
			username: formData.email || formData.phone_number,
			user_type: "recruiter",
			company_name:
				formData.recruiterType === "company" ? formData.company_name : "",
			website: formData.website,
			location: formData.location,
		};

		try {
			const res = await registerUser(payload);
			setSuccess("Registration successful!");
			setErrorMsg("");
			console.log("Backend response:", res);
			onNext?.();
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
			className="w-[85vw] max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-md bg-blue-500/30 backdrop-blur-md"
		>
			<h2 className="text-xl font-bold mb-4 text-[#152085]">
				Sign up as Recruiter
			</h2>

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

			<select
				name="recruiterType"
				value={formData.recruiterType}
				onChange={handleChange}
				className="w-full mb-3 p-3 border border-gray-400 rounded-lg outline-none"
			>
				<option value="individual">Individual</option>
				<option value="company">Company</option>
			</select>

			<input
				type="text"
				name="name"
				placeholder={
					formData.recruiterType === "individual"
						? "Your Full Name"
						: "Recruiter Contact Name"
				}
				onChange={handleChange}
				required
				className="w-full p-3 border border-gray-400 rounded-lg outline-none mb-3"
			/>

			{formData.recruiterType === "company" && (
				<input
					type="text"
					name="company_name"
					placeholder="Company Name"
					onChange={handleChange}
					className="w-full p-3 border border-gray-400 rounded-lg outline-none mb-3"
				/>
			)}

			<input
				type="text"
				name="website"
				placeholder="Website (optional)"
				onChange={handleChange}
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
