// src/components/common/LoadingSpinner/LoadingSpinner.jsx
import React from "react";
import styles from "./LoadingSpinner.module.css";

export default function LoadingSpinner({ size = 24 }) {
  return (
    <div className={styles.wrap} style={{ width: size, height: size }}>
      <svg viewBox="0 0 50 50" className={styles.svg}>
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#e6eef8"
          strokeWidth="5"
        />
        <path
          d="M45 25a20 20 0 0 1-20 20"
          stroke="#2563eb"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}
