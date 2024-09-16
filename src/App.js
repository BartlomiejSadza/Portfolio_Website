import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import MyServices from "./components/MyServices";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <Nav /> 
      <MyComponent />
      <Intro />
      <MyServices />
      <AboutMe />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;
