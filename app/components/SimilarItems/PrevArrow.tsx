import React from "react";
import { BsChevronLeft } from "react-icons/bs";
interface PrevArrowProps {
  onClick?: any;
}
const PrevArrow: React.FC<PrevArrowProps> = ({ onClick }) => {
  return (
    <div className="absolute right-[80px] -top-[65px]" onClick={onClick}>
      <div className="bg-[#38cf38] h-[35px] w-[35px] rounded-full grid place-items-center cursor-pointer">
        <BsChevronLeft color="#f7f7f7" className="font-bold" />
      </div>
    </div>
  );
};

export default PrevArrow;
