import React from "react";
import Car from "../assets/Audic.mp4";
import Roboto from "../assets/Poppins-Light.ttf";
const HeroSection = () => {
  return (
    <div>
      <div
        style={{ fontFamily: { Roboto } }}
        class="hero relative h-[90vh] z-0 text-white overflow-hidden"
      >
        <div class="absolute inset-0">
          {/* <img
            src="https://www.audi.com/content/dam/gbp2/innovation/product-innovation/drive-systems/e-mobility/a6-e-tron-aerodynamics/1920x600_Aerodynamik_TSF5161_01.jpg?imwidth=1920&imdensity=1"
            alt="Background Image"
            class="object-cover object-center w-full "
          /> */}
          <video
            class="object-cover object-center w-full "
            src={Car}
            autoPlay
            muted
            loop
            playsInline
          ></video>

          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-5xl font-bold leading-tight mb-4">
            Audi A6 Sportback e-tron
          </h1>
          <p class="text-lg text-white mt-8 mb-8">
            The most aerodynamic Audi ever
          </p>
          <a
            href="#"
            class="bg-none text-white hover:border-gray  hover:text-gray py-2 px-6 border border-2-white text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
