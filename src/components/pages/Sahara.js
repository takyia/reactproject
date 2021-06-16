import React from "react";
import "../Cards.css";
import Footer from "../Footer";

function Japan() {
  return (
    <>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <img src="images/sahara.jpg" width="300" height="200"></img>
            <h3>
              Check out the 2 links below to see adventurous things to do!
            </h3>
            <ul className="cards__items"></ul>
            <a
              href="https://www.responsiblevacation.com/vacations/sahara-desert/travel-guide/things-to-do"
              target="_blank"
            >
              {" "}
              Horse Riding In Sahara{" "}
            </a>
            <br></br>
            <a
              href="https://www.dangerous-business.com/sahara-desert-tour-morocco/"
              target="_blank"
            >
              {" "}
              Camels, Dunes, And Drums: An Overnight Trip Into The Sahara Desert{" "}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Japan;
