import React from "react";
import "../assets/model.css";

const Models = () => {
  return (
    <div>
      <h2 className="title">Discover our models</h2>
      <div className="imgholder">
        <div className="img-container">
          <img
            src="https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg?t=st=1728998070~exp=1729001670~hmac=34f1e1a6130cb10ffacc0cae8dc5e5cd6215e058d0cb8094edeb87c584693c2a&w=740"
            alt=""
            className="img"
          />
        </div>
        <div className="content">
          <h3 className="font-bold text-xl mb-4">
            "Discover your perfect match at Audi, where every need is met."
          </h3>
          <p>
            Sporty, luxurious, or compact – at Audi you will find the right
            vehicle for every requirement. Discover and configure our series
            models now.
          </p>
          <button className="btn mt-5">Checkout our models</button>
        </div>
      </div>
    </div>
  );
};

export default Models;
