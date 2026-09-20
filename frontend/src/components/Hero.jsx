export default function Hero() {
  return (
    <section className="hero">
      <div className="kicker mono">&lt;/&gt; hello, I'm</div>
      <h1>Amit Kumar</h1>
      <p className="lede">
        A final-year B.Tech (Electronics &amp; Communication) student from Bihar, studying at
        LNCT College, Bhopal — I build complete web products end to end using the MERN stack,
        backed by a strong grip on Data Structures &amp; Algorithms.
      </p>
      <div className="cta-row">
        <a className="btn btn-primary" href="#projects">See my work</a>
        <a className="btn btn-line" href="#contact">Contact me</a>
      </div>

      <div className="info-row">
        <div className="info-card">
          <div className="tag mono">STATUS</div>
          <div className="big">Fresher</div>
          <div className="sub">Actively seeking full-time SDE roles</div>
        </div>
        <div className="info-card">
          <div className="tag mono">EDUCATION</div>
          <div className="big">B.Tech · ECE</div>
          <div className="sub">LNCT College, Bhopal — 7.03 CGPA</div>
        </div>
        <div className="info-card">
          <div className="tag mono">DSA PRACTICE</div>
          <div className="big">500+ Problems</div>
          <div className="sub">LeetCode · GFG · Coding Ninjas</div>
        </div>
      </div>
    </section>
  );
}
