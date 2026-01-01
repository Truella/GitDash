import { useState } from "react";
import RoleSelection from "./RoleSelection";

import Confirmation from "./Confirmation";
import SignUpFormContainer from "./SignUpFormContainer";

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
				<SignUpFormContainer
					role={role}
					onBack={() => setStep(1)}
					onNext={(data) => {
						setFormData(data);
						setStep(3);
					}}
				/>
			)}
			
			{step === 4 && <Confirmation />}
		</div>
	);
}
