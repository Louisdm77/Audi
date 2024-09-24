import React from "react";
import Cara from "../assets/cara.png";
export const Car = (props) => {
  return (
    <div>
      {" "}
      <img
        src={Cara}
        alt="Cara"
        className={`car ${
          props.icon
            ? "animate__animated animate__fadeInLeft"
            : "animate__animated animate__fadeOutLeft animate__delay-1s"
        }
        }`}
        style={{
          height: "50px",
          width: "50px",
          marginLeft: props[props.on],
          fontSize: "60px ,!important",
          position: "absolute",
          transition: "margin-left 1s ease-in-out",
        }}
      />
    </div>
  );
};
