"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";

export default function RightSideCard({ data }) {
  const slides = data?.data?.media || [
    { image: "/images/sample-1.jpg" },
    { image: "/images/sample-2.jpg" },
  ];

  const filteredSlides = slides.filter(
    (slide) =>
      slide.name === "preview_gallery" &&
      slide.hasOwnProperty("name") &&
      slide.hasOwnProperty("resource_type") &&
      slide.hasOwnProperty("resource_value") &&
      slide.hasOwnProperty("thumbnail_url") &&
      ((typeof slide.thumbnail_url === "string" &&
        slide.thumbnail_url.trim() !== "") ||
        (typeof slide.resource_value === "string" &&
          slide.resource_value.trim() !== ""))
  );

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="md:w-[390px] bg-white border  p-1 space-y-4">
      {/* Main Slider with custom navigation buttons */}
      <div className="relative overflow-hidden">
        <Swiper
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {filteredSlides.map((slide, index) => {
            const imgSrc =
              slide.thumbnail_url && slide.thumbnail_url.trim() !== ""
                ? slide.thumbnail_url
                : slide.resource_value;

            return (
              <SwiperSlide key={index}>
                <Image
                  src={imgSrc}
                  alt="Slide"
                  width={400}
                  height={200}
                  className={`rounded-md ${
                    slide.resource_type === "video" ? "video-thumb" : ""
                  }`}
                />
                {slide.resource_type === "video" && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="none"
                        viewBox="0 0 56 56"
                      >
                        <circle
                          cx="28"
                          cy="28"
                          r="28"
                          fill="#fff"
                          fillOpacity="0.5"
                        ></circle>
                        <circle cx="28" cy="28" r="25.415" fill="#fff" />
                        <path
                          fill="#1CAB55"
                          d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Left Button */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="white"
            viewBox="0 0 512 512"
          >
            <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
          </svg>
        </div>

        {/* Custom Right Button */}
        <div className="swiper-button-next-custom absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="white"
            viewBox="0 0 512 512"
          >
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
          </svg>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="pl-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5.5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {filteredSlides.map((slide, index) => {
            const imgSrc =
              slide.thumbnail_url && slide.thumbnail_url.trim() !== ""
                ? slide.thumbnail_url
                : slide.resource_value;

            return (
              <SwiperSlide
                key={index}
                className="cursor-pointer border-transparent transition-all duration-200"
              >
                <Image
                  src={imgSrc}
                  alt="Thumbnail"
                  width={100}
                  height={60}
                  className="rounded"
                />
                {slide.resource_type === "video" && (
                  <div className="absolute top-1/2 h-5 w-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src={"/images/icon/play_icon_2.svg"}
                      alt=""
                      width={10}
                      height={10}
                    />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Price Section */}
      <div className="flex items-baseline gap-3 mx-4">
        <p className="text-2xl font-semibold text-[#111827]">৳3850</p>
        <div className="flex gap-1">
          {" "}
          <p className="text-xl line-through">৳5000</p>
          <div
            className="bg-[#FF815C] text-white   px-2    flex items-center"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%)",
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
            }}
          >
            <span className="text-white  text-[10px] mr-1">●</span>
            <span className="text-xs font-bold">1150 ৳ ছাড়</span>
          </div>
        </div>
      </div>

      {/* Enroll Button */}
      <div className="mx-4 ">
        {" "}
        <Link href="https://app.10minuteschool.com/checkout" target="_blank">
          <Button className="w-full cursor-pointer  rounded bg-[#1DAE4C] hover:bg-green-700 text-white text-base">
            {data?.data?.cta_text?.name}
          </Button>
        </Link>
      </div>

      {/* Checklist Section */}
      <div className="space-y-1 mx-4 pb-5 text-sm text-gray-700">
        <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
        {data?.data?.checklist?.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <Image
              src={item?.icon || "/images/fallback-icon.png"}
              alt={item?.title || "Checklist icon"}
              height={20}
              width={20}
            />
            <span className="mb-0 inline-block tracking-[0.02em] text-[#111827]">
              {item?.text || "No title"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
