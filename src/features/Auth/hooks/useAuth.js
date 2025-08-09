// src/features/Auth/hooks/useAuth.js
import { useState, useEffect, useCallback } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";
import * as service from "../../../services/authService";

export default function useAuthProvider() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        // sync with service for consistent object
        const profile = await service.userFromFirebase(u);
        setUser(profile);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const login = useCallback(async (creds) => {
    const u = await service.login(creds);
    setUser(u);
    return u;
  }, []);

  const logout = useCallback(async () => {
    await service.logout();
    setUser(null);
  }, []);

  const register = useCallback(async (data) => {
    const u = await service.register(data);
    setUser(u);
    return u;
  }, []);

  return { user, loading, login, logout, register, setUser };
}
