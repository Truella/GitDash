import React from "react";
import JobSeekerDashboard from "./Jobseeker/JobSeekerDashboard";
import { useOutletContext } from "react-router";
import RecruiterDashboard from "./Recruiter/RecruiterDashboard";

export default function Dashboard() {
  const {userType} = useOutletContext()
	return (
		<div>
			{userType === "recruiter" ? (
				<RecruiterDashboard />
			) : (
				<JobSeekerDashboard />
			)}
		</div>
	);
}
