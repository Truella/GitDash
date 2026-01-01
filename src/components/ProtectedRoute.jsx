import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
	const { user, loading } = useAuth();
	if (loading) return <div>Loading...</div>;
	if (!user) {
		return <Navigate to="/login" replace />;
	}
	return <Outlet />;
}
