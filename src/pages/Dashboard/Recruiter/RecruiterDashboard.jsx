import React from "react";

export default function RecruiterDashboard() {
	return (
		<section className="w-full p-6">
			{/* Header Section */}
			<header>
				<h1 className="text-2xl font-semibold text-gray-800">
					Hello, Mistura 👋
				</h1>
				<p className="text-gray-500 mt-1">
					Welcome back! Here's your hiring overview.
				</p>
			</header>

			{/* Stats + Quick Overview */}
			<div className="h-[30vh] flex gap-4 my-8">
				{/* Stats Grid */}
				<div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
					<div className="border rounded-lg p-4 bg-white shadow-sm">
						<h3 className="text-sm text-gray-500">Active Job Posts</h3>
						<p className="text-2xl font-semibold mt-2 text-blue-600">8</p>
					</div>
					<div className="border rounded-lg p-4 bg-white shadow-sm">
						<h3 className="text-sm text-gray-500">Total Applicants</h3>
						<p className="text-2xl font-semibold mt-2 text-blue-600">124</p>
					</div>
					<div className="border rounded-lg p-4 bg-white shadow-sm">
						<h3 className="text-sm text-gray-500">Interviews Scheduled</h3>
						<p className="text-2xl font-semibold mt-2 text-blue-600">5</p>
					</div>
					<div className="border rounded-lg p-4 bg-white shadow-sm">
						<h3 className="text-sm text-gray-500">New Messages</h3>
						<p className="text-2xl font-semibold mt-2 text-blue-600">3</p>
					</div>
				</div>

				{/* Right Side Summary Cards */}
				<div className="flex-1 flex gap-6">
					<div className="border flex-1 rounded-lg p-4 bg-white shadow-sm">
						<h3 className="text-sm text-gray-500 mb-2">Next Interview</h3>
						<p className="text-gray-800 font-medium">UI/UX Designer - 20 Oct</p>
						<p className="text-sm text-gray-500 mt-1">10:30 AM • Google Meet</p>
					</div>

					<div className="border flex-1 rounded-lg p-4 bg-white shadow-sm">
						<h3 className="text-sm text-gray-500 mb-2">Pending Approvals</h3>
						<p className="text-gray-800 font-medium">
							2 job posts awaiting review
						</p>
						<p className="text-sm text-blue-600 mt-1 cursor-pointer">
							View Details
						</p>
					</div>
				</div>
			</div>

			{/* Recent Applicants */}
			<div className="my-8">
				<h2 className="text-lg font-semibold mb-3">Recent Applicants</h2>
				<div className="bg-white border rounded-lg shadow-sm overflow-hidden">
					<table className="w-full text-left text-sm">
						<thead className="bg-gray-50 text-gray-600">
							<tr>
								<th className="py-3 px-4">Name</th>
								<th className="py-3 px-4">Position</th>
								<th className="py-3 px-4">Date Applied</th>
								<th className="py-3 px-4">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-t hover:bg-gray-50">
								<td className="py-3 px-4">Tola Johnson</td>
								<td className="py-3 px-4">Frontend Developer</td>
								<td className="py-3 px-4">12 Oct 2025</td>
								<td className="py-3 px-4 text-green-600 font-medium">
									Interview Scheduled
								</td>
							</tr>
							<tr className="border-t hover:bg-gray-50">
								<td className="py-3 px-4">Chika Eze</td>
								<td className="py-3 px-4">UI Designer</td>
								<td className="py-3 px-4">11 Oct 2025</td>
								<td className="py-3 px-4 text-yellow-600 font-medium">
									Under Review
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			{/* Job Performance Insights */}
			<div className="my-8">
				<h2 className="text-lg font-semibold mb-3">Job Post Performance</h2>
				<div className="grid grid-cols-3 gap-4">
					{["Frontend Developer", "UI Designer", "Backend Engineer"].map(
						(title, i) => (
							<div
								key={i}
								className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
							>
								<h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
								<p className="text-sm text-gray-500 mb-2">
									Views: <span className="text-blue-600">340</span> |
									Applicants: <span className="text-blue-600">28</span>
								</p>
								<div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
									<div
										className="bg-blue-600 h-full"
										style={{ width: `${60 + i * 15}%` }}
									></div>
								</div>
								<p className="text-xs text-gray-500 mt-1">Engagement Rate</p>
							</div>
						)
					)}
				</div>
			</div>

			{/* Recommended Candidates */}
			<div className="my-8">
				<h2 className="text-lg font-semibold mb-3">Recommended Candidates</h2>
				<div className="flex gap-4 overflow-x-auto scrollbar-none pb-3">
					{Array.from({ length: 5 }).map((_, i) => (
						<div
							key={i}
							className="border rounded-lg w-[250px] h-[180px] flex-none p-4 bg-white shadow-sm hover:shadow-md transition"
						>
							<div>
								<h3 className="font-semibold text-gray-800">Adeola A.</h3>
								<p className="text-gray-500 text-sm">Frontend Developer</p>
								<p className="text-gray-500 text-xs mt-1">Lagos, Nigeria</p>
							</div>
							<div className="mt-4">
								<p className="text-gray-700 text-sm">Match Score: 85%</p>
								<button className="mt-2 text-sm text-blue-600 font-medium hover:underline">
									View Profile
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Hiring Tips */}
			<div className="my-8">
				<h2 className="text-lg font-semibold mb-3">Hiring Tips</h2>
				<div className="grid grid-cols-3 gap-4">
					{[
						"Interviewing Best Practices",
						"Writing Job Descriptions",
						"Employer Branding",
					].map((tip, i) => (
						<div
							key={i}
							className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
						>
							<h3 className="font-semibold text-gray-800 mb-2">{tip}</h3>
							<p className="text-sm text-gray-500">
								Learn how to attract and select top talent effectively.
							</p>
							<p className="text-blue-600 text-sm mt-2 font-medium hover:underline">
								Read More
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
