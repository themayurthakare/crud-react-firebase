// src/features/Auth/components/LoginForm.jsx
import React, { useState, useContext } from "react";
import InputField from "../../../components/common/InputField/InputField";
import Button from "../../../components/common/Button/Button";
import styles from "./AuthForms.module.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const submit = async (e) => {
    e?.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await login({ email, password });
      nav("/dashboard");
    } catch (error) {
      setErr(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <h3>Login</h3>
      {err && <div className={styles.err}>{err}</div>}
      <InputField
        label="Email"
        value={email}
        onChange={setEmail}
        placeholder="you@domain.com"
      />
      <InputField
        label="Password"
        value={password}
        onChange={setPassword}
        placeholder="••••••"
        type="password"
      />
      <div style={{ display: "flex", gap: 8 }}>
        <Button type="submit" disabled={loading}>
          {loading ? "Logging..." : "Login"}
        </Button>
      </div>
    </form>
  );
}
