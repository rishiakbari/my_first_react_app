import "./App.css";
import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About/>
    </main>
  );
};

export default App;
