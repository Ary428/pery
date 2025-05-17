# Backend – Wikipedia Introduction API (NestJS)

This folder contains the NestJS service that powers Pery’s public REST API for fetching the opening paragraph of any Wikipedia article, with language preference and 5‑minute caching.

---

## Features

| Endpoint                     | Description                                                                                                                                                                                                                                                                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `POST /user`                 | Registers a user `{ userName, language }` and returns `{ token }`. The service stores token→language in memory.                                                                                                                                                                                                                  |
| `GET /introduction/:article` | Returns `{ scrapeDate, articleName, language, introduction }`. Language resolution order: `x-authentication` token → `Accept-Language` header → default `en`. Only article names with letters, digits, hyphens or underscores are accepted (400 Bad Request otherwise). Results are cached per (article+language) for 5 minutes. |

Supported languages: **en · fr · es**  (easy to extend).

---

## Local Development

```bash
cd backend
npm install            # install dependencies
npm run start:dev       # hot‑reload server on http://localhost:4000
```

No environment variables are required. Change the default port by setting `PORT` before running.

### Testing

```
npm run test
```

---

## Deployment (Render)

1. Create a new **Web Service** from this repo, root =`backend`.
2. Build command: `npm run build`  ·  Start command: `npm run start:prod`.
3. Add Health Check path `/health` (already implemented).
4. On free tier the instance sleeps after \~15 min; use the warm‑up link above if needed.

---

