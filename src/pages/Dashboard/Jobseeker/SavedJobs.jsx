// src/pages/JobSeeker/SavedJobs.jsx
import React, { useState } from "react";
import JobCard from '../../../components/JobCard';

export default function SavedJobs() {
	const [savedJobs, setSavedJobs] = useState([
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
			title: "Data Analyst",
			company: "InsightWorks",
			location: "Abuja, Nigeria",
			type: "Remote",
			salary: "$900 - $1300",
		},
		{
			id: 3,
			title: "Product Designer",
			company: "DesignHive",
			location: "Port Harcourt, Nigeria",
			type: "Contract",
			salary: "$700 - $1000",
		},
	]);

	const handleUnsave = (id) => {
		setSavedJobs(savedJobs.filter((job) => job.id !== id));
	};

	return (
		<section className="w-full p-6">
			<h2 className="text-2xl font-semibold mb-4">Saved Jobs</h2>

			{savedJobs.length === 0 ? (
				<p className="text-gray-500 text-center mt-10">
					You haven’t saved any jobs yet.
				</p>
			) : (
				<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{savedJobs.map((job) => (
						<JobCard
							key={job.id}
							job={job}
							variant="saved"
							onUnsave={handleUnsave}
						/>
            
					))}
				</div>
			)}
		</section>
	);
}
