"use client";

import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
// import CategoryList from "./categories/CategoryList";
import { FaSearch } from "react-icons/fa";

const slides = [
  "/carousel1.jpg",
  "/carousel2.jpg",
  "/carousel3.jpg",
  "/carousel4.jpg",
];

const slideInterval = 5000; // 5 seconds
const textRotationInterval = 2000; // 2 seconds
const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(
    "Find your ideal land with ease"
  );

  const rotateText = () => {
    setDisplayText((prevText) =>
      prevText === "Find your ideal land with ease"
        ? "Find your dream house with ease"
        : "Find your ideal land with ease"
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    goToSlide(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, slideInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, slideInterval);

    // Set up text rotation interval
    const textRotationId = setInterval(rotateText, textRotationInterval);

    return () => {
      clearInterval(intervalId);
      clearInterval(textRotationId);
    };
  }, [currentIndex]);

  return (
    <div className="relative my-4 flex gap-2 h-[26rem]">
      {/* column 1 */}
      {/* <div className="hidden md:block w-[25%] bg-[#f7f7f7] rounded-md px-4 py-2">
        <CategoryList />
      </div> */}

      {/* column 2 */}
      <div className="group h-full relative overflow-hidden rounded-md w-full bg-gradient-to-r from-sky-500 to-sky-700 mx-auto">
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="h-full w-full transition-all duration-500 ease-in"
        ></div>

        <div
          className="absolute inset-0 bg-black opacity-60"
          style={{ zIndex: 10 }}
        ></div>

        <div className="w-full flex flex-col justify-center items-center z-10 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl">{displayText}</h1>
          <div className="rounded-md overflow-hidden mt-7 flex items-center bg-slate-700 justify-center">
            <button className="px-5 py-3 rounded-md text-[#f7f7f7]  hover:bg-[#f7f7f7] hover:text-slate-700">
              Rent
            </button>
            <button className="px-5 py-3 rounded-md text-[#f7f7f7]  hover:bg-[#f7f7f7] hover:text-slate-700">
              Buy
            </button>
            <button className="px-5 py-3 rounded-md text-[#f7f7f7]  hover:bg-[#f7f7f7] hover:text-slate-700">
              Shortlet
            </button>
          </div>
          <div className="px-8 flex items-center overflow-hidden border w-[30rem] h-12 border-gray-300  my-5 rounded-md">
            <input
              placeholder="Enter a location or property type"
              className="bg-transparent outline-none border-none  h-full w-full"
            />
            <FaSearch className="cursor-pointer " />
          </div>
        </div>
        <div
          className="z-10 hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={goToPrevSlide}
        >
          <BsChevronCompactLeft size={15} />
        </div>
        <div
          className="z-10 hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={goToNextSlide}
        >
          <BsChevronCompactRight size={15} />
        </div>
        <div className="z-10 flex absolute bottom-4 left-1/2 transform -translate-x-1/2 justify-center w-full">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`text-2xl cursor-pointer ${
                currentIndex === idx ? "text-white" : "text-gray-300"
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
