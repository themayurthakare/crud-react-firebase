// src/features/Blog/hooks/useBlogs.js
import { useEffect, useState } from "react";
import { subscribeBlogs } from "../../../services/blogService";

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = subscribeBlogs(
      (data) => {
        setBlogs(data);
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  return { blogs, loading };
}
