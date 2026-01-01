import React from "react";

export default function MyJobs() {
	const jobs = [
		{
			id: 1,
			title: "Frontend Developer",
			company: "TechNova Labs",
			type: "Full-time",
			location: "Lagos, Nigeria",
			applicants: 12,
			datePosted: "3 days ago",
		},
		{
			id: 2,
			title: "UI/UX Designer",
			company: "PixelFlow Studio",
			type: "Remote",
			location: "Abuja, Nigeria",
			applicants: 7,
			datePosted: "1 week ago",
		},
		{
			id: 3,
			title: "Backend Engineer",
			company: "CodeWave Inc.",
			type: "Contract",
			location: "Port Harcourt, Nigeria",
			applicants: 4,
			datePosted: "2 weeks ago",
		},
	];

	return (
		<section className="w-full min-h-screen bg-gray-50 p-6">
			<h1 className="text-2xl font-semibold mb-6 text-gray-800">My Jobs</h1>

			{jobs.length === 0 ? (
				<p className="text-gray-500 text-center mt-10">
					You haven’t posted any jobs yet.
				</p>
			) : (
				<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
					{jobs.map((job) => (
						<div
							key={job.id}
							className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 border border-gray-100 flex flex-col justify-between"
						>
							<div>
								<h2 className="text-lg font-semibold text-gray-800 mb-1">
									{job.title}
								</h2>
								<p className="text-gray-500 text-sm mb-2">{job.company}</p>

								<div className="flex flex-wrap gap-2 mb-4">
									<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
										{job.type}
									</span>
									<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
										{job.location}
									</span>
								</div>
							</div>

							<div className="flex items-center justify-between mt-3 text-sm text-gray-600">
								<p>{job.datePosted}</p>
								<p>{job.applicants} Applicants</p>
							</div>

							<div className="flex justify-between mt-4">
								<button className="text-blue-600 font-medium hover:underline">
									Edit
								</button>
								<button className="text-red-500 font-medium hover:underline">
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</section>
	);
}
