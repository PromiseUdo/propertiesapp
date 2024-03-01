"use client";

import SelectFileContainer from "@/app/common/inputs/SelectFileContainer";
import Container from "@/app/components/Container";
import Link from "next/link";
import React, { useState } from "react";

const HelpCenterClient = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <Container>
        <div className="my-16">
          <div>
            <h3 className="text-3xl mb-6">Submit a request</h3>
            <label
              htmlFor="identity"
              className="block mb-2 text-xs font-medium text-slate-700"
            >
              Please tell us who you are
            </label>
            <select
              id="identity"
              className="text-xs w-[35rem] bg-gray-50 border  text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  border-gray-600 placeholder-gray-400 "
              onChange={(e) => setSelectedOption(e.target.value)}
              value={selectedOption}
              defaultValue=""
            >
              <option disabled value="">
                Choose an option
              </option>
              <option value="US">Consumer</option>
              <option value="CA">Real Estate Professional</option>
              <option value="FR">Renter, Landlord, Property manager</option>
            </select>
            <p className="text-[0.6rem] my-4">
              The collection of this personal data is subject to terms of our{" "}
              <Link href="/privacy-policy" className=" underline">
                Privacy policy
              </Link>
            </p>

            {selectedOption && (
              <div className="flex   w-[fit-content] flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs block mb-2  font-medium text-slate-700 "
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-[35rem] bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  border-gray-600 placeholder-gray-400 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xs font-medium text-slate-700 "
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="name"
                    className="w-[35rem] bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  border-gray-600 placeholder-gray-400 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-xs font-medium text-slate-700 "
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-[35rem] bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  border-gray-600 placeholder-gray-400 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-xs font-medium text-slate-700 "
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-[35rem] bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  border-gray-600 placeholder-gray-400"
                  ></textarea>
                </div>

                <div>
                  <SelectFileContainer isProductCreated={false} />
                </div>

                <button className="flex items-center justify-center self-end rounded-md bg-[#d93c23] py-2 text-[#f7f7f7] w-[12rem]">
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HelpCenterClient;
