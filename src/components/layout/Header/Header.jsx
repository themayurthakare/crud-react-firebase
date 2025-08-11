// src/components/layout/Header/Header.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { AuthContext } from "../../../App";

export default function Header() {
  const { user, logout } = useContext(AuthContext) || {};
  return (
    <header className={styles.header}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={styles.brand}>
          <Link to="/">AutoJobGenie</Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/blogs">Blogs</Link>
          <Link to="/dashboard">Dashboard</Link>
          {user ? (
            <>
              <span className={styles.small}>
                Hi, {user.displayName || user.name}
              </span>
              <button className={styles.btn} onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <div>
              <Link to="/login" className={styles.btn}>
                Login
              </Link>
              <Link to="/register" className={styles.btn}>
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
