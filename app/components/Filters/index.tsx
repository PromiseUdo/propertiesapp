"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineTerrain } from "react-icons/md";
import { IoOptionsOutline } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import RequestTour from "@/app/properties/components/RequestTour";
import { useToggleState } from "@/hooks/useToggleState";
import FiltersModal from "../FiltersModal/FiltersModal";
import Link from "next/link";
import Container from "../Container";

const data = [
  {
    icon: MdOutlineTerrain,
    label: "Bungalow",
  },
  {
    icon: MdOutlineTerrain,
    label: "Terraces",
  },
  {
    icon: MdOutlineTerrain,
    label: "Flats",
  },
  {
    icon: MdOutlineTerrain,
    label: "Mansion",
  },
  {
    icon: MdOutlineTerrain,
    label: "Penthouse",
  },
  {
    icon: MdOutlineTerrain,
    label: "Semi-detached duplex",
  },
  {
    icon: MdOutlineTerrain,
    label: "Maisonette",
  },
  {
    icon: MdOutlineTerrain,
    label: "Fully-detached duplex",
  },
];

const FiltersContainer = () => {
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

  const {
    state: isModalOpen,
    open: openModal,
    close: closeModal,
  } = useToggleState(false);

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
    slidesToShow: 7,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
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
    <Container>
      <div id="filters" className=" grid grid-cols-12 py-2 ">
        <div className="relative  col-span-9 px-6">
          <Slider {...settings}>
            {data.map((el, idx) => (
              <div key={idx} className="cursor-pointer">
                <div className="flex  flex-col items-center justify-center">
                  <MdOutlineTerrain color="#ffffff" />
                  <span className="text-center text-xs  text-voks-shades-white">
                    {el.label}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="px-6 col-span-3 flex items-center gap-2">
          <button
            onClick={() => openModal()}
            className="flex items-center gap-1 rounded-md border py-2 px-3 border-gray-300"
          >
            <IoOptionsOutline color="#ffffff" />
            <span className="text-voks-shades-white text-sm">Filter</span>
          </button>

          <Link
            href="/help-center"
            className="flex items-center gap-1 py-2 px-3"
          >
            <MdOutlineSupportAgent color="#ffffff" />
            <span className="text-voks-shades-white text-sm">Help center</span>
          </Link>

          {/* <button className="flex items-center gap-1 py-2 px-3">
          <IoMdHelpCircle color="#f7f7f7" />
          <span className="text-[#f7f7f7] hover:text-slate-300 text-sm">
            Help
          </span>
        </button> */}
        </div>
        <FiltersModal open={isModalOpen} onClose={closeModal} />
      </div>
    </Container>
  );
};

export default FiltersContainer;
