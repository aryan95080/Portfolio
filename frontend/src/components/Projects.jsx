import { useEffect, useState } from "react";
import { fetchProjects } from "../api";

const defaultProjects = [
  {
    title: "Ramitra — Clothing Shopping App",
    description:
      "A full-stack e-commerce platform for browsing and buying clothes, built solo end to end — from product catalog to a secure checkout flow. 'Ramitra' stands for Refined Aesthetics with Modern Innovation & Timeless Regality in Apparel.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    highlights: [
      "Product catalog, cart, and full order flow",
      "Secure JWT + bcrypt authentication, cutting login time by 30%",
      "UI/UX refinements that lifted daily user interactions by 40%",
    ],
    liveDemoUrl: "https://ramitra-shopping.onrender.com",
    githubUrl: "https://github.com/aryan95080/Ramitra-Shopping",
    startDate: "Mar 2024",
    endDate: "May 2024",
    order: 1,
  },
  {
    title: "Pulse + Meet — Doctor Appointment App",
    description:
      "A full-stack appointment booking system for patients, doctors, and admins — each with their own dashboard — covering booking, payments, and profile management.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Cloudinary", "JWT"],
    highlights: [
      "Role-based access control for patients, doctors, and admins",
      "Razorpay integration for secure online payments during booking",
      "Cloudinary-backed uploads and Context API for shared state",
    ],
    liveDemoUrl: "https://pulse-meet.onrender.com",
    githubUrl: "https://github.com/aryan95080/Pulse-Meet",
    startDate: "May 2024",
    endDate: "Aug 2024",
    order: 2,
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        // Use database data if available, otherwise fall back to defaults
        setProjects(Array.isArray(data) && data.length > 0 ? data : defaultProjects);
        setStatus("ready");
      })
      .catch(() => {
        // API or database unreachable: show defaults instead of an error
        setProjects(defaultProjects);
        setStatus("ready");
      });
  }, []);

  return (
    <section id="projects">
      <div className="section-head"><span className="num mono">03</span><h2>Projects</h2></div>

      {status === "loading" && <p className="proj-desc">Loading projects…</p>}

      {status === "ready" &&
        projects.map((p) => (
          <article className="proj-card" key={p._id || p.title}>
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