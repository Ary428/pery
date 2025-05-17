export const API_BASE = /^(localhost|127(?:\\.0){2}\\.1)$/.test(window.location.hostname)
  ? "http://localhost:4000"
  : "https://pery-backend.onrender.com";
