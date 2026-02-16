const API_BASE = "http://localhost:8000";

export const getLogs = async () => {
  const response = await fetch(`${API_BASE}/logs`);
  return response.json();
};
