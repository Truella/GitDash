import { Bookmark, BookmarkMinus } from "lucide-react";
import React from "react";

export default function JobCard({
	job,
	variant = "default",
	onSave,
	onUnsave,
}) {
	return (
		<div className="rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white p-5 w-[280px] h-[310px] flex flex-col justify-between border border-gray-100">
			{/* Save / Unsave Button */}
			<div className="flex justify-end">
				{variant === "saved" ? (
					<button
						onClick={() => onUnsave?.(job.id)}
						className="flex items-center gap-1 text-sm text-red-500 bg-red-100 hover:bg-red-200 px-3 py-1 rounded-md transition"
					>
						<span>Unsave</span>
						<BookmarkMinus size={18} />
					</button>
				) : (
					<button
						onClick={() => onSave?.(job.id)}
						className="flex items-center gap-1 text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md transition"
					>
						<span>Save</span>
						<Bookmark size={18} />
					</button>
				)}
			</div>

			{/* Job Details */}
			<div className="space-y-2">
				<h3 className="font-semibold text-xl text-gray-800 leading-snug">
					{job.title}
				</h3>
				<p className="text-gray-500 font-medium text-sm">
					{job.company}{" "}
					<span className="font-light text-xs text-gray-400">(3 days ago)</span>
				</p>

				<div className="flex flex-wrap gap-2 pt-2">
					<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
						{job.type}
					</span>
					<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
						Contract
					</span>
				</div>
			</div>

			{/* Location & Salary */}
			<div className="pt-4">
				<div className="flex justify-between items-center text-sm text-gray-600">
					<p>{job.location}</p>
					<span className="font-semibold text-gray-800">{job.salary}</span>
				</div>

				{/* Bottom Button */}
				{variant === "saved" ? (
					<button className="mt-4 w-full bg-blue-50 text-blue-700 py-2 rounded-lg hover:bg-blue-100 active:scale-[0.98] transition-all duration-200">
						View Job
					</button>
				) : (
					<button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all duration-200">
						Apply Now
					</button>
				)}
			</div>
		</div>
	);
}
