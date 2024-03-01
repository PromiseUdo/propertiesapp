"use client";

import React from "react";
import { PiBathtub, PiToilet, PiBed } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { LuParkingSquare } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { TbSwimming } from "react-icons/tb";
import { MdOutlinePets } from "react-icons/md";
import { MdFence } from "react-icons/md";
import { RiLandscapeLine } from "react-icons/ri";
import { CgInternal } from "react-icons/cg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import SimilarItemsSlider from "@/app/components/SimilarItems/SimilarItemsSlider";
import Modal from "@/app/common/modal/Modal";
import { useToggleState } from "@/hooks/useToggleState";
import RequestTour from "./RequestTour";
import RequestInfo from "./RequestInfo";

const PageContent = () => {
  const {
    state: isModalOpen,
    open: openModal,
    close: closeModal,
  } = useToggleState(false);
  const {
    state: isRequestInfoOpen,
    open: openRequestInfo,
    close: closeRequestInfo,
  } = useToggleState(false);

  return (
    <div className="w-full relative my-8 grid grid-cols-12  gap-2">
      <div className="col-span-9">
        <div className=" flex items-start w-full rounded-md ">
          <div className="w-[70%] gap-3 flex flex-col justify-center">
            <h2 className="text-2xl text-[#f7f7f7]">3 bedroom Flat for Rent</h2>
            <p className="text-[#f7f7f7]">
              7 Endless Street, Off Elitor Street, PH
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <PiBed color="#f7f7f7" />
                <span className="text-[#f7f7f7]">3</span>
              </div>
              <div className="flex items-center gap-1">
                <PiToilet color="#f7f7f7" />
                <span className="text-[#f7f7f7]">3</span>
              </div>
              <div className="flex items-center gap-1">
                <PiBathtub color="#f7f7f7" />
                <span className="text-[#f7f7f7]">3</span>
              </div>
            </div>
          </div>

          <div className="">
            <span className="text-[#f7f7f7] text-2xl">NGN 350,000</span>
          </div>
        </div>
        <div className="flex flex-col gap-5 my-8">
          {/* Local Information */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[1.2rem]  text-[#f7f7f7]">Local Information</h3>

            <div className="m flex items-center gap-2">
              <button className="rounded-md shadow-md px-3 py-2 border border-slate-500 text-[#f7f7f7]">
                Map
              </button>
              <button className="rounded-md shadow-md px-3 py-2 border border-slate-500 text-[#f7f7f7]">
                Schools
              </button>
              <button className="rounded-md shadow-md px-3 py-2 border border-slate-500 text-[#f7f7f7]">
                Shop & Eat
              </button>
            </div>

            {/* Map */}
            <div className="rounded-md w-full h-52 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5628246951055!2d7.048230209685222!3d4.844864395110414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd77c40710b9%3A0x80a19abce70935c3!2s8%20Rumuibekwe%20Rd%2C%20Obia%2C%20Port%20Harcourt%20500102%2C%20Rivers!5e0!3m2!1sen!2sng!4v1708945123241!5m2!1sen!2sng"
                width="100%"
                height="450"
                style={{
                  border: 0,
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className=" text-[1.2rem]  text-[#f7f7f7]">Description</h3>
            <p className="text-sm text-[#f7f7f7] leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              asperiores reiciendis voluptas illo voluptatum facere dolore magni
              corrupti exercitationem ex, consequuntur dicta nemo enim est. Nisi
              earum dignissimos inventore reprehenderit numquam? Id, officiis
              eaque impedit repellendus optio commodi cumque ullam incidunt
              dignissimos debitis tempore dolor molestias accusamus facere ipsam
              beatae alias quo odio. Qui iusto aliquid, eos vitae iste
              necessitatibus repellat soluta fuga facilis incidunt nulla ipsa
              adipisci quam harum nihil laudantium officiis minima! Doloribus
              quo facilis cumque, magnam distinctio, animi quasi possimus sequi
              illo doloremque, ipsa rerum dolore. Sint deleniti ad nostrum
              blanditiis praesentium illo at aperiam facere reprehenderit?
            </p>

            <div className=" p-4 border border-slate-500 rounded-md ">
              <h3 className="text-[1.2rem] text-[#f7f7f7]">
                Property Highlights
              </h3>

              <div className="gap-4 mt-3 text-[#f7f7f7] grid grid-cols-3">
                <div className="flex items-center gap-1">
                  <GiHomeGarage />
                  <span className="text-sm">Parking space</span>
                </div>
                <div className="flex items-center gap-1">
                  <TbAirConditioning />
                  <span className="text-sm">Air conditioning</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdFence />
                  <span className="text-sm">Fenced</span>
                </div>
                <div className="flex items-center gap-1">
                  <TbSwimming />
                  <span className="text-sm">Swimming pool</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdOutlinePets />
                  <span className="text-sm">Allow pets</span>
                </div>
                <div className="flex items-center gap-1">
                  <RiLandscapeLine />
                  <span className="text-sm">3000sqkm</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className=" text-[1.2rem]  text-[#f7f7f7]">Property Details</h3>

            <div className="my-4 border border-slate-500  rounded-md overflow-hidden w-full">
              <div className="px-4 py-2 flex items-center gap-1 w-full bg-slate-400 text-black">
                <CgInternal />
                <span className="text-sm">Internal Features</span>
              </div>
              <div className=" border-b border-slate-500 px-4 py-2">
                <h4 className="text-sm text-[#f7f7f7]">Beds & Baths</h4>
                <div className="mt-1 flex gap-8 items-center">
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Number of bedrooms: 2
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Number of bathrooms: 2
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2">
                <h4 className="text-sm text-[#f7f7f7]">Beds & Baths</h4>
                <div className="mt-1 flex gap-8 items-center">
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Living Area: 1050 Square Feet.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4 border border-slate-500  rounded-md overflow-hidden w-full">
              <div className="px-4 py-2 flex items-center gap-1 w-full bg-slate-400 text-black">
                <FaExternalLinkAlt size={12} />
                <span className="text-sm">External Features</span>
              </div>
              <div className=" border-b border-slate-500 px-4 py-2">
                <h4 className="text-sm text-[#f7f7f7]">Parking & Garage</h4>
                <div className="mt-1 flex gap-8 items-center">
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Number of Carport spaces: 2
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Number of bathrooms: 2
                    </span>
                  </div> */}
                </div>
              </div>
              <div className="px-4 py-2">
                <h4 className="text-sm text-[#f7f7f7]">Pool</h4>
                <div className="mt-1 flex gap-8 items-center">
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">None</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Location */}
            <div className="my-4 border border-slate-500  rounded-md overflow-hidden w-full">
              <div className="px-4 py-2 flex items-center gap-1 w-full bg-slate-400 text-black">
                <FaLocationDot />
                <span className="text-sm">Location</span>
              </div>
              <div className=" border-b border-slate-500 px-4 py-2">
                <h4 className="text-sm text-[#f7f7f7]">Direction & Address</h4>
                <div className="mt-1 flex gap-8 items-center">
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      City: Port Harcourt
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Community: GRA Phase II
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2">
                <h4 className="text-sm text-[#f7f7f7]">School Information</h4>
                <div className="mt-1 grid grid-cols-3 gap-4 items-center">
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Cornerstone High School
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Living Spring Polytechnic
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Living Spring Polytechnic
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Living Spring Polytechnic
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Living Spring Polytechnic
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Property info */}
            <div className="my-4 border border-slate-500  rounded-md overflow-hidden w-full">
              <div className="px-4 py-2 flex items-center gap-1 w-full bg-slate-400 text-black">
                <FaHouseChimney />
                <span className="text-sm">Property Information</span>
              </div>
              <div className=" border-b border-slate-500 px-4 py-2">
                <h4 className="text-sm text-[#f7f7f7]">Year Built</h4>
                <div className="mt-1 flex gap-8 items-center">
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Year Built: 2021
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-b border-slate-500  px-4 py-2">
                <h4 className="text-sm text-[#f7f7f7]">Property Type/Style</h4>
                <div className="mt-1 grid grid-cols-3 gap-4 items-center">
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Property Type: Residential
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Property Subtype: Apartment
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      Architecture: Bungalow
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2">
                <h4 className="text-sm text-[#f7f7f7]">Property Policies</h4>
                <div className="mt-1 grid grid-cols-1 gap-2 items-center">
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      1yr 6 months down payment
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="rounded-full bg-slate-500 h-1 w-1"></div>
                    <span className="text-xs text-[#f7f7f7]">
                      No renovation allowed{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 ">
        <div className="py-3 flex flex-col gap-3 items-center justify-center border border-slate-500 rounded-md">
          <p className="font-extralight text-[#f7f7f7]">Request a tour today</p>
          <button
            onClick={() => openModal()}
            className="rounded-md bg-[#d93c23] py-2 text-[#f7f7f7] w-[12rem]"
          >
            Schedule a tour
          </button>
          <button
            onClick={() => openRequestInfo()}
            className="rounded-md bg-transparent border border-slate-500 py-2 text-[#f7f7f7] w-[12rem]"
          >
            Request Info
          </button>
        </div>
      </div>

      <div className="col-span-12 text-2xl text-[#f7f7f7]">
        <h3>Similar Properties you may like</h3>
        <SimilarItemsSlider />
      </div>

      <RequestTour open={isModalOpen} onClose={closeModal} />
      <RequestInfo open={isRequestInfoOpen} onClose={closeRequestInfo} />
    </div>
  );
};

export default PageContent;
