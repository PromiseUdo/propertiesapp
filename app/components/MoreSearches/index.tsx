import React from "react";
import Container from "../Container";
// import OptionsList from "./OptionsList";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import OptionsList from "./OptionsList";

const MoreSearches = () => {
  return (
    <div className="my-16 rounded-md bg-slate-300 text-slate-700 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-start pt-8 pb-8 ">
          <OptionsList>
            <h3 className="text-sm font-bold mb-2">Houses for rent</h3>
            <Link href="#" className="text-xs">
              Phones
            </Link>
            <Link href="#" className="text-xs">
              Laptops
            </Link>
            <Link href="#" className="text-xs">
              Desktops
            </Link>
            <Link href="#" className="text-xs">
              Watches
            </Link>
            <Link href="#" className="text-xs">
              TVs
            </Link>
            <Link href="#" className="text-xs">
              Accessories
            </Link>
          </OptionsList>
          <OptionsList>
            <h3 className="text-sm font-bold mb-2">Houses for Sale</h3>
            <Link href="#" className="text-xs">
              Contact Us
            </Link>
            <Link href="#" className="text-xs">
              Shopping Policy
            </Link>
            <Link href="#" className="text-xs">
              Returns & Exchanges
            </Link>
            <Link href="#" className="text-xs">
              FAQs
            </Link>
          </OptionsList>
          <OptionsList>
            <h3 className="text-sm font-bold mb-2">Apartment for Sale</h3>
            <Link href="#" className="text-xs">
              Contact Us
            </Link>
            <Link href="#" className="text-xs">
              Shopping Policy
            </Link>
            <Link href="#" className="text-xs">
              Returns & Exchanges
            </Link>
            <Link href="#" className="text-xs">
              FAQs
            </Link>
          </OptionsList>
          <OptionsList>
            <h3 className="text-sm font-bold mb-2">Apartment for Rent</h3>
            <Link href="#" className="text-xs">
              Contact Us
            </Link>
            <Link href="#" className="text-xs">
              Shopping Policy
            </Link>
            <Link href="#" className="text-xs">
              Returns & Exchanges
            </Link>
            <Link href="#" className="text-xs">
              FAQs
            </Link>
          </OptionsList>
          <OptionsList>
            <h3 className="text-sm font-bold mb-2">Shortlets</h3>
            <Link href="#" className="text-xs">
              Contact Us
            </Link>
            <Link href="#" className="text-xs">
              Shopping Policy
            </Link>
            <Link href="#" className="text-xs">
              Returns & Exchanges
            </Link>
            <Link href="#" className="text-xs">
              FAQs
            </Link>
          </OptionsList>
          <OptionsList>
            <h3 className="text-sm font-bold mb-2">Plots & Land</h3>
            <Link href="#" className="text-xs">
              Contact Us
            </Link>
            <Link href="#" className="text-xs">
              Shopping Policy
            </Link>
            <Link href="#" className="text-xs">
              Returns & Exchanges
            </Link>
            <Link href="#" className="text-xs">
              FAQs
            </Link>
          </OptionsList>
        </div>
      </Container>
    </div>
  );
};

export default MoreSearches;
