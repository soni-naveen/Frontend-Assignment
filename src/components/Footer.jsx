import React from "react";
import logo from "../assets/footer-logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = ({}) => {
  return (
    <div className="flex justify-evenly mb-10">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="space-y-4">
        <h3 className="font-bold">Content</h3>
        <div className="content-links">
          <p>Home</p>
          <p>About</p>
          <p>Our Work</p>
          <p>Services</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold">Follow Us</h3>
        <div className="social-links">
          <p className="flex items-center gap-1">
            <FaInstagram />
            <span>Instagram</span>
          </p>
          <p className="flex items-center gap-1">
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </p>
          <p className="flex items-center gap-1">
            <FaFacebookSquare className="text-lg" />
            <span>Facebook</span>
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold">Contact</h3>
        <div className="contact-info">
          <p>+91 8105459006</p>
          <p>unicostudioss@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
