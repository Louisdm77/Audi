import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faBolt } from "@fortawesome/free-solid-svg-icons";
import car from "../assets/cara.png";
import "../assets/Carousel.css";
import { inView } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();
const Carousel = () => {
  const all = useRef(null);
  const carr = useRef(null);
  const [func, setFunc] = useState(true);
  const [hover, setHover] = useState(true);
  const [ovy, setOvy] = useState(true);
  const [rep, setRep] = useState("0%");
  inView(
    all.current,
    inView("#carousel li", (info) => {
      animate(info.target, { opacity: 1 });
    })
  );

  useEffect(() => {
    let move = setInterval(() => {
      if (rep === "0%") {
        setRep("90%");
      } else {
        setRep("0%");
      }
    }, 3000);

    return () => clearInterval(move);
  }, [rep]);

  return (
    <div ref={all} className="mother">
      <div
        className="al"
        style={{
          borderLeft: "2px solid black",
          height: "fit-content",
          padding: "30px",
          marginLeft: "50px",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          borderRight: "2px solid black",
        }}
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="2000"
      >
        <div className="col1" style={{ width: "30%" }}>
          <h2 style={{ fontWeight: 900, fontSize: "1.5rem" }}>
            Take a journey, <br /> bend to space
          </h2>
          <p style={{ fontSize: "0.8rem" }}>
            "Accelerate into the horizon, engine purring, wheels scorching
            asphalt. Precision-crafted machines merge style, performance, and
            adrenaline, propelling drivers into an unbridled freedom, where
            roads unfold and limits disappear."
          </p>
        </div>
        <div className="col2" style={{ color: "black", marginTop: "20px" }}>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "2.5rem",
              fontStyle: "italic",
            }}
          >
            HOP IN !, JOIN THE JOURNEY.
          </h1>
          <img
            data-aos="fade-in"
            data-aos-delay="50"
            data-aos-duration="3000"
            ref={carr}
            src={car}
            alt="car"
            style={{
              height: "60px",
              width: "60px",
              marginLeft: rep,
              transition: "all 1s ease",
            }}
          />
        </div>
      </div>
      <div
        className="row label"
        data-aos="fade-in-top"
        data-aos-delay="50"
        data-aos-duration="2000"
      >
        <div className="col col11" style={{ width: "25%" }}>
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
        <div className="col col22" style={{ width: "25%" }}>
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
        <div className="col col3" style={{ width: "25%" }}>
          <h1
            className="log"
            style={{
              fontSize: "3rem",
              fontWeight: 900,
              color: "#3974e0",
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
        <div className="col col4" style={{ display: "noe" }}>
          <h1
            className="log"
            style={{
              fontSize: "3rem",
              fontWeight: 900,
              color: "#3974e0",
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
