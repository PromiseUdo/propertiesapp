import React from "react";
import { BsChevronRight } from "react-icons/bs";
interface NextArrowProps {
  onClick?: any;
}
const NextArrow: React.FC<NextArrowProps> = ({ onClick }) => {
  return (
    <div className="absolute right-0 -top-[65px]" onClick={onClick}>
      <div className="bg-[#38cf38] h-[35px] w-[35px] rounded-full grid place-items-center cursor-pointer">
        <BsChevronRight color="#f7f7f7" className="font-bold" />
      </div>
    </div>
  );
};

export default NextArrow;
