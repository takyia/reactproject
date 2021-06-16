import React from "react";
import "../Cards.css";
import Footer from "../Footer";

function Japan() {
  return (
    <>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <img src="images/drakensberg.jpg" width="300" height="200"></img>
            <h3>
              Check Out Drakensberg - The Main Mountain Range Of SouthernAfrica
            </h3>
            <ul className="cards__items"></ul>
            <a
              href="https://www.britannica.com/place/Drakensberg"
              target="_blank"
            >
              {" "}
              About Drakensberg{" "}
            </a>
            <br></br>
            <a
              href="https://www.tripadvisor.com/Attractions-g1591543-Activities-c61-Drakensberg_Region_KwaZulu_Natal.html"
              target="_blank"
            >
              {" "}
              10 Fun Activites To Do In Drakensberg{" "}
            </a>
            <br></br>
            <a
              href="https://www.tripadvisor.com/Attractions-g1591543-Activities-c57-t57-Drakensberg_Region_KwaZulu_Natal.html"
              target="_blank"
            >
              {" "}
              Forests In Drakensberg Region{" "}
            </a>
            <br></br>
            <a
              href="https://www.tripadvisor.com/Attraction_Products-g1591543-t11902-zfg12022-Drakensberg_Region_KwaZulu_Natal.html"
              target="_blank"
            >
              {" "}
              Hiking In Drakensberg Region{" "}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Japan;
