"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import bgImage1 from "/public/hero/hero1.png";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        style={{ width: "100%", height: "100%" }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <div className="absolute w-full h-full z-[5] inset-0 bg-[#18080170]"></div>
          <Image
            src={bgImage1}
            className="w-full h-full object-cover"
            alt="space framer background image"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute w-full h-full z-[5] inset-0 bg-[#18080170]"></div>
          <Image
            src={bgImage1}
            className="w-full h-full object-cover"
            alt="space framer background image"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute w-full h-full z-[5] inset-0 bg-[#18080170]"></div>
          <Image
            src={bgImage1}
            className="w-full h-full object-cover"
            alt="space framer background image"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
