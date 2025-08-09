// src/features/Dashboard/components/DashboardSummary.jsx
import React from "react";
import styles from "./DashboardSummary.module.css";

export default function DashboardSummary({ stats = {} }) {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <div className={styles.small}>Users</div>
        <div className={styles.big}>{stats.users ?? 0}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.small}>Posts</div>
        <div className={styles.big}>{stats.posts ?? 0}</div>
      </div>
      <div className={styles.card}>
        <div className={styles.small}>Revenue</div>
        <div className={styles.big}>₹{stats.revenue ?? 0}</div>
      </div>
    </div>
  );
}
