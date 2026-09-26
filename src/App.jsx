import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useReveal } from "./hooks/useReveal";


function App() {
    useReveal(); 
  return (
    <Layout>
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />

    </Layout>
  );
}

export default App;
