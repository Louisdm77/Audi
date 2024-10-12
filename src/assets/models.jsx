import React from "react";
import "../assets/model.css";
const models = () => {
  return (
    <div>
      <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>
        Discover our models
      </h2>
      <div className="row imgholder md:w-full" style={{ textAlign: "start" }}>
        <div className="img w-full p-6 border-box">
          <img
            style={{ width: "100%", height: "auto" }}
            src="https://img.freepik.com/free-photo/black-jeep-is-parked-desert-with-other-cars_1340-35824.jpg?t=st=1728725022~exp=1728728622~hmac=4afa6a30edbed95eea6c3a26c5fb43bf258f781072f2ffad45691bc2fe982f6b&w=740"
            alt=""
          />
        </div>
        <div className="w-54 p-14 border-box">
          <h3 className=" font-bold text-xl mb-4">
            "Discover your perfect match at Audi, where every need is met."
          </h3>
          <p>
            Sporty, luxurious, or compact – at Audi you will find the right
            vehicle for every requirement. Discover and configure our series
            models now.
          </p>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 mt-6 px-6 border border-gray-400 rounded shadow">
            Checkout our models
          </button>
        </div>
      </div>
    </div>
  );
};
export default models;
