// SwappingSquares.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import img1 from "../assets/images/hero/HeroImg1.jpg";
import img2 from "../assets/images/hero/HeroImg2.jpg";
import img3 from "../assets/images/hero/HeroImg3.jpg";
import img4 from "../assets/images/hero/HeroImg4.jpg";

const heroImgs = [
	{ img: img1, text: "lol" },
	{ img: img2, text: "lol" },
	{ img: img3, text: "lol" },
	{ img: img1, text: "lol" },
];

export default function RotatingCard() {
	const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

	// fixed positions for the diamond/square arrangement
	const positions = [
		{ x: 150, y: 0 }, // top
		{ x: 300, y: 150 }, // right
		{ x: 150, y: 300 }, // bottom
		{ x: 0, y: 150 }, // left
	];

	useEffect(() => {
		// Set initial positions
		refs.forEach((ref, i) => {
			gsap.set(ref.current, { x: positions[i].x, y: positions[i].y });
		});

		const cycle = () => {
			refs.forEach((ref, i) => {
				const nextPos = positions[(i + 1) % positions.length];
				gsap.to(ref.current, {
					duration: 1.5,
					x: nextPos.x,
					y: nextPos.y,
					ease: "power2.inOut",
				});
			});

			// Rotate the array so each ref moves to the next position logically
			refs.push(refs.shift());

			gsap.delayedCall(1.6, cycle);
		};

		cycle();
	}, []);

	return (
		<div className="relative mx-auto grid grid-cols-2 grid-rows-2 h-[80%] w-[80%] gap-4">
			{heroImgs.map((img, index) => (
				<div
					ref={refs[index]}
					className="absolute w-[50%] h-[50%] bg-green-500 text-white flex items-center justify-center rounded-lg -rotate-6 shadow-lg"
				>
					<img src={img.img} />
				</div>
			))}
		</div>
	);
}
