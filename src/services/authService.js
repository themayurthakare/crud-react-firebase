// src/services/authService.js
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

// Wrap Firebase user into simple object
export function userFromFirebase(u) {
  if (!u) return null;
  return { uid: u.uid, displayName: u.displayName || null, email: u.email };
}

export async function register({ name, email, password }) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });
  return userFromFirebase(cred.user);
}

export async function login({ email, password }) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return userFromFirebase(cred.user);
}

export async function logout() {
  await signOut(auth);
}
