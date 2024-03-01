"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { PiBathtub, PiToilet, PiBed } from "react-icons/pi";

interface ShortletCardProps {
  images: string[];
}

const ShortletCard: React.FC<ShortletCardProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImageClick = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevImageClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };
  return (
    <div className="group cursor-pointer rounded-md overflow-hidden w-[100%] bg-[#f7f7f7]  shadow-xl">
      <div>
        <div
          style={{
            background: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            //   height: "8rem",
            //   width: "100%",
          }}
          className="w-[100%]  h-[150px] relative  overflow-hidden transform origin-center  transition-all duration-300 ease-in"
        >
          <div className="h-full  flex flex-col items-center justify-center  ">
            {/* <div className="self-end bg-black/60 text-white mr-4 mt-1 py-[0.1rem]  px-[0.5rem] border border-1 border-zee-border rounded-sm">
              <span className="text-xs font-light select-none">{`Available in 210 days`}</span>
            </div> */}
            <div
              className={clsx(
                "flex w-full invisible p-0 justify-between group-hover:visible  "
              )}
            >
              <FiChevronLeft
                onClick={handlePrevImageClick}
                size={45}
                color="#fff"
                style={{ margin: 0, padding: 0 }}
                className="!p-0 !m-0 cursor-pointer"
              />
              <FiChevronRight
                onClick={handleNextImageClick}
                size={45}
                color="#fff"
                className="cursor-pointer"
              />
            </div>
            <div className="self-end bg-black/60 text-white mr-4 mt-1 py-[0.1rem] rounded-sm px-[0.5rem]">
              <span className="select-none">{`${currentIndex + 1} of ${
                images.length
              }`}</span>
            </div>
          </div>
        </div>
        <div className="w-full p-2 flex gap-2 flex-col justify-center ">
          <p className="uppercase font-semibold text-[0.9rem]">
            4 Bedroom House for rent
          </p>
          <div className="text-[0.8rem] flex gap-1 items-center">
            <MdLocationOn />
            <p>PH, Rivers</p>
          </div>
          {/* <p className="text-[0.8rem]">NGN 400,000 p.a.</p> */}
          <div className="flex text-[0.7rem] items-center gap-1">
            <IoTimeOutline />
            <span>Added 20 Feb 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <PiBed />
              <span className="text-sm">3</span>
            </div>
            <div className="flex items-center gap-1">
              <PiToilet />
              <span className="text-sm">3</span>
            </div>
            <div className="flex items-center gap-1">
              <PiBathtub />
              <span className="text-sm">3</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-[0.6rem] rounded-md px-1 py-1 border border-gray-500">
              Furnished
            </p>
            <p className="text-[0.6rem] rounded-md px-1 py-1 border border-gray-500">
              Newly built
            </p>
          </div>
          <div className="flex items-center justify-between">
            <AiFillHeart />
            <p className="text-[0.8rem] font-semibold">
              NGN 400,000<span className="font-normal">/yr</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortletCard;
