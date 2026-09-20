import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <aside className="sidebar">
      <div className="side-top-row">
        <div className="avatar-wrap">
          <div className="avatar">
            <img
              src="/assets/passportSizePhoto.png"
              alt="Portrait of Amit Kumar"
            />
          </div>
        </div>

        <div className="side-name">Amit Kumar</div>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
      </div>

      <div className="side-role">FULL-STACK DEVELOPER</div>
      <div className="side-status">
        <span className="pulse-dot" /> Open to opportunities
      </div>

      <nav className={`side-nav ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span className="tick" />
            {l.label}
          </a>
        ))}

        <div className="side-bottom">
          <a
          
            className="btn-resume"
            href="/assets/Amit_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↓ Download Resume
          </a>
          <div className="social-row">
            <a href="mailto:amitarya95080@gmail.com" title="Email">✉</a>
            <a
              href="https://www.linkedin.com/in/amit-kumar-127112292/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="https://github.com/aryan95080"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              gh
            </a>
            <a
              href="https://wa.me/919508037659"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              wa
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
}