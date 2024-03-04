"use client";

import Container from "@/app/components/Container";
import { useToggleState } from "@/hooks/useToggleState";
import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import RequestTour from "../components/RequestTour";
import RequestInfo from "../components/RequestInfo";

const DetailedNav = () => {
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
    <Container>
      <div className="border-b border-slate-700 shadow-md  bg-[#121212] w-full h-20  pt-2 ">
        <div className="flex items-center justify-between w-full">
          <div>
            <h2 className="text-2xl text-[#f7f7f7]">3 bedroom Flat for Rent</h2>
            <p className="text-sm text-[#f7f7f7]">
              7 Endless Street, Off Elitor Street, PH
            </p>
          </div>
          <div>
            <p className="text-[#f7f7f7] text-2xl">NGN 350,000</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-[#f7f7f7] border-[0.5px] rounded-md shadow-md  border-slate-500 px-3 py-2 flex items-center gap-1 font-medium">
              <IoHeartOutline />
              <span>Save</span>
            </button>
            <button
              onClick={() => openModal()}
              className="rounded-md bg-[#e4010a] py-2 text-[#f7f7f7] w-[12rem]"
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

        <RequestTour open={isModalOpen} onClose={closeModal} />
        <RequestInfo open={isRequestInfoOpen} onClose={closeRequestInfo} />
      </div>
    </Container>
  );
};

export default DetailedNav;
