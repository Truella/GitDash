import { useState } from "react";
import RoleSelection from "./RoleSelection";
import SignUpForm from "./SignUpForm.jsx";
import Preview from "./Preview";
import Confirmation from "./Confirmation";

export default function SignupFlow() {
	const [step, setStep] = useState(1);
	const [role, setRole] = useState(null);
	const [formData, setFormData] = useState({});

	return (
		<div>
			{step === 1 && (
				<RoleSelection
					onSelect={(r) => {
						setRole(r);
						setStep(2);
					}}
				/>
			)}
			{step === 2 && (
				<SignUpForm
					role={role}
					onBack={() => setStep(1)}
					onNext={(data) => {
						setFormData(data);
						setStep(3);
					}}
				/>
			)}
			{step === 3 && (
				<Preview
					role={role}
					data={formData}
					onBack={() => setStep(2)}
					onConfirm={() => setStep(4)}
				/>
			)}
			{step === 4 && <Confirmation />}
		</div>
	);
}
