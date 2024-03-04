import React from "react";
import Container from "../Container";
import { CiGlobe } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const FooterStrip = () => {
  return (
    <div  id="footer-strip" className="flex items-center justify-between bg-slate-900 text-[#f7f7f7] h-8 py-1 w-full border-t border-b border-gray-500">
      <Container>
        <div className=" text-xs flex items-center gap-1 justify-between">
          <div className="flex items-center gap-1">
            <p>&copy; {new Date().getFullYear()} MillHomes Ltd.</p>
            <div className="flex items-center gap-2">
              <span>Terms</span>
              <div className="rounded-full h-1 w-1 bg-gray-600"></div>
              <span>Sitemap</span>
              <div className="rounded-full h-1 w-1 bg-gray-600"></div>
              <span>Privacy</span>
            </div>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-1">
              <CiGlobe />
              <span>English(US)</span>
            </div>
            <div className="flex items-center gap-1">
              <FaFacebookSquare size={15} />
              <FaSquareXTwitter size={15} />
              <RiInstagramFill size={15} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterStrip;
