import React from "react";
import ShortletCard from "../ShortletCard";
import Button from "@/app/common/button";
const images = [
  "/carousel1.jpg",
  "/carousel2.jpg",
  "/carousel3.jpg",
  "/carousel4.jpg",
];
const PropertiesList = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-y-8  gap-x-4 my-20">
        <ShortletCard images={images} />
        <ShortletCard images={images} />
        <ShortletCard images={images} />
        <ShortletCard images={images} />
        <ShortletCard images={images} />
        <ShortletCard images={images} />
        <ShortletCard images={images} />
      </div>

      {/* Show more */}
      <div className="flex items-center gap-3 justify-center flex-col">
        <p className="text-[#f7f7f7]">Continue Exploring Properties</p>
        {/* <button className="text-[12px] bg-voks-secondary text-[#f7f7f7] py-2 px-4 rounded-md">
          Show More
        </button> */}

        <Button label="Show more" variant="secondary" />
      </div>
    </div>
  );
};

export default PropertiesList;
