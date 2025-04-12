// app/page.js
import Background from "/components/Background";
import NeofetchPortfolio from "../../components/NeofetchPortfolio";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <main>
      <Background>
        <div className="container mx-auto px-4 py-8">
          <NeofetchPortfolio />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </Background>
    </main>
  );
}
