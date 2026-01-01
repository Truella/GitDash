import axiosInstance from "../api/axios";

export const registerUser = async (userData) => {
	try {
		const response = await axiosInstance.post("register/", userData);
		return response.data;
	} catch (error) {
		console.error("Registration Failed:", error.message);
		throw error;
	}
};


// LOGIN USER
export const loginUser = async (credentials) => {
	const response = await axiosInstance.post("token/", credentials);
	return response.data;
};

