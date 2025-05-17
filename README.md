# Pery Full‑Stack Assignment

End‑to‑end demo implementation (NestJS + React + TailwindCSS)

> **Live frontend:** [https://pery-frontend.vercel.app/](https://pery-frontend.vercel.app/)
>
> **Warm‑up backend (first request if idle):** [https://pery-backend.onrender.com/introduction/cat](https://pery-backend.onrender.com/introduction/cat)
>
> The backend is hosted on Render’s free tier. If no traffic is received for \~15 minutes it spins down; the first request will take \~30 s while the instance wakes up.

---

## What’s Inside?

```
/               ← this README (root‑level overview)
├─ backend/     ← NestJS API → README explains endpoints & running
└─ frontend/    ← React UI   → README explains dev / build / deploy
```

Each sub‑folder has its own README with detailed instructions.

---

## Quick Start (Local Dev)

```bash
# clone
git clone https://github.com/ary428/pery.git
cd pery

# install all workspace deps
npm install

# start backend & frontend concurrently (default ports 4000 / 5173)
# ↳ backend:  http://localhost:4000
# ↳ frontend: http://localhost:5173
npm run dev
```

Both apps share zero configuration: the frontend auto‑detects whether it’s running from `localhost` and calls the proper backend URL.

---

## Production Links

| Service  | URL                                                                    |
| -------- | ---------------------------------------------------------------------- |
| Frontend | [https://pery-frontend.vercel.app/](https://pery-frontend.vercel.app/) |
| Backend  | [https://pery-backend.onrender.com](https://pery-backend.onrender.com) |

> **Tip:** if the backend was asleep, open the warm‑up link above or retry after a few seconds.

---

## Assignment Brief (Reference)

This project implements all requirements from the Pery Full‑Stack assignment:

### Part 1 – Backend (Wikipedia Introduction API)

* **GET `/introduction/:articleName`** – returns first paragraph + caching 5 min
* **POST `/user`** – registers user, stores preferred language, returns token
* Language resolution: token → `Accept‑Language` → default `en`
* Supports `en`, `fr`, `nl` (extensible)

### Part 2 – Frontend (UI Integration)

* Sign‑up → fetch article flow following Figma styling
* Responsive (desktop / tablet / mobile), TailwindCSS
* Loading spinner & fade/slide page transitions
* FAQ button, “Start Over” navigation

### Part 3 – Hosting & Delivery

* Backend on Render, Frontend on Vercel
* Public repo (this one) with clear docs (you are here!)

---

## Contributing / Future Work

* Replace in‑memory cache with Redis
* Persist users in DB
* Extend language list dynamically via `/meta/languages`
* Add e2e tests (Playwright) & CI pipeline

---

© 2025 Pery Demo
