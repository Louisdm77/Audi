import React, { useState } from "react";

export const BlogTopic = () => {
  const [zoom, setZoom] = useState(false);
  return (
    <div>
      <div>
        <h2 className="mb-5 top" style={{ fontSize: "30px", fontWeight: 900 }}>
          Current topics from the world of Audi
        </h2>
        ,
        <div
          className="flex p-4 all"
          style={{ justifyContent: "space-between" }}
        >
          <div className="first" style={{ width: "32.5%" }}>
            <img
              src="https://img.freepik.com/premium-photo/audi-r8-silver-car-sports-car_889073-2433.jpg?size=626&ext=jpg&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid"
              alt="audi"
              style={{ width: "100%", height: "250px" }}
            />
            <div style={{ padding: "20px", boxSizing: "border-box" }}>
              <p className="text-start nam">Design &#x2015; 09/02/24</p>
              <h2
                className="subtop"
                style={{
                  fontSize: "25px",
                  fontStyle: "oblique",
                  fontWeight: 900,
                }}
              >
                “The wheels make the car”
              </h2>
              <p className="text-start" style={{ fontWeight: 700 }}>
                The designer Andreas Valencia Pollex explains the wheel design
                of the new Audi Q5.
              </p>
            </div>
          </div>{" "}
          <div className="second" style={{ width: "32.5%" }}>
            <img
              src="https://img.freepik.com/premium-photo/audi-r8-silver-car-sports-car_889073-2433.jpg?size=626&ext=jpg&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid"
              alt="audi"
              style={{ width: "100%", height: "250px" }}
            />
            <div style={{ padding: "20px", boxSizing: "border-box" }}>
              <p className="text-start nam">Design &#x2015; 08/06/2024</p>
              <h2
                className="subtop"
                style={{
                  fontSize: "25px",
                  fontStyle: "oblique",
                  fontWeight: 900,
                }}
              >
                Audi A6 e-tron: from concept car to series production
              </h2>
              <p className="text-start" style={{ fontWeight: 700 }}>
                Two exterior designers from Audi explain how the Audi A6 e-tron
                concept car became a production vehicle.
              </p>
            </div>
          </div>{" "}
          <div className="third" style={{ width: "32.5%" }}>
            <img
              src="https://img.freepik.com/premium-photo/audi-r8-silver-car-sports-car_889073-2433.jpg?size=626&ext=jpg&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid"
              alt="audi"
              style={{ width: "100%", height: "250px" }}
            />
            <div style={{ padding: "20px", boxSizing: "border-box" }}>
              <p className="text-start nam">Technologies &#x2015; 07/02/24</p>
              <h2
                className="subtop"
                style={{
                  fontSize: "25px",
                  fontStyle: "oblique",
                  fontWeight: 900,
                }}
              >
                24 hours at the Audi charging hub in Nuremberg
              </h2>
              <p className="text-start" style={{ fontWeight: 700 }}>
                The Audi charging hub in Nuremberg is more than just a
                state-of-the-art fast-charging solution. Customers share their
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
