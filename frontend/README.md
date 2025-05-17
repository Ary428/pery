# Frontend – Pery UI (React + Vite + TailwindCSS)

This folder contains the React SPA that lets users sign up, choose a language, and fetch Wikipedia article introductions. The app matches the provided Figma design across desktop, tablet, and mobile breakpoints.

---

## Key Screens

1. **Email Page** – enter username.
2. **Language Page** – choose preferred UI/article language.
3. **Topic Page** – enter an article subject and fetch intro.
4. **Article Page** – shows introduction with breadcrumb + “Start Over”.

### UX touches

* Tailwind utility classes for consistent spacing/typography.
* Loader dialog (HeadlessUI + Framer Motion).
* Fade/slide page transitions (Framer Motion).
* FAQ floating button.

---

## Run locally

```bash
# in /frontend
npm install
npm run dev   # http://localhost:5173
```

No environment variables are required. The client auto‑detects the API base:

```ts
export const API_BASE = /^(localhost|127(?:\\.0){2}\\.1)$/.test(window.location.hostname)
  ? 'http://localhost:4000'
  : 'https://pery-backend.onrender.com';
```

Ensure the backend is running on `localhost:4000` (or adjust the constant).

---

## Build & Deploy (Vercel)

1. Push repository to GitHub.
2. Import into Vercel ➜ **Root Directory:** `frontend` ➜ **Framework:** Vite.
3. No additional env vars are needed.
4. Vercel automatically builds (`vite build`) and deploys to `pery-frontend.vercel.app`.

---