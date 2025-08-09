// src/components/layout/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {new Date().getFullYear()} © AutoJobGenie — built with ❤️
      </div>
    </footer>
  );
}
