("use client");
import React, { useState, useRef } from "react";
// import EmblaCarousel from "./EmblaCarousel";
// import "../assets/embla.css";
// import "../assets/base.css";
const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = [
  {
    url: "https://img.freepik.com/premium-photo/audi-a3-showroom-with-detail-macro-lens_1003533-429.jpg?size=626&ext=jpg&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
    id: 1,
    alt: "car1",
  },
  {
    url: "https://img.freepik.com/premium-photo/yellow-car-with-logo-front-is-shown_1308172-566372.jpg?size=626&ext=jpg&ga=GA1.2.1053587659.1720895076&semt=ais_hybrid",
    id: 2,
    alt: "car2",
  },
  {
    url: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&ga=GA1.2.1053587659.1720895076&semt=ais_hybrid",
    id: 3,
    alt: "car3",
  },

  {
    url: "https://img.freepik.com/premium-photo/car-with-name-toyota-front_1201911-1574.jpg?size=626&ext=jpg&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
    id: 4,
    alt: "car",
  },
];

export const BlogTopic = () => {
  // const topic = useRef(null);
  // const observer = new ScrollObserver();
  // observer.observe(topic.current, null, "zoomIn");
  return (
    <div>
      <div>
        <h2 className="mb-5 top" style={{ fontSize: "30px", fontWeight: 900 }}>
          Current topics from the world of Audi
        </h2>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};
