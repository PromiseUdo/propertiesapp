"use client";

import React, { useState, useEffect } from "react";
import Container from "../Container";
import Link from "next/link";
import { Redressed } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";
import FiltersContainer from "../Filters";
import { FaSearch } from "react-icons/fa";
import UserMenu from "./UserMenu";
import DetailedNav from "@/app/properties/navbar/DetailedNav";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });
const Navbar = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showDetailedNav, setShowDetailedNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll threshold as needed
      const scrollThreshold = 100; // You can change this value

      if (window.scrollY > scrollThreshold) {
        setShowSearchBox(true);
      } else {
        setShowSearchBox(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll threshold as needed
      const scrollThreshold = 600; // You can change this value

      if (window.scrollY > scrollThreshold) {
        setShowDetailedNav(true);
      } else {
        setShowDetailedNav(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="navbar"
      className="sticky top-0 w-full bg-[#ffffff]  z-20 shadow-sm border-b border-voks-border"
    >
      <div className="text-[#f7f7f7]  ">
        <div className="">
          <Container>
            <div className="py-2 flex items-center justify-between gap-3 md:gap-0">
              {/* <Link
                className={clsx(
                  redressed.className,
                  "font-bold flex items-center gap-2"
                )}
                href="/"
              > */}
              <div className="relative w-[200px] h-[50px] ">
                <Image src={"/logo.png"} alt="logo" fill objectFit="cover" />
              </div>

              {/* </Link> */}
              {/* Search box div */}
              {showSearchBox && (
                <div
                  className={`flex flex-col justify-center items-center text-center text-white transition-all ${
                    showSearchBox ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="px-8 flex items-center overflow-hidden border w-[30rem] h-12 border-gray-300 rounded-md">
                    <input
                      placeholder="Enter a location or property type"
                      className="bg-transparent outline-none border-none h-full w-full"
                    />
                    <FaSearch className="cursor-pointer" />
                  </div>
                </div>
              )}
              <div className="flex text-sm text-voks-shades-black items-center gap-6 md:gap-8">
                <div>Saved Properties</div>
                <UserMenu />
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* <Container> */}
      <div className="w-full bg-voks-shades-black">
        <FiltersContainer />
      </div>
      {/* </Container> */}
      {showDetailedNav && (
        <div className="w-full bg-voks-shades-black">
          <DetailedNav />
        </div>
      )}
    </div>
  );
};

export default Navbar;
