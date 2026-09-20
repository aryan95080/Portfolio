import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="shell">
      <Sidebar />
      <main className="main">
        <div className="wrap">
          <Hero />
          <hr className="rule" />
          <About />
          <hr className="rule" />
          <Skills />
          <hr className="rule" />
          <Projects />
          <hr className="rule" />
          <Achievements />
        </div>
        <Contact />
      </main>
    </div>
  );
}
