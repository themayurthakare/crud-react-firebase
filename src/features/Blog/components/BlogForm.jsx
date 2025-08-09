// src/features/Blog/components/BlogForm.jsx
import React, { useState } from "react";
import InputField from "../../../components/common/InputField/InputField";
import Button from "../../../components/common/Button/Button";
import styles from "./BlogForm.module.css";
import { createBlog } from "../../../services/blogService";

export default function BlogForm({ initial = {}, onSaved }) {
  const [title, setTitle] = useState(initial.title || "");
  const [body, setBody] = useState(initial.body || "");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e?.preventDefault();
    setErr("");
    setLoading(true);
    try {
      const saved = await createBlog({ title, body });
      onSaved?.(saved);
      setTitle("");
      setBody("");
    } catch (error) {
      setErr(error?.message || "Failed to save");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <h3>New Blog</h3>
      {err && <div className={styles.err}>{err}</div>}
      <InputField
        label="Title"
        value={title}
        onChange={setTitle}
        placeholder="Enter title"
      />
      <label className={styles.label}>
        <div className={styles.labelTitle}>Body</div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className={styles.textarea}
          rows="6"
        />
      </label>
      <div style={{ marginTop: 8 }}>
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
}
