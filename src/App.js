import React from "react";
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"; 
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Fun from "./components/Fun";

export default function App() {
  return (
    <main className="text-gray-400 bg-blue-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Fun />
      <Contact />
    </main>
  );
}
