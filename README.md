# Amit Kumar — MERN Stack Portfolio

A full MERN application: **M**ongoDB (data), **E**xpress (API), **R**eact (UI), **N**ode.js
(runtime). Projects are stored in a real database and served through a REST API — not
hardcoded into the frontend.

```
mern-portfolio/
├── backend/     Express API + MongoDB models
└── frontend/    React (Vite) app
```

## 1. Prerequisites

- Node.js (v18 or later) — https://nodejs.org
- MongoDB — either:
  - **Local**: install MongoDB Community Server and have it running, OR
  - **Cloud (easier)**: free MongoDB Atlas cluster at https://mongodb.com/atlas

## 2. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and set `MONGO_URI` to your database connection string:
- Local: `mongodb://127.0.0.1:27017/portfolio`
- Atlas: paste the connection string Atlas gives you (Connect → Drivers)

Seed the database with your real project data (Nitam & Pulse+Meet):
```bash
npm run seed
```

Start the API server:
```bash
npm run dev
```
It runs at `http://localhost:5000`. Test it's alive by visiting `http://localhost:5000` in
a browser — you should see `{"status":"Portfolio API is running."}`.

## 3. Frontend setup

Open a **second terminal**:
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
It runs at `http://localhost:5173`. Open that URL — the Projects section will fetch live
data from your backend/database.

## 4. Before you deploy

Replace these placeholders across the code:
- `frontend/src/components/Sidebar.jsx`, `Contact.jsx`, `Achievements.jsx` — your real
  LinkedIn, GitHub, and coding-profile URLs
- `frontend/public/photo-placeholder.jpg` — add your real photo here (see below)
- `frontend/public/resume.pdf` — add your resume PDF here
- In the database (via `backend/seed.js` or by editing directly), fill in `liveDemoUrl`
  and `githubUrl` for each project once they're deployed/pushed

## 5. Adding your photo and resume

Create a `frontend/public/` folder if it doesn't exist, and drop in:
- `photo-placeholder.jpg` — your photo (referenced in `Sidebar.jsx`)
- `resume.pdf` — your resume (referenced in the "Download Resume" button)

Vite serves anything in `/public` directly at the site root, so no code changes are needed
beyond what's already wired up.

## 6. How the API is structured

| Method | Route              | Purpose                                  |
|--------|---------------------|-------------------------------------------|
| GET    | `/api/projects`      | List all projects (sorted by `order`)     |
| GET    | `/api/projects/:id`  | Get a single project                      |
| POST   | `/api/projects`      | Add a new project                         |
| PUT    | `/api/projects/:id`  | Update a project                          |
| DELETE | `/api/projects/:id`  | Remove a project                          |
| POST   | `/api/contact`        | Save a contact-form message to MongoDB    |
| GET    | `/api/contact`        | List all submitted messages               |

Because projects live in the database, you can add a third project later just by inserting
a new document — no frontend code changes needed.

## 7. Deployment (high level)

- **Backend**: deploy to a Node host (Render, Railway, or similar). Set `MONGO_URI` and
  `CLIENT_URL` as environment variables there.
- **Database**: use MongoDB Atlas (free tier is enough for a portfolio).
- **Frontend**: deploy the `frontend` folder to Vercel or Netlify. Set `VITE_API_URL` to
  your deployed backend's URL.
- Plain GitHub Pages **won't** work for this version, since GitHub Pages only serves static
  files and can't run the Express/MongoDB backend — that's the tradeoff of going from a
  static HTML page to a real MERN app.
