import React from "react";
import "../Cards.css";
import Footer from "../Footer";

function Thailand() {
  return (
    <>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <img src="images/thai.jpg" width="300" height="200"></img>
            <h3>Check out our list of Thailand adventures below:</h3>
            <ul className="cards__items"></ul>
            <a
              href="https://www.travelanddestinations.com/best-places-to-visit-in-thailand/"
              target="_blank"
            >
              {" "}
              Best Places To Visit In Thailand{" "}
            </a>
            <br></br>
            <a
              href="https://www.timeout.com/thailand/things-to-do/best-things-to-do-in-thailand"
              target="_blank"
            >
              {" "}
              20 Top BEST Rated Attractions In Thailand{" "}
            </a>
            <br></br>
            <a href="https://www.adventure-life.com/thailand" target="_blank">
              {" "}
              The Adventure Life In Thailand{" "}
            </a>
            <br></br>
            <a
              href="https://www.adventure-life.com/thailand/cruises/12451/southern-phuket-island"
              target="_blank"
            >
              {" "}
              Southern Phuket Island{" "}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Thailand;
