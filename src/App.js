import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PracticeAreas from "./components/PracticeAreasPage";
import LatestUpdates from "./components/LatestUpdatesPage";

//logo https://static.wixstatic.com/media/5d49f2_bff266cfa6b548a883a98712f38a248a~mv2.jpg/v1/fill/w_88,h_90,al_c,q_80,usm_0.66_1.00_0.01/5d49f2_bff266cfa6b548a883a98712f38a248a~mv2.webp

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          alt="logo"
          id="logo"
          src={`http://localhost:3000/images/logo.jpeg`}
        ></img>
        <NavBar />
      </header>
      <React.Fragment>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about-us" component={AboutPage} />
        <Route exact path="/practice-areas" component={PracticeAreas} />
        <Route exact path="/latest-updates" component={LatestUpdates} />
        <Route exact path="/contact" component={ContactPage} />
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default App;
