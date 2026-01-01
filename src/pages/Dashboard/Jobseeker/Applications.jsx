// src/pages/JobSeeker/Applications.jsx
import React from "react";

const applications = [
	{
		id: 1,
		title: "Frontend Developer",
		company: "Techify Labs",
		status: "Pending",
		dateApplied: "2025-09-20",
	},
	{
		id: 2,
		title: "Backend Engineer",
		company: "CodeWave",
		status: "Interview",
		dateApplied: "2025-09-15",
	},
	{
		id: 3,
		title: "UI/UX Designer",
		company: "DesignPro Studio",
		status: "Accepted",
		dateApplied: "2025-08-30",
	},
	{
		id: 4,
		title: "DevOps Intern",
		company: "CloudLink",
		status: "Rejected",
		dateApplied: "2025-09-10",
	},
];

export default function Applications() {
	const getStatusColor = (status) => {
		switch (status) {
			case "Pending":
				return "bg-yellow-100 text-yellow-700";
			case "Interview":
				return "bg-blue-100 text-blue-700";
			case "Accepted":
				return "bg-green-100 text-green-700";
			case "Rejected":
				return "bg-red-100 text-red-700";
			default:
				return "bg-gray-100 text-gray-600";
		}
	};

	return (
		<section className="w-full p-6">
			<h2 className="text-2xl font-semibold mb-4">My Applications</h2>

			<div className="overflow-x-auto">
				<table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
					<thead className="bg-gray-100 text-gray-700">
						<tr>
							<th className="px-4 py-3 text-left">Job Title</th>
							<th className="px-4 py-3 text-left">Company</th>
							<th className="px-4 py-3 text-left">Status</th>
							<th className="px-4 py-3 text-left">Date Applied</th>
						</tr>
					</thead>
					<tbody>
						{applications.map((app) => (
							<tr
								key={app.id}
								className="border-t hover:bg-gray-50 transition duration-150"
							>
								<td className="px-4 py-3 font-medium">{app.title}</td>
								<td className="px-4 py-3">{app.company}</td>
								<td className="px-4 py-3">
									<span
										className={`px-3 py-1 text-sm rounded-full ${getStatusColor(
											app.status
										)}`}
									>
										{app.status}
									</span>
								</td>
								<td className="px-4 py-3 text-gray-500">
									{new Date(app.dateApplied).toLocaleDateString()}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
}
