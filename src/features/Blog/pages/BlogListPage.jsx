// src/features/Blog/pages/BlogListPage.jsx
import React from "react";
import Header from "../../../components/layout/Header/Header";
import Footer from "../../../components/layout/Footer/Footer";
import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";
import { Link } from "react-router-dom";

export default function BlogListPage() {
  const { blogs, loading } = useBlogs();
  return (
    <>
      <Header />
      <div className="container" style={{ paddingTop: 32 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Blogs</h2>
          <Link
            to="/blogs/create"
            className="btn"
            style={{ textDecoration: "none" }}
          >
            New
          </Link>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {blogs.length === 0 && (
              <div style={{ padding: 12, background: "#fff", borderRadius: 8 }}>
                No blogs yet. Create one!
              </div>
            )}
            <div style={{ marginTop: 12 }}>
              {blogs.map((b) => (
                <BlogCard key={b.id} blog={b} />
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
