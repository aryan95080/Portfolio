import { useEffect, useState } from "react";
import { fetchProjects } from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section id="projects">
      <div className="section-head"><span className="num mono">03</span><h2>Projects</h2></div>

      {status === "loading" && <p className="proj-desc">Loading projects…</p>}

      {status === "error" && (
        <p className="proj-desc">
          Couldn't load projects from the API. Make sure the backend server is running and
          the database has been seeded (<code>npm run seed</code> in <code>/backend</code>).
        </p>
      )}

      {status === "ready" && projects.length === 0 && (
        <p className="proj-desc">
          No projects in the database yet. Run <code>npm run seed</code> in <code>/backend</code>
          to add the starter projects.
        </p>
      )}

      {status === "ready" &&
        projects.map((p) => (
          <article className="proj-card" key={p._id}>
            <div className="proj-top">
              <h3>{p.title}</h3>
              <span className="dates mono">{p.startDate} – {p.endDate}</span>
            </div>
            <p className="proj-desc">{p.description}</p>

            <div className="tech-tags">
              {p.techStack.map((t) => <span key={t}>{t}</span>)}
            </div>

            <ul className="proj-highlights">
              {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>

            <div className="proj-links">
              <a href={p.liveDemoUrl || "#"} target="_blank" rel="noopener noreferrer">Live Demo →</a>
              <a href={p.githubUrl || "#"} target="_blank" rel="noopener noreferrer">GitHub →</a>
            </div>
          </article>
        ))}
    </section>
  );
}
