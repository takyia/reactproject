import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the best adventure travel tours!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-boat.jpg"
              text="Enjoy a relaxing boat cruise to wherever you desire"
              label="Cruise"
              path="/cruise"
            />
            <CardItem
              src="images/img-thailand.jpg"
              text="Friendly and full of culture. Thailand temps visitors with a smile as huge as the tropical beaches."
              label="Thailand"
              path="/thailand"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-japan.jpg"
              text="Japan is a timeless place where ancient traditions are fused with modern life as if it were the most natural thing in the world."
              label="Japan"
              path="/japan"
            />
            <CardItem
              src="images/img-region.jpg"
              text="Located in South Africa, the Drakensberg Region are among the country's most awe-inspiring landscapes. With its Zulu villages 
              and wilderness areas, this region is the perfect place for photographers, and hikers."
              label="Drakensberg Region"
              path="/drakensberg"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Sahara Desert"
              path="/sahara"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
