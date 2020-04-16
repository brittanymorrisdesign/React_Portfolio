import React from "react";
import Nav from "./components/nav/nav";
import Jumbotron from "./components/jumbotron/jumbotron";
import About from "./components/about/about"; 
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Services from "./components/services/services"
import "./App.css"

function App() {
  return (
    <div>
    <Nav />
    <Jumbotron/>
    <About />
    <Services />
    <Projects />
    <Contact />
    </div>
  );
}

export default App;