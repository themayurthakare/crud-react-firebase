// src/features/Auth/pages/LoginPage.jsx
import React from "react";
import LoginForm from "../components/LoginForm";
import Header from "../../../components/layout/Header/Header";
import Footer from "../../../components/layout/Footer/Footer";

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ paddingTop: 32 }}>
        <LoginForm />
      </div>
      <Footer />
    </>
  );
}
