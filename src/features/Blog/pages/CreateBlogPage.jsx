// src/features/Blog/pages/CreateBlogPage.jsx
import React from "react";
import Header from "../../../components/layout/Header/Header";
import Footer from "../../../components/layout/Footer/Footer";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";

export default function CreateBlogPage() {
  const nav = useNavigate();
  return (
    <>
      <Header />
      <div className="container" style={{ paddingTop: 32 }}>
        <h2>Create Blog</h2>
        <BlogForm onSaved={() => nav("/blogs")} />
      </div>
      <Footer />
    </>
  );
}
