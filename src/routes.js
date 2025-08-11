// src/routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./features/Auth/pages/LoginPage";
import RegisterPage from "./features/Auth/pages/RegisterPage";
import DashboardPage from "./features/Dashboard/pages/DashboardPage";
import BlogListPage from "./features/Blog/pages/BlogListPage";
import CreateBlogPage from "./features/Blog/pages/CreateBlogPage";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import PrivateRoute from "./components/layout/PrivateRoute/PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/blogs" element={<BlogListPage />} />
      <Route path="/blogs/create" element={<CreateBlogPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function MainHome() {
  return (
    <>
      <Header />
      <div className="container" style={{ paddingTop: 40 }}>
        <h1>Welcome to AutoJobGenie</h1>
        <p style={{ color: "#6b7280" }}>
          A starter React + Firebase app. Create blogs, auth, and live updates.
        </p>
      </div>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <>
      <Header />
      <div className="container" style={{ paddingTop: 40 }}>
        <h2>404 — Not found</h2>
        <p style={{ color: "#6b7280" }}>
          The page you wanted ghosted you. Try the homepage.
        </p>
      </div>
      <Footer />
    </>
  );
}
