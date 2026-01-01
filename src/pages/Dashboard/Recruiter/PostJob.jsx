import React, { useState } from "react";
import { toast } from "react-hot-toast"; // optional for notifications

export default function PostJob() {
	const [formData, setFormData] = useState({
		title: "",
		company_name: "",
		location: "",
		job_type: "",
		category: "",
		salary_range: "",
		experience_level: "",
		description: "",
		responsibilities: "",
		requirements: "",
		skills: "",
		deadline: "",
	});

	const [loading, setLoading] = useState(false);

	// ✅ Handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// ✅ Submit form
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			// adjust your backend URL as needed
			const response = await fetch("http://127.0.0.1:8000/api/gigs/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) throw new Error("Failed to post job");

			toast.success("Job posted successfully!");
			setFormData({
				title: "",
				company_name: "",
				location: "",
				job_type: "",
				category: "",
				salary_range: "",
				experience_level: "",
				description: "",
				responsibilities: "",
				requirements: "",
				skills: "",
				deadline: "",
			});
		} catch (err) {
			console.error(err);
			toast.error("Error posting job. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md">
			<h2 className="text-2xl font-semibold mb-6">Post a Job</h2>

			<form onSubmit={handleSubmit} className="space-y-4">
				{/* Title */}
				<div>
					<label className="block font-medium mb-1">Job Title *</label>
					<input
						type="text"
						name="title"
						value={formData.title}
						onChange={handleChange}
						required
						className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Frontend Developer"
					/>
				</div>

				{/* Company */}
				<div>
					<label className="block font-medium mb-1">Company Name</label>
					<input
						type="text"
						name="company_name"
						value={formData.company_name}
						onChange={handleChange}
						className="w-full border rounded-lg p-2"
						placeholder="GigDash Ltd"
					/>
				</div>

				{/* Location */}
				<div>
					<label className="block font-medium mb-1">Location *</label>
					<input
						type="text"
						name="location"
						value={formData.location}
						onChange={handleChange}
						required
						className="w-full border rounded-lg p-2"
						placeholder="Lagos, Nigeria or Remote"
					/>
				</div>

				{/* Job Type & Category */}
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label className="block font-medium mb-1">Job Type *</label>
						<select
							name="job_type"
							value={formData.job_type}
							onChange={handleChange}
							required
							className="w-full border rounded-lg p-2"
						>
							<option value="">Select type</option>
							<option value="full-time">Full-time</option>
							<option value="part-time">Part-time</option>
							<option value="contract">Contract</option>
							<option value="remote">Remote</option>
							<option value="freelance">Freelance</option>
							<option value="internship">Internship</option>
						</select>
					</div>

					<div>
						<label className="block font-medium mb-1">Category *</label>
						<select
							name="category"
							value={formData.category}
							onChange={handleChange}
							required
							className="w-full border rounded-lg p-2"
						>
							<option value="">Select category</option>
							<option value="Design">Design</option>
							<option value="Development">Development</option>
							<option value="Marketing">Marketing</option>
							<option value="Writing">Writing</option>
							<option value="Sales">Sales</option>
						</select>
					</div>
				</div>

				{/* Salary & Experience */}
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label className="block font-medium mb-1">Salary Range</label>
						<input
							type="text"
							name="salary_range"
							value={formData.salary_range}
							onChange={handleChange}
							className="w-full border rounded-lg p-2"
							placeholder="₦150,000 - ₦250,000 / month"
						/>
					</div>
					<div>
						<label className="block font-medium mb-1">Experience Level *</label>
						<select
							name="experience_level"
							value={formData.experience_level}
							onChange={handleChange}
							required
							className="w-full border rounded-lg p-2"
						>
							<option value="">Select level</option>
							<option value="entry">Entry Level</option>
							<option value="mid">Mid Level</option>
							<option value="senior">Senior Level</option>
						</select>
					</div>
				</div>

				{/* Description */}
				<div>
					<label className="block font-medium mb-1">Description *</label>
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
						required
						rows="4"
						className="w-full border rounded-lg p-2"
						placeholder="Describe the job role, goals, and expectations..."
					/>
				</div>

				{/* Responsibilities */}
				<div>
					<label className="block font-medium mb-1">Responsibilities</label>
					<textarea
						name="responsibilities"
						value={formData.responsibilities}
						onChange={handleChange}
						rows="3"
						className="w-full border rounded-lg p-2"
						placeholder="List main responsibilities..."
					/>
				</div>

				{/* Requirements */}
				<div>
					<label className="block font-medium mb-1">Requirements</label>
					<textarea
						name="requirements"
						value={formData.requirements}
						onChange={handleChange}
						rows="3"
						className="w-full border rounded-lg p-2"
						placeholder="List minimum qualifications..."
					/>
				</div>

				{/* Skills */}
				<div>
					<label className="block font-medium mb-1">
						Skills (comma separated)
					</label>
					<input
						type="text"
						name="skills"
						value={formData.skills}
						onChange={handleChange}
						className="w-full border rounded-lg p-2"
						placeholder="React, Tailwind, REST API"
					/>
				</div>

				{/* Deadline */}
				<div>
					<label className="block font-medium mb-1">Application Deadline</label>
					<input
						type="date"
						name="deadline"
						value={formData.deadline}
						onChange={handleChange}
						className="w-full border rounded-lg p-2"
					/>
				</div>

				{/* Submit Button */}
				<div>
					<button
						type="submit"
						disabled={loading}
						className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
					>
						{loading ? "Posting..." : "Post Job"}
					</button>
				</div>
			</form>
		</section>
	);
}
