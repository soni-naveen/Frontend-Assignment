import React from "react";
import image from "../assets/tablelaptop.png";
import { BsArrowRightCircle } from "react-icons/bs";
import search from "../assets/search.png";

export default function Services() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* SEO  */}
      <section className="mb-20">
        <div className="flex items-center gap-28 mt-28">
          <div className="flex flex-col justify-between h-[450px]">
            <h1 className="text-5xl font-extrabold leading-snug">
              Search Engine Optimization
            </h1>
            <div className="flex flex-col gap-7 text-justify tracking-wider">
              <p>
                Let’s face it: fancy websites and technical jargon mean nothing
                if they don’t bring in customers. What you really want is to{" "}
                <b>turn your audience into paying customers—</b>and that’s
                exactly what we do.
              </p>
              <p>
                Our SEO strategies aren’t just about rankings or traffic;
                they’re about driving real results. Whether it’s generating
                leads, boosting sales, or growing your business, we focus on
                what matters to you: conversion, growth, and success.
              </p>
            </div>
            <button className="flex items-center gap-10 rounded-full px-5 py-2 w-fit border border-black shadow-[0_6px_0_0_black]">
              Get A Free Audit <BsArrowRightCircle className="text-2xl" />
            </button>
          </div>
          <img src={image} alt="seo" />
        </div>
      </section>
      <div className="h-[1px] bg-gray-500 px"></div>
      {/* What is SEO  */}
      <section>
        <h1 className="text-5xl font-extrabold mt-20">What is SEO?</h1>
        <p className="w-[55%] text-justify mt-7">
          Search Engine Optimization (SEO) is the process of optimizing your
          website to rank higher on search engine results pages (SERPs). It
          involves strategies like improving your site’s structure, creating
          high-quality content, and targeting specific keywords to make it more
          attractive to search engines like Google. Simply put, SEO helps your
          website get found by the right people at the right time.
        </p>
      </section>
      {/* Why Do We Need SEO?  */}
      <section>
        <h1 className="text-5xl font-extrabold mt-16 mb-7">
          Why Do We Need SEO?
        </h1>
        <div className="bg-default rounded-[30px] flex justify-between">
          <div className="text-center p-12">
            <p className="border-b border-gray-500 w-60 text-gray-500 py-2">
              Increase Visibiliy
            </p>
            <p className="border-b border-gray-500 w-60 text-gray-500 py-2">
              Drive Organic Traffic
            </p>
            <p className="border-b border-gray-500 w-60 text-gray-500 py-2">
              Build Credibility
            </p>
            <p className="border-b border-gray-500 w-60 text-gray-500 py-2">
              Target the Right Audience
            </p>
            <p className="border-b border-gray-500 w-60 text-gray-500 py-2">
              Boost Conversions
            </p>
            <p className="border-b border-gray-500 w-60 text-gray-500 py-2">
              Stay Competitive
            </p>
          </div>
          <div className="bg-white m-7 rounded-xl flex flex-col items-center">
            <div>
              <img src={search} alt="img" />
            </div>
            <p className="w-[55%] text-center mb-5">
              Ensures your website appears at the top of search results, where
              potential customers are looking.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
