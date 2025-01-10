import React from "react";
import logo from "../assets/logo.png";
import { IoCaretDownSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav>
      <div className="w-fit mx-auto mt-5 py-4 px-14 h-full bg-[#2b2b2b] rounded-full flex items-center">
        <img src={logo} alt="Logo" className="w-[75px] h-[18px] mr-10" />

        <div className="flex items-center space-x-14">
          <span className="text-black bg-white px-5 py-0.5 rounded-full cursor-pointer">
            Home
          </span>
          <span className="text-white cursor-pointer cursor-pointer">
            About Us
          </span>
          <div className="text-white flex items-center gap-2 cursor-pointer">
            <span>Services</span> <IoCaretDownSharp />
          </div>
          <span className="text-white cursor-pointer">
            Our Work
          </span>
          <span className="text-white cursor-pointer">
            Contact Us
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
