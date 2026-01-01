import SeekersSignUpForm from "./SeekersSignUpForm";
import RecruitersSignUpForm from "./RecruitersSignUpForm";
import SignupForm from "./SignUpForm";

export default function SignUpFormContainer({ role, onNext, onBack }) {
	return <SignupForm role={role} onBack={onBack}/>
	}
/*if (role === "jobSeeker") {
		return <SeekersSignUpForm onNext={onNext} onBack={onBack} />;
	}
	return <RecruitersSignUpForm onNext={onNext} onBack={onBack} />;
 */