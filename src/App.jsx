import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/LandingPage/HomePage";
import StudentsPage from "./pages/LandingPage/StudentsPage";
import EmployersPage from "./pages/LandingPage/EmployersPage";
import SignupFlow from "./components/User_Auth";
import LoginForm from "./components/User_Auth/Login";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import FindJobs from "./pages/Dashboard/Jobseeker/FindJobs";
import Applications from "./pages/Dashboard/Jobseeker/Applications";
import SavedJobs from "./pages/Dashboard/Jobseeker/SavedJobs";
import PostJob from "./pages/Dashboard/Recruiter/PostJob";
import MyJobs from "./pages/Dashboard/Recruiter/MyJobs";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
	return (
		<div className="font-sans">
			{/* Public Pages */}
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/students" element={<StudentsPage />} />
					<Route path="/employers" element={<EmployersPage />} />
					<Route path="/signup" element={<SignupFlow />} />
					<Route path="/login" element={<LoginForm />} />
				</Route>

				{/* Logged in Pages */}
				<Route element={<ProtectedRoute />}>
					<Route element={<DashboardLayout />}>
						{" "}
						<Route path="/dashboard/home" element={<Dashboard />} />
						<Route path="/dashboard/find-jobs" element={<FindJobs />} />
						<Route path="/dashboard/applications" element={<Applications />} />
						<Route path="/dashboard/saved-jobs" element={<SavedJobs />} />
						<Route path="/dashboard/post-job" element={<PostJob />} />
						<Route path="/dashboard/my-jobs" element={<MyJobs />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}
