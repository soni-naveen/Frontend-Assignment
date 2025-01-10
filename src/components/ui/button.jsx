import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function button({ text }) {
  return (
    <button className="bg-white px-5 py-2 rounded-full tracking-widest text-sm flex items-center gap-3">
      {text}
      <FaCircleArrowRight className="text-lg"/>
    </button>
  );
}
