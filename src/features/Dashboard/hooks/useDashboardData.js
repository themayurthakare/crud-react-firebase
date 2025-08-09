// src/features/Dashboard/hooks/useDashboardData.js
import { useEffect, useState } from "react";
import { fetchStats } from "../../../services/blogService";

export default function useDashboardData() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchStats()
      .then((res) => setStats(res))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { stats, loading };
}
