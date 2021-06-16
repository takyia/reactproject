import React from "react";
import "../Cards.css";
import Footer from "../Footer";

function Japan() {
  return (
    <>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <img src="images/japan1.jpg" width="300" height="200"></img>
            <h3>
              Check out the 2 links below to see some of Japan's most
              flourishing views!
            </h3>
            <ul className="cards__items"></ul>
            <a
              href="https://livejapan.com/en/in-tokyo/in-pref-tokyo/in-asakusa/article-a0002487/"
              target="_blank"
            >
              {" "}
              8 things to know before visiting Japan{" "}
            </a>
            <br></br>
            <a href="https://www.lonelyplanet.com/japan" target="_blank">
              {" "}
              Japan's travel guide{" "}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Japan;
