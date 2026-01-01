import React, { useState } from "react";
import JobCard from "../../../components/JobCard";
const jobData = [
	{
		id: 1,
		title: "Frontend Developer",
		company: "Techify Labs",
		location: "Lagos, Nigeria",
		type: "Full-time",
		salary: "$800 - $1200",
	},
	{
		id: 2,
		title: "Backend Engineer",
		company: "CodeWave",
		location: "Abuja, Nigeria",
		type: "Remote",
		salary: "$1000 - $1500",
	},
	{
		id: 3,
		title: "UI/UX Designer",
		company: "DesignPro Studio",
		location: "Port Harcourt, Nigeria",
		type: "Contract",
		salary: "$700 - $1000",
	},
	{
		id: 4,
		title: "UI/UX Designer",
		company: "DesignPro Studio",
		location: "Port Harcourt, Nigeria",
		type: "Contract",
		salary: "$700 - $1000",
	},
];

export default function FindJob() {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredJobs = jobData.filter(
		(job) =>
			job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
			job.location.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<section className="w-full p-6">
			<h2 className="text-2xl font-semibold mb-4">Find a Job</h2>

			<div className="mb-6">
				<input
					type="text"
					placeholder="Search job title, company, or location..."
					className="border border-gray-300 rounded-lg p-2 w-full"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>

			<div className="flex gap-4 justify-evenly flex-wrap">
				{filteredJobs.length > 0 ? (
					filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
				) : (
					<p className="col-span-full text-gray-500 text-center">
						No jobs found.
					</p>
				)}
			</div>
		</section>
	);
}
