import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import swiper1 from "../../assets/swiper1.png";
import swiper2 from "../../assets/swiper2.png";
import rate from "../../assets/rate.png";
const People = () => {
  return (
    <div className="container people">
      <h2>Here are our some of the best clients.</h2>
      <h1>What People Say About Us</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="swiper">
          <div className="left">
            <img src={swiper1} alt="" />
            <div className="title">
              <h2>Hamza Faizi</h2>
              <p>
                Don’t waste time, just order! This is the best website to
                puschase smart watches.
              </p>
              <div className="rate">
                <img src={rate} alt="" />
                <img src={rate} alt="" />
                <img src={rate} alt="" />
                <img src={rate} alt="" />
                <img src={rate} alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            <img src={swiper2} alt="" />
            <div className="title">
              <h2>Hafiz Huzaifa</h2>
              <p>
                Don’t waste time, just order! This is the best website to
                puschase smart watches.
              </p>
              <div className="rate">
                <img src={rate} alt="" />
                <img src={rate} alt="" />
                <img src={rate} alt="" />
                <img src={rate} alt="" />
                <img src={rate} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <div className="left">
            <img src={swiper1} alt="" />
            <div className="title">
              <h2>Hamza Faizi</h2>
              <p>
                Don’t waste time, just order! This is the best website to
                puschase smart watches.
              </p>
              <div className="rate">
                <img src={rate} alt="" />
                <img src={rate} alt="" />
                <img src={rate} alt="" />
                <img src={rate} alt="" />
                <img src={rate} alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            <img src={swiper2} alt="" />
            <div className="title">
              <h2>Hafiz Huzaifa</h2>
              <p>
                Don’t waste time, just order! This is the best website to
                puschase smart watches.
              </p>
              <div className="rate">
                <img src={rate} alt="" />
                <img src={rate} alt="" />
                <img src={rate} alt="" />
                <img src={rate} alt="" />
                <img src={rate} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default People;
