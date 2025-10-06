// StatsSection.jsx
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Users, Briefcase, Star, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
	{ icon: Users, value: 25000, displayMode: "kPlus", label: "Active Students" }, // 25k+
	{
		icon: Briefcase,
		value: 150000,
		displayMode: "kPlus",
		label: "Jobs Completed",
	}, // 150k+
	{
		icon: Star,
		value: 4.9,
		displayMode: "decimalOne",
		label: "Average Rating",
	}, // 4.9
	{
		icon: TrendingUp,
		value: 300,
		displayMode: "percent",
		label: "Growth Rate",
	}, // 300%
];

export default function Stats() {
	const rootRef = useRef(null);
	const featureRefs = useRef([]);
	const cardRefs = useRef([]);

	// callback refs helpers
	const addFeatureRef = (el) => {
		if (el && !featureRefs.current.includes(el)) featureRefs.current.push(el);
	};
	const addCardRef = (el) => {
		if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
	};

	useLayoutEffect(() => {
		if (!rootRef.current) return;

		const ctx = gsap.context(() => {
			// Features reveal
			gsap.fromTo(
				featureRefs.current,
				{ y: 18, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.6,
					stagger: 0.12,
					ease: "power3.out",
					scrollTrigger: {
						trigger: rootRef.current,
						start: "top 85%",
						// play once, do not revert to hidden
						toggleActions: "play none none none",
						// markers: true, // uncomment to debug
					},
				}
			);

			// Cards reveal
			gsap.fromTo(
				cardRefs.current,
				{ y: 40, opacity: 0, filter: "blur(6px)" },
				{
					y: 0,
					opacity: 1,
					filter: "blur(0px)",
					duration: 0.9,
					stagger: 0.18,
					ease: "power3.out",
					scrollTrigger: {
						trigger: rootRef.current,
						start: "top 75%",
						toggleActions: "play none none none",
						// markers: true,
					},
				}
			);

			// Counter animations (safe)
			cardRefs.current.forEach((cardEl, i) => {
				const counterEl = cardEl.querySelector("[data-count]");
				if (!counterEl) return;
				const stat = STATS[i];
				const obj = { val: 0 };

				const target = stat.value;
				gsap.to(obj, {
					val: target,
					duration: 1.4,
					ease: "power1.out",
					delay: 0.15 * i, // small stagger
					onUpdate: () => {
						counterEl.textContent = formatStat(obj.val, stat.displayMode);
					},
					scrollTrigger: {
						trigger: rootRef.current,
						start: "top 75%",
						toggleActions: "play none none none",
					},
				});
			});
		}, rootRef);

		// refresh on resize/images loaded (if layout changes)
		const onResize = () => ScrollTrigger.refresh();
		window.addEventListener("resize", onResize);

		return () => {
			ctx.revert();
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return (
		<section
			ref={rootRef}
			className="bg-gray-50 h-[60vh] flex flex-col justify-center"
		>
			{/* Features */}
			<div className="flex justify-center gap-10 mb-10 flex-wrap ">
				{["No fees to join", "Instant payments", "24/7 support"].map((t, i) => (
					<div
						key={t}
						ref={addFeatureRef}
						className="flex items-center gap-3 text-gray-800 text-lg font-medium opacity-0"
						data-anim="feature"
					>
						<CheckCircle2 className="w-6 h-6 text-green-500" />
						<span>{t}</span>
					</div>
				))}
			</div>

			{/* Stat cards */}
			<div className="w-[85vw] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{STATS.map((s, idx) => {
					const Icon = s.icon;
					return (
						<article
							key={s.label}
							ref={addCardRef}
							className="stat-card bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 will-change-transform opacity-0"
							role="group"
							aria-label={s.label}
						>
							<Icon className="w-8 h-8 mb-3" />
							<h3 className="text-2xl font-extrabold mt-1 mb-2" data-count>
								{/* initial value will be replaced by GSAP */}
								{initialDisplay(s)}
							</h3>
							<p className="text-gray-500">{s.label}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
}

// format helpers
function formatStat(n, mode) {
	if (mode === "kPlus") {
		// show "25k+" style while counting (we count raw numbers)
		const thousands = Math.round(n / 1000);
		if (thousands === 0) return "0";
		return `${thousands}k+`;
	}
	if (mode === "percent") {
		return `${Math.round(n)}%`;
	}
	if (mode === "decimalOne") {
		// show one decimal place e.g. 4.9
		return (Math.round(n * 10) / 10).toFixed(1);
	}
	// fallback
	return Math.round(n).toLocaleString();
}

function initialDisplay(stat) {
	if (stat.displayMode === "kPlus") {
		return "0";
	}
	if (stat.displayMode === "percent") {
		return "0%";
	}
	if (stat.displayMode === "decimalOne") {
		return "0.0";
	}
	return "0";
}
