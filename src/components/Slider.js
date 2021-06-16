import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
export class Slider extends Component {
  render() {
    return (
      <div class="cara">
        <div class="container-fluid"></div>
        <div className="container-fluid">
          <Carousel>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src={"images/img-snow.jpg"}
              />
              <Carousel.Caption>
                <h3>First Demo </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src={"images/img-japan.jpg"}
              />
              <Carousel.Caption>
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src={"images/img-ocean.jpg"}
              />
              <Carousel.Caption>
                <h3>Third Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Slider;

// import React from "react";
// import About from "./About";
// import Carousel from "react-bootstrap/Carousel";
// import "./Slider.css";

// function Slider() {
//   return (
//           <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
//     <div class="carousel-indicators">
//       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//     </div>
//     <div class="carousel-inner">
//       <div class="carousel-item active">
//         <img src="images/img-snow.jpg" class="d-block w-100" alt="..."/>
//       </div>
//       <div class="carousel-item">
//         <img src="images/img-japan.jpg" class="d-block w-100" alt="..."/>
//       </div>
//       <div class="carousel-item">
//           <img src="images/img-ocean.jpg" class="d-block w-100" alt="..."/>
//         </div>
//       </div>
//       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Previous</span>
//       </button>
//       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }

// export default Slider;
