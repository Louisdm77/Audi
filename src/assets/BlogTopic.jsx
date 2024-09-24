("use client");
import React, { useState } from "react";
import EmblaCarousel from "./EmblaCarousel";
import "../assets/embla.css";
import "../assets/base.css";
const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const BlogTopic = () => {
  const [zoom, setZoom] = useState(false);
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
