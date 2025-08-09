// src/features/Blog/components/BlogCard.jsx
import React from "react";
import styles from "./BlogCard.module.css";

export default function BlogCard({ blog }) {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{blog.title}</h4>
      <div className={styles.excerpt}>
        {blog.excerpt ||
          blog.body?.slice(0, 140) + (blog.body?.length > 140 ? "..." : "")}
      </div>
      <div className={styles.meta}>
        <div className={styles.small}>By {blog.author ?? "You"}</div>
        <div className={styles.small}>
          {blog.createdAt
            ? new Date(blog.createdAt.seconds * 1000).toLocaleDateString()
            : ""}
        </div>
      </div>
    </div>
  );
}
