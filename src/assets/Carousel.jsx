import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/Carousel.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

// import slide_image_1 from "./assets/images/img_1.jpg";
// import slide_image_2 from "./assets/images/img_2.jpg";
// import slide_image_3 from "./assets/images/img_3.jpg";
// import slide_image_4 from "./assets/images/img_4.jpg";
// import slide_image_5 from "./assets/images/img_5.jpg";
// import slide_image_6 from "./assets/images/img_6.jpg";
// import slide_image_7 from "./assets/images/img_7.jpg";

function Carousel() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
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
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/audi-a3-showroom-with-detail-macro-lens_1003533-429.jpg?size=626&ext=jpg&ga=GA1.1.1053587659.1720895076&semt=ais_hybrid"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/yellow-car-with-logo-front-is-shown_1308172-566372.jpg?size=626&ext=jpg&ga=GA1.2.1053587659.1720895076&semt=ais_hybrid"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/yellow-car-with-logo-front-is-shown_1308172-566372.jpg?size=626&ext=jpg&ga=GA1.2.1053587659.1720895076&semt=ais_hybrid"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/yellow-car-with-logo-front-is-shown_1308172-566372.jpg?size=626&ext=jpg&ga=GA1.2.1053587659.1720895076&semt=ais_hybrid"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/yellow-car-with-logo-front-is-shown_1308172-566372.jpg?size=626&ext=jpg&ga=GA1.2.1053587659.1720895076&semt=ais_hybrid"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/yellow-car-with-logo-front-is-shown_1308172-566372.jpg?size=626&ext=jpg&ga=GA1.2.1053587659.1720895076&semt=ais_hybrid"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/yellow-car-with-logo-front-is-shown_1308172-566372.jpg?size=626&ext=jpg&ga=GA1.2.1053587659.1720895076&semt=ais_hybrid"
            alt="slide_image"
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            &#8592;
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
          </div>
          <div className="swiper-button-next slider-arrow">
            &#8594;
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
