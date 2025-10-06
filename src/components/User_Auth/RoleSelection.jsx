import { Briefcase, GraduationCap } from "lucide-react";

export default function RoleSelection({ onSelect }) {
	const roles = [
		{
			id: "jobSeeker",
			title: "Job Seeker",
			description: "Find gigs and start earning right away.",
			icon: (
				<GraduationCap className="w-10 h-10 text-yellow-300 group-hover:text-[#152085]" />
			),
		},
		{
			id: "recruiter",
			title: "Recruiter",
			description: "Post jobs and hire skilled students quickly.",
			icon: (
				<Briefcase className="w-10 h-10 text-yellow-300 group-hover:text-[#152085]" />
			),
		},
	];

	return (
		<div className="w-[85vw] bg-[#152085] text-white p-8 rounded-2xl max-w-2xl mx-auto my-12 text-center">
			<h2 className="text-2xl font-bold mb-6 text-yellow-300">
				Who are you signing up as?
			</h2>

			<div className="grid md:grid-cols-2 gap-6">
				{roles.map((role) => (
					<button
						key={role.id}
						onClick={() => onSelect(role.id)}
						className="flex flex-col items-center gap-4 p-6 rounded-xl border border-yellow-300 bg-[#0d1b5e] hover:bg-yellow-300 hover:text-[#07124a] transition duration-300 group shadow-lg"
					>
						{role.icon}
						<h3 className="text-lg font-semibold">{role.title}</h3>
						<p className="text-sm">{role.description}</p>
					</button>
				))}
			</div>
		</div>
	);
}
