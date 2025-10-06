import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import StudentsPage from "./pages/StudentsPage";
import EmployersPage from "./pages/EmployersPage";
import Footer from "./components/Footer";
import SignupFlow from "./components/User_Auth";
import LoginForm from "./components/User_Auth/Login";

export default function App() {
	return (
		<div className="font-sans">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/students" element={<StudentsPage />} />
				<Route path="/employers" element={<EmployersPage />} />
				<Route path="/signup" element={<SignupFlow/>}/>
				<Route path="/login" element={<LoginForm/>}/>
			</Routes>
      <Footer/>
		</div>
	);
}
