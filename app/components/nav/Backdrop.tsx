import React from "react";

interface BackdropProps {
  onClick: () => void;
}
const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className=" transition-all duration-400 z-20 overlay bg-[#00292DBF] opacity-100 w-screen h-screen fixed top-0 left-0"
    ></div>
  );
};

export default Backdrop;
