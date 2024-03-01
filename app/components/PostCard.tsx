import Image from "next/image";
import React from "react";

interface PostCardProps {
  image: string;
  title: string;
}

const PostCard: React.FC<PostCardProps> = ({ image, title }) => {
  return (
    <div className="cursor-pointer rounded-md overflow-hidden w-[100%] bg-[#f7f7f7]  shadow-xl">
      <div>
        <div className="w-[100%]  h-[150px] relative  overflow-hidden">
          <Image
            src={image}
            alt="carousel image"
            objectFit="cover"
            objectPosition="center "
            fill
            className="transform origin-center hover:scale-110 transition-all duration-300 ease-in"
          />
        </div>
        <div className="w-full h-[25px] flex items-center justify-center">
          <p className="text-center text-sm font-medium tracking-wide">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
