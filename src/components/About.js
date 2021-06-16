import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Products from "./pages/Products";
import Footer from "./Footer";
import "../App.css"

function About() {
  return (
    <div>
      <Slider />

      <section className="section bg-c">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-md-3 text-center">
              <h2 className="main-heading">About Our Adventures</h2>
              <div className="underline mx-auto"></div>
              <p>
                For some, escaping the daily grind means getting their
                adrenaline pumping on a rugged mountainside or 50 feet below the
                ocean's surface. Others search for snowy peaks and alpine lakes
                simply for a change of scenery. Using expert advice and traveler
                votes, we have created a list of some of the best adventure
                vacations in the U.S. for a thrilling walk on the wild side.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our vision, mission, and values */}
      <section className="section bg-c-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h2 className="main-heading">Our Mission And Values</h2>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <h3>Our Mission/Values</h3>
              <p>
                Feeling the urge to see or explore an exciting new destination?
                We have nice views that you may like. Our mission is to help you
                descide on what new attractions you may want to visit. Our tours
                can give you the edge by helping you to jump queues, learn from
                experts and enjoy some local flavour. With a huge range of
                adventure tours on our site, you can make your travel plans
                about where you may want to visit. You may either have a few
                days to enjoy on a nice boat trip, or weeks to travel throught
                the islands of Bali.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
