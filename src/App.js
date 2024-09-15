import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import MyServices from "./components/MyServices";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav /> 
      <Intro />
      <MyServices />
      <AboutMe />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;
