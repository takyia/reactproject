import React from "react";
import "../Cards.css";
import Footer from "../Footer";

function Cruise() {
  return (
    <>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <img src="images/img-boat.jpg" width="300" height="200"></img>
            <h3>Check out the links below to see the Cruise lines!</h3>
            <ul className="cards__items"></ul>
            <a href="https://www.ncl.com/" target="_blank">
              {" "}
              Norwegian Cruise Lines{" "}
            </a>
            <br></br>
            <a href="https://www.carnival.com/" target="_blank">
              {" "}
              Carnival Cruise Lines{" "}
            </a>
            <br></br>
            <a
              href="https://www.royalcaribbean.com/european-cruises"
              target="_blank"
            >
              {" "}
              Royal Carribean Cruises{" "}
            </a>
            <br></br>
            <a href="https://www.princess.com/" target="_blank">
              {" "}
              Princess Cruises{" "}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cruise;
