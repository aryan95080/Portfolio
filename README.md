# Amit Kumar — MERN Stack Portfolio

**Live demo:** [https://my-portfolio-jfbg.onrender.com](https://my-portfolio-jfbg.onrender.com)

A full-stack developer portfolio built on the MERN stack — **M**ongoDB, **E**xpress, **R**eact, **N**ode.js. Project data is stored in a real database and served through a REST API, rather than hardcoded into the frontend, so content can be updated without touching the UI code.

---

## Overview

This isn't a static webpage — it's a working full-stack application with two independently deployed services:

- A **React (Vite)** frontend that renders the portfolio UI and fetches live data
- An **Express** backend that exposes a REST API and connects to **MongoDB** for persistent storage

The Projects section and Contact form are both wired to the database in real time — projects load from `GET /api/projects`, and messages submitted through the Contact form are saved via `POST /api/contact`.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose ODM) |
| Styling | Custom CSS (circuit-board design system) |
| Deployment | Render (Static Site + Web Service), MongoDB Atlas |

## Features

- Responsive sidebar/top-bar navigation that adapts across desktop, tablet, and mobile
- Projects fetched live from MongoDB — no hardcoded project data in the frontend
- Working contact form that persists submissions to the database
- Skills, achievements, and coding-profile stats sections
- Full CRUD API for projects (add/update/remove without redeploying the frontend)

## Project Structure

mern-portfolio/
├── backend/ Express API + MongoDB models
│ ├── config/ Database connection
│ ├── controllers/ Request handlers
│ ├── models/ Mongoose schemas (Project, Message)
│ ├── routes/ API route definitions
│ ├── seed.js Seeds the database with starter project data
│ └── server.js App entry point
│
└── frontend/ React (Vite) app
└── src/
├── components/ Sidebar, Hero, About, Skills, Projects, Achievements, Contact
├── api.js Fetch helpers for talking to the backend
└── App.jsx Root component


---

## Getting Started (Local Development)

### Prerequisites

- Node.js v18 or later — [nodejs.org](https://nodejs.org)
- A MongoDB database:
  - **Local** — install MongoDB Community Server, or
  - **Cloud (recommended)** — a free cluster at [MongoDB Atlas](https://mongodb.com/atlas)

### 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and set `MONGO_URI`:
- Local: `mongodb://127.0.0.1:27017/portfolio`
- Atlas: paste the connection string from **Connect → Drivers**

Seed the database with the starter projects:

```bash
npm run seed
```

Start the API server:

```bash
npm run dev
```

Runs at `http://localhost:5000`. Confirm it's live by visiting that URL — you should see:
```json
{"status":"Portfolio API is running."}
```

### 2. Frontend setup

In a **second terminal**:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Runs at `http://localhost:5173`. The Projects section will fetch live data from your local backend.

---

## API Reference

| Method | Route | Purpose |
|---|---|---|
| `GET` | `/api/projects` | List all projects, sorted by display order |
| `GET` | `/api/projects/:id` | Get a single project |
| `POST` | `/api/projects` | Add a new project |
| `PUT` | `/api/projects/:id` | Update a project |
| `DELETE` | `/api/projects/:id` | Remove a project |
| `POST` | `/api/contact` | Save a contact-form submission |
| `GET` | `/api/contact` | List all submitted messages |

Because projects are stored in MongoDB, adding a third project later is just a matter of inserting a new document — no frontend code changes required.

## Environment Variables

**`backend/.env`**

| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB connection string |
| `PORT` | Port the Express server runs on (default `5000`) |
| `CLIENT_URL` | The deployed frontend's URL, for CORS |

**`frontend/.env`**

| Variable | Description |
|---|---|
| `VITE_API_URL` | The deployed backend's API base URL (e.g. `https://your-backend.onrender.com/api`) |

---

## Deployment

Both services are deployed on **Render**, with the database hosted on **MongoDB Atlas**:

- **Database** — MongoDB Atlas (free M0 tier)
- **Backend** — Render Web Service, root directory `backend`, build command `npm install`, start command `npm start`
- **Frontend** — Render Static Site, root directory `frontend`, build command `npm install && npm run build`, publish directory `dist`

**Live services:**
- Frontend: [https://my-portfolio-jfbg.onrender.com](https://my-portfolio-jfbg.onrender.com)
- Backend API: available at the Render Web Service URL, consumed via `VITE_API_URL`

> **Note:** Render's free tier spins down backend Web Services after periods of inactivity, so the first request after idle time may take 30–60 seconds to respond. The frontend, deployed as a Static Site, is unaffected and loads instantly.

---

## Author

**Amit Kumar**
B.Tech, Electronics & Communication Engineering — LNCT College, Bhopal
📧 amitarya95080@gmail.com
