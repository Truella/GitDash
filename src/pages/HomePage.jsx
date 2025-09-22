import Hero from "../components/Hero";
import FeaturesList from "../components/FeaturesList";
import ImageCard from "../components/ImageCard";
import Stats from "../components/Stats";
import Why from "../components/Why";
import CTA from "../components/CTA";
import {
	ChartNoAxesCombined,
	Clock,
	CreditCard,
	Shield,
	Target,
	Zap,
} from "lucide-react";

export default function HomePage() {
	return (
		<>
			<Hero />
			<FeaturesList />
			{/*<ImageCard /> */}
			<Stats />
			<Why
				id="students"
				title="Why Students Choose GigFast"
				description="Built specifically for students and fresh graduates who want immediate earning opportunities while building their careers."
				benefits={[
					{
						icon: <Zap size={48} className="text-yellow-300" />,
						title: "Instant Jobs",
						text: "Find and start working on gigs within minutes",
					},
					{
						icon: <CreditCard size={48} className="text-yellow-300" />,
						title: "Fast Payments",
						text: "Get paid instantly after completing tasks",
					},
					{
						icon: <Shield size={48} className="text-yellow-300" />,
						title: "Secure Platform",
						text: "All transactions are protected and verified",
					},
					{
						icon: <Clock size={48} className="text-yellow-300" />,
						title: "Flexible Schedule",
						text: "Work when you want, how you want",
					},
				]}
				isEmployer={false}
			/>

			<Why
				id="employers"
				title="For Employers"
				description="Find qualified, motivated students to complete your projects quickly and affordably."
				benefits={[
					{
						icon: <Target size={48} color="#152085" />,
						title: "Top Talent",
						text: "Access thousands of skilled students ready to work",
					},
					{
						icon: <Zap size={48} className="text-yellow-300" />,
						title: "Fast Hiring",
						text: "Post jobs and get applications within minutes",
					},
					{
						icon: <ChartNoAxesCombined size={48} color="#152085" />,
						title: "Affordable Rates",
						text: "Flexible pricing options to fit your budget",
					},
				]}
				isEmployer={true}
			/>
			<CTA />
		</>
	);
}
