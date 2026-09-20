const SKILL_GROUPS = [
  {
    category: "Frontend Development",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", width: 88 },
      { name: "React JS", level: "Intermediate", width: 75 },
      { name: "HTML & CSS / Tailwind", level: "Advanced", width: 82 },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js & Express.js", level: "Intermediate", width: 75 },
      { name: "MongoDB", level: "Intermediate", width: 75 },
      { name: "MySQL", level: "Intermediate", width: 68 },
      { name: "JWT / bcrypt Authentication", level: "Intermediate", width: 78 },
    ],
  },
  {
    category: "Languages & Core CS",
    skills: [
      { name: "Java", level: "Intermediate", width: 78 },
      { name: "Python", level: "Intermediate", width: 65 },
      { name: "Data Structures & Algorithms", level: "Advanced", width: 90 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: "Intermediate", width: 80 },
      { name: "Postman / Thunder Client", level: "Intermediate", width: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-head"><span className="num mono">02</span><h2>Skills</h2></div>

      {SKILL_GROUPS.map((group) => (
        <div className="skill-cat" key={group.category}>
          <h4>{group.category}</h4>
          {group.skills.map((s) => (
            <div className="skill-row" key={s.name}>
              <span className="check">✓</span>
              <span className="name">{s.name}</span>
              <span className="trace"><i style={{ width: `${s.width}%` }} /></span>
              <span className="level mono">{s.level}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
