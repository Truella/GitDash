import SeekersSignUpForm from "./SeekersSignUpForm";
import RecruitersSignUpForm from "./RecruitersSignUpForm";

export default function SignUpForm({ role, onNext, onBack }) {
	if (role === "jobSeeker") {
		return <SeekersSignUpForm onNext={onNext} onBack={onBack} />;
	}
	return <RecruitersSignUpForm onNext={onNext} onBack={onBack} />;
}
