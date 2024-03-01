"use client";

import React from "react";
import { IoImageOutline } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { useToggleState } from "@/hooks/useToggleState";
import ShareProperty from "./ShareProperty";

const PictureBanner = () => {
  const {
    state: isSharePropertyOpen,
    open: openShareProperty,
    close: closeShareProperty,
  } = useToggleState(false);
  return (
    <div className="relative my-4 grid grid-cols-12 grid-rows-12 h-[26rem] gap-2">
      <div className="top-5 right-5 z-[8] absolute flex items-center gap-3">
        <button
          onClick={() => openShareProperty()}
          className="bg-[#f7f7f7] shadow-md rounded-md border-[0.5px] border-slate-500 px-3 py-2 flex items-center gap-1 font-medium"
        >
          <IoShareSocialSharp />
          <span>Share</span>
        </button>
        <button className="bg-[#f7f7f7] border-[0.5px] rounded-md shadow-md  border-slate-500 px-3 py-2 flex items-center gap-1 font-medium">
          <IoHeartOutline />
          <span>Save</span>
        </button>
      </div>
      <div className="bg-slate-700 py-1 px-2 rounded-md z-[8] absolute bottom-5 right-5 flex items-center gap-1">
        <IoImageOutline color="#f7f7f7" />
        <span className="text-[#f7f7f7] text-sm">See all</span>
      </div>
      <div
        style={{
          background: `url("/shortlet.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="transform origin-center  transition-all duration-300 ease-in rounded-md col-span-9 row-span-12 0 w-full"
      ></div>
      <div
        style={{
          background: `url("/3bedroom.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="transform origin-center  transition-all duration-300 ease-in rounded-md col-span-3 row-span-6  w-full"
      ></div>
      <div
        style={{
          background: `url("/selfcon.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="transform origin-center  transition-all duration-300 ease-in rounded-md col-span-3 row-span-6 w-full"
      ></div>

      <ShareProperty open={isSharePropertyOpen} onClose={closeShareProperty} />
    </div>
  );
};

export default PictureBanner;
