export default function ImageCard() {
	return (
		<section
			id="students"
			className="relative mx-4 my-8 rounded-xl overflow-hidden shadow-md"
		>
			<img
				src="https://picsum.photos/800/400?random=1"
				alt="Students working on laptops"
				className="w-full block"
			/>
			<div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-md text-sm">
				<h4 className="font-bold mb-1">$247 earned</h4>
				<p className="text-gray-500 mb-1">This week</p>
				<div className="text-yellow-500">★★★★★</div>
				<small className="text-gray-500">4.9 rating</small>
			</div>
		</section>
	);
}
