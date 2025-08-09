// src/features/Dashboard/pages/DashboardPage.jsx
import React from "react";
import Header from "../../../components/layout/Header/Header";
import Footer from "../../../components/layout/Footer/Footer";
import DashboardSummary from "../components/DashboardSummary";
import useDashboardData from "../hooks/useDashboardData";
import PrivateRoute from "../../../components/layout/PrivateRoute/PrivateRoute";

function Inner() {
  const { stats, loading } = useDashboardData();
  return (
    <div className="container" style={{ paddingTop: 32 }}>
      <h2>Dashboard</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DashboardSummary stats={stats || {}} />
      )}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <PrivateRoute>
      <Header />
      <Inner />
      <Footer />
    </PrivateRoute>
  );
}
