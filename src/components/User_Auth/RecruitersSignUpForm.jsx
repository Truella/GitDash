import { useState } from "react";

export default function RecruiterSignUpForm({ onNext, onBack }) {
	const [formData, setFormData] = useState({
		email: "",
		tel: "",
		password: "",
		confirmPassword: "",
		recruiterType: "individual", // dropdown
		name: "",
		company: "",
	});
	const [withEmail, setWithEmail] = useState(true);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onNext(formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-[85vw]  max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-md bg-blue-500/30 backdrop-blur-md"
		>
			<h2 className="text-xl font-bold mb-4 text-[#152085]">
				Sign up as Recruiter
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
				Sign up with {!withEmail ? "email" : "phone number"} instead
			</p>

			<select
				name="recruiterType"
				value={formData.recruiterType}
				onChange={handleChange}
				className="w-full mb-3 p-3 border border-gray-400 rounded-lg outline-none focus:border-2 focus:border-[#152085] transition-all duration-300"
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
				className="w-full mb-3 p-3 border border-gray-400 rounded-lg outline-none focus:border-2 focus:border-[#152085] transition-all duration-300"
			/>

			{formData.recruiterType === "company" && (
				<input
					type="text"
					name="company"
					placeholder="Company Name"
					onChange={handleChange}
					className="w-full mb-3 p-3 border border-gray-400 rounded-lg outline-none focus:border-2 focus:border-[#152085] transition-all duration-300"
				/>
			)}

			<input
				type="password"
				name="password"
				placeholder="Password"
				onChange={handleChange}
				required
				className="w-full mb-3 p-3 border border-gray-400 rounded-lg outline-none focus:border-2 focus:border-[#152085] transition-all duration-300"
			/>

			<input
				type="password"
				name="confirmPassword"
				placeholder="Confirm Password"
				onChange={handleChange}
				required
				className="w-full mb-3 p-3 border border-gray-400 rounded-lg outline-none focus:border-2 focus:border-[#152085] transition-all duration-300"
			/>

			<div className="flex justify-between mt-6">
				<button
					type="button"
					onClick={onBack}
					className="px-4 py-2 border rounded-lg hover:bg-[#152085] hover:text-white hover:border-[#152085] transition-all duration-300"
				>
					Back
				</button>
				<button
					type="submit"
					className="px-4 py-2 bg-[#152085] text-white rounded-lg hover:bg-blue-800 transition-all duration-300"
				>
					Next
				</button>
			</div>
		</form>
	);
}
