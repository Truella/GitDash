import { CheckCircle } from "lucide-react";

export default function Confirmation() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
			<CheckCircle className="text-green-600 mb-4" size={48} />
			<h2 className="text-2xl font-bold mb-2">Signup Successful!</h2>
			<p className="text-gray-600 mb-6">
				Your account has been created. You can now log in and get started.
			</p>
			<a
				href="/login"
				className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
			>
				Go to Login
			</a>
		</div>
	);
}
