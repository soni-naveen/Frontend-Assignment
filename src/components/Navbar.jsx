import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoCaretDownSharp } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");

  const handleSetActive = (page) => {
    setActive(page);
  };

  return (
    <nav>
      <div className="w-fit mx-auto mt-5 py-4 px-14 h-full bg-[#2b2b2b] rounded-full flex items-center">
        <img src={logo} alt="Logo" className="w-[75px] h-[18px] mr-10" />

        <div className="flex items-center space-x-5">
          <Link
            to="/"
            className={`px-5 py-0.5 rounded-full cursor-pointer ${
              active === "home" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => handleSetActive("home")}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`px-5 py-0.5 rounded-full cursor-pointer ${
              active === "about" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => handleSetActive("about")}
          >
            About Us
          </Link>

          <div
            className={`px-5 py-0.5 rounded-full flex items-center gap-2 cursor-pointer ${
              active === "services" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => {
              handleSetActive("services");
              navigate("/services");
            }}
          >
            <span>Services</span>
            <IoCaretDownSharp />
          </div>

          <Link
            to="/work"
            className={`px-5 py-0.5 rounded-full cursor-pointer ${
              active === "work" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => handleSetActive("work")}
          >
            Our Work
          </Link>

          <Link
            to="/contact"
            className={`px-5 py-0.5 rounded-full  cursor-pointer ${
              active === "contact" ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => handleSetActive("contact")}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
