import "./App.css";
import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Skill from "./components/skill";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./components/services";

function App  () {
   useEffect(() => {
     AOS.init({
       duration: 1200, // animation time
       once: false, // animation happens every scroll
     });
   }, []);
  return (
    <main className="scroll-smooth">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="services">
        <Services />
      </section>
    </main>
  );
};

export default App;
