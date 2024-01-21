// src/App.js
import React from "react";
import "./App.scss";
import Header from "./component/header/Header";
import Introduction from "./component/introduction/Introduction";
import About from "./component/about/About";
import Skills from "./component/skills/Skills";
import Footer from "./component/footer/Footer";
import Contact from "./component/contact/Contact";
import Social from "./component/social/Social";
import Projects from "./component/projects/projects";
import ScrollButton from "./common/scrollbutton";

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <section id="home">
          <Introduction />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="about">
          <About></About>
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section>
          <Social />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
      <ScrollButton/>
    </div>
  );
};

export default App;
