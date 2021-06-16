import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Cruise from "./components/pages/Cruise";
import Thailand from "./components/pages/Thailand";
import Drakensberg from "./components/pages/Drakensberg";
import Sahara from "./components/pages/Sahara";
import Japan from "./components/pages/Japan";
import About from "./components/About";
import "./components/HeroSection.css";
import "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/Slider.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/about" exact component={About} />
          <Route path="/cruise" exact component={Cruise} />
          <Route path="/thailand" exact component={Thailand} />
          <Route path="/japan" exact component={Japan} />
          <Route path="/drakensberg" exact component={Drakensberg} />
          <Route path="/sahara" exact component={Sahara} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
