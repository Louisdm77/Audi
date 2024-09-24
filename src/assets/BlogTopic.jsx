("use client");
import React, { useState } from "react";
import EmblaCarousel from "./EmblaCarousel";
import "../assets/embla.css";
import "../assets/base.css";
const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = [
  "https://img.freepik.com/premium-photo/white-sports-car-with-license-plate-that-says-g68_889073-2429.jpg?size=626&ext=jpg&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
  "https://img.freepik.com/premium-photo/stylish-car-standing-road-broad-daylight_574412-899.jpg?size=626&ext=jpg&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
  "https://img.freepik.com/premium-photo/red-sports-car-audi-r8_889073-2394.jpg?size=626&ext=jpg&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid",
];

export const BlogTopic = () => {
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
