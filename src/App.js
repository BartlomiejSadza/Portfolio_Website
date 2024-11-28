import React, {useEffect} from "react";
import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import MyServices from "./components/MyServices";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";
import ReactGA from "react-ga4"

function App() {

    useEffect(() => {
        ReactGA.initialize("G-MB11JLSWMZ");
        ReactGA.send("pageview");
    }, []);

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
