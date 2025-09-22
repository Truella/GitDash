export default function Stats() {
	const data = [
		{ icon: "👤", value: "25k+", text: "Active Students" },
		{ icon: "💼", value: "150k+", text: "Jobs Completed" },
		{ icon: "⭐", value: "4.9", text: "Average Rating" },
		{ icon: "📈", value: "300%", text: "Growth Rate" },
	];

	return (
		<section className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 my-8">
			{data.map((item, idx) => (
				<div
					key={idx}
					className="bg-white p-6 rounded-xl text-center shadow-md"
				>
					<div className="text-2xl mb-2">{item.icon}</div>
					<h3 className="text-xl font-bold mb-1">{item.value}</h3>
					<p className="text-gray-500 text-sm">{item.text}</p>
				</div>
			))}
		</section>
	);
}
