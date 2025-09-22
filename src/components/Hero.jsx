export default function Hero() {
	return (
		<section className="h-[80vh] bg-[#152085] text-white flex flex-col md:flex-row items-center px-8 md:px-16">
			{/* Text content */}
			<div className="flex-1 flex flex-col justify-center">
				<h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
					Get That <span className="text-yellow-300">Urgent 2k</span> & More...
				</h1>
				<p className="text-md md:text-xl text-gray-200 max-w-xl mb-8">
					Quick gigs. Instant pay. Perfect for when you need cash ASAP; whether
					it’s vibes, data, or that shawarma run.
				</p>
				<div>
					<a
						href="#"
						className="bg-yellow-400 text-[#152085] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
					>
						Start Earning Now
					</a>
				</div>
			</div>

			{/* Image */}
			<div className="hidden flex-1 mt-10 md:mt-0 md:flex justify-center items-center h-full">
				<div className="grid grid-cols-2 grid-rows-2 h-[80%] w-[80%] gap-4">
					<div className="bg-blue-500 md:rotate-12">1</div>
					<div className="bg-red-500 md:rotate-12">2</div>
					<div className="bg-green-500 md:rotate-12">3</div>
					<div className="bg-yellow-500 md:rotate-12">4</div>
				</div>
			</div>
		</section>
	);
}
