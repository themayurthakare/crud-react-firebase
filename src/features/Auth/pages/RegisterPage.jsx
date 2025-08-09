// src/features/Auth/pages/RegisterPage.jsx
import React from "react";
import RegisterForm from "../components/RegisterForm";
import Header from "../../../components/layout/Header/Header";
import Footer from "../../../components/layout/Footer/Footer";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ paddingTop: 32 }}>
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
}
