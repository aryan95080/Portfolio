export default function Hero() {
  return (
    <section className="hero">
      <div className="kicker mono">&lt;/&gt; hello, I'm</div>
      <h1>Amit Kumar</h1>
      <p className="lede">
  I'm Amit, a full-stack developer from Bihar. I graduated in 2026 with a B.Tech in
  Electronics &amp; Communication from LNCT College, Bhopal, and I turn ideas into complete
  web apps using the MERN stack, with solid Data Structures &amp; Algorithms behind every build.
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
          <div className="sub">LNCT College, Bhopal — 7.45 CGPA</div>
        </div>
        <div className="info-card">
          <div className="tag mono">DSA PRACTICE</div>
          <div className="big">600+ Problems</div>
          <div className="sub">LeetCode · GFG · Coding Ninjas</div>
        </div>
      </div>
    </section>
  );
}
