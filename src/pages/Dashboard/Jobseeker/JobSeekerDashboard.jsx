import React from "react";
import { useAuth } from "../../../context/AuthContext";

export default function JobSeekerDashboard() {
	const {user} = useAuth()
	return (
		<section className="w-full p-6">
			{/* Header Section */}
			<header>
				<h1 className="text-2xl font-semibold text-gray-800">
					Hello, {user.fullname} 👋
				</h1>
				<p className="text-gray-500 mt-1">
					Welcome to your job seeker dashboard.
				</p>
			</header>

			{/* Stats + Quick Overview */}
			<div className="h-[30vh] flex gap-4 my-8">
				{/* Stats Grid */}
				<div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
					<div className="border rounded-lg p-4 bg-white shadow-sm">
						<h3 className="text-sm text-gray-500">Applications</h3>
						<p className="text-2xl font-semibold mt-2 text-blue-600">12</p>
					</div>
					<div className="border rounded-lg p-4 bg-white shadow-sm">
						<h3 className="text-sm text-gray-500">Interviews</h3>
						<p className="text-2xl font-semibold mt-2 text-blue-600">3</p>
					</div>
					<div className="border rounded-lg p-4 bg-white shadow-sm">
						<h3 className="text-sm text-gray-500">Saved Jobs</h3>
						<p className="text-2xl font-semibold mt-2 text-blue-600">5</p>
					</div>
					<div className="border rounded-lg p-4 bg-white shadow-sm">
						<h3 className="text-sm text-gray-500">Profile Completion</h3>
						<div className="mt-2 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
							<div className="bg-blue-600 h-full w-[70%]"></div>
						</div>
						<p className="text-xs text-gray-500 mt-1">70% Complete</p>
					</div>
				</div>

				{/* Right Summary Cards */}
				<div className="flex-1 flex gap-6">
					<div className="border flex-1 rounded-lg p-4 bg-white shadow-sm">
						<h3 className="text-sm text-gray-500 mb-2">Upcoming Interview</h3>
						<p className="text-gray-800 font-medium">Frontend Dev - Ashenode</p>
						<p className="text-sm text-gray-500 mt-1">
							20 Oct, 2025 • 10:00 AM
						</p>
					</div>

					<div className="border flex-1 rounded-lg p-4 bg-white shadow-sm">
						<h3 className="text-sm text-gray-500 mb-2">New Message</h3>
						<p className="text-gray-800 font-medium">
							TechCrate HR: “We’d like to...
						</p>
						<p className="text-sm text-blue-600 mt-1 cursor-pointer">
							View Chat
						</p>
					</div>
				</div>
			</div>

			{/* Recommended Jobs */}
			<div className="my-8">
				<h2 className="text-lg font-semibold mb-3">Recommended for you</h2>
				<div className="flex gap-4 overflow-x-auto w-full scrollbar-none pb-3">
					{Array.from({ length: 6 }).map((_, i) => (
						<div
							key={i}
							className="border rounded-lg w-[280px] h-[180px] flex-none p-4 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition"
						>
							<div>
								<h3 className="font-semibold text-gray-800">
									Frontend Developer
								</h3>
								<p className="text-gray-500 text-sm">Ashenode Ltd</p>
							</div>
							<div>
								<p className="text-gray-700 text-sm">₦250k - ₦350k/month</p>
								<button className="mt-2 text-sm text-blue-600 font-medium hover:underline">
									View Details
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Recent Applications */}
			<div className="my-8">
				<h2 className="text-lg font-semibold mb-3">Recent Applications</h2>
				<div className="bg-white border rounded-lg shadow-sm overflow-hidden">
					<table className="w-full text-left text-sm">
						<thead className="bg-gray-50 text-gray-600">
							<tr>
								<th className="py-3 px-4">Job Title</th>
								<th className="py-3 px-4">Company</th>
								<th className="py-3 px-4">Date Applied</th>
								<th className="py-3 px-4">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-t hover:bg-gray-50">
								<td className="py-3 px-4">Frontend Developer</td>
								<td className="py-3 px-4">Ashenode</td>
								<td className="py-3 px-4">12 Oct 2025</td>
								<td className="py-3 px-4 text-yellow-600 font-medium">
									Under Review
								</td>
							</tr>
							<tr className="border-t hover:bg-gray-50">
								<td className="py-3 px-4">UI Designer</td>
								<td className="py-3 px-4">TechCrate</td>
								<td className="py-3 px-4">10 Oct 2025</td>
								<td className="py-3 px-4 text-green-600 font-medium">
									Interview
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			{/* Career Tips */}
			<div className="my-8">
				<h2 className="text-lg font-semibold mb-3">Career Tips for You</h2>
				<div className="grid grid-cols-3 gap-4">
					{["Interview Tips", "Resume Writing", "Top Tech Skills"].map(
						(tip, i) => (
							<div
								key={i}
								className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
							>
								<h3 className="font-semibold text-gray-800 mb-2">{tip}</h3>
								<p className="text-sm text-gray-500">
									Learn how to improve your {tip.toLowerCase()} and stand out.
								</p>
								<p className="text-blue-600 text-sm mt-2 font-medium hover:underline">
									Read More
								</p>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
}
