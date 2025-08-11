// src/services/blogService.js
import { db } from "../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";

// create blog
export async function createBlog({ title, body, author = "Anonymous" }) {
  const ref = collection(db, "blogs");
  const docRef = await addDoc(ref, {
    title,
    body,
    author,
    createdAt: serverTimestamp(),
    excerpt: body?.slice(0, 140),
  });
  return { id: docRef.id, title, body, author };
}

// real-time subscribe to blogs sorted desc
export function subscribeBlogs(onData, onError) {
  const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
  const unsub = onSnapshot(
    q,
    (snap) => {
      const arr = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      onData(arr);
    },
    (err) => onError?.(err)
  );
  return unsub;
}

// fetch stats (simple)
export async function fetchStats() {
  // count posts
  const snap = await getDocs(collection(db, "blogs"));
  return { users: 0, posts: snap.size, revenue: 0 };
}
