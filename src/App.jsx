import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Journey from "./components/Journey.jsx";
import Approach from "./components/Approach.jsx";
import Goals from "./components/Goals.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Approach />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
