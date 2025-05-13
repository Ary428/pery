# 🧠 Pery Full-Stack Assignment – Backend

This repository contains the **backend portion** of the Pery Full-Stack Assignment.  
The backend is built with **NestJS** and provides a public REST API for fetching Wikipedia article introductions with support for user language preferences and caching.

---

## 📦 Tech Stack

- **Framework:** NestJS (Node.js, TypeScript)
- **HTTP Client:** Axios
- **In-Memory Cache:** Custom `CacheService`
- **Architecture:** Modular, service-based, designed for future extensibility

---

## 🎯 Features

### ✅ `GET /introduction/:articleName`

Fetches the first paragraph from a Wikipedia article.  
Supports:
- Language resolution via `x-authentication` token or `Accept-Language` header
- Input validation (only letters, numbers, underscores, and hyphens)
- In-memory caching (per article + language) for 5 minutes

**Example response:**
```json
{
  "scrapeDate": 1681837720000,
  "articleName": "cat",
  "language": "en",
  "introduction": "The cat (Felis catus)..."
}
````

---

### ✅ `POST /user`

Registers a user and stores their preferred language in memory.

**Input:**

```json
{
  "userName": "arye",
  "language": "fr"
}
```

**Response:**

```json
{
  "token": "uuid-token-here"
}
```

Users can later send this token in the `x-authentication` header to personalize article language.

---

## 🧠 Language Preference Logic

Language is resolved in the following priority:

1. `x-authentication` header → matches registered user's language
2. `Accept-Language` header → supports `en`, `fr`, `es`
3. Default: `"en"`

All logic is encapsulated in a clean `resolveLanguage()` utility.

---

## 🚀 How to Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm run start
```

3. Access API at:

```
http://localhost:3000
```

---

## 📂 Project Structure

```
src/
├── user/            # User registration logic (in-memory for now)
├── introduction/    # Wikipedia fetching and controller logic
├── cache/           # Custom in-memory cache service
├── common/          # Utility functions (e.g., resolveLanguage)
```

---

## 🔄 Caching

* Implemented via `CacheService`
* Results are cached per article+language
* TTL: 5 minutes
* Can easily be replaced with Redis or other adapters in the future

---

## 🧱 Future Ready

The backend is designed to:

* Plug in a real DB for user storage (via UserService abstraction)
* Replace in-memory cache with Redis
* Add new languages with minimal changes
