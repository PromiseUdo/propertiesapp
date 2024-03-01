"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import ProductCard from "../ProductCard";

const data = [
  { img: "/carousel1.jpg", title: "Shortlets" },
  { img: "/carousel2.jpg", title: "Lands" },
  { img: "/carousel3.jpg", title: "Houses" },
  { img: "/carousel4.jpg", title: "1+ Bedroom" },
  { img: "/carousel2.jpg", title: "2+ Bedrooms" },
  { img: "/carousel3.jpg", title: "3+ Bedrooms" },
  { img: "/carousel4.jpg", title: "4+ Bedrooms" },
  { img: "/carousel1.jpg", title: "5+ Bedrooms" },
];
const CategoriesSlider = () => {
  const [progress, setProgress] = useState<number>(0);
  const [slideToShow, setSlideToShow] = useState<number>(4);

  const setSlides = () => {
    if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
      setSlideToShow(3);
    } else if (window.innerWidth <= 1000 && window.innerWidth > 650) {
      setSlideToShow(2);
    } else if (window.innerWidth <= 650) {
      setSlideToShow(1);
    }
  };

  useEffect(() => {
    setSlides();
    setProgress(100 / (data.length - slideToShow + 1));
    window.addEventListener("resize", () => {
      setSlides();
    });
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current: number) => {
      setProgress((100 / (data.length - slideToShow + 1)) * (current + 1));
      console.log(slideToShow);
    },
  };
  return (
    <div className="relative mt-24">
      <Slider {...settings}>
        {data.map((el, idx) => (
          <ProductCard key={idx} image={el.img} title={el.title} />
        ))}
      </Slider>
      <div className="h-[2px] bg-gray-300 w-[250px] absolute -top-[15px] right-0">
        <div
          className="bg-[#38cf38] absolute h-[100%] transition-all"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default CategoriesSlider;
