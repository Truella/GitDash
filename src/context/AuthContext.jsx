import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [accessToken, setAccessToken] = useState(null);
	const [refreshToken, setRefreshToken] = useState(null);
	const [loading, setLoading] = useState(true);

	// 🔹 Restore user & tokens from localStorage on page load
	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem("user"));
		const storedAccess = localStorage.getItem("access");
		const storedRefresh = localStorage.getItem("refresh");

		if (storedUser && storedAccess && storedRefresh) {
			setUser(storedUser);
			setAccessToken(storedAccess);
			setRefreshToken(storedRefresh);
		}

		setLoading(false);
	}, []);

	// 🔹 Login
	const login = async (userData, access, refresh) => {
		localStorage.setItem("user", JSON.stringify(userData));
		localStorage.setItem("access", access);
		localStorage.setItem("refresh", refresh);

		setUser(userData);
		setAccessToken(access);
		setRefreshToken(refresh);
	};

	// 🔹 Logout
	const logout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("access");
		localStorage.removeItem("refresh");
		setUser(null);
		setAccessToken(null);
		setRefreshToken(null);
	};

	// 🔹 Optionally handle token refresh (auto-renew access token)
	const refreshAccessToken = async () => {
		try {
			const res = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ refresh: refreshToken }),
			});

			if (res.ok) {
				const data = await res.json();
				localStorage.setItem("access", data.access);
				setAccessToken(data.access);
			} else {
				logout(); // refresh failed → logout
			}
		} catch (err) {
			console.error("Error refreshing token:", err);
			logout();
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				accessToken,
				refreshToken,
				loading,
				login,
				logout,
				refreshAccessToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
export const useAuth = () => useContext(AuthContext);
