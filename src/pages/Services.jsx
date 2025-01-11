import React from "react";
import image from "../assets/tablelaptop.png";
import { BsArrowRightCircle } from "react-icons/bs";
import search from "../assets/search.png";
import result from "../assets/resultdriven.png";
import strategies from "../assets/strategies.png";
import success from "../assets/success.png";
import reporting from "../assets/tranparentreporting.png";
import FAQ from "../components/FAQ";
import rocket from "../assets/rocket.png";

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
      <div className="h-[1px] bg-gray-500"></div>
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
      {/* Why Choose Us?  */}
      <section className="mb-10">
        <h1 className="text-5xl font-extrabold mt-16 mb-7 text-center">
          Why Choose Us?
        </h1>
        <div className="flex justify-between mt-16">
          <div className="space-y-7">
            <div>
              <img src={result} alt="Results-driven approach" />
            </div>
            <p>Results-driven approach</p>
          </div>
          <div className="space-y-7">
            <div>
              <img src={reporting} alt="Transparent reporting" />
            </div>
            <p>Transparent reporting</p>
          </div>
          <div className="space-y-7">
            <div>
              <img src={strategies} alt="strategies" />
            </div>
            <p className="text-center w-56">
              Custom strategies tailored to each business
            </p>
          </div>
          <div className="space-y-7">
            <div>
              <img src={success} alt="success" />
            </div>
            <p className="text-center w-40">Proven track record of success</p>
          </div>
        </div>
      </section>
      <div className="h-[0.5px] bg-gray-500"></div>
      {/* FAQ's */}
      <section className="mb-10">
        <FAQ />
      </section>
      {/* Contact Us  */}
      <section>
        <div className="bg-gradient-to-r from-default via-default to-gray-700 to-97% rounded-[30px] flex flex-col items-center space-y-10 py-20 tracking-wider -mb-[300px]">
          <h1 className="text-6xl text-center font-extrabold text-white leading-snug">
            Contact Us for a <br /> Customized SEO Strategy!
          </h1>
          <button className="bg-white flex gap-5 w-fit items-center px-5 py-2 rounded-full">
            Schedule A Demo
            <BsArrowRightCircle className="text-xl" />
          </button>
        </div>
        <div className="relative top-10 -left-28">
          <img src={rocket} alt="rocket" className="relative" />
        </div>
      </section>
    </div>
  );
}
