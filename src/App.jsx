
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import Portfolio from "./components/Portfolio";
import CaseStudy from "./components/CaseStudy";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

function App() {
  return (
    <>
      <Navbar />

      <Reveal direction="none">
        <Hero />
      </Reveal>

      {/* <Reveal>
        <Showreel />
      </Reveal> */}

      <Reveal>
        <Portfolio />
      </Reveal>

      {/* <Reveal direction="right">
        <CaseStudy />
      </Reveal> */}

      <Reveal>
        <Services />
      </Reveal>

      <Reveal direction="left">
        <About />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Reveal direction="none">
        <Footer />
      </Reveal>
    </>
  );
}

export default App;
