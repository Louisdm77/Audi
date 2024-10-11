import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faBolt } from "@fortawesome/free-solid-svg-icons";
import car from "../assets/audd.png";
import "../assets/Carousel.css";
import { inView } from "motion";

const Carousel = () => {
  const all = useRef(null);
  const [func, setFunc] = useState(true);
  const [hover, setHover] = useState(true);
  const [ovy, setOvy] = useState(true);
  inView(all.current, callback);
  return (
    <div ref={all} className="mother">
      <div
        style={{
          borderLeft: "1px solid white",
          height: "fit-content",
          width: "30%",
          padding: "30px",
          marginLeft: "50px",
          textAlign: "left",
        }}
      >
        <h2 style={{ fontWeight: 900, fontSize: "1.5rem" }}>
          Take a journey, <br /> bend to space
        </h2>
        <p style={{ fontSize: "0.8rem" }}>
          "Accelerate into the horizon, engine purring, wheels scorching
          asphalt. Precision-crafted machines merge style, performance, and
          adrenaline, propelling drivers into an unbridled freedom, where roads
          unfold and limits disappear."
        </p>
      </div>
      <div className="row">
        <div className="col" style={{ width: "20%" }}>
          <h1
            className="log"
            style={{
              fontSize: "3rem",
              fontWeight: 900,
            }}
          >
            A6
          </h1>
          <div
            style={{
              textAlign: "left",
              marginLeft: "10px",
              paddingTop: "10px",
            }}
          >
            <h6 style={{ fontWeight: 700 }}>AGILITY</h6>
            <p style={{ fontSize: "0.6rem" }}>
              "Swift, sleek, and responsive, precision on wheels."
            </p>
          </div>
        </div>
        <div className="col" style={{ width: "20%" }}>
          <h1
            className="log"
            style={{
              fontSize: "3rem",
              fontWeight: 900,
              color: "#3974e0",
            }}
          >
            <FontAwesomeIcon icon={faGauge} />
          </h1>
          <div
            style={{
              textAlign: "left",
              marginLeft: "10px",
              paddingTop: "10px",
            }}
          >
            <h6 style={{ fontWeight: 700 }}>PERFORMANCE</h6>
            <p style={{ fontSize: "0.6rem" }}>
              "Swift, sleek, and responsive, precision on wheels."
            </p>
          </div>
        </div>
        <div className="col" style={{ width: "20%" }}>
          <h1
            className="log"
            style={{
              fontSize: "3rem",
              fontWeight: 900,
              color: "linear-gradient(to right, #3974e0, #ffffff)",
            }}
          >
            <FontAwesomeIcon icon={faBolt} />
          </h1>
          <div
            style={{
              textAlign: "left",
              marginLeft: "10px",
              paddingTop: "10px",
            }}
          >
            <h6 style={{ fontWeight: 700 }}>CUTTING EDGE</h6>
            <p style={{ fontSize: "0.6rem" }}>
              "Swift, sleek, and responsive, precision on wheels."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
