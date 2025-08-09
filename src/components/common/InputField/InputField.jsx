// src/components/common/InputField/InputField.jsx
import React from "react";
import styles from "./InputField.module.css";

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  name,
}) {
  return (
    <label className={styles.wrap}>
      {label && <div className={styles.label}>{label}</div>}
      <input
        name={name}
        className={styles.input}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}
