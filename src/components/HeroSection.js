import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Cards from "./Cards";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>VACA ADVENTURES</h1>
      <p>Escape and breathe the air of new places.</p>
      {/* <img src="/images/img-home.jpg" alt="" /> */}
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
