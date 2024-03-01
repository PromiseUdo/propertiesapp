import React, { ReactNode } from "react";

interface CarouselProps {
  currentSlide: number;
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ currentSlide, children }) => {
  const style = {
    width: `${(children as ReactNode[]).length * 100}%`,
    transform: `translateX(-${
      (currentSlide / (children as ReactNode[]).length) * 100
    }%)`,
    transition: "transform 0.5s ease-in-out",
    display: "flex",
  };

  return <div style={style}>{children}</div>;
};

export default Carousel;
