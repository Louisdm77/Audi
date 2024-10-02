import React, { useEffect, useRef } from "react";
import Mont from "../assets/Montserrat-Light.ttf";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "../assets/Carousel.css";
import { LiaKissWinkHeartSolid } from "react-icons/lia";
// import slide_image_1 from "./assets/images/img_1.jpg";
// import slide_image_2 from "./assets/images/img_2.jpg";
// import slide_image_3 from "./assets/images/img_3.jpg";
// import slide_image_4 from "./assets/images/img_4.jpg";
// import slide_image_5 from "./assets/images/img_5.jpg";
// import slide_image_6 from "./assets/images/img_6.jpg";
// import slide_image_7 from "./assets/images/img_7.jpg";

function Carousel() {
  const next = useRef(null);
  const mout = useRef(null);

  useEffect(() => {
    mout.current = setInterval(() => {
      if (next.current) {
        next.current.click();
      }
    }, 8000);

    return () => {
      clearInterval(mout.current);
    };
  }, []);

  const handleMouseOver = () => {
    clearInterval(mout.current);
  };

  const handleMouseAway = () => {
    mout.current = setInterval(() => {
      if (next.current) {
        next.current.click();
      }
    }, 8000);
  };

  return (
    <div
      className="container"
      //   onMouseEnter={handleMouseOver}
      //   onMouseLeave={handleMouseAway}
      style={{ fontFamily: Mont }}
    >
      <h2 className="mb-5 top" style={{ fontSize: "30px", fontWeight: 900 }}>
        Current topics from the world of Audi
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          //   depth: 100,
          //   modifier: 4,
          depth: 200,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide onClick={() => {}}>
          <img
            src="https://img.freepik.com/premium-photo/audi-a3-showroom-with-detail-macro-lens_1003533-429.jpg?size=626&ext=jpg&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid"
            alt="slide_image"
          />
          <span className="drp">
            <h3
              style={{
                fontSize: "3.5rem",
                fontWeight: "900",
                // fontStyle: "oblique",
                height: "70%",
                fontStyle: "italic",
              }}
            >
              'Audi screams luxury'
            </h3>{" "}
            <p
              style={{
                fontSize: "2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: "20px" }}>
                Design - Arthur Shnenmann
              </span>
            </p>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1646405871744-2005e64f8e32?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide_image"
          />
          <span className="drp">
            <h3
              style={{
                fontSize: "3.5rem",
                fontWeight: "900",
                // fontStyle: "oblique",
                height: "70%",
                fontStyle: "italic",
              }}
            >
              Audi compliments your riches
            </h3>{" "}
            <p
              style={{
                fontSize: "2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: "20px" }}>
                Design - Arthur Shnenmann
              </span>
            </p>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1618849985511-7dbc48d7d2e4?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide_image"
          />
          <span className="drp">
            <h3
              style={{
                fontSize: "3.5rem",
                fontWeight: "900",
                // fontStyle: "oblique",
                height: "70%",
                fontStyle: "italic",
              }}
            >
              "Four Rings, One Promise: Excellence"
            </h3>{" "}
            <p
              style={{
                fontSize: "2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: "20px" }}>
                Design - Arthur Shnenmann
              </span>
            </p>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF1ZGl8ZW58MHx8MHx8fDA%3D"
            alt="slide_image"
          />{" "}
          <span className="drp">
            <h3
              style={{
                fontSize: "3.5rem",
                fontWeight: "900",
                // fontStyle: "oblique",
                height: "70%",
                fontStyle: "italic",
              }}
            >
              "Driven by Luxury, Powered by Performance"
            </h3>{" "}
            <p
              style={{
                fontSize: "2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: "20px" }}>
                Design - Arthur Shnenmann
              </span>
            </p>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1527593167147-e9c94a5883e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXVkaSUyMHdpdGglMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D"
            alt="slide_image"
          />
          <span className="drp">
            <h3
              style={{
                fontSize: "3.5rem",
                fontWeight: "900",
                // fontStyle: "oblique",
                height: "70%",
                fontStyle: "italic",
              }}
            >
              "Innovative Intelligence: Audi's Technological Edge"
            </h3>{" "}
            <p
              style={{
                fontSize: "2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: "20px" }}>
                Design - Arthur Shnenmann
              </span>
            </p>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1680079583684-e54913747cd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXVkaSUyMHdpdGglMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D"
            alt="slide_image"
          />
          <span className="drp">
            <h3
              style={{
                fontSize: "3.5rem",
                fontWeight: "900",
                // fontStyle: "oblique",
                height: "70%",
                fontStyle: "italic",
              }}
            >
              "Gearing Up for Greatness"
            </h3>{" "}
            <p
              style={{
                fontSize: "2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: "20px" }}>
                Design - Arthur Shnenmann
              </span>
            </p>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/yellow-car-with-logo-front-is-shown_1308172-566372.jpg?size=626&ext=jpg&ga=GA1.2.1053587659.1720895076&semt=ais_hybrid"
            alt="slide_image"
          />
          <span className="drp">
            <h3
              style={{
                fontSize: "3.5rem",
                fontWeight: "900",
                // fontStyle: "oblique",
                height: "70%",
                fontStyle: "italic",
              }}
            >
              24 hours at the Audi charging hub in Nuremberg
            </h3>{" "}
            <p
              style={{
                fontSize: "2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: "20px" }}>
                Design - Arthur Shnenmann
              </span>
            </p>
          </span>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow hidden">
            &#8592;
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
          </div>
          <div ref={next} className="swiper-button-next slider-arrow hidden">
            &#8594;
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
          </div>
          <div className="swiper-pagination hidden"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
