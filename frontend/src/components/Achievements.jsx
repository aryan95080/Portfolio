const CODE_PROFILES = [
  { platform: "LEETCODE", count: "350+", url: "https://leetcode.com/u/Aryan478_143/" },
  { platform: "GEEKSFORGEEKS", count: "100+", url: "https://www.geeksforgeeks.org/profile/amitaryue2l?from=edit&tab=activity" },
  { platform: "CODING NINJAS", count: "50+", url: "https://www.naukri.com/code360/profile/akaryan" },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="section-head"><span className="num mono">04</span><h2>Achievements</h2></div>

      <div className="win-card">
        <div className="medal">🏆</div>
        <div>
          <h3>Smart India Hackathon — 1st Place</h3>
          <p>
            Represented LNCT College at Smart India Hackathon in Bhopal, where our team built
            an IV Fluid Monitoring System and placed first among more than 1,000 competing teams.
          </p>
        </div>
      </div>

      <div className="code-profiles">
        {CODE_PROFILES.map((cp) => (
          <a className="cp-card" href={cp.url} target="_blank" rel="noopener noreferrer" key={cp.platform}>
            <div className="platform mono">{cp.platform}</div>
            <div className="count">{cp.count}</div>
            <div className="sub">problems solved</div>
          </a>
        ))}
      </div>
    </section>
  );
}
