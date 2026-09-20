const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function fetchProjects() {
  const res = await fetch(`${API_URL}/projects`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function sendMessage({ name, email, message }) {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Failed to send message");
  }
  return res.json();
}
