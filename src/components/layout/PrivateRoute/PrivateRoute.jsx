// src/components/layout/PrivateRoute/PrivateRoute.jsx
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../App";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext) || {};
  if (loading) return <div style={{ padding: 40 }}>Checking auth...</div>;
  return user ? children : <Navigate to="/login" replace />;
}
