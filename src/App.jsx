import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import StudentsPage from "./pages/StudentsPage";
import EmployersPage from "./pages/EmployersPage";
import Footer from "./components/Footer";

export default function App() {
	return (
		<div className="font-sans">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/students" element={<StudentsPage />} />
				<Route path="/employers" element={<EmployersPage />} />
			</Routes>
      <Footer/>
		</div>
	);
}
