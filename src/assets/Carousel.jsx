import React, { useState } from "react";

import "../assets/Carousel.css";

const Carousel = () => {
  const [func, setFunc] = useState(true);
  const [hover, setHover] = useState(false);
  return (
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "30px",
        boxSizing: "border-box",
      }}
    >
      <div
        className="col"
        style={{ width: "30%", height: "300px" }}
        onMouseEnter={() => {
          setFunc(false);
        }}
        onMouseLeave={() => {
          setFunc(true);
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgb(98, 76, 270)",
            borderRadius: "10px",
            color: "white",
            fontSize: "25px",

            display: func ? "block" : "none",
          }}
        >
          <h1 style={{ marginTop: "30px" }}>Functionality Meets Art</h1>
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            color: "black",
            display: func ? "none" : "block",
            padding: "10px",
          }}
        >
          Audi's innovative design harmonizes form and function. Sleek
          exteriors, luxurious interiors, and advanced technology come together
          in perfect symphony. Quattro all-wheel drive, intuitive infotainment
          systems, and precision craftsmanship define the ultimate driving
          experience. Where every curve serves a purpose, Audi's artistry
          elevates functionality to new heights. Experience the fusion of
          innovation and elegance."
        </div>
      </div>
      <div className="row" style={{ width: "30%", height: "300px" }}>
        <div
          className="col"
          style={{ height: "30%", marginBottom: "30px", fontSize: "25px" }}
        >
          COMPLIMENT YOUR RICHES
        </div>
        <div className="col" style={{ height: "60%" }}>
          What Makes the Audi Q5's Wheels So Special? We Asked Andreas Valencia
          Polle
        </div>
      </div>
      <div className="col" style={{ width: "30%", height: "300px" }}>
        "Sculpted for Speed: The Audi Q5's Wheel Design Story"
      </div>
    </div>
  );
};

export default Carousel;
