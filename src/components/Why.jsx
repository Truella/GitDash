export default function Why({ id, title, description, benefits, isEmployer }) {
	if (!isEmployer) {
		return (
			<section
				id={id}
				className={`px-4 py-12 bg-[#152085] md:h-[60vh] text-white flex  justify-center items-center`}
			>
				<div className="">
					<h2 className="text-2xl font-bold text-center mb-2 text-yellow-300">
						{title}
					</h2>
					<p className="text-center mb-8">{description}</p>
					<div className="md:w-[85vw] mx-auto flex flex-col md:flex-row">
						{benefits.map((b, idx) => (
							<div key={idx} className="p-6 mb-4 text-center">
								<div className="flex justify-center">{b.icon}</div>
								<h3 className="font-semibold mb-2">{b.title}</h3>
								<p className="">{b.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}
	if (isEmployer) {
		return (
			<section
				id={id}
				className={`px-4 py-12 md:h-[60vh] flex justify-center items-center`}
			>
				<div>
					<h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
					<p className="text-center text-gray-500 mb-8">{description}</p>
					<div className="md:w-[80vw] mx-auto flex md:gap-8 gap-4 flex-col md:flex-row justify-between">
						{benefits.map((b, idx) => (
							<div
								key={idx}
								className={`p-6 mb-4 text-left rounded-md shadow-2xl w-[350px] h-[180px] ${
									idx === 1 ? "md:translate-y-10 bg-[#152085] text-white" : ""
								}`}
							>
								<div>{b.icon}</div>
								<h3 className="font-semibold mb-2">{b.title}</h3>
								<p>{b.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}
}
