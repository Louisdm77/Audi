import React from "react";
import { FaCarSide } from "react-icons/fa";
export const Car = (props) => {
  return (
    <div>
      {" "}
      <FaCarSide
        className="car"
        style={{
          marginLeft: props[props.on],
          fontSize: "60px ,!important",
          position: "absolute",
          transition: "margin-left 0.5s ease-out",
        }}
      />
    </div>
  );
};
