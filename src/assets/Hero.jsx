import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div class=" relative z-0 bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div class="absolute inset-0">
          <img
            src="https://img.freepik.com/premium-photo/lineup-electric-cars-car-dealership_1314467-146279.jpg?ga=GA1.1.1053587659.1720895076&semt=ais_hybrid"
            alt="Background Image"
            class="object-cover object-center w-full h-full"
          />
          {/* <video
            class="object-cover object-center w-full h-full"
            src="https://v.ftcdn.net/05/22/38/98/700_F_522389892_Hzeu5a7iWFxP6TxUYoCBadB1G2i7Qy5n_ST.mp4"
          ></video> */}

          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-5xl font-bold leading-tight mb-4">
            Audi A6 Sportback e-tron
          </h1>
          <p class="text-lg text-gray-300 mb-8">
            The most aerodynamic Audi ever
          </p>
          <a
            href="#"
            class="bg-none text-white hover:border-gray hover:text-gray py-2 px-6 border border-2-white text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
