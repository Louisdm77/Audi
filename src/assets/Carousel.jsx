import React, { useState } from "react";
import car from "../assets/audd.png";
import "../assets/Carousel.css";

const Carousel = () => {
  const [func, setFunc] = useState(true);
  const [hover, setHover] = useState(true);
  const [ovy, setOvy] = useState(true);
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
          className="nu animate__animated animate__fadeIn"
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            color: "white",
            fontSize: "25px",
            fontWeight: 900,
            display: func ? "block" : "none",
          }}
        >
          <h1 style={{ marginTop: "30px" }}>Functionality Meets Art</h1>
        </div>
        <div
          className="animate__animated animate__fadeIn"
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            color: "black",
            display: func ? "none" : "block",
            padding: "10px",

            fontSize: "15px",
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
          style={{
            height: "30%",
            marginBottom: "30px",
            boxShadow: "none",
            background: "none",
          }}
        >
          {/* <small style={{ fontSize: "12px", color: "gray" }}>
            <p style={{ textAlign: "start" }}>with AUDI</p>
          </small>
          COMPLIMENT YOUR RICHES */}
          <img src={car} alt="" style={{ height: "100%" }} />
        </div>
        <div
          className="col"
          style={{ height: "60%" }}
          onMouseEnter={() => {
            setHover(false);
          }}
          onMouseLeave={() => {
            setHover(true);
          }}
        >
          <div
            className="animate__animated animate__fadeIn"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "10px",
              color: "black",
              fontSize: "17px",
              display: hover ? "flex" : "none",
              alignItems: "center",
              fontWeight: 900,
            }}
          >
            What Makes the Audi Q5's Wheels So Special? We Asked Andreas
            Valencia Polle
          </div>{" "}
          <div
            className="animate__animated animate__fadeIn"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "10px",
              color: "black",
              display: hover ? "none" : "block",
              padding: "10px",

              fontSize: "15px",
            }}
          >
            "The Audi Q5's wheels boast concave designs, varied sizes (17"-22"),
            and customization options. High-performance capabilities ensure
            exceptional handling and braking. - Andreas Valencia Polle"
          </div>
        </div>
      </div>
      <div
        className="col"
        style={{ width: "30%", height: "300px" }}
        onMouseEnter={() => {
          setOvy(false);
        }}
        onMouseLeave={() => {
          setOvy(true);
        }}
      >
        {" "}
        <div
          className="animate__animated animate__fadeIn"
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            color: "black",
            fontSize: "17px",
            display: ovy ? "flex" : "none",
            alignItems: "center",
            fontWeight: 900,
          }}
        >
          "Sculpted for Speed: The Audi Q5's Wheel Design Story"
        </div>{" "}
        <div
          className="animate__animated animate__fadeIn"
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            color: "black",
            display: ovy ? "none" : "block",
            padding: "10px",
            fontSize: "15px",
          }}
        >
          " The Audi Q5's wheel design combines style and performance. Concave
          shapes and precision-cut spokes reduce weight, enhancing acceleration
          and handling. Available in 17"-22" sizes, with customizable finishes,
          the Q5's wheels balance elegance and athleticism. Inspired by
          motorsport, every detail optimizes aerodynamics and stability.
          Experience the fusion of form and function."
        </div>
      </div>
    </div>
  );
};

export default Carousel;
