export default function Preview({ role, data, onConfirm, onBack }) {
	return (
		<div className="max-w-md mx-auto mt-10 p-6 border rounded-2xl shadow text-left">
			<h2 className="text-xl font-bold mb-4">Preview your details</h2>

			<ul className="space-y-2 text-gray-700">
				<li>
					<strong>Email:</strong> {data.email}
				</li>
				<li>
					<strong>Name:</strong> {data.name}
				</li>
				{role === "recruiter" && (
					<li>
						<strong>Company:</strong> {data.company}
					</li>
				)}
			</ul>

			<div className="flex justify-between mt-6">
				<button onClick={onBack} className="px-4 py-2 border rounded-lg">
					Back
				</button>
				<button
					onClick={onConfirm}
					className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
				>
					Confirm & Sign Up
				</button>
			</div>
		</div>
	);
}
